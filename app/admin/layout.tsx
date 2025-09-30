import '../global.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark-primary text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}