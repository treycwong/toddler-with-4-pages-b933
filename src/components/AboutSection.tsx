import { AnimatedSection } from './AnimatedSection'
import { ShieldCheck, BookOpen, TreePine, Users } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Safe Environment',
    desc: 'Secure facilities with controlled access, CPR-certified staff, and rigorous safety protocols.',
  },
  {
    icon: BookOpen,
    title: 'Play-Based Learning',
    desc: 'Research-backed curriculum that turns curiosity into cognitive, social, and motor development.',
  },
  {
    icon: TreePine,
    title: 'Nature Connection',
    desc: 'Daily outdoor exploration in our certified wildlife garden and natural playscapes.',
  },
  {
    icon: Users,
    title: 'Family Partnership',
    desc: 'Open communication, parent workshops, and community events that keep families involved.',
  },
]

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid gap-16 lg:grid-cols-2">
        <AnimatedSection>
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl">
              <img
                src="https://picsum.photos/seed/classroom/600/800"
                alt="Bright classroom at Toddler Kindergarten"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden rounded-3xl bg-warm-600 p-8 text-white lg:block">
              <p className="text-5xl font-bold">15+</p>
              <p className="mt-1 text-sm opacity-90">Years of nurturing young learners</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="flex flex-col justify-center">
          <AnimatedSection delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-wider text-warm-600">About Us</span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl">
              A Place Where Childhood Is Celebrated
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-600">
              Founded in 2010, Toddler Kindergarten began with a simple belief: children learn best when they feel safe, seen, and inspired. What started as a single classroom has grown into a thriving community where hundreds of families have watched their children blossom into confident, curious learners.
            </p>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              Our educators are not just teachers — they are mentors, observers, and partners in your childs journey. We blend structured learning with free exploration, ensuring every day is filled with wonder, discovery, and joy.
            </p>
          </AnimatedSection>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={0.2 + index * 0.1}>
                <div className="group rounded-2xl border border-warm-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-warm-900/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warm-100 text-warm-700 transition-colors group-hover:bg-warm-600 group-hover:text-white">
                    <feature.icon size={20} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-stone-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
