import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'About' },
  { to: '/classes', label: 'Classes' },
  { to: '/teachers', label: 'Teachers' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-warm-200 bg-warm-50/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warm-500 text-white">
            <span className="text-lg font-bold">T</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-stone-800">Toddler</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-warm-100 text-warm-800'
                    : 'text-stone-600 hover:bg-warm-100 hover:text-stone-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-600 hover:bg-warm-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-warm-200 bg-warm-50 md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-warm-100 text-warm-800'
                        : 'text-stone-600 hover:bg-warm-100 hover:text-stone-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
