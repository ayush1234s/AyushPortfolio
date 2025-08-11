import type React from "react"
import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import SectionHeading from "@/components/section-heading"
import SkillsGrid from "@/components/skills-grid"
import { ArrowRight, Sparkles, Heart, Plane, Clapperboard, Gamepad2, Code2, Github, FolderGit2 } from "lucide-react"

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                <Sparkles className="h-3.5 w-3.5" />
                Welcome to my Portfolio
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                {"Ayush Srivastava"}
              </h1>
              <p className="mt-3 text-xl text-neutral-700">Full Stack Web Developer</p>
              <p className="mt-4 max-w-xl text-neutral-600">
                I build modern web apps, games, and beautiful interfaces. Explore my work and let’s create something
                great together.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                >
                  Contact
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                >
                  View my Projects
                </Link>
                <a
                  href="https://www.linkedin.com/in/ayushsrivastava06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                >
                  Connect with me on LinkedIn
                </a>
              </div>
            </div>

            {/* Right: Profile image */}
            <div className="flex items-center justify-center">
              <div className="relative flex flex-col items-center">
                <div className="relative h-44 w-44 sm:h-56 sm:w-56">
                  <Image
                    src="/images/ayush.jpg"
                    alt="Profile photo"
                    fill
                    className="rounded-full object-cover ring-4 ring-white shadow-lg"
                    sizes="(min-width: 1024px) 224px, 176px"
                  />
                </div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
                  <Code2 className="h-3.5 w-3.5" />
                  Ayush Srivastava
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeading title="About" subtitle="A quick introduction about me" align="left" />
          <div className="mt-6 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-neutral-700">
                  {
                    "Hi there, I am Ayush Srivastava and I am 3rd Year Galgotias College of Engineering and Technology Student in Btech Course. I Love to make Web Projects, Web games and Design Websites and have some beautiful projects and I love to share my own platform with you all my friend's."
                  }
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <MiniCard icon={<Heart className="h-5 w-5" />} title="I love Singing" />
                  <MiniCard icon={<Plane className="h-5 w-5" />} title="Love Travelling" />
                  <MiniCard icon={<Clapperboard className="h-5 w-5" />} title="Watching Movies" />
                  <MiniCard icon={<Gamepad2 className="h-5 w-5" />} title="Play Sports & Games" />
                </div>
                <div className="mt-6">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                  >
                    View my Projects
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-neutral-900">Contact Card</h3>
              <dl className="mt-4 space-y-3 text-neutral-800">
                <div className="flex items-center justify-between">
                  <dt className="text-neutral-600">Name</dt>
                  <dd className="font-medium">Ayush Srivastava</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-neutral-600">Email</dt>
                  <dd>
                    <a
                      href="mailto:ayushsrivastava8899@gmail.com"
                      className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-500"
                    >
                      ayushsrivastava8899@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeading title="My Skills" subtitle="Technologies I work with and what I’m learning" align="left" />
          <div className="mt-6">
            <SkillsGrid />
          </div>
        </div>
      </section>

      {/* Projects teaser with icons */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-3">
            <FolderGit2 className="h-6 w-6 text-neutral-900" aria-hidden="true" />
            <SectionHeading title="Projects" subtitle="You can see my Projects here" align="left" />
          </div>
          <div className="mt-4 flex items-center gap-3 text-neutral-500">
            <Code2 className="h-5 w-5" />
            <Github className="h-5 w-5" />
          </div>
          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12 shadow-sm text-center">
            <h3 className="text-2xl font-bold text-neutral-900">Let’s Connect</h3>
            <p className="mt-2 text-neutral-600">
              Want to collaborate or have a project in mind? I’d love to hear from you.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Contact Me
              </Link>
              <a
                href="https://www.linkedin.com/in/ayushsrivastava06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                aria-label="Connect on LinkedIn"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

function MiniCard({
  icon = null,
  title = "Title",
}: {
  icon?: React.ReactNode
  title?: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900">
        {icon}
      </div>
      <p className="font-medium text-neutral-800">{title}</p>
    </div>
  )
}
