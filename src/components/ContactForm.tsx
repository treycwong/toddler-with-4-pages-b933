import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, User, Mail, Phone, MessageSquare } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-3xl border border-warm-200 bg-white p-12 text-center shadow-sm"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 text-sage-600">
          <CheckCircle size={32} />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-stone-900">Message Sent!</h3>
        <p className="mt-2 max-w-sm text-stone-500">
          Thank you for reaching out. Our admissions team will contact you within 24 hours to schedule your tour.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', phone: '', childAge: '', message: '' })
          }}
          className="mt-8 rounded-xl bg-warm-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-warm-700"
        >
          Send Another Message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-stone-700">Parent Name</label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Sarah Mitchell"
              className="w-full rounded-xl border border-warm-200 bg-white py-3 pl-10 pr-4 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-warm-400 focus:ring-2 focus:ring-warm-100"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-stone-700">Email Address</label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="sarah@email.com"
              className="w-full rounded-xl border border-warm-200 bg-white py-3 pl-10 pr-4 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-warm-400 focus:ring-2 focus:ring-warm-100"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-stone-700">Phone Number</label>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (512) 847-1928"
              className="w-full rounded-xl border border-warm-200 bg-white py-3 pl-10 pr-4 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-warm-400 focus:ring-2 focus:ring-warm-100"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="childAge" className="text-sm font-medium text-stone-700">Child's Age</label>
          <select
            id="childAge"
            required
            value={formData.childAge}
            onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
            className="w-full rounded-xl border border-warm-200 bg-white py-3 pl-4 pr-10 text-sm text-stone-900 outline-none transition-colors focus:border-warm-400 focus:ring-2 focus:ring-warm-100"
          >
            <option value="">Select age group</option>
            <option value="infant">Infant (6 weeks – 12 months)</option>
            <option value="toddler">Toddler (1 – 2 years)</option>
            <option value="preschool">Preschool (3 – 4 years)</option>
            <option value="prek">Pre-Kindergarten (4 – 5 years)</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-stone-700">Message</label>
        <div className="relative">
          <MessageSquare size={16} className="absolute left-3 top-3 text-stone-400" />
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your child and what you are looking for in a kindergarten..."
            className="w-full resize-none rounded-xl border border-warm-200 bg-white py-3 pl-10 pr-4 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-warm-400 focus:ring-2 focus:ring-warm-100"
          />
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-warm-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-warm-600/20 transition-all hover:-translate-y-[1px] hover:bg-warm-700 active:scale-[0.98] sm:w-auto"
      >
        Send Message
        <Send size={16} />
      </button>
    </form>
  )
}
