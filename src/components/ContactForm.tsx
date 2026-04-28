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
        className="flex flex-col items-center justify-center rounded-3xl border border-outline/15 bg-surface p-12 text-center shadow-sm"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle size={32} />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-on-surface font-serif">Message Sent!</h3>
        <p className="mt-2 max-w-sm text-secondary">
          Thank you for reaching out. Our admissions team will contact you within 24 hours to schedule your tour.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', phone: '', childAge: '', message: '' })
          }}
          className="btn-primary mt-8"
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
          <label htmlFor="name" className="text-sm font-medium text-on-surface">Parent Name</label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/60" />
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Sarah Mitchell"
              className="input-sanctuary w-full pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-on-surface">Email Address</label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/60" />
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="sarah@email.com"
              className="input-sanctuary w-full pl-10"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-on-surface">Phone Number</label>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/60" />
            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (512) 847-1928"
              className="input-sanctuary w-full pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="childAge" className="text-sm font-medium text-on-surface">Child's Age</label>
          <select
            id="childAge"
            required
            value={formData.childAge}
            onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
            className="input-sanctuary w-full"
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
        <label htmlFor="message" className="text-sm font-medium text-on-surface">Message</label>
        <div className="relative">
          <MessageSquare size={16} className="absolute left-3 top-3 text-secondary/60" />
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your child and what you are looking for in a kindergarten..."
            className="input-sanctuary w-full resize-none pl-10"
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto gap-2 shadow-mountain py-3.5"
      >
        Send Message
        <Send size={16} />
      </button>
    </form>
  )
}
