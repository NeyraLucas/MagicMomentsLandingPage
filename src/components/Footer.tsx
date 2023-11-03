'use client'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { useForm } from 'react-hook-form'

interface FormData {
  name: string
  numberPhone: number
  email: string
  message: string
}

export function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  console.log(errors)

  const onSubmit = handleSubmit((values) => {
    console.log(values)
  })
  return (
    <footer className="bg-slate-50">
      <Container>
        <form className="py-32" onSubmit={onSubmit}>
          <div className="container mx-auto rounded-lg bg-slate-900 px-16 py-8">
            <h1 className="pb-5 font-display text-3xl tracking-tight text-white sm:text-4xl">
              ¡Conáctanos!
            </h1>
            <div className="group relative z-0 mb-6 w-full">
              <input
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Nombre requerido',
                  },
                  minLength: {
                    value: 2,
                    message: 'El nombre debe tener por lo menos 2 caracteres',
                  },
                  maxLength: {
                    value: 40,
                    message: 'El nombre debe tener máximo 40 caracteres',
                  },
                })}
              />
              <label
                htmlFor="floating_name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
              >
                Nombre
              </label>
              {errors.name && (
                <span className="text-sm text-red-500">
                  <>{errors.name.message}</>
                </span>
              )}
            </div>
            <div className="group relative z-0 mb-6 w-full">
              <input
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                {...register('numberPhone', {
                  required: {
                    value: true,
                    message: 'Teléfono de contacto requerido',
                  },
                  pattern: {
                    value:
                    /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}$/,
                    message: 'El número no es válido',
                  },
                })}
              />
              <label
                htmlFor="floating_tel"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
              >
                Teléfono de contacto
              </label>
              {errors.numberPhone && (
                <span className="text-sm text-red-500">
                  <>{errors.numberPhone.message}</>
                </span>
              )}
            </div>
            <div className="group relative z-0 mb-6 w-full">
              <input
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Correo electrónico requerido',
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/,
                    message: 'Correo no válido',
                  },
                })}
              />
              <label
                htmlFor="floating_email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
              >
                Correo electrónico
              </label>
              {errors.email && (
                <span className="text-sm text-red-500">
                  <>{errors.email.message}</>
                </span>
              )}
            </div>
            <div className="group relative z-0 mb-6 w-full">
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-white peer-focus:font-medium"
              >
                Dejános un mensaje
              </label>
              <textarea
                id="message"
                className="block w-full rounded-lg border border-gray-300 bg-slate-800 p-2.5 text-sm text-white focus:border-blue-500 focus:ring-blue-500"
                placeholder="Cuéntanos cuáles son tus dudas..."
                {...register('message', {})}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
            >
              Enviar
            </button>
          </div>
        </form>

        {/* <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </nav>
        </div> */}
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            {/* Links de redes sociales */}
            {/* <Link
              href="#"
              className="group"
              aria-label="MagicMoments"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
              </svg>
            </Link> */}
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} MagicMoments. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
