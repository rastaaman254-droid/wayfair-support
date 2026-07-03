'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, MessageSquare, Zap } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Voice Matters</h1>
            <p className="text-xl text-blue-100 mb-8">
              We\'re here to listen and resolve your concerns. Submit your complaint and let us help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/submit"
                className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition inline-flex items-center justify-center gap-2"
              >
                Submit Complaint <ArrowRight size={20} />
              </Link>
              <Link
                href="/#faq"
                className="border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span>Fast and reliable support</span>
                </div>
                <div className="flex items-center gap-4">
                  <MessageSquare size={24} />
                  <span>Multiple contact options</span>
                </div>
                <div className="flex items-center gap-4">
                  <Zap size={24} />
                  <span>Quick response times</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const FeaturesSection = () => {
  const features = [
    {
      icon: '✓',
      title: 'Easy Submission',
      description: 'Submit your complaint in just a few minutes with our simple form',
    },
    {
      icon: '📊',
      title: 'Track Progress',
      description: 'Monitor your complaint status in real-time with case reference',
    },
    {
      icon: '💬',
      title: 'Multiple Channels',
      description: 'Contact us via email, phone, WhatsApp, or live chat',
    },
    {
      icon: '⚡',
      title: 'Fast Resolution',
      description: 'Our dedicated team works quickly to resolve your issues',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">We\'re committed to providing the best customer support experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const FAQSection = () => {
  const faqs = [
    {
      question: 'How long does it take to get a response?',
      answer: 'We aim to respond to all complaints within 24 hours. For complex issues, we may need additional time.',
    },
    {
      question: 'Can I track my complaint?',
      answer: 'Yes! You\'ll receive a case reference number which you can use to check your complaint status.',
    },
    {
      question: 'What information do I need to provide?',
      answer: 'You\'ll need your order reference, contact information, and a detailed description of your complaint.',
    },
    {
      question: 'Is my information secure?',
      answer: 'Yes, we use industry-standard encryption to protect your personal information.',
    },
    {
      question: 'Can I submit a complaint via phone?',
      answer: 'You can submit complaints online, but we also have phone support available. Contact us for more information.',
    },
    {
      question: 'What if I\'m not satisfied with the resolution?',
      answer: 'If you\'re not satisfied, you can escalate your complaint to our management team for further review.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our complaint process</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 bg-gray-50 hover:bg-gray-100 transition">
                <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                <span className="text-primary text-xl group-open:rotate-180 transition">▼</span>
              </summary>
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Submit Your Complaint?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Don\'t wait any longer. Get in touch with our support team today.
        </p>
        <Link
          href="/submit"
          className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition"
        >
          Submit Your Complaint Now
        </Link>
      </div>
    </section>
  )
}
