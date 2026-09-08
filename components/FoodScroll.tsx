"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface FoodScrollProps {
  totalFrames?: number;
  imageFolderPath?: string;
  filePrefix?: string;
  fileExtension?: string;
}

export default function FoodScroll({
  totalFrames = 120,
  imageFolderPath = "/images/food",
  fileExtension = "webp",
}: FoodScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  const [imagesLoadedCount, setImagesLoadedCount] = useState<number>(0);
  const [isInitialReady, setIsInitialReady] = useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll 0..1 to 0..totalFrames-1
  const frameProgress = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  // Preload frames
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    const getFrameUrl = (index: number) => {
      // index is 1-based for file name: 1.webp ... 120.webp
      return `${imageFolderPath}/${index}.${fileExtension}`;
    };

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        if (!isMounted) return;
        count++;
        setImagesLoadedCount(count);
        // Once first 15 frames or 25% are ready, we can reveal canvas smoothly
        if (count >= Math.min(15, totalFrames * 0.2)) {
          setIsInitialReady(true);
        }
      };

      img.onerror = () => {
        // Fallback to jpg or padded ezgif format if webp fails
        if (!isMounted) return;
        const fallback = new Image();
        const padded = String(Math.min(50, Math.max(1, Math.round(((i - 1) / (totalFrames - 1)) * 49 + 1)))).padStart(3, "0");
        fallback.src = `${imageFolderPath}/ezgif-frame-${padded}.jpg`;
        fallback.onload = () => {
          if (!isMounted) return;
          loadedImages[i - 1] = fallback;
          count++;
          setImagesLoadedCount(count);
          if (count >= 10) setIsInitialReady(true);
        };
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      isMounted = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [totalFrames, imageFolderPath, fileExtension]);

  // Render frame to canvas with aspect ratio "contain"
  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const clampedIndex = Math.max(0, Math.min(totalFrames - 1, Math.round(frameIndex)));
    const img = imagesRef.current[clampedIndex];

    // Check if current image is fully loaded and has dimensions
    if (img && img.complete && img.naturalWidth > 0) {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Aspect ratio "cover" calculation (fills 100% full width and height edge-to-edge)
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = width / height;

      let drawWidth: number;
      let drawHeight: number;
      let offsetX: number;
      let offsetY: number;

      if (canvasRatio > imgRatio) {
        // Canvas is wider than image: fit full width and center vertically
        drawWidth = width;
        drawHeight = width / imgRatio;
        offsetX = 0;
        offsetY = (height - drawHeight) / 2;
      } else {
        // Canvas is taller than image: fit full height and center horizontally
        drawHeight = height;
        drawWidth = height * imgRatio;
        offsetX = (width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  };

  // Resize canvas according to display size and device pixel ratio
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(1, 1);
      }

      renderFrame(currentFrameRef.current);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isInitialReady]);

  // Listen to scroll changes and update canvas via requestAnimationFrame
  useEffect(() => {
    const unsubscribe = frameProgress.on("change", (latest) => {
      currentFrameRef.current = latest;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      animationFrameIdRef.current = requestAnimationFrame(() => {
        renderFrame(latest);
      });
    });

    return () => {
      unsubscribe();
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [frameProgress, totalFrames]);

  // Initial draw when ready
  useEffect(() => {
    if (isInitialReady) {
      renderFrame(0);
    }
  }, [isInitialReady]);

  const loadPercent = Math.min(100, Math.round((imagesLoadedCount / totalFrames) * 100));

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#FAF5EC] dark:bg-black transition-colors duration-300">
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#FAF5EC] dark:bg-black transition-colors duration-300">
        {/* Subtle Ambient Radial Lighting Behind the Food */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(216,154,58,0.18)_0%,rgba(185,28,28,0.08)_40%,transparent_70%)] pointer-events-none" />

        {/* Ambient Bottom Transition Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF5EC]/90 dark:to-black/90 pointer-events-none z-10" />

        {/* HTML5 Canvas Rendering the Food Assembly Sequence */}
        <canvas
          ref={canvasRef}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isInitialReady ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: "100%", height: "100%" }}
        />

        {/* Preloader if sequence is still initializing */}
        {!isInitialReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FAF5EC] dark:bg-black z-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-14 h-14 rounded-full border-2 border-amber-600/30 border-t-amber-600 dark:border-spice-gold/20 dark:border-t-spice-gold mb-6"
            />
            <p className="text-amber-800 dark:text-spice-gold font-light tracking-[0.3em] uppercase text-xs mb-2">
              Preparing Royal Experience
            </p>
            <div className="w-48 h-1 bg-amber-200/60 dark:bg-deep-brown-light rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-restaurant-red via-warm-amber to-spice-gold transition-all duration-300"
                style={{ width: `${loadPercent}%` }}
              />
            </div>
            <span className="text-stone-500 text-xs mt-2 font-mono">{loadPercent}%</span>
          </div>
        )}

        {/* Bottom Scroll Indicator Helper */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0.4, 0.9, 0.4], y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-amber-800/80 dark:text-spice-gold/80 mb-2 font-medium">
            Scroll To Assemble
          </span>
          <div className="w-5 h-8 rounded-full border border-amber-700/40 dark:border-spice-gold/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-amber-700 dark:bg-spice-gold rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
