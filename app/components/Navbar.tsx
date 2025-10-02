'use client'

import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/#home', label: 'Home' },
    { href: '/#plots', label: 'Plots' },
    { href: '/#about', label: 'About Us' },
    { href: '/#contact', label: 'Contact' },
  ]

  const Logo = () => (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center overflow-hidden shadow-xl">
        <span className="text-dark-bg font-bold text-xl font-heading">IB</span>
      </div>
      <h1 className="text-2xl font-heading bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent tracking-wide mb-0">
        IB Realty Solutions
      </h1>
    </div>
  )

  return (
    <header className="fixed w-full top-0 z-20 bg-darker-bg/95 backdrop-blur-sm shadow-2xl border-b border-gold-dark/50 transition-all duration-300">
      <div className="container flex items-center justify-between py-4 transition-all duration-300">
        
        {/* Logo Link: Using passHref if the child is a custom component or nested element */}
        <Link href="/" passHref legacyBehavior>
          <a className="transition-transform hover:scale-[1.02]">
            <Logo />
          </a>
        </Link>

        {/* Desktop Nav: Direct children of Link are now the anchor element */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex space-x-8 text-white list-none m-0 p-0">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-text-light font-medium relative transition-colors hover:text-gold group">
                  {link.label}
                  <span className="absolute bottom-[-5px] left-0 h-0.5 bg-gold w-0 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          
          <Link href="/admin/login" className="text-gold hover:text-gold-light flex items-center gap-1">
             <Globe size={18} /> Admin
          </Link>
        </nav>

        {/* CTA Button Link */}
        <Link href="/#contact" className="cta-button hidden lg:block">
            Schedule Site Visit
        </Link>

        {/* Mobile Toggle (unchanged) */}
        <button className="lg:hidden text-gold" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {open && (
        <div className="lg:hidden bg-darker-bg border-t border-gold-dark/50 shadow-xl transition-all duration-300">
          <ul className="flex flex-col space-y-4 p-4 text-text-light">
            {links.map((link) => (
              <li key={link.href}>
                {/* Mobile Link structure fixed */}
                <Link href={link.href} onClick={() => setOpen(false)} className="block p-2 hover:bg-card-bg rounded transition-colors text-xl">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
                <Link href="/admin/login" className="block p-2 hover:bg-card-bg rounded transition-colors text-xl text-gold">
                    Admin Login
                </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}