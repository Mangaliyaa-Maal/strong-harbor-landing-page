
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required' }),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 18, {
    message: 'Age must be greater than 18',
  }),
  gender: z.enum(['male', 'non-binary', 'prefer-not-to-say']),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(10, { message: 'Valid phone number is required' }),
  contactPreference: z.enum(['email', 'phone', 'sms']),
  concern: z.string().optional(),
  marketingConsent: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      age: '',
      gender: 'male',
      email: '',
      phone: '',
      contactPreference: 'email',
      concern: '',
      marketingConsent: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted with:', data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Submission Received",
        description: "We'll be in touch within 24 hours to schedule your free consultation.",
      });
      reset();
    }, 1500);
  };

  return (
    <section id="contact" className="container-section bg-harbor-navy text-white">
      <h2 className="section-title text-white">Reach Out & Begin Your Journey</h2>
      <p className="section-subtitle text-harbor-ivory/90">
        Share a few details—let's craft your path to strength.
      </p>
      
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-10">
        {isSubmitted ? (
          <div className="text-center py-10">
            <div className="mb-6 w-20 h-20 rounded-full bg-harbor-teal flex items-center justify-center mx-auto">
              <Mail size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Thank You for Reaching Out</h3>
            <p className="text-xl mb-6">
              Your journey with Strong Harbor begins now. We'll contact you within 24 hours to schedule your free consultation.
            </p>
            <p>
              In the meantime, we've sent a welcome email with resources to help you prepare for our conversation.
            </p>
            <Button 
              className="mt-8 bg-harbor-teal hover:bg-harbor-teal/90"
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Inquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-harbor-ivory">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="Your full name"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  {...register('fullName')}
                />
                {errors.fullName && (
                  <p className="text-red-300 text-sm">{errors.fullName.message}</p>
                )}
              </div>
              
              {/* Age */}
              <div className="space-y-2">
                <Label htmlFor="age" className="text-harbor-ivory">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Your age"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  {...register('age')}
                />
                {errors.age && (
                  <p className="text-red-300 text-sm">{errors.age.message}</p>
                )}
              </div>
              
              {/* Gender */}
              <div className="space-y-2">
                <Label className="text-harbor-ivory">Gender *</Label>
                <select
                  className="w-full h-10 px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white"
                  {...register('gender')}
                >
                  <option value="male" className="bg-harbor-navy">Male</option>
                  <option value="non-binary" className="bg-harbor-navy">Non-binary</option>
                  <option value="prefer-not-to-say" className="bg-harbor-navy">Prefer Not to Say</option>
                </select>
                {errors.gender && (
                  <p className="text-red-300 text-sm">{errors.gender.message}</p>
                )}
              </div>
              
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-harbor-ivory">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-red-300 text-sm">{errors.email.message}</p>
                )}
              </div>
              
              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-harbor-ivory">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  {...register('phone')}
                />
                {errors.phone && (
                  <p className="text-red-300 text-sm">{errors.phone.message}</p>
                )}
              </div>
              
              {/* Preferred Contact Method */}
              <div className="space-y-2">
                <Label className="text-harbor-ivory">Preferred Contact Method *</Label>
                <RadioGroup defaultValue="email" className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value="email" 
                      id="email-radio" 
                      {...register('contactPreference')}
                      className="border-white text-harbor-teal"
                    />
                    <Label htmlFor="email-radio" className="text-harbor-ivory">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value="phone" 
                      id="phone-radio" 
                      {...register('contactPreference')}
                      className="border-white text-harbor-teal"
                    />
                    <Label htmlFor="phone-radio" className="text-harbor-ivory">Phone</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value="sms" 
                      id="sms-radio" 
                      {...register('contactPreference')}
                      className="border-white text-harbor-teal"
                    />
                    <Label htmlFor="sms-radio" className="text-harbor-ivory">SMS</Label>
                  </div>
                </RadioGroup>
                {errors.contactPreference && (
                  <p className="text-red-300 text-sm">{errors.contactPreference.message}</p>
                )}
              </div>
            </div>
            
            {/* Concern */}
            <div className="space-y-2">
              <Label htmlFor="concern" className="text-harbor-ivory">Brief Concern / What brings you here? (optional)</Label>
              <Textarea
                id="concern"
                placeholder="Share a little about what you're experiencing..."
                className="bg-white/20 border-white/30 text-white placeholder:text-white/50 min-h-[120px]"
                {...register('concern')}
              />
            </div>
            
            {/* Marketing Consent */}
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="marketing" 
                {...register('marketingConsent')}
                className="border-white/50 data-[state=checked]:bg-harbor-teal data-[state=checked]:border-harbor-teal mt-1"
              />
              <Label htmlFor="marketing" className="text-harbor-ivory/90 text-sm">
                I agree to receive occasional updates, tips, and offers. We respect your privacy and you can unsubscribe at any time.
              </Label>
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-harbor-teal hover:bg-harbor-teal/90 py-6 text-lg"
            >
              {isSubmitting ? "Submitting..." : "Submit & Schedule My Call"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
