export default function AboutTwoCol() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6">About IB Realty Solutions Pvt.Ltd.</h2>
        <p className="text-lg mb-4">
          With over 15 years of experience in real estate, IB Realty Solutions Pvt.Ltd. 
          provides premium property investments with guaranteed returns.
        </p>
        <p className="text-lg">
          Our commitment to quality and customer satisfaction makes us the 
          preferred choice for discerning investors.
        </p>
      </div>
      <div className="relative">
        <div className="bg-gray-600 h-80 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">About Us Image</span>
        </div>
      </div>
    </div>
  )
}