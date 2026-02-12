"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MarkerScanner from "@/features/ar/MarkerScanner";
import ARLoading from "@/features/ar/ARLoading";

export default function MarkerPage() {
    const [loading, setLoading] = useState(false);
    const [detectedId, setDetectedId] = useState<string | null>(null);
    const router = useRouter();

    const handleDetect = (id: string) => {
        setDetectedId(id);
        setLoading(true);

        setTimeout(() => {
            router.push(`/ar/camera?id=${id}`);
        }, 2000);
    };

    return (
        <>
            {loading && <ARLoading />}
            <MarkerScanner onDetect={handleDetect} />
        </>
    );
}
