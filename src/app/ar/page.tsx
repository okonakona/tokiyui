"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MarkerScanner from "@/features/ar/MarkerScanner";
import ARLoading from "@/features/ar/ARLoading";

export default function MarkerPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDetect = () => {
        setLoading(true);
        setTimeout(() => {
            router.push("/ar/camera");
        }, 2000);
    };

    return (
        <>
            {loading && <ARLoading />}
            <MarkerScanner onDetect={handleDetect} />
        </>
    );
}
