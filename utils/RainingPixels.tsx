import React, { useEffect, useRef } from 'react';

const RainingPixels: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const colors = ['#713491', '#f8e03e', '#fd46d6'];
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() > 0.5 ? 1 : -1) * 0.5,
        speedY: (Math.random() > 0.5 ? 1 : -1) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();

    const animate = () => {
      if (ctx) {
        ctx.fillStyle = '#2f2f2f';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          const dx = particle.x - mouseX;
          const dy = particle.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 50) {
            particle.speedX = dx / dist;
            particle.speedY = dy / dist;
          }

          particle.x += particle.speedX;
          particle.y += particle.speedY;

          if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX *= -1;
          }

          if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY *= -1;
          }

          ctx.fillStyle = particle.color;
          ctx.fillRect(particle.x, particle.y, 10, 10);
        });

        requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default RainingPixels;