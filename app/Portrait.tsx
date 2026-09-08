"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 121;
const frameSrc = (index: number) =>
  `/portrait/pointer-frames/frame-${String(index + 1).padStart(3, "0")}.jpg`;

type PortraitProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
};

export function Portrait({ src, fallbackSrc, alt }: PortraitProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [frameIndex, setFrameIndex] = useState(0);
  const targetFrame = useRef(0);
  const animationFrame = useRef<number | null>(null);
  const preloadedFrames = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const preload = () => {
      preloadedFrames.current = Array.from({ length: FRAME_COUNT }, (_, index) => {
        const image = new Image();
        image.src = frameSrc(index);
        return image;
      });
    };

    const idleId = window.requestIdleCallback(preload);
    return () => window.cancelIdleCallback(idleId);
  }, []);

  useEffect(() => {
    const applyPointerPosition = () => {
      animationFrame.current = null;
      setFrameIndex(targetFrame.current);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const pageWidth = document.documentElement.clientWidth || window.innerWidth;
      const ratio = Math.max(0, Math.min(1, event.clientX / pageWidth));
      targetFrame.current = Math.round(ratio * (FRAME_COUNT - 1));

      if (animationFrame.current === null) {
        animationFrame.current = window.requestAnimationFrame(applyPointerPosition);
      }
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div className="portrait-shell">
      <img
        src={imageSrc === fallbackSrc ? imageSrc : frameSrc(frameIndex)}
        alt={alt}
        className="portrait-image portrait-poster"
        draggable={false}
        onError={() => {
          if (imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
          }
        }}
      />
    </div>
  );
}
