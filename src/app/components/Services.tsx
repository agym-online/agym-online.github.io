import { motion } from 'motion/react';
import { ServiceCard } from './ServiceCard';
import { 
  Target, 
  BookOpen, 
  Calendar, 
  Video, 
  Users, 
  Layers, 
  TrendingUp, 
  Database 
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Распаковка личности + экспертности',
    items: [
      'Позиционирование',
      'УТП аныктоо',
      'Ниша жана аудитория анализ',
      'Продукт архитектурасы'
    ]
  },
  {
    icon: BookOpen,
    title: 'Курс түзүү (Методология)',
    items: [
      'Программа структурасы',
      'Модульдер',
      'Сабак логикасы',
      'Натыйжага багытталган система'
    ]
  },
  {
    icon: Calendar,
    title: 'Контент стратегия',
    items: [
      '30 күндүк контент план',
      'Прогрев сценарий',
      'Сатуу структурасы',
      'Лид магнит идеясы'
    ]
  },
  {
    icon: Video,
    title: '20 видео + съемка',
    items: [
      '20 даяр сценарий',
      'Профессионалдуу съемка',
      'Монтаж',
      'Reels/Shorts формат'
    ]
  },
  {
    icon: Users,
    title: 'Отдел продаж',
    items: [
      '5 менеджер',
      '1 РОП',
      'Скрипттер',
      'KPI система',
      'Ежедневный отчет'
    ]
  },
  {
    icon: Layers,
    title: 'Толук команда менен камсыздоо',
    items: [
      'Таргетолог',
      'Программист',
      'Техникалык настройка',
      'Воронка түзүү'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Продвижение',
    items: [
      'Таргет реклама',
      'Лидогенерация',
      'Вебинар модель',
      'Закрытие стратегия'
    ]
  },
  {
    icon: Database,
    title: 'Система',
    items: [
      'CRM настройка',
      'Аналитика',
      'Финансовый контроль',
      'Запусктун этаптары толук башкаруу'
    ]
  }
];

export function Services() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--accent-primary) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full mb-6"
            style={{ 
              background: 'rgba(0, 217, 255, 0.1)',
              border: '1px solid rgba(0, 217, 255, 0.2)'
            }}
          >
            <span 
              className="text-sm font-semibold"
              style={{ 
                color: 'var(--accent-primary)',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              ЭМНЕЛЕР КИРЕТ?
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
            Толук запуск пакети
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
            8 негизги блок – баарысы сиздин ийгилигиңиз үчүн
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              items={service.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
