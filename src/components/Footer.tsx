import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">МебельПро</h3>
            <p className="text-gray-600 mb-4">
              Производство и продажа качественной мебели для дома и офиса с 2005 года
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 hover:text-primary">
                Главная
              </Link>
              <Link href="/catalog" className="text-gray-600 hover:text-primary">
                Каталог
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary">
                О компании
              </Link>
              <Link href="/production" className="text-gray-600 hover:text-primary">
                Производство
              </Link>
              <Link href="/contacts" className="text-gray-600 hover:text-primary">
                Контакты
              </Link>
            </nav>
          </div>

          {/* Catalog */}
          <div>
            <h3 className="text-lg font-bold mb-4">Каталог</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/catalog/living-room" className="text-gray-600 hover:text-primary">
                Гостиная
              </Link>
              <Link href="/catalog/bedroom" className="text-gray-600 hover:text-primary">
                Спальня
              </Link>
              <Link href="/catalog/kitchen" className="text-gray-600 hover:text-primary">
                Кухня
              </Link>
              <Link href="/catalog/office" className="text-gray-600 hover:text-primary">
                Офисная мебель
              </Link>
              <Link href="/catalog/kids" className="text-gray-600 hover:text-primary">
                Детская
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  123456, Россия, г. Москва, ул. Мебельная, д. 7
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                <a href="tel:+74951234567" className="text-gray-600 hover:text-primary">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                <a href="mailto:info@mebelproduction.ru" className="text-gray-600 hover:text-primary">
                  info@mebelproduction.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} МебельПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
