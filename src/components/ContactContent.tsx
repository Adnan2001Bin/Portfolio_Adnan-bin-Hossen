import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Facebook,
  Globe,
  ExternalLink,
} from "lucide-react";

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

  const contactLinks = [
    {
      icon: Phone,
      label: "Phone",
      value: "+8801878710544",
      href: "tel:+8801878710544",
    },
    {
      icon: Mail,
      label: "Email",
      value: "adnan2001bin@gmail.com",
      href: "mailto:adnan2001bin@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ashulia, Dhaka, Bangladesh",
      href: null,
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "adnan-bin-hossenebon.vercel.app",
      href: "https://adnan-bin-hossenebon.vercel.app/",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adnan-bin-hossen/",
    },
    { icon: Github, label: "GitHub", href: "https://github.com/Adnan2001Bin" },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/adnanbin.hossen",
    },
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
        {/* Left Column - Contact Info */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="space-y-3">
            <h3 className="subtitle-text">Get in Touch</h3>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="space-y-3">
            {contactLinks.map((item) => (
              <motion.div key={item.label} variants={itemVariants}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-2xl hover:bg-muted transition-colors group"
                  >
                    <div className="p-3 bg-foreground text-background rounded-xl group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium text-sm truncate">
                        {item.value}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-2xl">
                    <div className="p-3 bg-muted rounded-xl">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Socials & Availability */}
        <motion.div variants={itemVariants} className="space-y-8">
          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-2xl hover:bg-foreground hover:text-background transition-all group"
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{social.label}</span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Availability Card */}
          <motion.div
            className="p-6 bg-foreground text-background rounded-2xl"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium">Available for work</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Currently open to freelance projects and full-time opportunities.
              Let's build something great together.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactContent;
