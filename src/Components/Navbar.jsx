import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FiPhone, FiSmartphone } from "react-icons/fi"

const NavbarContent = () => (
  <div className="relative max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
    {/* Floating Logo */}
    <div className="absolute left-4 -bottom-10">
      <img
        src="./logo.png"
        alt="Logo"
        className="h-24 bg-white p-2 shadow-lg rounded"
      />
    </div>

    <div className="w-24"></div>

    <nav className="hidden md:flex gap-6 font-medium font-serif text-[#2B2B2B]">
      <Link to="/" className="hover:text-[#C9A24D]">Home</Link>
      <Link to="/about" className="hover:text-[#C9A24D]">About Us</Link>
      <Link to="/services" className="hover:text-[#C9A24D]">Services</Link>
      <Link to="/portfolio" className="hover:text-[#C9A24D]">Portfolio</Link>
      <Link to="/contact" className="hover:text-[#C9A24D]">Contact</Link>
    </nav>

    <div className="hidden md:flex flex-col items-end text-sm text-[#2B2B2B]">
      <p className="flex items-center gap-2">
        <FiPhone className="text-[#C9A24D]" />
        022 7940 5839
      </p>
      <p className="flex items-center gap-2">
        <FiSmartphone className="text-[#C9A24D]" />
        +91 34635 85948
      </p>
    </div>
  </div>
)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* STATIC NAVBAR (normal page part) */}
      {!scrolled && (
        <header className="w-full bg-white">
          <NavbarContent />
        </header>
      )}

      {/* FIXED NAVBAR (appears on scroll) */}
      {scrolled && (
        <header className="fixed top-0 z-50 w-full bg-white shadow animate-slideDown">
          <NavbarContent />
        </header>
      )}
    </>
  )
}

export default Navbar
