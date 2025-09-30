'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

type Slide = { image: string; title: string; subtitle?: string }

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  return (
    <div className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" />
              <div className="relative container h-full flex items-center z-10">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-heading bg-gradient-to-r from-white to-gold bg-clip-text text-transparent mb-6">
                    {s.title}
                  </h1>
                  {s.subtitle && (
                    <p className="text-lg md:text-xl text-text-gray mb-10">
                      {s.subtitle}
                    </p>
                  )}
                  <div className="flex gap-4">
                    <Link href="/#plots" className="cta-button">Explore Plots</Link>
                    <Link href="/#about" className="btn-outline">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}