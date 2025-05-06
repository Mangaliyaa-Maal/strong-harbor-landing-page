
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"
import twilio from "npm:twilio@4.19.0"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // For testing, we'll override contact details
    const { fullName, email, phone, concern } = await req.json()
    
    const testEmail = "mridupadhyay49@gmail.com"
    const testPhone = "7447379117"
    
    // Initialize Resend
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

    // Send welcome email
    const emailResponse = await resend.emails.send({
      from: "Mangaliyaa Maal <onboarding@resend.dev>",
      to: [testEmail], // Using test email
      subject: "Welcome to Mangaliyaa Maal - Your Journey Begins Here",
      html: `
        <h1>Welcome to Mangaliyaa Maal, ${fullName}!</h1>
        <p>Thank you for reaching out to us. We're excited to be part of your journey.</p>
        ${concern ? `<p>Regarding your concern: "${concern}"</p>` : ''}
        <p>We will get back to you within 24 hours to schedule your session.</p>
        <p>Best regards,<br>The Mangaliyaa Maal Team</p>
      `,
    })

    console.log("Email sent:", emailResponse)

    // Prepare response tracking
    let smsResponse = null;
    let whatsappResponse = null;
    
    // Only attempt to send SMS and WhatsApp if valid Twilio credentials are available
    const accountSid = Deno.env.get("TWILIO_ACCOUNT_SID");
    const authToken = Deno.env.get("TWILIO_AUTH_TOKEN");
    const twilioPhone = Deno.env.get("TWILIO_PHONE_NUMBER");
    
    // Check if valid Twilio credentials exist before trying to send messages
    if (accountSid && authToken && twilioPhone && accountSid.startsWith("AC")) {
      try {
        const twilioClient = twilio(accountSid, authToken);
        
        // Send SMS
        smsResponse = await twilioClient.messages.create({
          body: `Hi ${fullName}, thank you for contacting Mangaliyaa Maal! We've received your message and will get back to you within 24 hours to schedule your session.`,
          from: twilioPhone,
          to: testPhone // Using test phone number
        });
        
        console.log("SMS sent:", smsResponse.sid);
        
        // Send WhatsApp message
        // Note: Twilio WhatsApp requires special formatting and sandbox setup
        try {
          whatsappResponse = await twilioClient.messages.create({
            body: `Hello ${fullName}, this is Mangaliyaa Maal. Thank you for reaching out to us. We've received your inquiry and will contact you soon to discuss your needs.`,
            from: `whatsapp:${twilioPhone}`,
            to: `whatsapp:${testPhone}` // Using test phone number with WhatsApp prefix
          });
          
          console.log("WhatsApp message sent:", whatsappResponse.sid);
        } catch (whatsappError) {
          console.error("Error sending WhatsApp message:", whatsappError);
        }
      } catch (twilioError) {
        // Log Twilio error but don't fail the overall request
        console.error("Error using Twilio services:", twilioError);
      }
    } else {
      console.log("Skipping Twilio services: Invalid or missing credentials");
    }

    return new Response(
      JSON.stringify({ 
        message: "Notifications sent successfully", 
        email: emailResponse,
        sms: smsResponse,
        whatsapp: whatsappResponse
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    )
  } catch (error) {
    console.error("Error sending notifications:", error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    )
  }
})
