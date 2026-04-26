import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { Menu, X, Calendar, ArrowRight, Instagram, Send, Flame, Sparkles, Gem, Moon, GraduationCap, Compass } from 'lucide-react';

const directions = [
  {
    id: 'consultations',
    title: 'Консультации и Диагностика',
    description: 'Глубокий анализ вашей ситуации. Работа с Таро (более 17 колод), восковые отливки и ясновидение. Находим корень проблемы в отношениях, финансах или здоровье.',
    icon: Moon,
  },
  {
    id: 'mentorship',
    title: 'VIP-Наставничество',
    description: 'Индивидуальное сопровождение для женщин, выбирающих роскошь и масштаб. Магическая поддержка бизнеса, проработка денежной емкости, устранение конкурентов на тонком плане.',
    icon: Compass,
  },
  {
    id: 'training',
    title: 'Школа «Исида»',
    description: 'От Введения в магию до Высшей Теургии и Египетского пантеона. Передача сакральных знаний для тех, кто чувствует в себе силу стать практиком.',
    icon: GraduationCap,
  },
  {
    id: 'artifacts',
    title: 'Артефакты Силы',
    description: 'Создание индивидуальных защитных и ресурсных артефактов под ваш личный запрос. Тонкая ювелирная работа с энергиями материального мира.',
    icon: Gem,
  },
  {
    id: 'candles',
    title: 'Программные свечи',
    description: 'Авторские восковые свечи ручной работы, заряженные на очищение, привлечение финансов, гармонизацию отношений и защиту.',
    icon: Flame,
  },
  {
    id: 'events',
    title: 'Мероприятия',
    description: 'Энергия живых встреч обладает невероятной мощью. Как ведущая и спикер крупнейших магических мероприятий, я создаю поле, в котором изменения происходят прямо в моменте.',
    icon: Sparkles,
  },
];

const testimonials = [
  {
    id: 1,
    name: 'ЕЛЕНА C. - владелица сети клиник',
    text: 'Обратилась к Яне, когда бизнес оказался на грани банкротства из-за череды «случайностей». После диагностики выявили крадник. Яна не только сняла негатив, но и поставила защиту на активы. Через 2 месяца мы закрыли рекордную сделку.',
  },
  {
    id: 2,
    name: 'МАРИЯ К. - предприниматель',
    text: 'Наставничество у Яны — это тотальная перепрошивка мышления. Я научилась управлять своим состоянием так, что нужные люди и возможности притягиваются сами собой. Мой уровень дохода и качество жизни взлетели.',
  },
  {
    id: 3,
    name: 'АННА В. - УЧЕНИЦА',
    text: 'Школа «Исида» дала мне фундамент. Яна объясняет сложнейшие принципы Ментальной магии так, что они становятся понятным и рабочим инструментом.',
  },
];

// Immersive cinematic background with Aura and Film Grain
function TwinklingStars() {
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 4}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
            boxShadow: '0 0 8px 1px rgba(255, 255, 255, 0.4)'
          }}
        />
      ))}
    </div>
  );
}

function ImmersiveBackground() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 5000], ["0%", "-15%"]);

  return (
    <>
      <div className="fixed inset-0 z-0 bg-[#010101] overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute inset-[-15%] bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url("https://i.ibb.co/ycNHy2J0/IMG-2508.jpg")', y }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#010101]/80 via-[#010101]/60 to-[#010101]/90"></div>
        <div className="noise-overlay"></div>
        <TwinklingStars />
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[rgba(212,175,55,0.06)] blur-[120px] animate-float-aura mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[70vw] h-[70vw] rounded-full bg-[rgba(25,25,35,0.8)] blur-[100px] animate-float-aura-delayed opacity-50"></div>
        <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-[rgba(100,80,60,0.05)] blur-[90px] animate-float-aura opacity-50"></div>
      </div>
    </>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    handleResize(); // Initial check
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isGlass = scrolled || isMobile;

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'md:py-4' : 'md:py-8'
      } ${
        isGlass ? 'glass-card-premium md:bg-transparent md:backdrop-blur-none border-b border-white/5 md:border-none' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-safe">
        <div className={`flex justify-between items-center pr-2 md:pr-8 pl-0 py-4 md:py-3 md:rounded-full transition-all duration-700 ${
          scrolled ? 'md:glass-card-premium md:chrome-edge' : 'bg-transparent'
        }`}>
          <div className="text-lg md:text-xl tracking-[0.2em] uppercase font-heading text-white font-medium pl-4 md:pl-8">
            Центр <span className="text-gold-200/80 font-light">Исида</span>
          </div>

          <nav className="hidden md:flex space-x-12 tracking-[0.25em] text-[9px] font-body uppercase font-medium text-zinc-400">
            {[
              { id: 'consultations', label: 'Консультации' },
              { id: 'mentorship', label: 'Наставничество' },
              { id: 'testimonials', label: 'Отзывы' },
              { id: 'contact', label: 'Запись' }
            ].map((item) => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-white hover:text-glow-gold transition-all duration-300 relative group">
                <span className="relative z-10">{item.label}</span>
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gold-500/0 group-hover:bg-gold-500/50 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
              </a>
            ))}
          </nav>

          <button 
            className="md:hidden text-zinc-300 hover:text-white transition-colors w-11 h-11 flex items-center justify-center p-2 rounded-full" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="absolute top-full left-0 w-full bg-[#010101]/95 backdrop-blur-3xl border-t border-b border-white/5 md:hidden flex flex-col py-8 px-8 h-[100vh]"
          >
            {[
              { id: 'about', label: 'Обо мне' },
              { id: 'consultations', label: 'Консультации' },
              { id: 'mentorship', label: 'Наставничество' },
              { id: 'testimonials', label: 'Отзывы' },
              { id: 'contact', label: 'Запись' }
            ].map((item, i) => (
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                key={item.id} 
                href={`#${item.id}`} 
                onClick={() => setIsOpen(false)}
                className="py-5 text-sm font-medium uppercase tracking-[0.25em] text-zinc-300 hover:text-white border-b border-white/5 last:border-0 flex items-center justify-between group active:text-gold-400"
              >
                {item.label}
                <ArrowRight size={16} className="text-gold-500/50" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-start md:items-center pt-24 md:pt-20 pb-12 px-4 md:px-12 z-10 w-full max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 w-full relative">
        
        {/* Kinetic Typography & Intro */}
        <motion.div 
          className="lg:col-span-6 lg:col-start-1 flex flex-col justify-center z-20 relative mix-blend-lighten pl-2 md:pl-8 order-2 lg:order-1 mt-8 md:mt-0"
        >

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-heading font-normal text-white tracking-tight mix-blend-screen -ml-[0.05em] pr-6 md:pr-0"
          >
            <span className="block opacity-90 mb-4 md:mb-6">Искусство управлять реальностью</span>
            <span className="block text-base sm:text-lg md:text-xl font-light text-gold-200/80 tracking-normal leading-relaxed max-w-2xl">
              Масштаб, влияние и защита для тех, кто готов к большему
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 md:mt-16 w-full max-w-md pr-6 md:pr-0"
          >
            <p className="text-sm md:text-base font-body font-light leading-relaxed text-zinc-400 text-balance mb-8">
              Яна Дружинина. Практикующий маг, Посвященная Жрица Исиды, VIP-коуч и бизнес-наставник. Трансформация мышления и энергетики для роскошных женщин и лидеров нового времени.
            </p>
            
            <button className="hidden md:flex group relative overflow-hidden rounded-full glass-card-premium chrome-edge px-8 py-4 w-fit items-center gap-4">
              <span className="text-[10px] uppercase font-body font-semibold tracking-[0.2em] relative z-10 text-white">Записаться на диагностику</span>
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center relative z-10 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                <ArrowRight size={12} strokeWidth={2} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/10 to-gold-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
            </button>
          </motion.div>
        </motion.div>

        {/* Immersive High-End Image Port*/}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 lg:col-start-8 relative w-full aspect-[4/5] md:aspect-[4/5] lg:aspect-[3/4] rounded-3xl md:rounded-t-full md:rounded-b-3xl glass-card-premium md:glass-card-premium p-2 cinematic-shadow shadow-none md:cinematic-shadow z-10 mx-auto max-w-none md:max-w-md lg:max-w-none mt-0 order-1 lg:order-2"
        >
          <div className="w-full h-full relative overflow-hidden rounded-[calc(1.5rem-8px)] md:rounded-t-full md:rounded-b-[calc(1.5rem-8px)] bg-[#050506]">
             {/* Using absolute best quality aesthetic photo representing a mystical top-tier woman */}
             <img 
              src="https://i.ibb.co/60dQWqN1/IMG-2511.jpg" 
              alt="Adeline Profile" 
              className="absolute inset-0 w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-all duration-1000 animate-slow-pan transform-gpu scale-105"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-90 md:block hidden"></div>
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#010101] to-transparent md:hidden block"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent opacity-40 mix-blend-overlay"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 z-10 relative w-full max-w-[1400px] mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl glass-card-premium p-2 cinematic-shadow"
        >
          <div className="w-full h-full relative overflow-hidden rounded-[calc(1.5rem-8px)] bg-[#050506]">
            {/* Let's try to use https://images.unsplash.com/photo-1542456424-eb5c98696b08?auto=format&fit=crop&q=80&w=2000 for a mystical abstract background or another photo of her */}
            <img 
              src="https://i.ibb.co/GZLSn5Q/IMG-2510.jpg" 
              alt="Mystical" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#020202]/50 to-transparent opacity-90"></div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 40 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-normal text-white mb-4 tracking-tight">
            Яна Дружинина
          </h2>
          <p className="text-xl md:text-2xl font-normal text-gold-200/80 font-heading mb-8">
            Выход на новый уровень невозможен старыми методами
          </p>
          <div className="space-y-6 text-sm md:text-base font-body font-light leading-relaxed text-zinc-400">
            <p>
              Я не просто предсказываю будущее — я помогаю его создавать. В моей практике Высшая Ментальная Магия неразрывно связана с логикой социума и жесткими законами бизнеса.
            </p>
            <p>
              Мой путь — это годы жестких трансформаций, которые позволили мне стать не только сильным практиком Боевой и Ритуальной магии, но и успешным руководителем, женой и мамой. Я знаю, как совмещать духовную силу и материальный успех.
            </p>
            <p>
              Ко мне приходят, когда классические методы коучинга и психологии упираются в потолок. Я работаю с первопричинами, устраняю ментальные блоки, ставлю непробиваемую защиту на активы и помогаю женщинам раскрыть их истинную, магнетическую природу.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="glass-card-premium chrome-edge p-6 rounded-2xl flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gold-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="text-3xl font-heading text-gold-200/80 relative z-10">10+</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-body relative z-10">Лет практики</span>
            </div>
            <div className="glass-card-premium chrome-edge p-6 rounded-2xl flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gold-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="text-3xl font-heading text-gold-200/80 relative z-10">1000+</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-body relative z-10">Трансформаций</span>
            </div>
          </div>

          <button className="mt-10 group relative overflow-hidden rounded-full glass-card-premium chrome-edge px-8 py-4 w-fit flex items-center gap-4">
            <span className="text-[10px] uppercase font-body font-semibold tracking-[0.2em] relative z-10 text-white">Узнать мою историю подробнее</span>
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center relative z-10 group-hover:bg-white group-hover:text-black transition-colors duration-500">
              <ArrowRight size={12} strokeWidth={2} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/10 to-gold-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Directions() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 z-10 relative w-full max-w-[1400px] mx-auto" id="consultations">
      <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-16 gap-8 w-full">
        <h2 className="text-3xl md:text-5xl font-heading font-normal text-white max-w-xl tracking-tight text-center">
          Мои инструменты<br />для ваших изменений
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {directions.map((dir, idx) => {
          const isPremium = dir.id === 'mentorship';
          
          return (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              key={dir.id}
              className={`p-8 md:p-10 flex flex-col justify-between group cursor-pointer transition-all duration-500 rounded-2xl relative overflow-hidden ${
                isPremium 
                  ? 'gold-aura-card chrome-edge' 
                  : 'glass-card-premium chrome-edge hover:bg-white/[0.05]'
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="flex justify-between items-start mb-16 relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${
                  isPremium 
                    ? 'border-gold-400/40 bg-gold-500/10 text-gold-300' 
                    : 'border-white/10 bg-white/5 text-zinc-400 group-hover:text-white group-hover:border-white/30'
                }`}>
                  <dir.icon size={20} strokeWidth={1.2} />
                </div>
                <span className={`text-[10px] font-body uppercase tracking-widest ${isPremium ? 'text-gold-400/60' : 'text-zinc-600'}`}>
                  0{idx + 1}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className={`text-2xl font-heading mb-3 ${isPremium ? 'text-gold-50' : 'text-white group-hover:text-shadow-glow transition-all duration-500'}`}>
                  {dir.title}
                </h3>
                <p className={`text-sm font-light leading-relaxed font-body ${isPremium ? 'text-gold-100/70' : 'text-zinc-400'}`}>
                  {dir.description}
                </p>

                <div className="mt-8 flex justify-start">
                  <button className="group/btn relative overflow-hidden rounded-full glass-card-premium chrome-edge px-6 py-3 w-fit flex items-center gap-3">
                    <span className="text-[9px] uppercase font-body font-semibold tracking-[0.2em] relative z-10 text-white">Подробнее</span>
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center relative z-10 group-hover/btn:bg-white group-hover/btn:text-black transition-colors duration-500">
                      <ArrowRight size={10} strokeWidth={2} />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/10 to-gold-500/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 z-10 relative w-full max-w-[1400px] mx-auto" id="testimonials">
       <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-16 gap-8">
        <h2 className="text-4xl md:text-5xl font-heading font-normal text-white max-w-xl mx-auto">
          Результаты, которые говорят сами за себя
        </h2>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0">
        {testimonials.map((test, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            key={test.id}
            className="w-[85vw] shrink-0 snap-center md:w-auto flex flex-col gap-6 p-8 glass-card-premium chrome-edge rounded-3xl group hover:bg-white/[0.04] transition-all duration-500"
          >
            <div className="text-gold-500/50 group-hover:text-gold-400 transition-colors duration-500">
              <Sparkles size={24} strokeWidth={1.5} />
            </div>
            <p className="text-sm font-body font-light text-zinc-400 group-hover:text-zinc-300 leading-relaxed italic flex-grow transition-colors duration-500">
              "{test.text}"
            </p>
            <div className="text-[10px] uppercase tracking-[0.2em] font-body font-semibold text-gold-200/60 border-t border-white/10 pt-4 mt-auto">
              {test.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="pt-12 pb-12 md:pb-24 px-6 md:px-12 z-10 relative w-full max-w-[1400px] mx-auto" id="contact">
      <div className="flex flex-col items-center text-center mb-10 gap-3">
        <h2 className="text-4xl md:text-5xl font-heading font-normal text-white max-w-xl">
          Готовы начать работу?
        </h2>
        <p className="text-zinc-400 font-body text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Свяжитесь с нами для подбора времени консультации или предварительной записи на ритуалы и наставничество.
        </p>
      </div>

      <div className="flex justify-center w-full">
        <a href="#" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 px-8 py-5 md:px-10 flex items-center gap-4 shadow-[0_0_40px_rgba(217,119,6,0.3)] hover:shadow-[0_0_60px_rgba(251,191,36,0.5)] transition-all duration-500">
          <span className="text-xs md:text-sm uppercase font-body font-bold tracking-[0.2em] relative z-10 text-zinc-900">Записаться на консультацию</span>
          <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center relative z-10 group-hover:bg-black/20 transition-colors duration-500 text-zinc-900">
            <ArrowRight size={16} strokeWidth={2} />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative w-full z-10 py-12 md:py-24 overflow-hidden border-t border-white/5 bg-[#010101]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.05)_0%,_transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-heading font-normal text-white mb-8 md:mb-12 tracking-tight text-center">
          Ссылки на мои соцсети
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 md:mb-24">
          <a href="#" className="flex items-center justify-center min-w-[180px] px-8 py-5 border border-white/10 rounded-full hover:border-gold-200/30 hover:bg-white/5 transition-all text-sm uppercase tracking-[0.2em] text-zinc-300 hover:text-white backdrop-blur-md">
            Telegram
          </a>
          <a href="#" className="flex items-center justify-center min-w-[180px] px-8 py-5 border border-white/10 rounded-full hover:border-gold-200/30 hover:bg-white/5 transition-all text-sm uppercase tracking-[0.2em] text-zinc-300 hover:text-white backdrop-blur-md">
            Instagram
          </a>
          <a href="#" className="flex items-center justify-center min-w-[180px] px-8 py-5 border border-white/10 rounded-full hover:border-gold-200/30 hover:bg-white/5 transition-all text-sm uppercase tracking-[0.2em] text-zinc-300 hover:text-white backdrop-blur-md">
            WhatsApp
          </a>
          <a href="#" className="flex items-center justify-center min-w-[180px] px-8 py-5 border border-white/10 rounded-full hover:border-gold-200/30 hover:bg-white/5 transition-all text-sm uppercase tracking-[0.2em] text-zinc-300 hover:text-white backdrop-blur-md">
            YouTube
          </a>
        </div>

        <div className="w-full flex flex-col items-center text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-body gap-4 text-center">
           <div>© {new Date().getFullYear()} ЯНА ДРУЖИНИНА</div>
           <div>ИСКУССТВО МАГИЧЕСКОЙ ТРАНСФОРМАЦИИ</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden pt-safe pb-[80px] md:pb-0">
      <ImmersiveBackground />
      <Navbar />
      
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero />
        <About />
        <Directions />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

