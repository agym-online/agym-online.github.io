import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Кызматтар', href: '#services' },
    { label: 'Процесс', href: '#process' },
    { label: 'Баалар', href: '#pricing' },
    { label: 'Кейстер', href: '#cases' },
    { label: 'Натыйжалар', href: '#results' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const scrollTo = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Desktop / Tablet navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    background: isScrolled
                        ? 'rgba(10, 14, 26, 0.85)'
                        : 'transparent',
                    backdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'none',
                    borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <a
                            href="#"
                            className="flex items-center gap-2 shrink-0"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center"
                                style={{
                                    background:
                                        'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                }}
                            >
                                <Rocket className="w-5 h-5" style={{ color: '#0a0e1a' }} />
                            </div>
                            <span
                                className="text-lg"
                                style={{
                                    fontFamily: 'Space Grotesk, sans-serif',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                }}
                            >
                                agym_online
                            </span>
                        </a>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:text-white group"
                                    style={{ color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif' }}
                                >
                                    {link.label}
                                    <span
                                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 transition-all duration-300 rounded-full"
                                        style={{ background: 'var(--accent-primary)' }}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* CTA — desktop */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollTo('#cta')}
                            className="hidden md:inline-flex px-5 py-2.5 rounded-xl text-sm font-semibold"
                            style={{
                                background:
                                    'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                color: '#0a0e1a',
                                fontFamily: 'Inter, sans-serif',
                                boxShadow: '0 4px 20px rgba(0, 217, 255, 0.25)',
                            }}
                        >
                            Баштоо
                        </motion.button>

                        {/* Hamburger — mobile */}
                        <button
                            className="md:hidden p-2 rounded-lg"
                            style={{ color: 'var(--text-primary)' }}
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 md:hidden"
                        style={{ background: 'rgba(10, 14, 26, 0.95)', backdropFilter: 'blur(20px)' }}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-6">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: i * 0.07 }}
                                    onClick={() => scrollTo(link.href)}
                                    className="text-2xl font-semibold"
                                    style={{
                                        color: 'var(--text-primary)',
                                        fontFamily: 'Space Grotesk, sans-serif',
                                    }}
                                >
                                    {link.label}
                                </motion.button>
                            ))}

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: navLinks.length * 0.07 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollTo('#cta')}
                                className="mt-4 px-8 py-4 rounded-xl text-lg font-semibold"
                                style={{
                                    background:
                                        'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                    color: '#0a0e1a',
                                    fontFamily: 'Inter, sans-serif',
                                    boxShadow: '0 4px 20px rgba(0, 217, 255, 0.25)',
                                }}
                            >
                                Баштоо
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
