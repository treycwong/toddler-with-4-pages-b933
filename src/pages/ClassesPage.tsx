import { AnimatedSection } from '../components/AnimatedSection'
import { ClassCard } from '../components/ClassCard'

const classes = [
  {
    title: 'Infant Care',
    ageRange: '6 weeks – 12 months',
    schedule: 'Full & Half Day',
    capacity: '8 children',
    description: 'A gentle, responsive environment where our youngest learners build trust and security. We follow each infant’s natural rhythm with sensory play, tummy time, and nurturing care.',
    imageSeed: 'infantcare',
    color: 'warm' as const,
  },
  {
    title: 'Toddler Program',
    ageRange: '1 – 2 years',
    schedule: 'Full & Half Day',
    capacity: '12 children',
    description: 'Busy toddlers explore language, motor skills, and social interaction through guided play. Our indoor climbers, art stations, and music circles keep curious minds engaged.',
    imageSeed: 'toddlerprog',
    color: 'sage' as const,
  },
  {
    title: 'Preschool',
    ageRange: '3 – 4 years',
    schedule: 'Full Day',
    capacity: '16 children',
    description: 'Emergent literacy, early math concepts, and collaborative projects form the core of our preschool curriculum. Children develop independence and school-ready skills through hands-on discovery.',
    imageSeed: 'preschool',
    color: 'warm' as const,
  },
  {
    title: 'Pre-Kindergarten',
    ageRange: '4 – 5 years',
    schedule: 'Full Day',
    capacity: '18 children',
    description: 'Our Pre-K program bridges play and academics, ensuring children enter kindergarten with confidence. Focus areas include phonics, number sense, scientific inquiry, and social-emotional maturity.',
    imageSeed: 'prekindergarten',
    color: 'sage' as const,
  },
]

export function ClassesPage() {
  return (
    <div className="bg-warm-50">
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-warm-600">Our Programs</span>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-stone-900 md:text-5xl">
            Programs Designed for Every Stage
          </h1>
          <p className="mt-5 text-base leading-relaxed text-stone-600">
            From gentle infant care to school-ready Pre-K, each program is thoughtfully crafted to support developmental milestones while honoring the uniqueness of every child.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {classes.map((c, i) => (
            <ClassCard key={c.title} {...c} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
