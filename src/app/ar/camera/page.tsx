"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ARCamera from "@/features/ar/ARCamera";
import RecordModal from "@/features/ar/RecordModal";

export default function CameraPage() {
    const [image, setImage] = useState<string | null>(null);
    const router = useRouter();

    return (
        <>
            <ARCamera onShot={(img) => setImage(img)} />

            <RecordModal
                open={!!image}
                image={image}
                onConfirm={() => router.push("/ar/result")}
                onRetry={() => setImage(null)}
            />
        </>
    );
}
