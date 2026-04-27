import { motion } from 'framer-motion'
import { Clock, Users, CalendarDays } from 'lucide-react'

interface ClassCardProps {
  title: string
  ageRange: string
  schedule: string
  capacity: string
  description: string
  imageSeed: string
  color: 'warm' | 'sage'
  index: number
}

export function ClassCard({ title, ageRange, schedule, capacity, description, imageSeed, color, index }: ClassCardProps) {
  const accentClass = color === 'warm' ? 'bg-warm-100 text-warm-700' : 'bg-sage-100 text-sage-700'
  const badgeClass = color === 'warm' ? 'bg-warm-600' : 'bg-sage-600'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-3xl border border-warm-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-warm-900/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${imageSeed}/800/500`}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <span className={`inline-block rounded-full ${badgeClass} px-3 py-1 text-xs font-semibold text-white`}>
            {ageRange}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-stone-900">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-stone-500">{description}</p>

        <div className="mt-6 flex flex-wrap gap-4">
          <div className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${accentClass}`}>
            <Clock size={14} />
            {schedule}
          </div>
          <div className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${accentClass}`}>
            <Users size={14} />
            {capacity}
          </div>
          <div className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${accentClass}`}>
            <CalendarDays size={14} />
            Year-round
          </div>
        </div>
      </div>
    </motion.div>
  )
}
