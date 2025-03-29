import Image from "next/image"
import { Metadata } from "next"
import { Check } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "О компании МебельПро | Производство мебели",
  description: "История компании МебельПро, наша миссия, ценности и команда профессионалов",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О компании МебельПро</h1>
            <p className="text-xl text-gray-600">
              Мы создаём качественную мебель с 2005 года, воплощая в жизнь ваши мечты об идеальном интерьере
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://img.freepik.com/premium-photo/modern-factory-with-equipment-production-furniture-modern-technologies-industrial-production-furniture_554439-392.jpg"
                alt="История компании МебельПро"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-gray-700 mb-4">
                Компания МебельПро была основана в 2005 году группой профессионалов с многолетним опытом в сфере мебельного производства. Начиная с небольшой мастерской, мы выросли до современного производственного комплекса с полным циклом изготовления мебели.
              </p>
              <p className="text-gray-700 mb-4">
                За годы работы мы реализовали тысячи проектов различной сложности — от стандартных предметов мебели до эксклюзивных дизайнерских решений для домов и коммерческих помещений.
              </p>
              <p className="text-gray-700">
                Сегодня МебельПро — это команда опытных специалистов, современное оборудование и отработанные технологии, которые позволяют создавать мебель высочайшего качества.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наша миссия и ценности</h2>
            <p className="text-gray-600">
              Мы стремимся создавать мебель, которая не только функциональна и эстетична, но и способна сделать жизнь наших клиентов комфортнее
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Миссия</h3>
              <p className="text-gray-700 mb-4">
                Наша миссия — создавать качественную, функциональную и эстетичную мебель, которая станет неотъемлемой частью комфортного пространства для жизни и работы.
              </p>
              <p className="text-gray-700">
                Мы верим, что правильно подобранная мебель способна не только преобразить интерьер, но и улучшить качество жизни людей, сделав их дом или рабочее место более удобными и гармоничными.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Ценности</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Качество.</span> Мы не идем на компромиссы в вопросе качества, используя только лучшие материалы и комплектующие.
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Инновации.</span> Мы постоянно совершенствуем наши технологии и методы производства.
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Клиентоориентированность.</span> Мы внимательно слушаем наших клиентов и стремимся реализовать их пожелания.
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Ответственность.</span> Мы выполняем свои обязательства и несем ответственность за качество нашей продукции.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">АИ</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">Алексей Иванов</h3>
              <p className="text-gray-600">Генеральный директор</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">ЕП</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">Елена Петрова</h3>
              <p className="text-gray-600">Главный дизайнер</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">СМ</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">Сергей Михайлов</h3>
              <p className="text-gray-600">Технический директор</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">ОС</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">Ольга Смирнова</h3>
              <p className="text-gray-600">Руководитель отдела продаж</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">МебельПро в цифрах</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">18+</div>
              <p className="text-gray-700">лет на рынке</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-gray-700">реализованных проектов</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">120+</div>
              <p className="text-gray-700">сотрудников</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-gray-700">довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Сертификаты и награды</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="mb-4 h-60 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-500 text-lg">Сертификат качества</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Сертификат соответствия ISO 9001</h3>
              <p className="text-gray-600">Международный сертификат, подтверждающий соответствие системы менеджмента качества компании международным стандартам.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="mb-4 h-60 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-500 text-lg">Экологический сертификат</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Экологический сертификат</h3>
              <p className="text-gray-600">Сертификат, подтверждающий экологическую безопасность материалов и производственных процессов компании.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="mb-4 h-60 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-500 text-lg">Награда "Лучший производитель"</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Лучший производитель мебели 2023</h3>
              <p className="text-gray-600">Награда отраслевой выставки, подтверждающая высокое качество и инновационность продукции компании.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
