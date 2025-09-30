import './global.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// ... fonts
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
      <body className={`... pt-[100px]`}> {/* IMPORTANT: This padding pushes content down */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}