"use client"

import Link from 'next/link';
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-darker-bg pt-16 pb-6 border-t border-gold-dark/50">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">

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


                        <div className="flex flex-col items-center">
                            <Image
                                src="/image/f2.jpg"
                                alt="IB Realty Logo"
                                width={200}
                                height={200}
                                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg-h-64 obect contain mb-4"
                            />
                            <h3 className="text-2xl md:text-3xl font-heading text-text-light text-center">
                                IB Realty Solutions Pvt.Ltd.
                            </h3>
                            <p className="text-base text-text-gray mt-2 text-center md:text-left">
                                Your Trusted Real Estate Partner
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex flex-col items-center md:items-end">
                            <h4 className="text-2xl font-heading mb-6 text-text-light">
                                Connect With Us
                            </h4>
                            {/* Facebook - Blue */}
                            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center bg-[#1877F2] hover:bg-[#0d65d9] text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 shadow-lg"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={24} />
                                </a>
                                {/* Instagram - Gradient Pink/Orange */}
                                <a
                                    href="https://www.instagram.com/ib_realty_solutions?igsh=NmRjcXFvOWF0YWox"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={24} />
                                </a>
                                {/* Twitter/X */}
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-cemter justify-center bg-[#000000] hover:bg-[#1a1a1a] text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
                                >
                                    <Twitter size={24} />
                                </a>
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center gap-3 bg-[#FF0000] hover:bg-[#cc0000] text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                                >
                                    <Youtube size={24} />
                                </a>
                            </div>
                        </div>

                </div>

                <div className="border-t border-gold-dark/30 pt-6">
                    <p className="text-center text-sm text-text-gray">
                        &copy; {new Date().getFullYear()} IB Realty Solutions Pvt.Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}