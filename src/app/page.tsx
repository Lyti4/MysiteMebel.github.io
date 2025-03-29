import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div
          className="relative h-[80vh] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.stockcake.com/public/f/7/8/f7862a20-e75f-43cc-81ce-0d160604588e_large/elegant-living-space-stockcake.jpg')"
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Создаем мебель вашей мечты
              </h1>
              <p className="text-xl mb-8">
                Собственное производство мебели высокого качества с индивидуальным подходом к каждому клиенту
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/catalog">Посмотреть каталог</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                  <Link href="/contacts">Связаться с нами</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О компании МебельПро</h2>
              <p className="text-gray-700 mb-6">
                Компания МебельПро специализируется на производстве качественной мебели для дома и офиса с 2005 года.
                Мы создаем уникальные изделия, которые сочетают в себе функциональность, эстетику и долговечность.
              </p>
              <p className="text-gray-700 mb-6">
                Наше производство оснащено современным оборудованием, которое позволяет нам создавать мебель высочайшего качества,
                соответствующую всем требованиям и стандартам. Каждое изделие проходит строгий контроль на всех этапах производства.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild>
                  <Link href="/about">Подробнее о нас</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-80 md:h-96">
              <Image
                src="https://www.shutterstock.com/image-photo/female-engineer-male-project-manager-260nw-2393393731.jpg"
                alt="Специалисты МебельПро"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Собственное производство</h3>
                <p className="text-gray-600">
                  Полный цикл производства мебели от разработки дизайна до готового изделия.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Качественные материалы</h3>
                <p className="text-gray-600">
                  Используем только экологически чистые и сертифицированные материалы.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Индивидуальный подход</h3>
                <p className="text-gray-600">
                  Создаем мебель по вашим размерам и с учетом всех пожеланий.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
                <p className="text-gray-600">
                  Предоставляем гарантию на всю продукцию сроком до 3 лет.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Наше производство</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            МебельПро использует современное оборудование и инновационные технологии для создания качественной мебели
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://c8.alamy.com/comp/2DEY3CH/minsk-belarus-november-17-2020-workshop-of-a-furniture-manufacturing-company-modern-production-2DEY3CH.jpg"
                alt="Производственный цех МебельПро"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://c8.alamy.com/comp/2DEY32N/minsk-belarus-november-17-2020-workshop-of-a-furniture-manufacturing-company-modern-production-2DEY32N.jpg"
                alt="Процесс производства мебели"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/production">
                Подробнее о производстве
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Категории продукции</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/ac54db2a-7e84-4e70-a91b-33510bd4de70/20561fe4-ff33-4aaf-8fdc-0d5939398986.png"
                alt="Мебель для гостиной"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Мебель для гостиной</h3>
                  <Link
                    href="/catalog/living-room"
                    className="text-white hover:text-primary transition-colors flex items-center"
                  >
                    Смотреть каталог
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://image.made-in-china.com/202f0j00IBJcpUHMZoqg/Chinese-Furniture-Manufacturing-Factory-Customizes-Modern-Fashionable-High-End-and-Durable-TV-Wall-Cabinets-Living-Room-Furniture-and-Living-Room-TV-Cabine.webp"
                alt="Мебель для спальни"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Мебель для спальни</h3>
                  <Link
                    href="/catalog/bedroom"
                    className="text-white hover:text-primary transition-colors flex items-center"
                  >
                    Смотреть каталог
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://image.made-in-china.com/202f0j00ivdogDImLcqp/Chinese-Furniture-Manufacturing-Factory-Customizes-Modern-Fashionable-High-End-and-Durable-TV-Wall-Cabinets-Living-Room-Furniture-and-Living-Room-TV-Cabine.webp"
                alt="Офисная мебель"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Офисная мебель</h3>
                  <Link
                    href="/catalog/office"
                    className="text-white hover:text-primary transition-colors flex items-center"
                  >
                    Смотреть каталог
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/catalog">
                Смотреть весь каталог
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы заказать мебель?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Свяжитесь с нами прямо сейчас, и мы поможем воплотить вашу идею в жизнь.
            Наши специалисты проконсультируют по всем вопросам.
          </p>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            <Link href="/contacts">Связаться с нами</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
