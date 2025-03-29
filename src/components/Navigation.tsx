"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            МебельПро
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium hover:text-primary">
              Главная
            </Link>
            <Link href="/catalog" className="font-medium hover:text-primary">
              Каталог
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              О компании
            </Link>
            <Link href="/production" className="font-medium hover:text-primary">
              Производство
            </Link>
            <Link href="/contacts" className="font-medium hover:text-primary">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button>Заказать звонок</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Главная
              </Link>
              <Link
                href="/catalog"
                className="font-medium hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Каталог
              </Link>
              <Link
                href="/about"
                className="font-medium hover:text-primary py-2"
                onClick={toggleMenu}
              >
                О компании
              </Link>
              <Link
                href="/production"
                className="font-medium hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Производство
              </Link>
              <Link
                href="/contacts"
                className="font-medium hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Контакты
              </Link>
              <Button className="w-full mt-2">Заказать звонок</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navigation
