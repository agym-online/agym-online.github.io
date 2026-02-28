import { motion } from 'motion/react';
import { Check, Clock, Banknote, ArrowRight } from 'lucide-react';

export function Pricing() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--accent-secondary)' }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="mb-4"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.2
            }}
          >
            Кызматташуу форматы
          </h2>
          <p 
            className="max-w-2xl mx-auto"
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-muted)',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.6
            }}
          >
            Ачык жана татаал шарттарсыз
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-12 rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-elevated) 100%)',
            border: '2px solid rgba(0, 217, 255, 0.2)',
            boxShadow: '0 20px 60px rgba(0, 217, 255, 0.1)'
          }}
        >
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle at top right, var(--glow-cyan), transparent 50%)'
            }}
          />

          <div className="relative z-10">
            {/* Popular Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3 }}
              className="inline-block px-4 py-2 rounded-full mb-8"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#0a0e1a'
              }}
            >
              ПОПУЛЯРДУУ ТАНДОО
            </motion.div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 5rem)',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-gold))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1
                  }}
                >
                  200 000
                </motion.span>
                <span 
                  className="text-3xl"
                  style={{ 
                    color: 'var(--text-muted)',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600
                  }}
                >
                  сом
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
                Толук пакет
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { icon: Clock, label: 'Мөөнөт', value: '1 ай' },
                { icon: Banknote, label: 'Төлөм', value: '100% алдын ала' },
                { icon: Check, label: 'Баары кирет', value: '8 кызмат блогу' },
                { icon: Check, label: 'Команда', value: '10+ адис' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <div 
                    className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0"
                    style={{
                      background: 'rgba(0, 217, 255, 0.1)'
                    }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {feature.label}
                    </div>
                    <div 
                      className="font-semibold text-lg"
                      style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {feature.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full group relative px-8 py-5 rounded-xl font-semibold overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                color: '#0a0e1a',
                fontSize: '1.25rem',
                fontFamily: 'Space Grotesk, sans-serif',
                boxShadow: '0 10px 40px rgba(0, 217, 255, 0.3)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                30 күндүк запускту баштоо
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </span>
              <motion.div
                className="absolute inset-0"
                style={{ 
                  background: 'linear-gradient(135deg, var(--accent-secondary), var(--accent-primary))'
                }}
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Trust Badge */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center mt-6 text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              ✓ Келишимдин коопсуздугу • ✓ Натыйжа кепилдиги • ✓ Толук колдоо
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
