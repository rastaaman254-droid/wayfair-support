'use client'

import { CheckCircle, MessageSquare, FileText } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in-up">
          Customer Support for Wayfair
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-light max-w-2xl mx-auto">
          We're here to help resolve your concerns quickly and professionally
        </p>
        <a
          href="/submit"
          className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition transform hover:scale-105"
        >
          Submit Your Complaint
        </a>
      </div>
    </section>
  )
}

export const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: 'Easy Submission',
      description: 'Fill out our simple form with all the details of your complaint',
    },
    {
      icon: MessageSquare,
      title: 'Direct Communication',
      description: 'Get updates via email, phone, or WhatsApp - your choice',
    },
    {
      icon: CheckCircle,
      title: 'Quick Resolution',
      description: 'Our team works to resolve issues promptly and professionally',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">How We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
              >
                <Icon className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export const FAQSection = () => {
  const faqs = [
    {
      question: 'How long does it take to resolve a complaint?',
      answer: 'Most complaints are reviewed within 24-48 hours. Complex cases may take longer. You\'ll receive updates at every stage.',
    },
    {
      question: 'What information do I need to provide?',
      answer: 'You\'ll need your order reference, contact details, and a detailed description of your issue. The more details, the faster we can help.',
    },
    {
      question: 'Can I track my complaint status?',
      answer: 'Yes! Use your case reference number provided after submission to track your complaint progress.',
    },
    {
      question: 'What if I need immediate assistance?',
      answer: 'Contact us via WhatsApp for urgent matters. Our team is available during business hours.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition group"
            >
              <summary className="font-semibold text-lg text-primary group-open:text-primary-dark flex items-center justify-between">
                {faq.question}
                <span className="ml-2">+</span>
              </summary>
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export const CTASection = () => {
  return (
    <section className="bg-primary-dark text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Submit Your Complaint?</h2>
        <p className="text-lg mb-8 text-primary-light">
          Our support team is ready to help. Submit your complaint and get a case reference number.
        </p>
        <a
          href="/submit"
          className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition transform hover:scale-105"
        >
          Get Started Now
        </a>
      </div>
    </section>
  )
}
