import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-warm-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warm-500 text-white">
                <span className="text-lg font-bold">T</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-stone-800">Toddler</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
              Nurturing curiosity, creativity, and confidence in every child through play-based learning and compassionate care.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-stone-500 hover:text-warm-700">About</Link>
              </li>
              <li>
                <Link to="/classes" className="text-sm text-stone-500 hover:text-warm-700">Classes</Link>
              </li>
              <li>
                <Link to="/teachers" className="text-sm text-stone-500 hover:text-warm-700">Teachers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-stone-500 hover:text-warm-700">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">Contact Info</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone-500">
                <MapPin size={16} className="mt-0.5 shrink-0 text-warm-600" />
                <span>1428 Maple Grove Lane<br />Austin, TX 78704</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-500">
                <Phone size={16} className="shrink-0 text-warm-600" />
                <span>+1 (512) 847-1928</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-500">
                <Mail size={16} className="shrink-0 text-warm-600" />
                <span>hello@toddlerkindergarten.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-500">
                <Clock size={16} className="shrink-0 text-warm-600" />
                <span>Mon – Fri: 7:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-warm-200 pt-8 text-center">
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} Toddler Kindergarten. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
