import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { HomeCtaSection } from '../components/home/HomeCtaSection'

gsap.registerPlugin(ScrollTrigger)

interface ProgramChild {
  id: string
  name: string
  age: number
  grade: string
  school: string
  dream: string
  location: string
  image: string
  story: string
  monthlyNeed: number
  fundedPercent: number
  urgent?: boolean
}

const PROGRAM_HERO_IMAGE =
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=85'

const CHILDREN: readonly ProgramChild[] = [
  {
    id: 'keza',
    name: 'Keza',
    age: 8,
    grade: 'Grade 3',
    school: 'Kigali Academy',
    dream: 'Aspiring Teacher',
    location: 'Kigali, Rwanda',
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    story:
      'Keza is passionate about reading and spends every afternoon reading stories to younger children in her neighborhood. Her mother sells produce at a local market, and fluctuating income often made regular school fees uncertain. Support covers her full tuition, books, and daily hot lunch.',
    monthlyNeed: 35,
    fundedPercent: 65,
    urgent: true,
  },
  {
    id: 'samuel',
    name: 'Samuel',
    age: 10,
    grade: 'Grade 4',
    school: 'Bugesera Primary School',
    dream: 'Aspiring Mechanical Engineer',
    location: 'Bugesera, Rwanda',
    image:
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
    story:
      'Samuel has an inventive mind, building miniature wire toy cars and windmills from recycled scraps. With guidance through our program, he received his first complete mathematics and science kit, shoes, and guaranteed daily meals at school.',
    monthlyNeed: 35,
    fundedPercent: 40,
    urgent: true,
  },
  {
    id: 'divine',
    name: 'Divine',
    age: 7,
    grade: 'Grade 2',
    school: 'Rwamagana Community School',
    dream: 'Aspiring Doctor',
    location: 'Rwamagana, Rwanda',
    image:
      'https://images.unsplash.com/photo-1547496613-4e19af6736dc?auto=format&fit=crop&w=800&q=80',
    story:
      'Full of vibrant curiosity, Divine is at the top of her primary class. She is cared for by her elderly grandmother on a subsistence garden. Sponsorship ensures Divine never misses school due to lack of uniforms, shoes, or school supplies.',
    monthlyNeed: 35,
    fundedPercent: 50,
  },
  {
    id: 'eric',
    name: 'Eric',
    age: 11,
    grade: 'Grade 5',
    school: 'Musanze Primary School',
    dream: 'Aspiring Agronomist',
    location: 'Musanze, Rwanda',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    story:
      'Eric loves nature and dreams of introducing modern sustainable farming techniques to his community. Last year, unpaid registration fees nearly forced him to drop out. Sponsorship keeps his exam fees and classroom resources secured.',
    monthlyNeed: 35,
    fundedPercent: 30,
    urgent: true,
  },
  {
    id: 'aline',
    name: 'Aline',
    age: 9,
    grade: 'Grade 4',
    school: 'Kayonza Primary School',
    dream: 'Aspiring Nurse',
    location: 'Kayonza, Rwanda',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    story:
      'Aline is gentle, compassionate, and loves helping in community clean-up days. Her family was displaced after severe seasonal rains. Through this program, her school supplies, tuition, and uniforms are fully provided so her learning stays uninterrupted.',
    monthlyNeed: 35,
    fundedPercent: 75,
  },
  {
    id: 'patrick',
    name: 'Patrick',
    age: 12,
    grade: 'Grade 6',
    school: 'Kigali Primary School',
    dream: 'Aspiring Computer Scientist',
    location: 'Kigali, Rwanda',
    image:
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80',
    story:
      'Patrick is preparing for his national primary leaving exams. He is fascinated by technology and attends our weekly digital literacy weekend workshops. Sponsorship covers his revision workbooks, exam fees, and nutritious lunches.',
    monthlyNeed: 35,
    fundedPercent: 85,
  },
] as const

const PROGRAM_PILLARS = [
  {
    number: '01',
    title: 'Education & Opportunities',
    description:
      'We help children from vulnerable families access educational materials and support so financial hardship does not prevent them from continuing their education and pursuing their dreams.',
  },
  {
    number: '02',
    title: 'Care, Guidance & Well-being',
    description:
      'We walk alongside children from an early age, offering care, encouragement, guidance, and support for their essential needs so they can grow in a safe and supportive environment.',
  },
  {
    number: '03',
    title: 'Personal Growth & Dreams',
    description:
      'We encourage children to discover their strengths, build confidence, and work toward their goals, helping ensure that the circumstances of their birth do not define the future they can achieve.',
  },
] as const

const DONATION_PRESETS = [25, 35, 50, 100]

function ChildDonationModal({
  child,
  onClose,
}: {
  child: ProgramChild | null
  onClose: () => void
}) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const [frequency, setFrequency] = useState<'monthly' | 'one-time'>('monthly')
  const [amount, setAmount] = useState<number>(35)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [isCustom, setIsCustom] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [donorName, setDonorName] = useState('')
  const [donorEmail, setDonorEmail] = useState('')
  const [donorNote, setDonorNote] = useState('')

  useEffect(() => {
    if (!child) return

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [child, onClose])

  if (!child) return null

  const effectiveAmount = isCustom ? Number(customAmount) || 0 : amount

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-ink/70 backdrop-blur-xs transition-opacity"
        aria-label="Close donation dialog"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto border border-primary/20 bg-warm-white p-6 shadow-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={child.image}
              alt={child.name}
              className="h-16 w-16 rounded-full object-cover border-2 border-primary/20"
            />
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                {child.dream}
              </p>
              <h3
                id={titleId}
                className="text-2xl font-semibold tracking-tight text-primary"
              >
                Sponsor {child.name}
              </h3>
              <p className="text-xs text-primary/70">
                {child.age} yrs &bull; {child.grade} &bull; {child.school} &bull; {child.location}
              </p>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="shrink-0 p-1 text-lg font-medium text-primary/70 transition-colors hover:text-primary"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Story & Funding Details in Popup */}
        <div className="mt-5 border-y border-primary/15 py-4 bg-primary/[0.03] -mx-6 px-6 sm:-mx-8 sm:px-8">
          <div className="flex items-center justify-between text-xs font-semibold text-primary">
            <span>Need: ${child.monthlyNeed}/mo</span>
            <span>{child.fundedPercent}% Funded</span>
          </div>
          <div className="mt-2 h-1.5 w-full bg-primary/10">
            <div
              className="h-full bg-primary"
              style={{ width: `${child.fundedPercent}%` }}
            />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-primary/80">
            {child.story}
          </p>
        </div>

        {submitted ? (
          <div className="mt-8 space-y-6">
            <div className="border-l-4 border-primary bg-primary/[0.06] p-5">
              <h4 className="text-lg font-semibold text-primary">
                Thank you for standing with {child.name}!
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-primary/80">
                Your pledge of <strong className="text-primary">${effectiveAmount} {frequency === 'monthly' ? '/ month' : ''}</strong> directly guarantees tuition, school supplies, daily lunches, and mentorship for {child.name}.
              </p>
              {donorNote && (
                <div className="mt-4 border-t border-primary/15 pt-3">
                  <p className="text-xs font-medium text-primary/70 uppercase tracking-wider">
                    Your message to {child.name}:
                  </p>
                  <p className="mt-1 text-sm italic text-primary/80">&ldquo;{donorNote}&rdquo;</p>
                </div>
              )}
            </div>

            <p className="text-xs text-primary/70">
              A detailed sponsorship packet and receipt have been prepared for <strong className="text-primary">{donorEmail || 'your email'}</strong>. Our field team will share regular report updates on {child.name}&apos;s progress throughout the academic term.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-warm-white transition-colors hover:opacity-90"
            >
              Done
            </button>
          </div>
        ) : (
          <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Frequency Selector */}
            <div className="grid grid-cols-2 gap-2 border border-primary/20 p-1 bg-primary/[0.03]">
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${frequency === 'monthly'
                  ? 'bg-primary text-warm-white shadow-xs'
                  : 'text-primary/70 hover:text-primary'
                  }`}
              >
                Monthly ($35 Covers all)
              </button>
              <button
                type="button"
                onClick={() => setFrequency('one-time')}
                className={`py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${frequency === 'one-time'
                  ? 'bg-primary text-warm-white shadow-xs'
                  : 'text-primary/70 hover:text-primary'
                  }`}
              >
                One-Time Gift
              </button>
            </div>

            {/* Amount Selection */}
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-primary/80">
                Select Amount (USD)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {DONATION_PRESETS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => {
                      setAmount(preset)
                      setIsCustom(false)
                    }}
                    className={`border py-2.5 text-sm font-semibold transition-colors ${!isCustom && amount === preset
                      ? 'border-primary bg-primary text-warm-white'
                      : 'border-primary/20 bg-white text-primary hover:border-primary'
                      }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
              <div className="mt-2.5">
                <input
                  type="number"
                  min="5"
                  step="1"
                  placeholder="Or enter custom amount ($)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setIsCustom(true)
                  }}
                  className="w-full border border-primary/20 bg-white px-4 py-2 text-sm text-primary placeholder:text-primary/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <p className="mt-1.5 text-xs text-primary/80">
                {effectiveAmount >= 35
                  ? `⭐ Fully covers ${child.name}'s tuition, uniform, school materials, and daily hot meals.`
                  : `Provides essential books, uniforms, and stationary kits for ${child.name}.`}
              </p>
            </div>

            {/* Donor Fields */}
            <div className="space-y-3 border-t border-primary/15 pt-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-primary">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full border border-primary/20 bg-white px-4 py-2 text-sm text-primary placeholder:text-primary/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-primary">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full border border-primary/20 bg-white px-4 py-2 text-sm text-primary placeholder:text-primary/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-primary">
                  Personal Note for {child.name}{' '}
                  <span className="font-normal text-primary/60">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder={`Write an encouraging message to ${child.name}...`}
                  value={donorNote}
                  onChange={(e) => setDonorNote(e.target.value)}
                  className="w-full border border-primary/20 bg-white px-4 py-2 text-sm text-primary placeholder:text-primary/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-warm-white transition-colors hover:opacity-90 focus:outline-none"
            >
              Confirm ${effectiveAmount || 35} {frequency === 'monthly' ? '/ Month' : ''} Sponsorship
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body,
  )
}

export function EveryKidPage() {
  const [selectedChild, setSelectedChild] = useState<ProgramChild | null>(null)
  const parallaxWrapRef = useRef<HTMLDivElement>(null)
  const parallaxImgRef = useRef<HTMLImageElement>(null)

  useGSAP(
    () => {
      const wrap = parallaxWrapRef.current
      const img = parallaxImgRef.current
      if (!wrap || !img) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.fromTo(
        img,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    },
    { scope: parallaxWrapRef },
  )

  return (
    <div className="bg-warm-white text-primary">
      {/* 1. Hero Section — matching home page hero with full-bleed image below */}
      <section className="w-full bg-warm-white">
        <div className="site-container pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
            <div>
              <h1 className="text-3xl font-medium tracking-tight text-primary sm:text-4xl lg:text-5xl">
                About Every Child
                <br />
                Deserves It.
              </h1>
            </div>

            <div className="w-full space-y-6">
              <p className="text-base leading-relaxed text-primary sm:text-lg">
                Every Child Deserves It is a program of Kubwabo Foundation dedicated to walking alongside children from vulnerable families, helping them access opportunities, discover their potential, and work toward their dreams.
              </p>
              <p className="text-base leading-relaxed text-primary/80 sm:text-lg">
                Just as many of us have been supported by our parents and others who believed in us, we believe every child deserves someone who cares, encourages them, and helps them move forward. Through educational support, mentorship, guidance, and continued encouragement, we aim to help children overcome barriers and build a brighter future.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={parallaxWrapRef}
          className="relative h-dvh overflow-hidden"
        >
          <img
            ref={parallaxImgRef}
            src={PROGRAM_HERO_IMAGE}
            alt="Children in the program smiling together"
            referrerPolicy="no-referrer"
            className="absolute inset-x-0 top-0 h-[130%] w-full object-cover will-change-transform"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/5 to-transparent"
            aria-hidden
          />
        </div>
      </section>

      {/* Program Details & Pillars */}
      <section className="border-b border-primary/15 bg-white py-20 sm:py-24 lg:py-28">
        <div className="site-container">
          <div className="max-w-3xl lg:max-w-4xl">
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-primary sm:text-4xl">
              A Community That Cares
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary/80 sm:text-lg">
              Through consistent support, compassionate guidance, and access to educational opportunities, we create a supportive environment where children feel valued, develop their strengths, and build hope for the future.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {PROGRAM_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="flex flex-col justify-between border border-primary/15 bg-white p-7 text-left sm:p-8 lg:p-9 min-h-[300px] sm:min-h-[340px] lg:min-h-[360px]"
              >
                <div>
                  <span className="text-lg font-semibold tracking-tight text-primary sm:text-xl">
                    {pillar.number}
                  </span>
                </div>

                <div className="mt-12 sm:mt-16">
                  <h3 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-primary/80 sm:text-base">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Children in the program & Donation capability */}
      <section id="children" className="border-b border-white/10 bg-black py-20 sm:py-24 lg:py-28">
        <div className="site-container">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Direct Impact
              </p>
              <h2 className="mt-2 text-3xl font-medium tracking-tight text-warm-white sm:text-4xl lg:text-5xl">
                Children in the Program
              </h2>
            </div>
          </div>

          {/* Children Grid — 4 cards matching the blog cards architecture */}
          <div className="mt-14 grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 lg:mt-20">
            {CHILDREN.slice(0, 4).map((child, index) => (
              <article
                key={child.id}
                onClick={() => setSelectedChild(child)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedChild(child)
                  }
                }}
                role="button"
                tabIndex={0}
                className={`flex h-full flex-col border-white/15 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  index > 0 ? 'border-t sm:border-t-0' : ''
                } ${index % 2 !== 0 ? 'sm:border-l' : ''} ${
                  index >= 2 ? 'sm:border-t lg:border-t-0' : ''
                } ${index > 0 ? 'lg:border-l' : ''}`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-white/5">
                  <img
                    src={child.image}
                    alt={child.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col border-t border-white/15 px-6 py-8 sm:px-6 sm:py-8 lg:px-6 lg:py-8 xl:px-8 xl:py-10">
                  <p className="text-xs font-medium tracking-[0.12em] text-warm-white/70 uppercase">
                    {child.grade} &bull; {child.age} yrs{' '}
                    <span className="text-warm-white/35" aria-hidden>
                      |
                    </span>{' '}
                    {child.location}
                  </p>

                  <h3 className="mt-6 text-xl leading-snug font-medium tracking-tight text-warm-white sm:text-2xl lg:text-3xl">
                    {child.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-warm-white/80">
                    {child.dream}
                  </p>

                  <p className="mt-1 text-xs text-warm-white/50">
                    {child.school}
                  </p>

                  <div className="mt-auto pt-8">
                    <span className="inline-flex min-w-[7.5rem] items-center justify-center border border-warm-white px-6 py-2 text-sm font-medium leading-normal text-warm-white transition-colors hover:border-accent hover:bg-accent hover:text-ink">
                      Read more
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <HomeCtaSection />

      {/* Donation Modal Component */}
      {selectedChild && (
        <ChildDonationModal
          key={selectedChild.id}
          child={selectedChild}
          onClose={() => setSelectedChild(null)}
        />
      )}
    </div>
  )
}

