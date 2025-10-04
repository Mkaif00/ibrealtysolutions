"use client"

import Link from 'next/link';
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-darker-bg pt-16 pb-6 border-t border-gold-dark/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-12">

                {/* Col 1: Logo & Social */}
                {/* ... (no major Link changes here, just cleanup) */}
                <div className="col-span-1 md:col-span-2 lg:col-span-1">
                    {/*Logo */}
                    <div className="flex flex-col items-center md:items-start mb-6">
                        <Image
                            src="/image/f2.jpg"
                            alt="IB Realty Logo"
                            width={150}
                            height={150}
                            className="w-32 h-32 md:h-36 lg:w-40 lg-h-40 obect contain mb-4"
                        />
                        <h3 className="text-xl md:text-2xl font-heading text-text-light text-center md:text-left">
                            IB Realty Solutions Pvt.Ltd.
                        </h3>
                        <p className="text-sm text-text-gray mt-2 text-center md:text-left">
                            Your Trusted Real Estate Partner
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex-gap-3 justify-center md:justify-start">
                        {/* Facebook - Blue */}
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-xs flex items-center gap-3 bg-[#1877F2] hover:bg-[#0d65d9] text-white p-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                            <span className="font-medium">Facebook</span>
                        </a>
                        {/* Instagram - Gradient Pink/Orange */}
                        <a
                            href="https://www.instagram.com/ib_realty_solutions?igsh=NmRjcXFvOWF0YWox"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-xs flex items-center gap-3 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                            <span className="font-medium">Instagram</span>
                        </a>
                        {/* Twitter/X */}
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full mx-w-xs flex items-cemter bg-[#000000] hover:bg-[#1a1a1a] text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
                        >
                            <Twitter size={20} />
                            <span className="font-medium">Twitter</span>
                        </a>
                        <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-xs flex items-center gap-3 bg-[#FF0000] hover:bg-[#cc0000] text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                        >
                            <Youtube size={20} />
                            <span className="font-medium">Youtube</span>
                        </a>
                    </div>
                </div>

                    {/* Col 2: Plots */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-heading mb-6 relative pb-3 text-text-light">
                            Our Plots
                            <span className="absolute bottom-0 left-0 md:left-0 right-0 md:right-auto w-20 h-0.5 bg-gold mx-auto md:mx-0"></span>
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="#residential"
                                    className="text-text-light hover:text-gold transition-colors block"
                                >
                                    Residential Plots
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#commercial"
                                    className="text-text-light hover:text-gold transition-colors block"
                                >
                                    Commercial Plots
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Services */}

                    {/* Col 4: Legal */}
                    {/* ... uses updated FooterLink component */}
                </div>

                <div className="border-t border-gold-dark/30 pt-6 mt-8">
                    <p className="text-center text-sm text-text-gray">
                        &copy; {new Date().getFullYear()} IB Realty Solutions Pvt.Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}