"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

interface ContactFormValues {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
  })

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true)
    // Here would go the actual form submission logic
    console.log("Form data:", data)

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      form.reset()
    }, 1500)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для получения консультации или заказа мебели
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Телефон</h3>
              <a href="tel:+74951234567" className="text-gray-700 hover:text-primary">
                +7 (495) 123-45-67
              </a>
              <a href="tel:+74951234568" className="text-gray-700 hover:text-primary mt-2">
                +7 (495) 123-45-68
              </a>
              <p className="text-gray-500 mt-2">
                Пн-Пт: 9:00 - 18:00<br />
                Сб: 10:00 - 16:00
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <a href="mailto:info@mebelproduction.ru" className="text-gray-700 hover:text-primary">
                info@mebelproduction.ru
              </a>
              <a href="mailto:orders@mebelproduction.ru" className="text-gray-700 hover:text-primary mt-2">
                orders@mebelproduction.ru
              </a>
              <p className="text-gray-500 mt-2">
                Мы отвечаем на email в течение 24 часов
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Адрес</h3>
              <p className="text-gray-700">
                123456, Россия, г. Москва,<br />
                ул. Мебельная, д. 7
              </p>
              <p className="text-gray-500 mt-2">
                Ближайшее метро: Фабричная<br />
                (10 минут пешком)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Здесь будет карта с расположением офиса и производства</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Напишите нам</h2>
            <p className="text-center text-gray-600 mb-8">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Спасибо за ваше сообщение!</h3>
                <p className="mb-4">
                  Мы получили вашу заявку и свяжемся с вами в ближайшее время.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Отправить еще одно сообщение
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Имя</FormLabel>
                          <FormControl>
                            <Input placeholder="Иван Иванов" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Телефон</FormLabel>
                          <FormControl>
                            <Input placeholder="+7 (___) ___-__-__" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="example@mail.ru" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Сообщение</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Опишите ваш запрос или задайте вопрос..."
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Режим работы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Офис и шоурум</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Понедельник - Пятница:</span>
                    <span className="font-medium">9:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Суббота:</span>
                    <span className="font-medium">10:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Воскресенье:</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Производство</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Понедельник - Пятница:</span>
                    <span className="font-medium">8:00 - 17:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Суббота - Воскресенье:</span>
                    <span className="font-medium">Выходной</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
