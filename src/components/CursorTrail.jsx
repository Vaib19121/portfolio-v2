import { useEffect, useRef, useState } from 'react';
import './CursorTrail.css';

export default function CursorTrail() {
  const dotsRef = useRef([]);
  const cursorRef = useRef({ x: 0, y: 0 });
  const coordsRef = useRef(Array(25).fill({ x: 0, y: 0 }));
  const [particles, setParticles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device has mouse
    const hasMouseCapability = window.matchMedia('(pointer: fine)').matches;
    if (!hasMouseCapability) return;

    const handleMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };

      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
      setIsHovering(!!isInteractive);

      // Create random particles occasionally
      if (Math.random() > 0.92) {
        const particle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          life: 1,
          size: Math.random() * 8 + 4,
          hue: Math.random() * 60 + 160, // Purple to cyan range
          shape: Math.random() > 0.5 ? 'circle' : 'star',
        };
        setParticles((prev) => [...prev, particle]);
      }
    };

    const animateDots = () => {
      let x = cursorRef.current.x;
      let y = cursorRef.current.y;

      coordsRef.current[0] = { x, y };

      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i];
        if (!dot) continue;

        const nextDot = coordsRef.current[i + 1] || coordsRef.current[i];
        const smoothness = isHovering ? 0.15 : 0.25;
        coordsRef.current[i + 1] = {
          x: x + (nextDot.x - x) * smoothness,
          y: y + (nextDot.y - y) * smoothness,
        };

        dot.style.left = `${coordsRef.current[i].x}px`;
        dot.style.top = `${coordsRef.current[i].y}px`;

        x = coordsRef.current[i].x;
        y = coordsRef.current[i].y;
      }

      requestAnimationFrame(animateDots);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateDots();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  // Animate floating particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.1, // Gravity
            life: p.life - 0.02,
          }))
          .filter((p) => p.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const shapes = ['circle', 'square', 'star', 'diamond', 'sparkle'];

  return (
    <>
      <div className="cursor-trail">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            className={`cursor-dot ${isHovering ? 'hovering' : ''} shape-${shapes[i % shapes.length]}`}
            style={{
              '--size': `${12 - i * 0.35}px`,
              '--delay': `${i * 0.02}s`,
              '--hue': `${180 + i * 8}`,
            }}
          />
        ))}
      </div>
      <div className="floating-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`particle ${particle.shape}`}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.life,
              '--particle-hue': particle.hue,
            }}
          />
        ))}
      </div>
    </>
  );
}
