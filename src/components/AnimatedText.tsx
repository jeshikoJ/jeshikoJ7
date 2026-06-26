import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = text.split('');

  return (
    <p ref={containerRef} className={`${className} relative`}>
      {characters.map((char, i) => {
        // Calculate the opacity range for each character
        const start = i / characters.length;
        const end = start + (1 / characters.length);
        
        return (
          <span key={i} className="relative inline-block">
            {/* Invisible placeholder to maintain layout */}
            <span className="opacity-20">{char}</span>
            {/* Animated character overlaid */}
            <motion.span
              className="absolute left-0 top-0"
              style={{
                opacity: useTransform(scrollYProgress, [start, end], [0.2, 1])
              }}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
