import { motion } from 'motion/react';
import { Rocket, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--accent-primary)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--accent-secondary)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid rgba(0, 217, 255, 0.2)',
            boxShadow: '0 0 20px var(--glow-cyan)'
          }}
        >
          <Rocket className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
          <span className="text-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>
            ЗАПУСК ПОД КЛЮЧ
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #ffffff 0%, var(--accent-primary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Экспертти 30 күндө<br />
          рынокко чыгарабыз
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 max-w-2xl mx-auto"
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            color: 'var(--text-muted)',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.6
          }}
        >
          Биз сизге толук команда жана системалуу иштеп беребиз
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://wa.me/996508230200"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-xl font-semibold overflow-hidden inline-block"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              color: '#0a0e1a',
              fontSize: '1.125rem',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 10px 40px rgba(0, 217, 255, 0.3)',
              textDecoration: 'none'
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Акысыз консультацияга жазылуу
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.a>
        </motion.div>

        {/* Pain Points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {[
            'системалуу продуктуңуз жок',
            'сатуу командаңыз жок',
            'контент бар, бирок акча жок',
            'запуск баштоодон коркуп жатсаңыз'
          ].map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="p-4 rounded-xl text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="w-2 h-2 rounded-full mx-auto mb-3" style={{ background: 'var(--accent-gold)' }} />
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {pain}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
