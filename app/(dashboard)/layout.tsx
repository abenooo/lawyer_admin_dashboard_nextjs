import { Karla } from 'next/font/google'
import '../globals.css'
import Header  from '@/components/header';
import {SideBar} from '@/components/side'
import PageWrapper from '@/components/pagewrapper';
import { ThemeProvider } from '@/components/theme-provider';
import { Metadata } from 'next';
import { UserProvider } from "@/hooks/userContext"; // Adjust the import path as necessary
const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
})
export const metadata: Metadata = {
  title: "admin dashboard",
  description: "NextJs admin dashboard created Abenezer"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className + ' h-screen overflow-hidden'}>
        <ThemeProvider
          themes={['dark', 'custom', 'light']}
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <>
            {/* <SideBarrr /> */}
            <SideBar />
            <div className="flex flex-col h-full w-full">
              <Header />
              <PageWrapper children={children} />
            </div>
          </>
        </ThemeProvider>
      </body>
    </html>
    </UserProvider>
  )
}
