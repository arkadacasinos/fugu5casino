import '@fontsource-variable/manrope'
import './globals.css'
import './landing.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <title>Fugu Casino официальный сайт — играть онлайн, рабочее зеркало Фугу Казино 2026</title>
        <meta
          name="description"
          content="Fugu Casino официальный сайт: регистрация, вход и рабочее зеркало Фугу Казино. Играйте в Fugu Casino онлайн — бонус 250% + 500 FS, слоты, live-казино и быстрые выплаты."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fugu5casino.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fugu Casino" />
        <meta
          property="og:title"
          content="Fugu Casino официальный сайт — играть онлайн, рабочее зеркало Фугу Казино 2026"
        />
        <meta
          property="og:description"
          content="Fugu Casino официальный сайт: регистрация, вход и рабочее зеркало. Бонус 250% + 500 FS, слоты, live-казино и быстрые выплаты."
        />
        <meta property="og:url" content="https://fugu5casino.vercel.app/" />
        <meta property="og:image" content="https://fugu5casino.vercel.app/images/hero-fugu.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fugu Casino официальный сайт — играть онлайн, рабочее зеркало Фугу Казино 2026"
        />
        <meta
          name="twitter:description"
          content="Регистрация и вход в Fugu Casino через рабочее зеркало. Бонус 250% + 500 FS новым игрокам."
        />
        <meta name="theme-color" content="#0a1128" />
      </head>
      <body>{children}</body>
    </html>
  )
}
