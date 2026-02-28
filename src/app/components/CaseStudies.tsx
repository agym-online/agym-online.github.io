import { motion } from 'motion/react';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, User, Briefcase } from 'lucide-react';

interface CaseStudyProps {
  name: string;
  folder: string;
  slideCount: number;
  index: number;
}

function CaseStudyCarousel({ name, folder, slideCount, index }: CaseStudyProps) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    adaptiveHeight: false,
    dotsClass: 'slick-dots custom-dots',
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };

  const slides = Array.from({ length: slideCount }, (_, i) => i + 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div
        className="p-8 rounded-3xl overflow-hidden"
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        {/* Person Header */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              boxShadow: '0 8px 24px rgba(0, 217, 255, 0.3)'
            }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <User className="w-8 h-8" style={{ color: '#0a0e1a' }} />
          </motion.div>

          <div>
            <h3
              className="mb-1"
              style={{
                fontSize: '1.75rem',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                color: 'var(--text-primary)'
              }}
            >
              {name}
            </h3>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
              <span
                className="text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                Кардар кейси
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative carousel-container">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slideNum) => (
              <div key={slideNum} className="outline-none">
                <div
                  className="relative rounded-2xl overflow-hidden group cursor-pointer"
                  style={{
                    aspectRatio: '16/9',
                    background: 'var(--bg-elevated)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    willChange: 'transform'
                  }}
                >
                  {/* Real slide image */}
                  <img
                    src={`${import.meta.env.BASE_URL}${folder}/slide_${String(slideNum).padStart(3, '0')}.jpg`}
                    alt={`${name} - Слайд ${slideNum}`}
                    className="absolute inset-0 w-full h-full object-contain"
                    loading="lazy"
                    style={{ willChange: 'transform' }}
                  />

                  {/* Gradient Overlay on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, var(--glow-cyan), var(--glow-purple))',
                      pointerEvents: 'none'
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Navigation Buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-90"
            style={{
              background: 'rgba(0, 217, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              color: 'var(--text-primary)',
              willChange: 'transform'
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-90"
            style={{
              background: 'rgba(0, 217, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              color: 'var(--text-primary)',
              willChange: 'transform'
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function CaseStudies() {
  const cases = [
    { name: 'Туратбек Чынарбеков', folder: 'turatbek', slideCount: 14 },
    { name: 'Айгерим Паязова', folder: 'aigerim', slideCount: 14 },
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(135deg, var(--accent-primary) 25%, transparent 25%), 
                             linear-gradient(225deg, var(--accent-primary) 25%, transparent 25%), 
                             linear-gradient(45deg, var(--accent-primary) 25%, transparent 25%), 
                             linear-gradient(315deg, var(--accent-primary) 25%, transparent 25%)`,
            backgroundSize: '80px 80px',
            backgroundPosition: '0 0, 40px 0, 40px -40px, 0 40px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--accent-secondary)' }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.2)'
            }}
          >
            <span
              className="text-sm font-semibold"
              style={{
                color: 'var(--accent-secondary)',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              ИЙГИЛИКТҮҮ КЕЙСТЕР
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
            Биздин кейстер
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
            Реалдуу кардарларыбыздын натыйжалары жана портфолиолору
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {cases.map((caseStudy, index) => (
            <CaseStudyCarousel
              key={index}
              name={caseStudy.name}
              folder={caseStudy.folder}
              slideCount={caseStudy.slideCount}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >


        </motion.div>
      </div>

      {/* Custom Carousel Styles */}
      <style>{`
        .carousel-container .slick-slider {
          position: relative;
        }
        
        .carousel-container .slick-list {
          border-radius: 1rem;
          overflow: visible;
        }
        
        .carousel-container .slick-slide > div {
          padding: 0 4px;
        }
        
        .carousel-container .custom-dots {
          bottom: -40px;
          display: flex !important;
          justify-content: center;
          gap: 8px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .carousel-container .custom-dots li {
          margin: 0;
        }
        
        .carousel-container .custom-dots li button {
          width: 8px;
          height: 8px;
          padding: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0;
        }
        
        .carousel-container .custom-dots li button:hover {
          background: rgba(0, 217, 255, 0.5);
          transform: scale(1.2);
        }
        
        .carousel-container .custom-dots li.slick-active button {
          width: 24px;
          border-radius: 4px;
          background: var(--accent-primary);
        }
        
        .carousel-container .slick-track {
          display: flex;
          align-items: center;
        }
      `}</style>
    </section>
  );
}