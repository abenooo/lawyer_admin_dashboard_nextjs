import { Karla } from 'next/font/google'
import './globals.css'
import Header from '@/components/header';
import PageWrapper from '@/components/pagewrapper';
import { Metadata } from 'next';
import SideBar from '@/components/SideBar';

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
})
export const metadata: Metadata = {
  title: "lawyer dashboard",
  description: "NextJs admin dashboard created by Sijin Raj"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className + ' h-screen overflow-hidden'}>
       
          <>
            <SideBar></SideBar>
              <Header></Header>
              <PageWrapper>  </PageWrapper>
              
          </>
      </body>
    </html>
  )
}
