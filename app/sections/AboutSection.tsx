'use client'
import { useState } from 'react'

export default function AboutSection() {
  const [open, setOpen] = useState(false)

  return (
    <section id="about" className="bg-darker-bg py-20 border-t border-b border-gold-dark/40">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl mb-6 relative pb-3">
            About IB Realty Solutions Pvt.Ltd.
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-gold"></span>
          </h2>
          <p className="text-text-gray text-lg mb-6">
            We specialize in premium land and plot investments across rapidly growing corridors. Our team
            blends data-backed insights with hands-on due diligence to unlock safe, high-potential opportunities.
          </p>

          {!open && (
            <button onClick={() => setOpen(true)} className="btn-outline">
              Read more
            </button>
          )}

          {open && (
            <div className="mt-6 space-y-4">
              <p className="text-text-gray">
                Established with a commitment to transparency and long-term value,
                we partner with clients to understand budgets, timelines, and growth plans.
                From site visits to paperwork, we guide you end-to-end with clarity.
              </p>
              <p className="text-text-gray">
                Our network spans developers, legal advisors, and local authorities—helping
                you move quickly with confidence. Whether residential, commercial, or investment plots,
                we present options that fit your strategy.
              </p>
              <p className="text-text-gray">
                At IB Realty Solutions Pvt.Ltd., your goals drive our process. We prioritize
                integrity, responsiveness, and personalized service to make land investment
                straightforward and rewarding.
              </p>
              <p className="text-text-gray">
                With a track record of successful transactions and satisfied clients,
                we invite you to explore how land can be a powerful part of your portfolio.
              </p>
              <p className="text-text-gray">
                Explore our current plots or connect with our team to discuss your needs.
                Together, we can turn land into lasting value.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-card-bg/60 border border-gold-dark/30">
                <h3 className="text-2xl mb-2 text-gold">Our Achievements</h3>
                <div className="flex flex-wrap justify-center mb-12">
                  <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                    <div className="bg-card-bg p-6 rounded-lg shadow-lg">
                      <h3 className="text-3xl font-bold mb-2">5000+</h3>
                      <p className="text-lg text-text-gray">Happy Clients</p>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                    <div className="bg-card-bg p-6 rounded-lg shadow-lg">
                      <h3 className="text-3xl font-bold mb-2">2+</h3>
                      <p className="text-lg text-text-gray">Ongoing Projects</p>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                    <div className="bg-card-bg p-6 rounded-lg shadow-lg">
                      <h3 className="text-3xl font-bold mb-2">Great</h3>
                      <p className="text-lg text-text-gray">Track Record</p>
                    </div>
                  </div>
                </div>
              </div>

              <button onClick={() => setOpen(false)} className="btn-outline">
                Show less
              </button>
            </div>
          )}
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src="/image/a1.jpg" alt="About IB Realty" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}