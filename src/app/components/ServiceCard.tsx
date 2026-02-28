import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { useRef, useState } from 'react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  index: number;
}

export function ServiceCard({ icon: Icon, title, items, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      className="relative p-8 rounded-2xl overflow-hidden group cursor-pointer"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Gradient Overlay on Hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, var(--glow-cyan), var(--glow-purple))',
          pointerEvents: 'none'
        }}
      />

      {/* Glowing Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: isHovered 
            ? '0 0 40px rgba(0, 217, 255, 0.3), inset 0 0 60px rgba(0, 217, 255, 0.1)'
            : '0 0 0px rgba(0, 217, 255, 0)'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6"
          style={{
            background: 'rgba(0, 217, 255, 0.1)',
            border: '1px solid rgba(0, 217, 255, 0.2)'
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-7 h-7" style={{ color: 'var(--accent-primary)' }} />
        </motion.div>

        {/* Title */}
        <h3 
          className="mb-4"
          style={{
            fontSize: '1.5rem',
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 1.3
          }}
        >
          {title}
        </h3>

        {/* Items List */}
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              className="flex items-start gap-3"
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ background: 'var(--accent-primary)' }}
                animate={{
                  scale: isHovered ? [1, 1.5, 1] : 1,
                }}
                transition={{ 
                  duration: 0.6,
                  delay: idx * 0.1,
                  repeat: isHovered ? Infinity : 0
                }}
              />
              <span 
                className="text-base"
                style={{ 
                  color: 'var(--text-muted)',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.6
                }}
              >
                {item}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Card Number Badge */}
        <motion.div
          className="absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(0, 217, 255, 0.05)',
            border: '1px solid rgba(0, 217, 255, 0.1)',
            fontSize: '0.875rem',
            fontWeight: 700,
            color: 'var(--accent-primary)',
            fontFamily: 'Space Grotesk, sans-serif'
          }}
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 360 : 0
          }}
          transition={{ duration: 0.5 }}
        >
          {index + 1}
        </motion.div>
      </div>
    </motion.div>
  );
}
