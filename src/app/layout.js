import '@fontsource-variable/onest'
import { Navbar } from '@/components/Navbar'
import { DarkModeProvider } from './providers/DarkModeProvider'
import './globals.css'
import { Footer } from '@/components/Footer'

const years = new Date().getFullYear() - 2021

export const metadata = {
    metadataBase: new URL('https://gabrieltrinidad.dev'),
    title: 'Gabriel Trinidad Dev',
    description:
        `+${years} years of experience. FullStack Developer. Passionate software developer with a focus on creating innovative and efficient solutions committed to continuous improvement and excellence in each project.`,
    openGraph: {
        title: 'Gabriel Trinidad Dev',
        description:
            `+${years} years of experience. FullStack Developer. Passionate software developer with a focus on creating innovative and efficient solutions committed to continuous improvement and excellence in each project.`,
        siteName: 'gabrieltrinidad.dev',
        type: 'website',
        locale: 'en_EN',
        url: 'https://gabrieltrinidad.dev',
        author: 'gabrieltrinidad',
    },
}

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning lang="en" className="scroll-smooth">
            <body className={`bg-dark-50 dark:bg-dark-950`}>
                <DarkModeProvider>
                    <Navbar />
                    {children}
                    <div className='mb-7'></div>
                    <Footer/>
                </DarkModeProvider>
            </body>
        </html>
    )
}
