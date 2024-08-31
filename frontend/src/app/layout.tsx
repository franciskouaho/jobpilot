import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeSwitcher } from '@/provider/theme-switcher'
import { ThemeProvider } from '@/provider/theme-provider'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neobrutalism Saas template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className + ' bg-[#f2f4f7]'}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
          {/*<ThemeSwitcher />*/}
        </ThemeProvider>
      </body>
    </html>
  )
}
