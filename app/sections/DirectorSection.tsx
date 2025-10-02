export default function DirectorsSection() {
  const directors = [
    {
      name: 'Iqbal Khan',
      title: 'Managing Director',
      image: '/image/director-iqbal.jpg',
    },
    {
      name: 'Syed Basit Ali',
      title: 'Managing Director',
      image: '/image/director-basit.jpg',
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
                <img src={d.image} alt={d.name} className="w-24 h-24 object-cover border-2 border-gold/60" />
                <div>
                  <h3 className="text-xl text-gold">{d.name}</h3>
                  <p className="text-text-gray text-sm">{d.title}</p>
                </div>
              </div>
              <p className="text-text-light">{d.name} brings a visionary approach to real estate leadership, focusing on growth, innovation, and client trust.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}