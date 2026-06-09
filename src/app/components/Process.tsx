import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    week: 'АПТА 1',
    title: 'Стратегия жана структура',
    items: [
      'Позиционирование жана УТП',
      'Курс архитектурасы',
      'Аудитория анализи'
    ]
  },
  {
    week: 'АПТА 2',
    title: 'Контент жана материалдар',
    items: [
      '20 видео съемка',
      'Контент план',
      'Лид магнит түзүү'
    ]
  },
  {
    week: 'АПТА 3',
    title: 'Команда жана системалар',
    items: [
      'Сатуу отдели',
      'CRM настройка',
      'Воронка түзүү'
    ]
  },
  {
    week: 'АПТА 4',
    title: 'Запуск жана продвижение',
    items: [
      'Таргет реклама',
      'Биринчи сатуулар',
      'Оптимизация'
    ]
  }
];

export function Process() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, var(--accent-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--accent-primary) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
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
            Кантип иштейт?
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
            4 апта – 4 негизги этап
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full">
            <motion.div
              className="w-full h-full rounded-full"
              style={{
                background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))',
                transformOrigin: 'top'
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-24">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full lg:max-w-md">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-8 rounded-2xl"
                      style={{
                        background: 'var(--bg-surface)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      {/* Week Badge */}
                      <div
                        className="inline-block px-4 py-1 rounded-full mb-4"
                        style={{
                          background: 'rgba(0, 217, 255, 0.1)',
                          border: '1px solid rgba(0, 217, 255, 0.2)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--accent-primary)',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {step.week}
                      </div>

                      {/* Title */}
                      <h3
                        className="mb-4"
                        style={{
                          fontSize: '1.75rem',
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          lineHeight: 1.3
                        }}
                      >
                        {step.title}
                      </h3>

                      {/* Items */}
                      <ul className="space-y-3">
                        {step.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + itemIndex * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              className="w-5 h-5 flex-shrink-0 mt-0.5"
                              style={{ color: 'var(--success)' }}
                            />
                            <span
                              style={{
                                color: 'var(--text-muted)',
                                fontSize: '1rem',
                                fontFamily: 'Inter, sans-serif',
                                lineHeight: 1.6
                              }}
                            >
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Center Circle */}
                  <div className="relative flex-shrink-0 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                        boxShadow: '0 0 0 8px var(--bg-deep), 0 0 30px rgba(0, 217, 255, 0.3)'
                      }}
                    >
                      <span
                        className="text-2xl"
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: 700,
                          color: '#0a0e1a'
                        }}
                      >
                        {index + 1}
                      </span>
                    </motion.div>
                  </div>

                  {/* Empty space for layout balance */}
                  <div className="hidden lg:block flex-1 lg:max-w-md" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
