"use client";

import React, { useRef, useEffect } from "react";
export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

interface CanvasTextProps {
  text: string;
  className?: string;
  backgroundClassName?: string;
  colors?: string[];
  animationDuration?: number;
  lineWidth?: number;
  lineGap?: number;
  curveIntensity?: number;
}

export const CanvasText: React.FC<CanvasTextProps> = ({
  text,
  className,
  backgroundClassName = "bg-white",
  colors = [
    "rgba(0,0,0,1)",
    "rgba(0,0,0,0.9)",
    "rgba(0,0,0,0.8)",
    "rgba(0,0,0,0.7)",
    "rgba(0,0,0,0.6)",
    "rgba(0,0,0,0.5)",
    "rgba(0,0,0,0.4)",
    "rgba(0,0,0,0.3)",
    "rgba(0,0,0,0.2)",
    "rgba(0,0,0,0.1)",
  ],
  animationDuration = 20,
  lineWidth = 1.5,
  lineGap = 4,
  curveIntensity = 60,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.scale(dpr, dpr);

    // Draw text mask
    ctx.clearRect(0, 0, W, H);

    // Retrieve the font from the container's computed style for accurate sizing
    const computedStyle = window.getComputedStyle(container);
    const fontSize = computedStyle.fontSize;
    const fontWeight = computedStyle.fontWeight;
    const fontFamily = computedStyle.fontFamily;

    ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    const numLines = Math.ceil(H / (lineGap));

    const draw = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = (timestamp - startTimeRef.current) / 1000;

      ctx.clearRect(0, 0, W, H);

      // Use globalCompositeOperation to clip lines to text shape
      // Step 1: Draw text as clipping mask
      ctx.save();
      ctx.clearRect(0, 0, W, H);

      // Draw solid fill first (text mask)
      ctx.fillStyle = "#000";
      ctx.fillText(text, W / 2, H / 2);

      // Use the text as a mask via destination-in on the lines
      ctx.globalCompositeOperation = "source-atop";

      for (let i = 0; i < numLines; i++) {
        const y = i * lineGap;
        const colorIndex = i % colors.length;
        const speed = animationDuration;
        const offset = (elapsed / speed + i * 0.05) % 1;

        const startX = -curveIntensity + offset * (W + curveIntensity * 2);
        const cp1x = startX + W * 0.25;
        const cp1y = y - curveIntensity * 0.5;
        const cp2x = startX + W * 0.75;
        const cp2y = y + curveIntensity * 0.5;
        const endX = startX + W;

        ctx.beginPath();
        ctx.moveTo(startX, y);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, y);
        ctx.strokeStyle = colors[colorIndex];
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      }

      ctx.restore();

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [text, colors, animationDuration, lineWidth, lineGap, curveIntensity]);

  return (
    <span
      ref={containerRef}
      className={cn("relative inline-block", className)}
      aria-label={text}
    >
      {/* Invisible text to size the container */}
      <span className="invisible whitespace-nowrap">{text}</span>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
    </span>
  );
};
