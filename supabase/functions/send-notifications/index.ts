
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
    const { fullName, email, phone, concern } = await req.json()

    // Initialize Resend
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

    // Send welcome email
    const emailResponse = await resend.emails.send({
      from: "Mangaliyaa Maal <onboarding@resend.dev>",
      to: [email],
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

    // Only attempt to send SMS if valid Twilio credentials are available
    let smsResponse = null;
    if (phone) {
      const accountSid = Deno.env.get("TWILIO_ACCOUNT_SID");
      const authToken = Deno.env.get("TWILIO_AUTH_TOKEN");
      const twilioPhone = Deno.env.get("TWILIO_PHONE_NUMBER");
      
      // Check if valid Twilio credentials exist before trying to send SMS
      if (accountSid && authToken && twilioPhone && accountSid.startsWith("AC")) {
        try {
          const twilioClient = twilio(accountSid, authToken);
          
          smsResponse = await twilioClient.messages.create({
            body: `Hi ${fullName}, thank you for contacting Mangaliyaa Maal! We've received your message and will get back to you within 24 hours to schedule your session.`,
            from: twilioPhone,
            to: phone
          });
          
          console.log("SMS sent:", smsResponse.sid);
        } catch (smsError) {
          // Log SMS error but don't fail the overall request
          console.error("Error sending SMS:", smsError);
        }
      } else {
        console.log("Skipping SMS: Invalid or missing Twilio credentials");
      }
    }

    return new Response(
      JSON.stringify({ 
        message: "Notifications sent successfully", 
        email: emailResponse,
        sms: smsResponse 
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
