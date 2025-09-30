export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="/admin/leads" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700">
          <h2 className="text-xl font-semibold text-white mb-2">Leads</h2>
          <p className="text-gray-400">View and manage leads</p>
        </a>
      </div>
    </div>
  )
}