import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar/NavBar';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="container flex flex-col gap-[2rem]">
                <NavBar />
                <main className="">{children}</main>
            </body>
        </html>
    );
}
