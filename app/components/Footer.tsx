// app/components/Footer.tsx

import Link from 'next/link';
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
    
    // Updated Link component usage
    const FooterLink = ({ href, label }: { href: string, label: string }) => (
        <li>
            <Link href={href} className="text-text-gray hover:text-gold transition-colors block py-1">
                {label}
            </Link>
        </li>
    );

    return (
        <footer className="bg-darker-bg pt-16 pb-6 border-t border-gold-dark/50">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-12">
                    
                    {/* Col 1: Logo & Social */}
                    {/* ... (no major Link changes here, just cleanup) */}
                    <div className="footer-col">
                        {/*Logo */}
                        <div className="mb-6">
                            <Image
                                src="/image/f2.jpg"
                                alt="IB Realty Logo"
                                width={120}
                                height={120}
                                className="w-28 h-28 obect contain"
                            />
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex-gap-4 mt-6">
                            {/* Facebook - Blue */}
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#1877F2] hover:bg-[#0d65d9] text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                                aria-label="Facebook"
                                >
                                    <Facebook size={24}/>
                            </a>
                            {/* Instagram - Gradient Pink/Orange */}
                            <a
                                href="https://www.instagram.com/ib_realty_solutions?igsh=NmRjcXFvOWF0YWox"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                                >
                                    <Instagram size={24}/>
                                </a>
                                {/* Twitter/X */}
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#000000] hover:bg-[#1a1a1a] text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                                >
                                    <Twitter size={24}/>
                                </a>
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#FF0000] hover:bg-[#cc0000] text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                                >
                                    <Youtube size={24}/>
                                </a>
                        </div>
                    {/* Col 2: Plots */}
                    <div className="footer-col">
                        <h4 className="text-xl font-heading mb-6 relative pb-3 text-text-light">
                            Our Plots
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gold"></span>
                        </h4>
                        <ul className="footer-links space-y-2">
                            {/* Uses the updated FooterLink component */}
                            <li className="text-text-light hover:text-gold transition-colors">Residential Plots</li>
                            <li className="text-text-light hover:text-gold transition-colors">Commercial Plots</li>
                            {/* ... other links */}
                        </ul>
                    </div>
                    
                    {/* Col 3: Services */}
                    {/* ... uses updated FooterLink component */}
                    
                    {/* Col 4: Legal */}
                    {/* ... uses updated FooterLink component */}
                </div>
                
                <div className="copyright text-center pt-6 border-t border-white/10 text-text-gray text-sm">
                    <p>&copy; {new Date().getFullYear()} IB Realty Solutions Pvt.Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}