import React, { useEffect, useRef } from 'react';

export default function GlobalParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track theme mode
    let isDark = document.documentElement.classList.contains('dark-theme');
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains('dark-theme');
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // ── Meteor Class ──
    class Meteor {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * (width + 400) - 200;
        this.y = initial ? Math.random() * height : -Math.random() * 300 - 50;
        this.length = Math.random() * 90 + 60;
        this.speed = Math.random() * 1.2 + 0.6;
        // Diagonal angle (~45 deg downward-right)
        this.angle = Math.PI / 3.8 + (Math.random() - 0.5) * 0.1;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.radius = Math.random() * 1.5 + 1.2;
        this.alpha = Math.random() * 0.5 + 0.4;
        
        // Random accent colors (cyan, orange, blue, white)
        const types = ['cyan', 'blue', 'orange', 'white'];
        this.type = types[Math.floor(Math.random() * types.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.y > height + 100 || this.x > width + 200) {
          this.reset(false);
        }
      }

      draw() {
        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;

        // Tail gradient
        const grad = ctx.createLinearGradient(this.x, this.y, tailX, tailY);

        let headColor = '255, 255, 255';
        let midColor = '56, 189, 248'; // cyan

        if (this.type === 'orange') {
          midColor = '249, 115, 22';
        } else if (this.type === 'blue') {
          midColor = '37, 99, 235';
        }

        if (!isDark) {
          // Soft Light Mode colors
          midColor = this.type === 'orange' ? '234, 88, 12' : '37, 99, 235';
        }

        grad.addColorStop(0, `rgba(${headColor}, ${this.alpha})`);
        grad.addColorStop(0.3, `rgba(${midColor}, ${this.alpha * 0.7})`);
        grad.addColorStop(1, `rgba(${midColor}, 0)`);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = this.radius;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Glowing Head Point
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 1.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${headColor}, ${this.alpha * 0.9})`;
        ctx.shadowColor = `rgba(${midColor}, 0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
    }

    // Spawn Meteors
    const meteorCount = Math.min(Math.floor(width / 35), 45);
    const meteors = Array.from({ length: meteorCount }, () => new Meteor());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      meteors.forEach((m) => {
        m.update();
        m.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85,
      }}
    />
  );
}
