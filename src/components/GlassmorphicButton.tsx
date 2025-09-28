import { motion } from 'framer-motion';
import {
  useCallback,
  useRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import './GlassmorphicButton.css';

interface GlassmorphicButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'> {
  children: ReactNode;
}

export default function GlassmorphicButton({
  children,
  className = '',
  type = 'button',
  onPointerMove,
  onPointerEnter,
  onPointerLeave,
  ...rest
}: GlassmorphicButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      const button = buttonRef.current;
      if (!button) {
        return;
      }

      const rect = button.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      button.style.setProperty('--pointer-x', `${x}%`);
      button.style.setProperty('--pointer-y', `${y}%`);

      if (onPointerMove) {
        onPointerMove(event);
      }
    },
    [onPointerMove]
  );

  const handlePointerEnter = useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      const button = buttonRef.current;
      if (button) {
        button.style.setProperty('--pointer-opacity', '1');
      }

      if (onPointerEnter) {
        onPointerEnter(event);
      }
    },
    [onPointerEnter]
  );

  const handlePointerLeave = useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      const button = buttonRef.current;
      if (button) {
        button.style.setProperty('--pointer-opacity', '0');
        button.style.setProperty('--pointer-x', '50%');
        button.style.setProperty('--pointer-y', '50%');
      }

      if (onPointerLeave) {
        onPointerLeave(event);
      }
    },
    [onPointerLeave]
  );

  const combinedClassName = ['glassmorphic-button', className].filter(Boolean).join(' ');

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      className={combinedClassName}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      {...rest}
    >
      <span className="glassmorphic-layer glassmorphic-lights" aria-hidden="true">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/25805b85ee9b7ab1a9bb9121e0ef8891b372b99b?width=718"
          alt="lights"
        />
        <span className="glassmorphic-layer glassmorphic-gradient" aria-hidden="true" />
      </span>
      <span className="glassmorphic-layer glassmorphic-blur" aria-hidden="true" />
      <span className="glassmorphic-layer glassmorphic-stroke" aria-hidden="true" />
      <span className="glassmorphic-layer glassmorphic-highlight" aria-hidden="true" />
      <span className="glassmorphic-content">{children}</span>
    </motion.button>
  );
}