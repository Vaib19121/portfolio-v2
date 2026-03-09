import { useEffect, useRef, useState } from 'react';
import './SkillBar.css';

export default function SkillBar({ name, level, icon }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="skill-bar" ref={ref}>
      <div className="sb-header">
        <div className="sb-left">
          <span className="sb-icon">{icon}</span>
          <span className="sb-name">{name}</span>
        </div>
        <span className="sb-level">{level}%</span>
      </div>
      <div className="sb-track">
        <div
          className="sb-fill"
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}
