import Image from 'next/image'
export default function DirectorsSection() {
  const directors = [
    {
      name: 'Iqbal Khan',
      title: 'Managing Director',
      image: '/image/director-iqbal.jpg',
      bio: 'Iqbal Khan, Director of IB Realty Solutions Pvt.Ltd. With over 10 Year Experience in real estate devlopment, Iqbal khan brings a visinory approach to creating sustainable and innovative residential and commercial spaces. His leadership has driven the company to new heights of excellence.'
    },
    {
      name: 'Syed Basit Ali',
      title: 'Managing Director',
      image: '/image/director-basit.jpg',
      bio: 'Basit, Director of IB Realty Solutions Pvt. Ltd., is driven by a clear vision--to make property investment simple,transparent and rewarding for every client. His focus is on creating lasting realtionships with clients by delivering results with honesty and professionalism.'
    },
  ]

  return (
    <section id="directors" className="bg-dark-bg py-20 border-t border-gold-dark/40">
      <div className="container">
        <h2 className="text-3xl md:text-4xl text-center mb-12">Directors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {directors.map((d) => (
            <div key={d.name} className="bg-card-bg rounded-2xl p-8 border border-gold-dark/30 shadow-2xl">
              <div className="flex items-center gap-5 mb-4">
                <Image src={d.image} alt={d.name} width={96} height={96} className="w-24 h-24 object-cover border-2 border-gold/60" />
                <div>
                  <h3 className="text-xl text-gold">{d.name}</h3>
                  <p className="text-text-gray text-sm">{d.title}</p>
                </div>
              </div>
              <p className="text-text-light">{d.bio} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}