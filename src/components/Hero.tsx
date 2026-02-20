import { motion } from "framer-motion";
import Blob from "./Blob";

interface HeroProps {
  onWorksClick: () => void;
}

const Hero = ({ onWorksClick }: HeroProps) => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
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
    window.open(
      "https://drive.google.com/file/d/1nx-ZjuBtaixUTuZMk4qdcMz55Vv-h1DQ/view?usp=drive_link",
      "_blank",
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Blob Background */}
      <Blob />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Greeting */}
          <motion.p
            className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-foreground mb-2 sm:mb-4"
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Hello!
          </motion.p>

          {/* Main Intro Text */}
          <motion.p
            className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90 leading-relaxed max-w-xs sm:max-w-lg"
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            I'm <span className="font-semibold">Adnan Bin Hossen</span>, a
            Full-stack Developer.
          </motion.p>

          {/* Summary Text */}
          <motion.p
            className="text-xs sm:text-sm md:text-base text-foreground/60 leading-relaxed max-w-xs sm:max-w-md mt-3 sm:mt-4"
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Specialized in building end-to-end web applications with modern frontend and backend technologies.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-10"
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            onClick={onWorksClick}
            className="magnetic-target group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-full font-medium text-sm sm:text-base hover:bg-foreground/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={handleDownloadCV}
            className="magnetic-target px-6 sm:px-8 py-3 sm:py-4 text-foreground rounded-full font-medium text-sm sm:text-base border border-foreground/20 hover:bg-foreground/5 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Circle */}
      <motion.div
        className="absolute left-[15%] top-1/2 -translate-y-1/2 w-8 h-8 border border-foreground/20 rounded-full hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
    </section>
  );
};

export default Hero;
