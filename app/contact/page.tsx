"use client"

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import SectionHeading from "@/components/section-heading"
import { useState } from "react"

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)

  return (
    <main>
      <SiteHeader />
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeading
            title="Contact"
            subtitle="Send me a message and I’ll reply as soon as possible"
            align="left"
          />

          <form
            className="mt-8 space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={() => setSubmitting(true)}
          >
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="801ff928-8640-4fc2-9a1a-cfa2b1dfda47" />

            {/* Optional: honeypot to prevent spam */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            {/* Optional: subject and redirection */}
            <input type="hidden" name="subject" value="New message from Portfolio contact form" />
            {/* <input type="hidden" name="redirect" value="https://yourdomain.com/thank-you" /> */}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-800">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-800">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Write your message..."
                className="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
              <p className="text-xs text-neutral-500">Powered by Web3Forms</p>
            </div>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
