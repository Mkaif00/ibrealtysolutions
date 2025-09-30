// app/page.tsx
import HeroSection, { Slide } from './sections/HeroSection' // <-- IMPORT FIXED HERE
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import DirectorSection from './sections/DirectorSection'
import PlotGallerySection from './sections/ProjectGallerySection'

// Use the imported Slide interface for type safety
const heroSlides: Slide[] = [
  { image: 'image/hero1.jpg', title: 'Premium Plots in Prime Locations', subtitle: 'Your dream property awaits' },
  { image: 'image/hero2.jpg', title: 'Investment Opportunities', subtitle: 'Grow your wealth with real estate' },
  { image: 'image/hero3.jpg', title: 'Trusted Land Acquisition Experts', subtitle: 'Decades of experience at your service' },
  { image: 'image/hero4.jpg', title: 'Exclusive Gated Communities', subtitle: 'We build your dream here' }
]


const projects = [
  { id: '1', title: 'Green Valley Estates', location: 'Jewar International Airport, Noida', price: 2500000, heroImage: '/image/project1.jpg', badges: ['Residential','For Sale'] },
  { id: '2', title: 'Lakeview Residences', location: 'Gurugram', price: 3500000, heroImage: '/image/project2.jpg', badges: ['Commercial','For Sale'] },
  { id: '3', title: 'Sunset Villas', location: 'Ghaziabad', price: 4000000, heroImage: '/image/project3.jpg', badges: ['Investment', 'For Sale'] },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection slides={heroSlides} />
      <AboutSection />
      <ProjectsSection projects={projects as any} />
      <PlotGallerySection />
      <DirectorSection />
      <ContactSection />
    </main>
  )
}