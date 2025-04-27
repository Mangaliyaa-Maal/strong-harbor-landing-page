
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

    // Initialize Twilio
    const twilioClient = twilio(
      Deno.env.get("TWILIO_ACCOUNT_SID"),
      Deno.env.get("TWILIO_AUTH_TOKEN")
    )

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

    // Send SMS notification if phone number is provided
    if (phone) {
      const smsResponse = await twilioClient.messages.create({
        body: `Hi ${fullName}, thank you for contacting Mangaliyaa Maal! We've received your message and will get back to you within 24 hours to schedule your session.`,
        from: Deno.env.get("TWILIO_PHONE_NUMBER"),
        to: phone
      })

      console.log("SMS sent:", smsResponse.sid)
    }

    return new Response(
      JSON.stringify({ message: "Notifications sent successfully" }),
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
