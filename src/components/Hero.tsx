import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Blob from './Blob';

interface HeroProps {
  onWorksClick: () => void;
}

const Hero = ({ onWorksClick }: HeroProps) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1PY3OMAEGVtk3l4FQiQNq6yEYpBarbS_a/view?usp=sharing', '_blank');
  };

  const benefits = [
    "Front-end & Back-end Proficiency",
    "Scalable & Efficient Solutions", 
    "Machine Learning & Automation"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Blob Background */}
      <Blob />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          
          {/* Label */}
          <motion.p
            className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-6"
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Hello I am Adnan!
          </motion.p>
          
          {/* Headline */}
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]"
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Architecting <span className="font-serif italic font-normal">scalable</span> full-stack solutions and <span className="font-serif italic font-normal">seamless</span> experiences
          </motion.h1>

          {/* Benefits / Checkmarks */}
          <motion.div 
            className="flex flex-wrap gap-x-8 gap-y-4 mb-10"
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-foreground/80 font-medium md:text-lg">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              onClick={onWorksClick}
              className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              onClick={handleDownloadCV}
              className="px-8 py-4 text-foreground rounded-full font-medium border border-foreground/20 hover:bg-foreground/5 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
