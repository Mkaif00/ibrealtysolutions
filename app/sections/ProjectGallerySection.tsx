'use client'

import Image from 'next/image'

const plotGallery = [
  { id: 1, image: '/image/plot1.jpg' },
  { id: 2, image: '/image/plot2.jpg' },
  { id: 3, image: '/image/plot3.jpg' },
  { id: 4, image: '/image/plot4.jpg' },
  { id: 5, image: '/image/plot5.jpg' },
  { id: 6, image: '/image/plot6.jpg' },
]

export default function PlotGallerySection({ projects }: { projects?: any[] }) {
  return (
    <section className="py-16 bg-dark-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Plot Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plotGallery.map((item) => (
            <div key={item.id} className="relative h-64">
              {item.image ? (
                <Image src={item.image} alt={`Plot ${item.id}`} layout="fill" objectFit="cover" />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}