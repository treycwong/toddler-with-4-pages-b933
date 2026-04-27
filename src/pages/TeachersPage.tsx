import { AnimatedSection } from '../components/AnimatedSection'
import { TeacherCard } from '../components/TeacherCard'

const teachers = [
  {
    name: 'Eleanor Vance',
    role: 'Founder & Lead Educator',
    bio: 'With over 20 years in early childhood education, Eleanor founded Toddler Kindergarten to create the nurturing environment she wished existed for her own three children. She holds a Masters in Early Childhood Development from UT Austin.',
    credentials: ['M.Ed. Early Childhood Development', 'Certified Montessori Guide', 'First Aid & CPR Instructor'],
    imageSeed: 'eleanorvance',
  },
  {
    name: 'Marcus Chen',
    role: 'Preschool Lead Teacher',
    bio: 'Marcus brings creativity and calm energy to every classroom. A former children’s museum educator, he specializes in STEAM integration for young learners and believes every question is an opportunity for discovery.',
    credentials: ['B.A. Elementary Education', 'STEAM Certification', '8+ years classroom experience'],
    imageSeed: 'marcuschen',
  },
  {
    name: 'Amara Okafor',
    role: 'Infant & Toddler Specialist',
    bio: 'Amara’s gentle presence makes her a favorite among our youngest students. She is trained in RIE philosophy and creates serene, respectful environments where babies thrive through attuned caregiving.',
    credentials: ['B.S. Child Development', 'RIE Foundations Certificate', 'Infant Mental Health Training'],
    imageSeed: 'amaraokafor',
  },
  {
    name: 'Javier Morales',
    role: 'Pre-Kindergarten Lead',
    bio: 'Javier prepares our oldest students for elementary success with enthusiasm and structure. His dual-language approach introduces Spanish naturally through songs, stories, and daily conversation.',
    credentials: ['M.A. Bilingual Education', 'Texas Teaching Certificate', '10+ years Pre-K experience'],
    imageSeed: 'javiermorales',
  },
  {
    name: 'Priya Sharma',
    role: 'Art & Expression Instructor',
    bio: 'Priya believes creativity is a fundamental language for children. Her process-art studio encourages experimentation with natural materials, clay, light, and shadow — never coloring inside the lines.',
    credentials: ['B.F.A. Studio Art', 'Reggio Emilia Study Group', 'Creative Arts Therapy coursework'],
    imageSeed: 'priyasharma',
  },
  {
    name: 'David Osei',
    role: 'Outdoor Learning Coordinator',
    bio: 'David transforms our gardens and trails into living classrooms. A certified naturalist, he guides children in planting, observation, and wildlife stewardship, building a lifelong connection to the earth.',
    credentials: ['B.S. Environmental Science', 'Certified Naturalist', 'Wilderness First Responder'],
    imageSeed: 'davidosei',
  },
]

export function TeachersPage() {
  return (
    <div className="bg-warm-50">
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-warm-600">Our Team</span>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-stone-900 md:text-5xl">
            Passionate Educators, Caring Mentors
          </h1>
          <p className="mt-5 text-base leading-relaxed text-stone-600">
            Every teacher at Toddler Kindergarten is carefully selected for their expertise, warmth, and genuine love for early childhood. Meet the people who make our school a second home.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t, i) => (
            <TeacherCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
