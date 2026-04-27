import { AnimatedSection } from '../components/AnimatedSection'
import { ContactForm } from '../components/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function ContactPage() {
  return (
    <div className="bg-warm-50">
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-warm-600">Get in Touch</span>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-stone-900 md:text-5xl">
            We Would Love to Hear From You
          </h1>
          <p className="mt-5 text-base leading-relaxed text-stone-600">
            Whether you are ready to enroll or just exploring, our admissions team is here to answer your questions and schedule a personalized campus tour.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.1}>
              <div className="space-y-8 rounded-3xl border border-warm-200 bg-white p-8 shadow-sm">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">Visit Our Campus</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-warm-100 text-warm-600">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-stone-900">Address</p>
                        <p className="mt-0.5 text-sm text-stone-500">
                          1428 Maple Grove Lane<br />
                          Austin, TX 78704
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-warm-100 text-warm-600">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-stone-900">Phone</p>
                        <p className="mt-0.5 text-sm text-stone-500">+1 (512) 847-1928</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-warm-100 text-warm-600">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-stone-900">Email</p>
                        <p className="mt-0.5 text-sm text-stone-500">hello@toddlerkindergarten.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-warm-100 text-warm-600">
                        <Clock size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-stone-900">Office Hours</p>
                        <p className="mt-0.5 text-sm text-stone-500">
                          Monday – Friday: 7:00 AM – 6:00 PM<br />
                          Saturday: 9:00 AM – 1:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-warm-100 p-6">
                  <h4 className="text-sm font-semibold text-warm-900">Schedule a Tour</h4>
                  <p className="mt-2 text-sm leading-relaxed text-warm-800">
                    We offer guided tours every Tuesday and Thursday morning. Fill out the form and our team will confirm your visit within one business day.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-3">
            <AnimatedSection delay={0.2}>
              <div className="rounded-3xl border border-warm-200 bg-white p-8 shadow-sm md:p-10">
                <h3 className="text-xl font-bold text-stone-900">Send a Message</h3>
                <p className="mt-2 text-sm text-stone-500">
                  Have questions about enrollment, tuition, or our curriculum? We are here to help.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
