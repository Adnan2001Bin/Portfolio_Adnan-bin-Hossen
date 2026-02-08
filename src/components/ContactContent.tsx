import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

const ContactContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Info */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="space-y-4">
            <h3 className="subtitle-text">Get in Touch</h3>
            <p className="text-foreground/90 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="space-y-4">
            <motion.a
              href="mailto:adnan@example.com"
              className="flex items-center gap-4 p-4 bg-muted/50 rounded-2xl hover:bg-muted transition-colors group"
              variants={itemVariants}
              whileHover={{ x: 8 }}
            >
              <div className="p-3 bg-foreground text-background rounded-xl group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">adnan@example.com</p>
              </div>
            </motion.a>

            <motion.div
              className="flex items-center gap-4 p-4 bg-muted/50 rounded-2xl"
              variants={itemVariants}
            >
              <div className="p-3 bg-muted rounded-xl">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Dhaka, Bangladesh</p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-4">
            <motion.a
              href="https://linkedin.com/in/adnanbinhossen"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-target p-3 bg-muted rounded-full hover:bg-foreground hover:text-background transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/adnanbinhossen"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-target p-3 bg-muted rounded-full hover:bg-foreground hover:text-background transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.form
          variants={itemVariants}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground/80">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground/80">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground/80">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none placeholder:text-muted-foreground/50"
            />
          </div>

          <Button
            type="submit"
            className="w-full group flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-xl py-6 h-auto font-medium text-base"
          >
            Send Message
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactContent;
