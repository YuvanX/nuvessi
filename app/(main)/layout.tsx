import { Footer } from "@/components/footer";
import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return <div>
        { children }
        <Footer/>
    </div>
}