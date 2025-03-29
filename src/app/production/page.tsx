import Image from "next/image"
import { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Производство мебели | МебельПро",
  description: "Наше современное производство, оборудование и технологии изготовления качественной мебели",
}

export default function ProductionPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Наше производство</h1>
            <p className="text-xl text-gray-600">
              Современное оборудование и опытные мастера — основа производства качественной мебели
            </p>
          </div>
        </div>
      </section>

      {/* Production Process Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Полный цикл производства</h2>
              <p className="text-gray-700 mb-4">
                Мы гордимся тем, что обеспечиваем полный цикл производства мебели — от разработки дизайна и создания трехмерных моделей до изготовления, сборки и доставки готовых изделий.
              </p>
              <p className="text-gray-700 mb-4">
                Такой подход позволяет нам контролировать качество на каждом этапе и гарантировать, что наша мебель соответствует самым высоким стандартам.
              </p>
              <p className="text-gray-700">
                Наша производственная площадка оснащена современным европейским оборудованием, которое позволяет выполнять заказы любой сложности с высокой точностью и качеством.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://desis.osu.edu/seniorthesis/wp-content/uploads/2021/10/furniture-mfg-900.jpeg"
                alt="Производственный цех МебельПро"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Production Stages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Этапы производства</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h3 className="text-xl font-bold mb-4">Проектирование</h3>
              <p className="text-gray-700 mb-4">
                Первый этап создания мебели начинается с разработки дизайна. Наши дизайнеры создают трехмерные модели будущей мебели с учетом всех пожеланий клиента, особенностей помещения и требований к функциональности.
              </p>
              <p className="text-gray-700">
                Современное программное обеспечение позволяет визуализировать будущую мебель и внести необходимые корректировки до начала производства.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h3 className="text-xl font-bold mb-4">Подготовка материалов</h3>
              <p className="text-gray-700 mb-4">
                После утверждения дизайна начинается этап подготовки материалов. Мы используем только высококачественные материалы от проверенных поставщиков — древесину, МДФ, ЛДСП, натуральный шпон, стекло, металл и фурнитуру.
              </p>
              <p className="text-gray-700">
                Все материалы проходят строгий контроль качества перед подачей в производство, что гарантирует долговечность готовых изделий.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h3 className="text-xl font-bold mb-4">Раскрой и обработка</h3>
              <p className="text-gray-700 mb-4">
                На этом этапе происходит раскрой материалов с использованием высокоточного автоматизированного оборудования. Современные станки с ЧПУ гарантируют точность каждого реза и минимизируют отходы.
              </p>
              <p className="text-gray-700">
                После раскроя детали проходят механическую обработку — фрезерование, сверление отверстий, шлифовку и формирование кромок.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-6">4</div>
              <h3 className="text-xl font-bold mb-4">Покраска и отделка</h3>
              <p className="text-gray-700 mb-4">
                Отделка — важнейший этап, который определяет внешний вид и долговечность мебели. В зависимости от типа мебели и выбранного дизайна, мы применяем различные техники отделки — покраску, лакирование, тонирование, патинирование.
              </p>
              <p className="text-gray-700">
                Мы используем экологически чистые лаки и краски, которые безопасны для здоровья и окружающей среды.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-6">5</div>
              <h3 className="text-xl font-bold mb-4">Сборка</h3>
              <p className="text-gray-700 mb-4">
                На этапе сборки все подготовленные и обработанные детали соединяются в готовое изделие. Опытные мастера обеспечивают точность сборки и надежность конструкции.
              </p>
              <p className="text-gray-700">
                Мы используем высококачественную фурнитуру от ведущих производителей, что гарантирует долговечность и удобство эксплуатации мебели.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-6">6</div>
              <h3 className="text-xl font-bold mb-4">Контроль качества</h3>
              <p className="text-gray-700 mb-4">
                Каждое изделие проходит тщательный контроль качества перед отправкой клиенту. Мы проверяем соответствие дизайну, качество сборки, функциональность и внешний вид мебели.
              </p>
              <p className="text-gray-700">
                Только после успешного прохождения контроля качества мебель упаковывается и готовится к доставке и установке.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Equipment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Наше оборудование</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Современное оборудование от ведущих мировых производителей позволяет нам создавать мебель высочайшего качества
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://c8.alamy.com/comp/2DEY3CH/minsk-belarus-november-17-2020-workshop-of-a-furniture-manufacturing-company-modern-production-2DEY3CH.jpg"
                alt="Современное оборудование цеха"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/736x/8e/06/b0/8e06b06666add8073620c8ac02ace47a.jpg"
                alt="Производственная линия"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Список основного оборудования:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Форматно-раскроечные станки с ЧПУ</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Кромкооблицовочные автоматы</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Фрезерные станки с ЧПУ</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Сверлильно-присадочные центры</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Шлифовальные станки</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Покрасочные камеры</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Сушильные камеры</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Пресс-вакуумное оборудование</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Материалы</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Мы используем только качественные и экологически чистые материалы от проверенных поставщиков
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Древесно-стружечные плиты</h3>
              <ul className="space-y-2 text-gray-700">
                <li>ЛДСП от европейских производителей</li>
                <li>МДФ различной толщины</li>
                <li>ДСП высокой плотности</li>
                <li>ХДФ для задних стенок и дна ящиков</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Массив дерева</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Дуб</li>
                <li>Бук</li>
                <li>Ясень</li>
                <li>Сосна</li>
                <li>Экзотические породы дерева</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Отделочные материалы</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Натуральный и искусственный шпон</li>
                <li>Экологичные лаки и краски</li>
                <li>Пластик и акрил</li>
                <li>Стекло и зеркала</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Фурнитура</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Петли и доводчики Blum</li>
                <li>Выдвижные системы Grass</li>
                <li>Подъемные механизмы</li>
                <li>Ручки различных дизайнов</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Декоративные элементы</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Профили и карнизы</li>
                <li>Декоративные накладки</li>
                <li>Резные элементы</li>
                <li>Витражи и декоративное стекло</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Мягкие материалы</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Поролон различной плотности</li>
                <li>Синтепон и холлофайбер</li>
                <li>Пружинные блоки</li>
                <li>Обивочные ткани и кожа</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://www.vrmodulars.com/wp-content/uploads/2021/08/FACTORY-FINISH.jpg"
                alt="Контроль качества мебели"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Контроль качества</h2>
              <p className="text-gray-700 mb-4">
                Контроль качества — неотъемлемая часть нашего производственного процесса. Мы проверяем качество на каждом этапе производства, начиная с входного контроля материалов и заканчивая тестированием готовых изделий.
              </p>
              <p className="text-gray-700 mb-4">
                Наша система контроля качества соответствует международным стандартам ISO 9001 и включает в себя:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="text-primary mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                  <span>Проверку соответствия размеров и дизайна утвержденному проекту</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-primary mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                  <span>Контроль качества обработки поверхностей и кромок</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-primary mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                  <span>Тестирование прочности и надежности конструкции</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-primary mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                  <span>Проверку работы фурнитуры и механизмов</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-primary mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                  <span>Оценку внешнего вида и качества отделки</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Благодаря строгому контролю качества мы можем гарантировать надежность и долговечность нашей мебели.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите увидеть наше производство?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Мы проводим экскурсии по производству для наших клиентов. Вы сможете своими глазами увидеть, как создается качественная мебель.
          </p>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            <Link href="/contacts">Записаться на экскурсию</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
