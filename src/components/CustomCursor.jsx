import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ enabled = true }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch || !enabled) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const checkHoverable = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', checkHoverable);

    // Smooth trailing animation frame loop
    let animationFrameId;
    const updateTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };
    animationFrameId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', checkHoverable);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y, isVisible, enabled]);

  if (!enabled || !isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer trailing aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/60 pointer-events-none"
        style={{
          width: isHovering ? 46 : 28,
          height: isHovering ? 46 : 28,
          x: trailing.x - (isHovering ? 23 : 14),
          y: trailing.y - (isHovering ? 23 : 14),
          backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.15)' : 'rgba(59, 130, 246, 0.08)',
          boxShadow: isHovering ? '0 0 20px rgba(6, 182, 212, 0.4)' : 'none',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      />

      {/* Center sharp dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-cyan-400 pointer-events-none shadow-glow-cyan"
        style={{
          width: isClicking ? 10 : 6,
          height: isClicking ? 10 : 6,
          x: position.x - (isClicking ? 5 : 3),
          y: position.y - (isClicking ? 5 : 3),
        }}
      />
    </div>
  );
}
