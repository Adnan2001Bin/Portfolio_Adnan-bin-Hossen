import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  onAboutClick: () => void;
  onWorksClick: () => void;
  onContactClick: () => void;
}

const Navigation = ({ onAboutClick, onWorksClick, onContactClick }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'About', onClick: onAboutClick },
    { label: 'Works', onClick: onWorksClick },
  ];

  const handleMobileNav = (action: () => void) => {
    setMobileMenuOpen(false);
    action();
  };

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
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 md:px-12 py-4 md:py-6"
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
            <div className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-foreground rounded-lg rotate-45 scale-75" />
              <span className="relative text-background font-bold text-lg md:text-xl z-10">A</span>
            </div>
          </motion.div>

          {/* Desktop Nav Links */}
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
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            variants={itemVariants}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <>
                <span className="w-6 h-0.5 bg-foreground" />
                <span className="w-4 h-0.5 bg-foreground" />
              </>
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-md md:hidden flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => handleMobileNav(item.onClick)}
                className="font-display text-3xl font-semibold text-foreground hover:text-foreground/70 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleMobileNav(onContactClick)}
              className="font-display text-3xl font-semibold text-foreground hover:text-foreground/70 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.3 }}
            >
              Contact
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
