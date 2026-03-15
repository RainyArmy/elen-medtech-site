import Link from "next/link";

const navItems = [
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "Our Solution" },
  { href: "#validation", label: "Validation" },
  { href: "#market", label: "Market Opportunity" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white text-sm font-semibold">
              EL
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-slate-900">
                ELEN MedTech
              </span>
              <span className="text-xs text-slate-500">
                Early-stage medical technology
              </span>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white md:inline-flex"
          >
            Contact
          </Link>
        </div>
      </header>

      <section
        aria-labelledby="hero-heading"
        className="border-b border-slate-200 bg-gradient-to-b from-primary/5 to-slate-50"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-24 lg:px-8">
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Australian medical technology
            </p>
            <h1
              id="hero-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Reducing the diagnostic delay in endometriosis
            </h1>
            <p className="max-w-xl text-lg text-slate-700">
              ELEN MedTech is developing a handheld non-invasive diagnostic
              platform aimed at improving the early detection of superficial
              peritoneal endometriosis (SPE).
            </p>
            <p className="max-w-xl text-sm text-slate-600">
              Our goal is to support clinicians with additional bedside
              information that may help reduce diagnostic delay and reliance on
              invasive procedures.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
              >
                Contact Us
              </Link>
              <Link
                href="#solution"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-6 grid gap-4 text-xs text-slate-600 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white/80 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Focus Area
                </p>
                <p className="mt-2 font-medium">
                  Superficial peritoneal endometriosis
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white/80 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Modality
                </p>
                <p className="mt-2 font-medium">
                  Advanced non-invasive sensing and intelligent software
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white/80 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Stage
                </p>
                <p className="mt-2 font-medium">
                  Early-stage medtech developing towards clinical validation
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary via-primary/80 to-slate-900 p-6 shadow-xl">
              <div className="absolute inset-0 opacity-40">
                <div className="h-full w-full bg-[radial-gradient(circle_at_0_0,#C8A34D33,transparent_55%),radial-gradient(circle_at_100%_0,#FFFFFF22,transparent_55%)]" />
              </div>
              <div className="relative space-y-6 text-sm text-slate-50">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Rethinking diagnostic pathways
                </p>
                <p className="max-w-sm text-sm text-slate-100">
                  Today, many people with endometriosis wait years for a
                  diagnosis, often culminating in invasive surgery. ELEN is
                  exploring how non-invasive, bedside sensing could support more
                  timely and informed clinical decisions.
                </p>
                <dl className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-2">
                  <div className="space-y-1 rounded-2xl bg-white/5 p-4 backdrop-blur">
                    <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200">
                      Intended setting
                    </dt>
                    <dd className="font-semibold text-slate-50">
                      Gynaecology and women&apos;s health clinics, hospitals
                    </dd>
                  </div>
                  <div className="space-y-1 rounded-2xl bg-white/5 p-4 backdrop-blur">
                    <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200">
                      Regions of focus
                    </dt>
                    <dd className="font-semibold text-slate-50">
                      Australia and the United States
                    </dd>
                  </div>
                </dl>
                <p className="text-[11px] text-slate-200/80">
                  The ELEN diagnostic platform is under development and is not
                  yet approved for clinical use or available for purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="problem"
        aria-labelledby="problem-heading"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2
              id="problem-heading"
              className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
            >
              The diagnostic challenge in endometriosis
            </h2>
            <p className="text-sm text-slate-600">
              Endometriosis imposes a significant burden on individuals, health
              systems, and economies. Superficial peritoneal endometriosis (SPE)
              is a common form of endometriosis and remains difficult to detect
              with current imaging and diagnostic approaches. SPE is understood
              to represent a substantial proportion of endometriosis cases,
              contributing to underdiagnosis and delayed treatment.
            </p>
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <dt className="text-sm font-medium text-slate-700">
                High prevalence
              </dt>
              <dd className="mt-3">
                <p className="text-3xl font-semibold text-primary">1 in 7</p>
                <p className="mt-1 text-xs text-slate-600">
                  women are affected by endometriosis.
                </p>
              </dd>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <dt className="text-sm font-medium text-slate-700">
                Prolonged time to diagnosis
              </dt>
              <dd className="mt-3">
                <p className="text-3xl font-semibold text-primary">7 years</p>
                <p className="mt-1 text-xs text-slate-600">
                  is the average time from symptom onset to diagnosis.
                </p>
              </dd>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <dt className="text-sm font-medium text-slate-700">
                Superficial peritoneal disease
              </dt>
              <dd className="mt-3 text-xs text-slate-600">
                Superficial peritoneal endometriosis (SPE) is difficult to
                visualise and characterise with existing imaging, contributing
                to underdiagnosis and delayed treatment.
              </dd>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <dt className="text-sm font-medium text-slate-700">
                Reliance on invasive surgery
              </dt>
              <dd className="mt-3 text-xs text-slate-600">
                For many patients, confirmation of endometriosis still depends
                on laparoscopic surgery, carrying procedural risks and resource
                constraints.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        id="solution"
        aria-labelledby="solution-heading"
        className="border-b border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              <h2
                id="solution-heading"
                className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
              >
                A handheld diagnostic platform in development
              </h2>
              <p className="text-sm text-slate-600">
                ELEN MedTech is developing a handheld non-invasive diagnostic
                platform designed to support clinicians in the earlier
                identification of superficial peritoneal endometriosis (SPE).
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>
                    Combining advanced non-invasive sensing with intelligent
                    software and computer vision concepts.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>
                    Intended to integrate into existing gynaecology and
                    women&apos;s health workflows in clinics and hospitals.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>
                    Designed to provide clinicians with additional, non-invasive
                    information at the bedside to inform diagnostic pathways.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                The ELEN diagnostic platform is currently under development. It
                is not yet approved by regulatory authorities and is not
                available for clinical use or purchase.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Conceptual workflow
              </p>
              <ol className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      Point-of-care handheld assessment
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      A clinician uses the handheld device at the point of
                      care, aligned with existing examination pathways.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      Signal acquisition and intelligent analysis
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Non-invasive, signal-based sensing captures data which is
                      then processed by software and computer vision algorithms
                      under development.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      Clinically-oriented decision support
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      The intended output is a clear, interpretable signal to
                      support earlier consideration of endometriosis and
                      potentially reduce reliance on invasive procedures where
                      appropriate.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section
        id="validation"
        aria-labelledby="validation-heading"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              <h2
                id="validation-heading"
                className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
              >
                Clinical insight and early validation
              </h2>
              <p className="text-sm text-slate-600">
                ELEN MedTech is engaging with clinicians across gynaecology and
                women&apos;s health to understand unmet needs in the diagnosis
                of superficial peritoneal endometriosis.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>
                    Structured interviews and discussions with gynaecologists,
                    sonographers, and pelvic pain specialists.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>
                    Consistent feedback highlighting the need for more
                    accessible, non-invasive tools to support earlier diagnosis.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>
                    Strong interest from clinicians in both Australia and the
                    United States in novel diagnostic approaches.
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Building towards clinical evidence
              </p>
              <p className="text-sm text-slate-700">
                As an early-stage medical technology company, ELEN is focused on
                robust clinical validation and clear regulatory pathways from
                the outset.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>
                    Defining study designs to evaluate diagnostic performance in
                    collaboration with clinical partners.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>
                    Mapping potential regulatory pathways in Australia and the
                    United States, including TGA and FDA considerations.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>
                    Prioritising safety, data integrity, and clinician
                    usability in product development.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Any future clinical use would be subject to successful trials
                and relevant regulatory approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="market"
        aria-labelledby="market-heading"
        className="border-b border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2
              id="market-heading"
              className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
            >
              Market opportunity in women&apos;s health diagnostics
            </h2>
            <p className="text-sm text-slate-600">
              Clinics and hospitals in Australia and the United States are
              seeking scalable ways to address growing demand for women&apos;s
              health services, particularly in conditions with complex and
              delayed diagnostic pathways such as endometriosis.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-slate-800">
                High system burden
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Repeated imaging, specialist referrals, and surgical procedures
                contribute to substantial direct and indirect costs for health
                systems and patients.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-slate-800">
                Demand for non-invasive tools
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Clinicians are increasingly seeking bedside, non-invasive
                technologies that can complement existing imaging and support
                earlier decision-making.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-slate-800">
                Focused, scalable deployment
              </p>
              <p className="mt-2 text-xs text-slate-600">
                An effective diagnostic adjunct for superficial peritoneal
                endometriosis could be deployed across specialist clinics and
                hospital networks, with clear pathways for training and support.
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-xs text-slate-500">
            Any future market access would depend on achieving positive clinical
            evidence, regulatory approvals, and alignment with reimbursement and
            procurement frameworks in each jurisdiction.
          </p>
        </div>
      </section>

      <section
        id="team"
        aria-labelledby="team-heading"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2
              id="team-heading"
              className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
            >
              Team
            </h2>
            <p className="text-sm text-slate-600">
              ELEN MedTech brings together experience across operations,
              product, finance, and clinical practice to build a medically
              rigorous, commercially viable platform.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Jayde Wang", role: "CEO" },
              { name: "Fernando Gargollo", role: "COO" },
              { name: "Ryan Armin", role: "CFO" },
              { name: "Charlotte Jones", role: "Head of Product" },
              { name: "Charlotte Thomas", role: "Head of Clinical" }
            ].map((member) => (
              <article
                key={member.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-5"
              >
                <div className="space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    {member.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-start">
            <div className="space-y-4">
              <h2
                id="contact-heading"
                className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
              >
                Contact
              </h2>
              <p className="text-sm text-slate-600">
                For investor, clinical collaboration, or partnership enquiries,
                please contact the ELEN MedTech team.
              </p>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                <p className="font-medium text-slate-800">Email</p>
                <p className="mt-1">
                  <a
                    href="mailto:contact@elenmedtech.com"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    contact@elenmedtech.com
                  </a>
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <form
                className="space-y-4"
                aria-label="Contact form for ELEN MedTech"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="organisation"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Organisation
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
                    placeholder="Clinic, hospital, fund, or company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
                    placeholder="How can we help?"
                  />
                </div>
                <p className="text-[11px] text-slate-500">
                  This form does not transmit medical information and is not
                  intended for clinical advice or emergency contact.
                </p>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Submit enquiry
                </button>
              </form>
            </div>
          </div>
          <p className="mt-10 text-xs text-slate-400">
            Nothing on this site constitutes medical, financial, or legal
            advice. Any future clinical use of ELEN MedTech products would be
            subject to regulatory approval and appropriate clinical evaluation.
          </p>
        </div>
      </section>
    </main>
  );
}

