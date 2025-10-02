// app/components/Footer.tsx

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

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
                    
                    {/* Col 2: Plots */}
                    <div className="footer-col">
                        <h4 className="text-xl font-heading mb-6 relative pb-3 text-text-light">
                            Our Plots
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gold"></span>
                        </h4>
                        <ul className="footer-links space-y-2">
                            {/* Uses the updated FooterLink component */}
                            <FooterLink href="/plots/residential" label="Residential Plots" />
                            <FooterLink href="/plots/commercial" label="Commercial Plots" />
                            {/* ... other links */}
                        </ul>
                    </div>
                    
                    {/* Col 3: Services */}
                    {/* ... uses updated FooterLink component */}
                    
                    {/* Col 4: Legal */}
                    {/* ... uses updated FooterLink component */}
                </div>
                
                <div className="copyright text-center pt-6 border-t border-white/10 text-text-gray text-sm">
                    <p>&copy; {new Date().getFullYear()} IB Realty Solutions Pvt.Ltd. All rights reserved. | Designed with elegance and precision</p>
                </div>
            </div>
        </footer>
    )
}