import { motion } from 'motion/react';
import {
    Rocket,
    Sparkles,
    Star,
    Zap,
    Target,
    TrendingUp,
    Lightbulb,
    Code,
    BarChart3,
    Megaphone,
} from 'lucide-react';
import { useMemo } from 'react';

const ICONS = [
    Rocket,
    Sparkles,
    Star,
    Zap,
    Target,
    TrendingUp,
    Lightbulb,
    Code,
    BarChart3,
    Megaphone,
];

const COLORS = [
    'var(--accent-primary)',   // cyan
    'var(--accent-secondary)', // purple
    'var(--accent-gold)',      // gold
    '#10b981',                 // green
];

interface FloatingIcon {
    id: number;
    Icon: typeof Rocket;
    size: number;
    x: string;
    y: string;
    color: string;
    delay: number;
    duration: number;
    drift: number;
    rotate: number;
    opacity: number;
}

function seededRandom(seed: number) {
    const s = Math.sin(seed * 9301 + 49297) * 49297;
    return s - Math.floor(s);
}

function generateIcons(count: number): FloatingIcon[] {
    return Array.from({ length: count }, (_, i) => {
        const r = (n: number) => seededRandom(i * 100 + n);
        return {
            id: i,
            Icon: ICONS[Math.floor(r(1) * ICONS.length)],
            size: 16 + r(2) * 20,           // 16-36px
            x: `${r(3) * 100}%`,
            y: `${r(4) * 100}%`,
            color: COLORS[Math.floor(r(5) * COLORS.length)],
            delay: r(6) * 6,
            duration: 12 + r(7) * 16,       // 12-28s
            drift: 30 + r(8) * 60,          // 30-90px
            rotate: r(9) > 0.5 ? 360 : -360,
            opacity: 0.06 + r(10) * 0.09,   // 0.06–0.15
        };
    });
}

export function FloatingIcons() {
    const icons = useMemo(() => generateIcons(18), []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            {icons.map(({ id, Icon, size, x, y, color, delay, duration, drift, rotate, opacity }) => (
                <motion.div
                    key={id}
                    className="absolute"
                    style={{ left: x, top: y }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, opacity, opacity, 0],
                        y: [0, -drift, drift * 0.5, 0],
                        x: [0, drift * 0.3, -drift * 0.3, 0],
                        rotate: [0, rotate],
                    }}
                    transition={{
                        duration,
                        delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <Icon
                        style={{ color, width: size, height: size, filter: `drop-shadow(0 0 6px ${color})` }}
                        strokeWidth={1.2}
                    />
                </motion.div>
            ))}
        </div>
    );
}
