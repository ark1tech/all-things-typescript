export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="container">
                <main>{children}</main>
            </body>
        </html>
    );
}
