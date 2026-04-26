import { motion } from 'motion/react';
import { ImmersiveBackground, Navbar, Footer } from '../App';

export default function AboutMe() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden pt-safe pb-[80px] md:pb-0 bg-[#010101]">
      <ImmersiveBackground />
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center pt-24 md:pt-32 px-6 md:px-12 z-10 max-w-[1000px] mx-auto text-zinc-300">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="mb-8 md:mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-heading text-white tracking-tight mb-4">
              Мой путь
            </h1>
            <div className="h-px w-24 bg-gold-500/50 mx-auto"></div>
          </div>

          <div className="space-y-8 font-body font-light text-base md:text-lg leading-relaxed text-zinc-400">
            <p>
              Меня зовут Яна Дружинина. Я начала свой путь в мантических практиках еще в 2008 году, работая с Таро и рунами. Однако это было лишь началом глубокого погружения.
            </p>
            <p>
              Настоящие изменения начались, когда я осознала: просто предсказывать будущее — недостаточно. Человеку нужно дать инструмент для <span className="text-gold-200/80">управления</span> этим будущим. Мой путь привел меня к Боевой и Ритуальной магии, к глубоким Посвящениям и Высшей Сефиротической Магии.
            </p>
          </div>

          <div className="my-16 w-full rounded-3xl overflow-hidden glass-card-premium cinematic-shadow relative aspect-video p-1">
            <div className="w-full h-full rounded-[calc(1.5rem-4px)] overflow-hidden bg-[#050506] relative">
              <img 
                src="https://i.ibb.co/60dQWqN1/IMG-2511.jpg" 
                alt="Яна Дружинина за работой" 
                className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010101] overflow-hidden via-transparent to-[#010101]/20"></div>
            </div>
          </div>

          <div className="space-y-8 font-body font-light text-base md:text-lg leading-relaxed text-zinc-400 mb-24">
            <h2 className="text-2xl md:text-3xl font-heading text-white mb-6">Посвящение и Школа</h2>
            <p>
              Я прошла посвящение и стала полноправной Жрицей культа Исиды. Это дало мне право не только работать в канале этого древнего мощного эгрегора, но и передавать знания. 
            </p>
            <p>
              Так родилась моя Школа «Исида». Мои ученики — это люди, которые приходят за конкретными результатами. Они учатся не «витать в облаках», а применять магию как четкий, рабочий инструмент для достижения материальных и духовных целей. Я делюсь только тем, что проверила на себе и своих клиентах. Трансформирую жизни, обучаю, создаю сильные защитные артефакты.
            </p>
            <p className="text-gold-200/80 italic text-center text-xl mt-12 py-8 border-y border-white/10">
              "Магия — это не чудо, это физика тонкого плана."
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
