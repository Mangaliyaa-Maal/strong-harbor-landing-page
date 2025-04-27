
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is confidentiality maintained?",
    answer: "Your privacy is paramount. All sessions are strictly confidential, with information only shared in rare cases required by law (such as imminent harm to self or others). We use secure, HIPAA-compliant video platforms for online sessions, and all records are encrypted and protected."
  },
  {
    question: "What are your fees and do you accept insurance?",
    answer: "Individual sessions are $150 per 50-minute session, with group workshops ranging from $60-$90 per session depending on duration. We offer sliding scale options for those with financial constraints. While we don't directly bill insurance, we provide superbills that many clients successfully submit for out-of-network reimbursement."
  },
  {
    question: "How long does counseling typically last?",
    answer: "The duration varies significantly based on your goals. Some clients achieve their objectives in 8-12 sessions, while others benefit from longer-term support spanning several months. We regularly evaluate progress together and adjust accordingly. Our goal is effective, efficient support tailored to your needs."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require 24-hour notice for cancellations to avoid the full session fee. We understand emergencies happen, so each client receives one late cancellation waiver per quarter. For group sessions, due to their structured nature, refunds aren't available but you can transfer your spot to a future workshop with 48 hours notice."
  },
  {
    question: "Do I need to prepare anything for my first session?",
    answer: "Simply come as you are. Prior to your first session, you'll receive intake forms to complete at your convenience. These give us a starting point, but there's no pressure to have everything figured out—that's what our work together is for. Many clients find it helpful to briefly note any specific concerns or goals before we meet."
  },
  {
    question: "Is men's counseling only for major mental health issues?",
    answer: "Absolutely not. While we do support men through serious challenges like depression or anxiety, many clients come to us during normal life transitions, for relationship enhancement, personal growth, or simply to develop better self-understanding. Seeking support is a sign of strength, not weakness."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="container-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <p className="section-subtitle">
        Clear answers to common questions about our approach and process.
      </p>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-harbor-light rounded-md mb-4 overflow-hidden bg-white">
              <AccordionTrigger className="px-6 py-4 hover:bg-harbor-ivory/20 font-serif font-medium text-harbor-navy text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-harbor-charcoal">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
