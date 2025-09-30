import HeroSlider from '../components/HeroSlider';

export interface Slide {
    image: string;
    title: string;
    subtitle?: string;
}

export default function HeroSection({ slides }: { slides: Slide[] }) {
    return (
        <section id="home" className="relative h-screen">
            <HeroSlider slides={slides} />
        </section>
    );
}