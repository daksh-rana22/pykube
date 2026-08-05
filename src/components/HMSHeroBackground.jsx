import React, { useEffect, useRef, useState } from 'react';

/**
 * HMS-style Interactive Canvas Hero Background for PyKube (Dark Theme)
 * 
 * Features from HMS project:
 * - Interactive Mouse Spotlight Glow & Node attraction/repulsion.
 * - Glowing Particle Network with inter-node connecting lines.
 * - Bezier Data Flow curves with traveling glowing pulse packets.
 * - Twinkling Star Sparkles with cross-sheen flare effects.
 * - Drifting ambient orbs with smooth mouse parallax translation.
 */
export default function HMSHeroBackground({ className = '' }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = container.offsetWidth);
    let height = (canvas.height = container.offsetHeight);

    // Mouse tracking for interactive effects & parallax
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 190,
      active: false,
    };

    const handleMouseMove = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      if (
        e.clientX >= rect.left - 150 &&
        e.clientX <= rect.right + 150 &&
        e.clientY >= rect.top - 150 &&
        e.clientY <= rect.bottom + 150
      ) {
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;
        mouse.active = true;

        const relX = (e.clientX - rect.left - width / 2) / (width / 2);
        const relY = (e.clientY - rect.top - height / 2) / (height / 2);
        setParallax({ x: relX * 28, y: relY * 28 });
      } else {
        mouse.active = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // ── Particle Network Setup ──
    const particleCount = Math.floor(Math.min(width, 1400) / 20);
    const particles = [];
    const colors = ['#38bdf8', '#60a5fa', '#f97316', '#a855f7', '#34d399', '#f43f5e'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 2.2 + 1.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.35,
      });
    }

    // ── Sparkles Setup ──
    const sparkleCount = 28;
    const sparkles = [];
    for (let i = 0; i < sparkleCount; i++) {
      sparkles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 1.2,
        alpha: Math.random(),
        speed: Math.random() * 0.012 + 0.004,
        growing: Math.random() > 0.5,
      });
    }

    // ── Data Flow Pulses ──
    const pulseCount = 3;
    const pulses = [];
    for (let i = 0; i < pulseCount; i++) {
      pulses.push({
        progress: Math.random(),
        speed: Math.random() * 0.0008 + 0.0004,
      });
    }

    let time = 0;

    // ── Render Loop ──
    const render = () => {
      time += 0.015;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // ── Interactive Mouse Spotlight Glow ──
      if (mouse.active) {
        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.5
        );
        mouseGlow.addColorStop(0, 'rgba(56, 189, 248, 0.25)');
        mouseGlow.addColorStop(0.4, 'rgba(249, 115, 22, 0.12)');
        mouseGlow.addColorStop(1, 'rgba(15, 28, 63, 0)');

        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Data Flow Curved Lines & Pulses ──
      const paths = [
        [
          { x: -50, y: height * 0.25 },
          { x: width * 0.3, y: height * 0.12 },
          { x: width * 0.7, y: height * 0.55 },
          { x: width + 50, y: height * 0.35 },
        ],
        [
          { x: -50, y: height * 0.65 },
          { x: width * 0.25, y: height * 0.85 },
          { x: width * 0.65, y: height * 0.32 },
          { x: width + 50, y: height * 0.75 },
        ],
        [
          { x: -50, y: height * 0.88 },
          { x: width * 0.4, y: height * 0.72 },
          { x: width * 0.8, y: height * 0.92 },
          { x: width + 50, y: height * 0.62 },
        ],
      ];

      paths.forEach((p, idx) => {
        ctx.beginPath();
        ctx.moveTo(p[0].x, p[0].y);
        ctx.bezierCurveTo(p[1].x, p[1].y, p[2].x, p[2].y, p[3].x, p[3].y);
        ctx.strokeStyle = idx === 1 ? 'rgba(249, 115, 22, 0.25)' : 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = 1.8;
        ctx.setLineDash([8, 14]);
        ctx.lineDashOffset = -time * 12;
        ctx.stroke();
        ctx.setLineDash([]);

        // Traveling pulse packet
        const pulse = pulses[idx];
        if (pulse) {
          pulse.progress = (pulse.progress + pulse.speed) % 1;
          const t = pulse.progress;

          const cx1 = 3 * (p[1].x - p[0].x);
          const bx1 = 3 * (p[2].x - p[1].x) - cx1;
          const ax1 = p[3].x - p[0].x - cx1 - bx1;

          const cy1 = 3 * (p[1].y - p[0].y);
          const by1 = 3 * (p[2].y - p[1].y) - cy1;
          const ay1 = p[3].y - p[0].y - cy1 - by1;

          const px = ax1 * Math.pow(t, 3) + bx1 * Math.pow(t, 2) + cx1 * t + p[0].x;
          const py = ay1 * Math.pow(t, 3) + by1 * Math.pow(t, 2) + cy1 * t + p[0].y;

          const grad = ctx.createRadialGradient(px, py, 0, px, py, 16);
          grad.addColorStop(0, idx === 1 ? 'rgba(249, 115, 22, 0.9)' : 'rgba(56, 189, 248, 0.9)');
          grad.addColorStop(0.5, 'rgba(168, 85, 247, 0.4)');
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, 16, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // ── Draw Particles & Connecting Lines ──
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse repulsion & magnetic connection
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x += (dx / dist) * force * 2.8;
          p.y += (dy / dist) * force * 2.8;

          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = '#f97316';
          ctx.globalAlpha = (1 - dist / mouse.radius) * 0.6;
          ctx.lineWidth = 1.4;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Inter-node network lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ldx = p.x - p2.x;
          const ldy = p.y - p2.y;
          const ldist = Math.sqrt(ldx * ldx + ldy * ldy);

          if (ldist < 140) {
            const lineAlpha = (1 - ldist / 140) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#38bdf8';
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // ── Sparkles & Star Sheens ──
      sparkles.forEach((s) => {
        if (s.growing) {
          s.alpha += s.speed;
          if (s.alpha >= 0.85) s.growing = false;
        } else {
          s.alpha -= s.speed;
          if (s.alpha <= 0.05) {
            s.growing = true;
            s.x = Math.random() * width;
            s.y = Math.random() * height;
          }
        }

        ctx.save();
        ctx.globalAlpha = s.alpha * 0.8;
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(249, 115, 22, 0.8)';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(s.x - s.size * 2.5, s.y);
        ctx.lineTo(s.x + s.size * 2.5, s.y);
        ctx.moveTo(s.x, s.y - s.size * 2.5);
        ctx.lineTo(s.x, s.y + s.size * 2.5);
        ctx.stroke();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`hero-hms-bg ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'auto',
        zIndex: 1,
      }}
    >
      {/* Drifting Ambient Glow Orbs with Parallax */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          pointerEvents: 'none',
          opacity: 0.45,
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.6) 0%, transparent 70%)',
          filter: 'blur(140px)',
          transform: `translate3d(${parallax.x * 0.8}px, ${parallax.y * 0.8}px, 0)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          pointerEvents: 'none',
          opacity: 0.35,
          background: 'radial-gradient(circle, rgba(234, 88, 12, 0.45) 0%, transparent 70%)',
          filter: 'blur(160px)',
          transform: `translate3d(${-parallax.x * 1.1}px, ${-parallax.y * 1.1}px, 0)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          pointerEvents: 'none',
          opacity: 0.3,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          filter: 'blur(140px)',
          transform: `translate3d(${parallax.x * 0.5}px, ${parallax.y * 0.5}px, 0)`,
          transition: 'transform 0.5s ease-out',
        }}
      />

      {/* HTML5 Canvas for Interactive Particle Network & Data Flow */}
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
