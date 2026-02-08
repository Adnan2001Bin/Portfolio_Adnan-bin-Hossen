import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "EduTrack",
    subtitle: "Comprehensive School Management System",
    description:
      "Comprehensive school management system with role-based portals for administrators, teachers, students, and parents.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://hoursmedialtd.com/work/edutrack",
    githubUrl: "https://github.com/Adnan2001Bin/edutrack-demo-main",
    featured: true,
  },
  {
    title: "Order Tracker",
    subtitle: "Supply Chain MIS",
    description:
      "Comprehensive supply chain MIS for garment industry featuring order management, BOM tracking, vendor management, and AI-powered insights.",
    tech: ["React", "TypeScript", "AI Integration", "Tailwind CSS"],
    liveUrl: "https://order-tracker.hoursmedialtd.com/vendors",
    githubUrl: "https://github.com/Adnan2001Bin/order-tracker-demo-main",
    featured: true,
  },
  {
    title: "Kivo Hub",
    subtitle: "Personal Productivity Dashboard",
    description:
      "Personal productivity dashboard combining tasks, expenses, wishlist management, and activity tracking in one unified interface.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://kivo-hub.hoursmedialtd.com/",
    githubUrl: "https://github.com/Adnan2001Bin/kivo-hub-demo-main",
    featured: false,
  },
  {
    title: "Flannel Store",
    subtitle: "Luxury Fashion E-commerce",
    description:
      "Premium luxury fashion e-commerce platform featuring high-end designer brands with elegant product showcases and seamless shopping experiences.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://flannel-store.hoursmedialtd.com/",
    githubUrl: "https://github.com/Adnan2001Bin/flannel-store-demo-main",
    featured: false,
  },
];

const WorksContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={itemVariants}
        className="text-muted-foreground text-lg mb-8"
      >
        A selection of projects I've worked on, showcasing my expertise in
        full-stack development and UI/UX design.
      </motion.p>

      {/* Featured Projects */}
      <div className="space-y-6">
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="group relative p-8 bg-muted/30 rounded-3xl border border-border hover:border-foreground/20 transition-all duration-300"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blob-gradient1/5 to-blob-gradient2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                      Featured Project
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mt-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-foreground/10 text-foreground/80 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-target p-3 rounded-full border border-border hover:bg-muted transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-target p-3 rounded-full border border-border hover:bg-muted transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View live project"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Decorative number */}
              <div className="absolute top-6 right-8 text-8xl font-display font-bold text-foreground/5 select-none hidden lg:block">
                0{index + 1}
              </div>
            </motion.article>
          ))}
      </div>

      {/* Other Projects */}
      <motion.div variants={itemVariants}>
        <h3 className="subtitle-text mb-6 mt-12">Other Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                className="group p-6 bg-muted/20 rounded-2xl border border-border hover:border-foreground/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-display text-xl font-semibold">
                      {project.title}
                    </h4>
                    <p className="text-sm text-foreground/60">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label="View live"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-foreground/5 text-foreground/70 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
        </div>
      </motion.div>

      {/* More Projects CTA */}
      <motion.div variants={itemVariants} className="text-center pt-8">
        <motion.a
          href="https://github.com/Adnan2001Bin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-foreground font-medium hover:underline underline-offset-4"
          whileHover={{ x: 5 }}
        >
          View more on GitHub
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default WorksContent;
