import { motion } from 'framer-motion';
import { Linkedin, Github, MessageCircle } from 'lucide-react';

const socials = [
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com/in/adnanbinhossen', 
    label: 'LinkedIn' 
  },
  { 
    icon: MessageCircle, 
    href: 'https://wa.me/yourwhatsapp', 
    label: 'WhatsApp' 
  },
  { 
    icon: Github, 
    href: 'https://github.com/adnanbinhossen', 
    label: 'GitHub' 
  },
];

const SocialBar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Desktop - Left Sidebar */}
      <motion.div
        className="fixed left-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="social-line" variants={itemVariants} />
        
        {socials.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-target p-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" strokeWidth={1.5} />
          </motion.a>
        ))}
        
        <motion.div className="social-line" variants={itemVariants} />
      </motion.div>

      {/* Mobile - Bottom Bar */}
      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 md:hidden flex items-center gap-6 px-6 py-3 bg-card/80 backdrop-blur-md rounded-full border border-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {socials.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" strokeWidth={1.5} />
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default SocialBar;
