import { motion } from 'framer-motion'
import { Award, BookOpen } from 'lucide-react'

interface TeacherCardProps {
  name: string
  role: string
  bio: string
  credentials: string[]
  imageSeed: string
  index: number
}

export function TeacherCard({ name, role, bio, credentials, imageSeed, index }: TeacherCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-3xl border border-warm-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-warm-900/5"
    >
      <div className="relative aspect-square overflow-hidden bg-warm-100">
        <img
          src={`https://picsum.photos/seed/${imageSeed}/400/400`}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-stone-900">{name}</h3>
        <p className="text-sm font-medium text-warm-600">{role}</p>
        <p className="mt-3 text-sm leading-relaxed text-stone-500">{bio}</p>

        <div className="mt-5 space-y-2">
          {credentials.map((cred) => (
            <div key={cred} className="flex items-center gap-2 text-xs text-stone-600">
              {cred.includes('Degree') || cred.includes('Masters') ? (
                <BookOpen size={14} className="text-sage-600" />
              ) : (
                <Award size={14} className="text-warm-600" />
              )}
              {cred}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
