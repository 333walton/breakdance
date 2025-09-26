import React, { useEffect, useRef } from 'react';

interface FluidAnimationProps {
  className?: string;
  style?: React.CSSProperties;
}

const FluidAnimation: React.FC<FluidAnimationProps> = ({ className = '', style = {} }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const mouseRef = useRef({ x: 0, y: 0, vx: 0, vy: 0 });
  const particlesRef = useRef<Particle[]>([]);

  interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    life: number;
    maxLife: number;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Brand colors
    const colors = [
      'rgba(255, 92, 37, 0.6)', // #FF5C25
      'rgba(255, 197, 66, 0.6)', // #FFC542
      'rgba(145, 73, 193, 0.6)', // #9149c1
      'rgba(88, 40, 100, 0.6)', // #582864
      'rgba(28, 23, 43, 0.8)', // #1c172b
      'rgba(35, 27, 52, 0.8)', // #231b34
    ];

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const createParticle = (x: number, y: number, vx: number = 0, vy: number = 0): Particle => {
      return {
        x,
        y,
        vx: vx + (Math.random() - 0.5) * 2,
        vy: vy + (Math.random() - 0.5) * 2,
        radius: Math.random() * 30 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        maxLife: Math.random() * 60 + 60,
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      mouseRef.current.vx = newX - mouseRef.current.x;
      mouseRef.current.vy = newY - mouseRef.current.y;
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;

      // Add particles on mouse movement
      if (Math.abs(mouseRef.current.vx) > 1 || Math.abs(mouseRef.current.vy) > 1) {
        for (let i = 0; i < 2; i++) {
          particlesRef.current.push(
            createParticle(
              newX + (Math.random() - 0.5) * 20,
              newY + (Math.random() - 0.5) * 20,
              mouseRef.current.vx * 0.1,
              mouseRef.current.vy * 0.1
            )
          );
        }
      }
    };

    const handleTouch = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const newX = touch.clientX - rect.left;
      const newY = touch.clientY - rect.top;

      mouseRef.current.vx = newX - mouseRef.current.x;
      mouseRef.current.vy = newY - mouseRef.current.y;
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;

      // Add particles on touch
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push(
          createParticle(
            newX + (Math.random() - 0.5) * 30,
            newY + (Math.random() - 0.5) * 30,
            mouseRef.current.vx * 0.1,
            mouseRef.current.vy * 0.1
          )
        );
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(28, 23, 43, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Auto-generate some particles
      if (Math.random() < 0.1 && particlesRef.current.length < 100) {
        particlesRef.current.push(
          createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          )
        );
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Apply some fluid dynamics
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Add some turbulence
        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;

        // Update life
        particle.life -= 1 / particle.maxLife;

        // Draw particle
        if (particle.life > 0) {
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.radius
          );

          const alpha = particle.life * 0.6;
          gradient.addColorStop(0, particle.color.replace('0.6)', `${alpha})`));
          gradient.addColorStop(0.5, particle.color.replace('0.6)', `${alpha * 0.5})`));
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = gradient;
          ctx.fillRect(
            particle.x - particle.radius,
            particle.y - particle.radius,
            particle.radius * 2,
            particle.radius * 2
          );

          return true;
        }
        return false;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouch);
    canvas.addEventListener('touchstart', handleTouch);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouch);
      canvas.removeEventListener('touchstart', handleTouch);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        ...style,
        width: '100%',
        height: '100%',
        cursor: 'crosshair',
      }}
    />
  );
};

export default FluidAnimation;
