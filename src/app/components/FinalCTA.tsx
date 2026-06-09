import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at center, var(--glow-cyan), transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-12 md:p-16 rounded-3xl overflow-hidden text-center"
          style={{
            background: 'linear-gradient(135deg, var(--bg-surface), var(--bg-elevated))',
            border: '2px solid rgba(0, 217, 255, 0.3)',
            boxShadow: '0 30px 80px rgba(0, 217, 255, 0.2)'
          }}
        >
          {/* Glow Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
            <motion.div
              className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl"
              style={{ background: 'var(--accent-primary)' }}
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-0 right-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl"
              style={{ background: 'var(--accent-secondary)' }}
              animate={{
                x: [0, -100, 0],
                y: [0, 50, 0],
                scale: [1.3, 1, 1.3]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Sparkle Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                boxShadow: '0 10px 40px rgba(0, 217, 255, 0.4)'
              }}
            >
              <Sparkles className="w-10 h-10" style={{ color: '#0a0e1a' }} />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.2
              }}
            >
              Команда менен старт алуу
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-10 max-w-2xl mx-auto"
              style={{
                fontSize: '1.25rem',
                color: 'var(--text-muted)',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 1.6
              }}
            >
              30 күн ичинде сиздин продуктуңуз, командаңыз жана биринчи түшүмүңүз болот
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="https://wa.me/996508230200"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-xl font-semibold overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                color: '#0a0e1a',
                fontSize: '1.25rem',
                fontFamily: 'Space Grotesk, sans-serif',
                boxShadow: '0 15px 50px rgba(0, 217, 255, 0.4)',
                textDecoration: 'none',
                display: 'inline-flex'
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Акысыз консультацияга жазылуу
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-gold), var(--accent-primary))',
                  pointerEvents: 'none'
                }}
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--success)' }} />
                <span>Жеке консультация</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--success)' }} />
                <span>Эч кандай милдеттенмелер</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--success)' }} />
                <span>30 мүнөт стратегия</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
