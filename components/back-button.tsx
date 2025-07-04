"use client"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export const BackButton = () => {
    const router = useRouter();

    return <button onClick={() => router.back()} className="absolute top-5 left-5  px-2 py-2 bg-[#FAFAFA] text-black md:top-20 md:left-20 cursor-pointer rounded-full z-50">
        <ArrowLeft />
    </button>
}