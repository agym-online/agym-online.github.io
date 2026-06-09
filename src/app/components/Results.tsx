import { motion } from 'motion/react';
import { Target, Package, Users, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, value]);

  return (
    <motion.span
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true, amount: 0.5 }}
    >
      {count}{suffix}
    </motion.span>
  );
}

export function Results() {
  const results = [
    {
      icon: Package,
      title: 'Даяр продукт',
      description: 'Толук структураланган курс методологиясы менен'
    },
    {
      icon: Users,
      title: 'Даяр команда',
      description: 'Сатуу отделинен тартып таргетологго чейин'
    },
    {
      icon: TrendingUp,
      title: 'Даяр сатуу система',
      description: 'CRM, аналитика жана автоматташтыруу'
    },
    {
      icon: Target,
      title: 'Реалдуу сатуу процесси',
      description: 'Биринчи кардарлар жана түшүм'
    }
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'var(--accent-gold)' }}
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(251, 191, 36, 0.1)',
              border: '1px solid rgba(251, 191, 36, 0.3)'
            }}
          >
            <Target className="w-4 h-4" style={{ color: 'var(--accent-gold)' }} />
            <span
              className="text-sm font-semibold"
              style={{ color: 'var(--accent-gold)' }}
            >
              НАТЫЙЖА
            </span>
          </motion.div>

          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.2
            }}
          >
            <AnimatedNumber value={30} /> күндүн ичинде
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
            Сиздин ишиниз толугу менен систему түшөт
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <motion.div
                className="p-8 rounded-2xl h-full"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Hover Gradient */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.05), rgba(0, 217, 255, 0.05))',
                    pointerEvents: 'none'
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                    style={{
                      background: 'rgba(251, 191, 36, 0.1)',
                      border: '1px solid rgba(251, 191, 36, 0.2)'
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <result.icon className="w-8 h-8" style={{ color: 'var(--accent-gold)' }} />
                  </motion.div>

                  {/* Content */}
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: '1.75rem',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3
                    }}
                  >
                    {result.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '1.125rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: 1.6
                    }}
                  >
                    {result.description}
                  </p>

                  {/* Check Mark */}
                  <motion.div
                    className="absolute top-8 right-8"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.3)'
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        style={{ color: 'var(--success)' }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}

      </div>
    </section>
  );
}