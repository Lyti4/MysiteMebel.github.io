import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Каталог мебели | МебельПро",
  description: "Каталог качественной мебели для дома и офиса от производителя. Кухни, спальни, гостиные, детские, офисная мебель.",
}

// Имитация данных для каталога
const categories = [
  {
    id: "living-room",
    title: "Мебель для гостиной",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/ac54db2a-7e84-4e70-a91b-33510bd4de70/20561fe4-ff33-4aaf-8fdc-0d5939398986.png",
    description: "Стильная и функциональная мебель для вашей гостиной: диваны, кресла, журнальные столики, тумбы под ТВ, стеллажи."
  },
  {
    id: "bedroom",
    title: "Мебель для спальни",
    image: "https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2023/01/8-Most-Wanted-Furniture-Design-Pieces-in-Riyadh-4.jpg",
    description: "Комфортная мебель для спальни: кровати, шкафы, комоды, прикроватные тумбы, туалетные столики."
  },
  {
    id: "kitchen",
    title: "Кухонная мебель",
    image: "https://image.made-in-china.com/202f0j00IBJcpUHMZoqg/Chinese-Furniture-Manufacturing-Factory-Customizes-Modern-Fashionable-High-End-and-Durable-TV-Wall-Cabinets-Living-Room-Furniture-and-Living-Room-TV-Cabine.webp",
    description: "Функциональные и стильные кухонные гарнитуры, обеденные столы и стулья, барные стойки."
  },
  {
    id: "office",
    title: "Офисная мебель",
    image: "https://image.made-in-china.com/202f0j00ivdogDImLcqp/Chinese-Furniture-Manufacturing-Factory-Customizes-Modern-Fashionable-High-End-and-Durable-TV-Wall-Cabinets-Living-Room-Furniture-and-Living-Room-TV-Cabine.webp",
    description: "Офисная мебель для работы и комфорта: столы, кресла, шкафы, стеллажи, тумбы, перегородки."
  },
  {
    id: "kids",
    title: "Детская мебель",
    image: "https://images.stockcake.com/public/f/7/8/f7862a20-e75f-43cc-81ce-0d160604588e_large/elegant-living-space-stockcake.jpg",
    description: "Безопасная и удобная мебель для детской комнаты: кровати, столы, стулья, шкафы, комоды."
  },
  {
    id: "special",
    title: "Специальные решения",
    image: "https://i.pinimg.com/736x/99/64/bd/9964bd50796ab2db8810faf4bfac62bc.jpg",
    description: "Индивидуальные решения для нестандартных помещений, мебель на заказ по вашим размерам."
  }
]

// Имитация данных для популярных товаров
const popularProducts = [
  {
    id: 1,
    title: "Диван Комфорт",
    category: "living-room",
    image: "https://images.stockcake.com/public/f/c/4/fc49227e-8224-4cd6-bf4a-1410b05fb778_large/elegant-living-room-stockcake.jpg",
    price: "45 000 ₽"
  },
  {
    id: 2,
    title: "Кровать Премиум",
    category: "bedroom",
    image: "https://brabbu.com/blog/wp-content/uploads/2021/08/Modern-Contemporary-Living-Room-Design-Sophisticated-Elegant-Decor-9.jpg",
    price: "65 000 ₽"
  },
  {
    id: 3,
    title: "Кухонный гарнитур Модерн",
    category: "kitchen",
    image: "https://www.caffelattehome.com/img/inspirations/golden-elegance-meets-tranquil-neutrals-in-this-dining-room-design/golden-elegance-meets-tranquil-neutrals-in-this-dining-room-design.jpg",
    price: "120 000 ₽"
  },
  {
    id: 4,
    title: "Офисное кресло Директор",
    category: "office",
    image: "https://brabbu.com/blog/wp-content/uploads/2021/08/Modern-Contemporary-Living-Room-Design-Sophisticated-Elegant-Decor.jpg",
    price: "25 000 ₽"
  }
]

export default function CatalogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Каталог мебели</h1>
            <p className="text-xl text-gray-600">
              Качественная мебель для дома и офиса от производителя
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Категории мебели</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden border-none shadow-md">
                <div className="relative h-64">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/catalog/${category.id}`}>
                      Смотреть каталог
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Популярные товары</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden border-none shadow-md">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-1">{product.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">
                    Категория: {categories.find(c => c.id === product.category)?.title}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <Button size="sm">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/catalog/all">
                Смотреть все товары
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Furniture */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Мебель на заказ</h2>
                <p className="text-gray-700 mb-6">
                  Мы изготавливаем мебель по индивидуальным проектам с учетом всех ваших пожеланий. Наши дизайнеры помогут вам создать уникальную мебель, которая идеально впишется в ваш интерьер.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Разработка индивидуального дизайна</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Изготовление мебели любой сложности</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Подбор материалов и фурнитуры</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Точное соблюдение размеров и пропорций</span>
                  </li>
                </ul>
                <Button asChild size="lg">
                  <Link href="/contacts">Заказать консультацию</Link>
                </Button>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://s.alicdn.com/@sc04/kf/H497c456ef6324e9e84315dce87af7750D.jpg_720x720q50.jpg"
                  alt="Мебель на заказ"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Почему выбирают нас</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Качество</h3>
              <p className="text-gray-600">
                Используем только качественные материалы и фурнитуру от проверенных поставщиков
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Сроки</h3>
              <p className="text-gray-600">
                Соблюдаем сроки изготовления и доставки мебели, указанные в договоре
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Цены</h3>
              <p className="text-gray-600">
                Предлагаем конкурентные цены без наценки посредников
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Сервис</h3>
              <p className="text-gray-600">
                Обеспечиваем профессиональную консультацию, доставку, сборку и гарантийное обслуживание
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
