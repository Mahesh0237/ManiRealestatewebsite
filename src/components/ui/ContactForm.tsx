import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import Button from './Button';

interface FormData {
  name: string;
  phone: string;
  service: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        // REPLACE 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms access key
        // You can get one for free at https://web3forms.com/
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "YOUR_ACCESS_KEY_HERE", 
            name: formData.name,
            phone: formData.phone,
            service: formData.service || 'Not specified',
            subject: `New Lead: ${formData.name} - My Dream Homes`,
            from_name: "Website Contact Form",
          }),
        });
        
        const result = await response.json();
        
        if (result.success) {
          setIsSubmitted(true);
        } else {
          alert("Something went wrong. Please try again.");
          console.error(result.message);
        }
      } catch (error) {
        alert("Network error. Please try again later.");
        console.error("Error submitting form", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-10 md:p-12 shadow-lg border border-neutral-100 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-800 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          Thank You!
        </h3>
        <p className="text-neutral-400 text-base leading-relaxed max-w-md mx-auto">
          Your message has been received. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', phone: '', service: '' });
          }}
          className="mt-6 text-sm font-semibold text-[var(--color-primary)] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClasses = (field: keyof FormErrors) =>
    `w-full px-5 py-3.5 rounded-xl border ${
      errors[field] ? 'border-red-400 bg-red-50/50' : 'border-neutral-200 bg-neutral-50/50'
    } text-neutral-700 text-[15px] placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all duration-300`;

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-neutral-100" noValidate>
      <h3 className="text-2xl font-bold text-neutral-800 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
        Request a Call Back
      </h3>
      <p className="text-neutral-400 text-sm mb-8">
        Fill in your details and we'll contact you shortly.
      </p>

      <div className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-600 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClasses('name')}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label htmlFor="contact-phone" className="block text-sm font-medium text-neutral-600 mb-1.5">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={inputClasses('phone')}
            />
            {errors.phone && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="contact-service" className="block text-sm font-medium text-neutral-600 mb-1.5">
            Service Interested In
          </label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-700 text-[15px] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all duration-300 appearance-none"
          >
            <option value="">Select a service</option>
            <option value="real-estate">Real Estate</option>
            <option value="construction">Construction</option>
            <option value="interior-design">Interior Design</option>
            <option value="loans">Loans</option>
          </select>
        </div>

        <Button type="submit" variant="primary" size="lg" icon className="w-full justify-center mt-2" disabled={isSubmitting}>
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Request
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
