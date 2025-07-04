import { Footer } from "@/components/footer";
import { Provider } from "@/lib/provider";
import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return <div>
        { children }
        <Footer/>
    </div>
}