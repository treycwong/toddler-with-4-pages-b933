import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Star, Sun } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-surface/80 px-4 py-1.5 text-sm font-medium text-on-surface backdrop-blur-sm ghost-border">
              <Heart size={14} className="text-primary" />
              Enrolling now for Fall 2025
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-on-surface md:text-6xl font-serif">
              Where Little Minds <span className="text-primary">Grow Big</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-secondary">
              At Toddler Kindergarten, we believe every child is a natural explorer. Our play-based curriculum builds confidence, creativity, and a lifelong love of learning in a nurturing environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/classes"
                className="btn-primary gap-2 shadow-mountain"
              >
                Explore Programs
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary gap-2"
              >
                Schedule a Tour
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 overflow-hidden rounded-full border-2 border-surface"
                  >
                    <img
                      src={`https://picsum.photos/seed/child${i}/100/100`}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 font-semibold text-on-surface">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span>4.9</span>
                </div>
                <p className="text-secondary">Trusted by 200+ families</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-mountain">
              <img
                src="https://picsum.photos/seed/kindergarten/800/600"
                alt="Children learning through play at Toddler Kindergarten"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/20 to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-surface p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low text-primary">
                  <Sun size={20} />
                </div>
                <div>
                  <p className="text-xs text-secondary">Daily outdoor play</p>
                  <p className="text-sm font-semibold text-on-surface">2+ hours</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-10 rounded-2xl bg-surface p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low text-primary">
                  <Heart size={20} />
                </div>
                <div>
                  <p className="text-xs text-secondary">Student to teacher</p>
                  <p className="text-sm font-semibold text-on-surface">4:1 ratio</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
