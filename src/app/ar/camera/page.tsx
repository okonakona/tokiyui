"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ARCamera from "@/features/ar/ARCamera";
import RecordModal from "@/features/ar/RecordModal";

export default function CameraPage() {
    const [image, setImage] = useState<string | null>(null);
    const router = useRouter();

    const handleConfirm = () => {
        if (!image) return;

        localStorage.setItem("lastShot", image);

        router.push("/ar/result");
    };

    return (
        <>
            <ARCamera onShot={(img) => setImage(img)} />

            <RecordModal
                open={!!image}
                image={image}
                onRetry={() => setImage(null)}
                onConfirm={handleConfirm}
            />
        </>
    );
}
