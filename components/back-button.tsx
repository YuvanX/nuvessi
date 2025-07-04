"use client"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export const BackButton = () => {
    const router = useRouter();

    return <button onClick={() => router.back()} className="absolute top-20 px-2 py-2 bg-[#FAFAFA] text-black left-20 cursor-pointer rounded-full z-50">
        <ArrowLeft />
    </button>
}