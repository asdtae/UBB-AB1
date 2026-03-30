import Navbar from './ui/navbar'
import Footer from './ui/footer'
import {SessionClient} from "@/app/sessionclient";
import "./globals.css";
import React from "react";

export const metadata = {
    title: 'Vibe Fesztivál',
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <SessionClient>
                    <Navbar />
                        {children}
                    <Footer />
                </SessionClient>
            </body>
        </html>
    );
}