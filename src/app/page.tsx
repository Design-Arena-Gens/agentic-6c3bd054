import Link from "next/link";

const highlights = [
  {
    title: "Brand Systems",
    description:
      "Craft a cohesive visual language that grows with your product and speaks directly to your audience.",
    icon: "🎨",
  },
  {
    title: "Product Design",
    description:
      "Design intuitive flows that guide customers from discovery through to delight without friction.",
    icon: "✨",
  },
  {
    title: "Experience Strategy",
    description:
      "Translate business goals into digital journeys that convert browsers into loyal advocates.",
    icon: "🧭",
  },
];

const process = [
  {
    phase: "Discover",
    summary: "We immerse ourselves in your story to surface the real challenge.",
  },
  {
    phase: "Design",
    summary:
      "Rapid ideation, prototyping, and validation keep momentum high and surprises low.",
  },
  {
    phase: "Deliver",
    summary:
      "We launch with polish, performance, and a playbook that keeps teams aligned.",
  },
];

const testimonials = [
  {
    quote:
      "Aurora Studio transformed our product in six weeks. We shipped with confidence and saw a 38% lift in activation.",
    author: "Lena Chavez",
    role: "VP Product, Riverwave",
  },
  {
    quote:
      "They translated a complex platform into a streamlined experience that our customers love.",
    author: "Owen Patel",
    role: "Founder, Looppay",
  },
];

const caseStudies = [
  {
    name: "Nova Analytics",
    tagline: "Enterprise dashboards reimagined for clarity and speed.",
    result: "47% faster time-to-insight after launch",
    href: "#work",
  },
  {
    name: "Beacon OS",
    tagline: "Operational command center designed for focus and flow.",
    result: "23% increase in team satisfaction",
    href: "#work",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[480px] w-[480px] animate-[pulse_16s_ease-in-out_infinite] rounded-full bg-purple-500/40 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-[420px] w-[420px] animate-[pulse_16s_ease-in-out_infinite] rounded-full bg-cyan-500/40 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-10 sm:px-10 md:px-16">
        <header className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-slate-900/60 p-10 shadow-xl ring-1 ring-white/10 backdrop-blur">
          <nav className="flex items-center justify-between text-sm font-medium text-slate-200">
            <span className="flex items-center gap-2 text-base font-semibold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-purple-400 to-cyan-400 text-slate-950">
                A
              </span>
              Aurora Studio
            </span>
            <div className="hidden items-center gap-6 md:flex">
              <Link className="transition hover:text-white" href="#services">
                Services
              </Link>
              <Link className="transition hover:text-white" href="#process">
                Process
              </Link>
              <Link className="transition hover:text-white" href="#work">
                Work
              </Link>
              <Link className="transition hover:text-white" href="#contact">
                Contact
              </Link>
            </div>
            <Link
              className="rounded-full bg-gradient-to-tr from-purple-400 to-cyan-400 px-5 py-2 text-slate-950 transition hover:shadow-lg hover:shadow-purple-500/25"
              href="#contact"
            >
              Start a project
            </Link>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
            <div className="space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-200">
                design / strategy / systems
              </p>
              <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                We craft digital experiences that make teams unstoppable.
              </h1>
              <p className="text-lg leading-8 text-slate-300 sm:text-xl">
                Aurora Studio blends product strategy, design systems, and
                storytelling to build momentum around high-impact ideas. From
                first sketch to launch day, we partner with ambitious teams to
                create the web they imagine.
              </p>
              <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row sm:items-center">
                <Link
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-slate-950 transition hover:bg-slate-100"
                  href="#work"
                >
                  View work
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-slate-100 transition hover:border-white"
                  href="#services"
                >
                  Explore services
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-slate-900/80 p-8 shadow-2xl">
              <div className="flex flex-col gap-6">
                <h2 className="text-lg font-semibold text-white">
                  Highlights
                </h2>
                <div className="grid gap-5">
                  {highlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.08]"
                    >
                      <div className="mb-3 flex items-center gap-3 text-white">
                        <span className="text-2xl">{item.icon}</span>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-sm text-slate-200">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.3em] text-slate-400">
            <span>Trusted by teams at</span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Riverwave
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Looppay
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Skylift
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Beacon
            </span>
          </div>
        </header>

        <main className="flex flex-col gap-24">
          <section
            id="services"
            className="grid gap-10 rounded-3xl border border-white/10 bg-slate-900/50 p-10 shadow-lg ring-1 ring-white/10 backdrop-blur md:grid-cols-3"
          >
            <div className="md:col-span-1">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Services
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                What we build together
              </h2>
              <p className="mt-3 text-slate-300">
                We plug into your product team to accelerate progress without
                disrupting rhythm. Every engagement is tailored, but the impact
                is consistent: clarity, velocity, alignment.
              </p>
            </div>
            <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-200">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="process"
            className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-slate-900/60 to-cyan-500/10 p-10 shadow-xl ring-1 ring-white/10 backdrop-blur"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-200">
                Process
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                How momentum happens
              </h2>
            </div>
            <ol className="grid gap-6 md:grid-cols-3">
              {process.map((stage, index) => (
                <li
                  key={stage.phase}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition hover:border-white/25 hover:bg-white/[0.1]"
                >
                  <span className="absolute -top-4 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {stage.phase}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    {stage.summary}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section
            id="work"
            className="grid gap-10 rounded-3xl border border-white/10 bg-slate-900/50 p-10 shadow-xl ring-1 ring-white/10 backdrop-blur md:grid-cols-[1.2fr_0.8fr]"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Work
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Case studies that shipped with impact
              </h2>
              <p className="mt-3 text-slate-300">
                We blend qualitative research with measurable goals to ship
                experiences that feel inevitable.
              </p>
              <Link
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-white"
                href="#contact"
              >
                Request the full portfolio
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="space-y-6">
              {caseStudies.map((project) => (
                <article
                  key={project.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <h3 className="text-2xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-200">
                    {project.tagline}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-cyan-200">
                    {project.result}
                  </p>
                  <Link
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan-200"
                    href={project.href}
                  >
                    Explore project
                    <span aria-hidden>→</span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-lg ring-1 ring-white/10 backdrop-blur lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
                Testimonials
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Teams we&apos;ve helped grow
              </h2>
              <p className="text-slate-200">
                Our partnerships are long-term because our work drives results.
                Every project includes training and tools that keep the wins
                compounding.
              </p>
            </div>
            <div className="grid gap-6">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.author}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-6"
                >
                  <blockquote className="text-lg leading-7 text-slate-100">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-slate-400">
                    <span className="font-semibold text-white">
                      {testimonial.author}
                    </span>{" "}
                    · {testimonial.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-white/10 to-purple-500/30 p-10 text-slate-950 shadow-2xl backdrop-blur"
          >
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-900">
                  Let&apos;s build
                </p>
                <h2 className="text-3xl font-semibold">
                  Tell us about the experience you&apos;re ready to ship.
                </h2>
                <p>
                  Share your goals, timeline, and why now is the moment. We&apos;ll
                  reply within two business days with next steps and a tailored
                  collaboration plan.
                </p>
              </div>
              <form className="grid gap-4">
                <label className="text-sm font-medium text-slate-900">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Ada Lovelace"
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-slate-900 outline-none ring-2 ring-transparent transition focus:ring-slate-900/40"
                  />
                </label>
                <label className="text-sm font-medium text-slate-900">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="team@yourcompany.com"
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-slate-900 outline-none ring-2 ring-transparent transition focus:ring-slate-900/40"
                  />
                </label>
                <label className="text-sm font-medium text-slate-900">
                  What would you like to create?
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Launch, rebrand, or product sprint?"
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-slate-900 outline-none ring-2 ring-transparent transition focus:ring-slate-900/40"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Schedule a discovery call
                  <span aria-hidden>→</span>
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-xs uppercase tracking-[0.2em] text-slate-400 md:flex-row">
          <span>© {new Date().getFullYear()} Aurora Studio</span>
          <div className="flex items-center gap-4">
            <Link className="transition hover:text-white" href="#services">
              Services
            </Link>
            <Link className="transition hover:text-white" href="#process">
              Process
            </Link>
            <Link className="transition hover:text-white" href="#work">
              Work
            </Link>
            <Link className="transition hover:text-white" href="#contact">
              Contact
            </Link>
          </div>
          <span>Made for ambitious teams</span>
        </footer>
      </div>
    </div>
  );
}
