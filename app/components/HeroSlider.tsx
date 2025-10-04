'use client'
import Link from 'next/link'
import Image from 'next/image'
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
              <Image src={s.image} alt={s.title} fill className="w-full h-full object-cover" unoptimized />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}