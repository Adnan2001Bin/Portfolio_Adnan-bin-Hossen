import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  onAboutClick: () => void;
  onWorksClick: () => void;
  onContactClick: () => void;
}

const Navigation = ({ onAboutClick, onWorksClick, onContactClick }: NavigationProps) => {
  const navItems = [
    { label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'About', onClick: onAboutClick },
    { label: 'Works', onClick: onWorksClick },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="font-display text-2xl font-bold tracking-tight"
          variants={itemVariants}
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-foreground rounded-lg rotate-45 scale-75" />
            <span className="relative text-background font-bold text-xl z-10">A</span>
          </div>
        </motion.div>

        {/* Nav Links */}
        <motion.div 
          className="hidden md:flex items-center gap-8"
          variants={itemVariants}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="nav-link font-body text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors py-1"
            >
              {item.label}
            </button>
          ))}
          
          <Button
            onClick={onContactClick}
            className="group flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-full px-5 py-2 h-auto font-body text-sm"
          >
            Contact
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-background/20 group-hover:bg-background/30 transition-colors">
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5 p-2"
          variants={itemVariants}
          onClick={onAboutClick}
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-foreground" />
          <span className="w-4 h-0.5 bg-foreground" />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
