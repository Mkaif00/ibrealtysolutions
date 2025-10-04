"use client"
import { MapPin, Ruler, CheckCircle, LineChart, Building } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
interface Project {
  id: string
  title: string
  location: string
  heroImage: string
    price: string | number
  badges: string[]
  size: string
  type: 'Residential' | 'Commercial' | 'Investment'
  status: 'For Sale' | 'Reserved' | 'Sold'
}

interface ProjectsGridProps {
  projects: any[]
}

const projects: Project[] = [
    { id: '1', title: 'Prime Residential Plot - Ghaziabad', location: 'Jewar International Airport, Noida', heroImage: '/image/project1.jpg', price: 2500000, badges: ['Residential', 'For Sale'], size: '10 Hectares', type: 'Residential', status: 'For Sale' },
    { id: '2', title: 'Strategic Commercial Plot - Ghaziabad', location: 'Gurugram', heroImage: '/image/project2.jpg', price: 3500000, badges: ['Commercial', 'Strategic'], size: '50 Hectares', type: 'Commercial', status: 'For Sale' },
    { id: '3', title: 'High-Growth Investment Plot - Ghaziabad', location: 'Ghaziabad', heroImage: '/image/project3.jpg', price: 4000000, badges: ['Investment', 'High-Growth'], size: '1 Acre', type: 'Investment', status: 'For Sale' },
]

const IconMap: { [key: string]: any } = {
    'Residential': CheckCircle,
    'Commercial': Building,
    'Investment': LineChart,
    'size': Ruler
}

export default function ProjectsGrid({ projects}: ProjectsGridProps) { 
    const [showPopup, setShowPopup] = React.useState(false);

    const handleViewDetails = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

  return (
    <section id="plots" className="py-20">
        <div className="section-title text-center mb-16 relative">
            <h2 className="text-5xl inline-block relative pb-4">Featured Plots</h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gold to-gold-dark"></div>
        </div>

        <div className="container plots-grid">
            {projects.map((plot) => {
                const TypeIcon = (IconMap as any)[plot.type] || CheckCircle;

                return (
                    <div key={plot.id} className="bg-card-bg rounded-[15px] overflow-hidden shadow-2xl transition-all duration-400 hover:translate-y-[-10px] hover:shadow-gold/30 group">
                        <div className="h-[300px] relative overflow-hidden">
                            <Image src={plot.heroImage} alt={plot.title} fill className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-[1.05]" unoptimized />
                            <div className="absolute top-5 right-5 bg-gold text-dark-bg px-4 py-1.5 rounded-full font-semibold text-sm">{plot.status}</div>
                        </div>
                        
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold mb-4 text-text-light">{plot.title}</h3>
                            <div className="flex items-center gap-2 text-text-gray mb-6">
                                <MapPin className="w-5 h-5 text-gold" /> 
                                <span>{plot.location}</span>
                            </div>
                            
                            <p className="text-text-gray mb-6">Strategically located plot in a rapidly developing residential area, perfect for building your dream home.</p>

                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 text-text-gray">
                                    <Ruler className="w-5 h-5 text-gold" />
                                    <span>{plot.size}</span>
                                </div>
                                <div className="flex items-center gap-2 text-text-gray">
                                    <TypeIcon className="w-5 h-5 text-gold" />
                                    <span>{plot.type}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleViewDetails}
                            className="cta-button mt-8 w-full"
                            >
                                View Details
                            </button>
                        </div>
                );
            })}
        </div>
        {/* ADD THIS POPUP AT THE END*/}
        {showPopup && (
            <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                onClick={closePopup}
            >
                <div className="bg-cardd-bg rounded-2xl p-8 max-w-md w-full border-2 border-gold shadow-2xl animate-fadeIn"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="text-center">
                        <div className="mb-6">
                            <svg 
                                className="w-20 h-20 text-gold mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 1212 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-gold mb-4">Project Sold Out</h3>
                        <p className="text-text-light text-lg mb-8">This project has been successfully sold out. Thank you for your intrest!</p>
                        <button
                            onClick={closePopup}
                            className="bg-gold hover:bg-gold/90 text-dark-bg font-bold py-3 px-10 rounded-lg transition duration-200 text-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
        )}
    </section>
  );
}