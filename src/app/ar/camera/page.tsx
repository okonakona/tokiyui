"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ARCamera from "@/features/ar/ARCamera";
import RecordModal from "@/features/ar/RecordModal";
import { useSearchParams } from "next/navigation";

export default function CameraPage() {
    const [image, setImage] = useState<string | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    const id = searchParams.get("id");

    const handleConfirm = () => {
        if (!image || !id) return;

        const stored = localStorage.getItem("album");
        const album = stored ? JSON.parse(stored) : { people: [], poem: [] };

        const category = id.startsWith("people") ? "people" : "poem";

        const newRecord = {
            id,
            image,
            savedAt: Date.now(),
        };

        album[category] = album[category].filter(
            (item: any) => item.id !== id
        );

        album[category].push(newRecord);

        localStorage.setItem("album", JSON.stringify(album));
        localStorage.setItem("lastShot", image);

        router.push("/ar/result");
    };

    return (
        <>
            <ARCamera
                markerId={id}
                onShot={(img) => setImage(img)}
            />

            <RecordModal
                open={!!image}
                image={image}
                onRetry={() => setImage(null)}
                onConfirm={handleConfirm}
            />
        </>
    );
}
