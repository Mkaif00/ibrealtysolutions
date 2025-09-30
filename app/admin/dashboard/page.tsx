import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Plot Inventory Link */}
        <Link href="/admin/inventory" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-2">Plot Inventory</h2>
          <p className="text-gray-400">Manage plot status (Sold/Available) for projects.</p>
        </Link>
        
        {/* Leads Link */}
        <Link href="/admin/leads" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-2">View Leads</h2>
          <p className="text-gray-400">View contact inquiries and generate receipts.</p>
        </Link>

        {/* Placeholder for Projects Management */}
        <Link href="/admin/projects" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-2">Manage Projects</h2>
          <p className="text-gray-400">Add, edit, or delete Project definitions.</p>
        </Link>

      </div>
    </div>
  )
}