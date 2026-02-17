import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";

const skills = {
  "Programming Languages": [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "HTML",
    "CSS",
  ],
  Frontend: [
    "React.js",
    "React Native",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Framer Motion",
  ],
  Backend: ["Node.js", "Express.js", "RESTful APIs"],
  Database: ["MongoDB", "Mongoose", "Supabase"],
  Authentication: ["JWT", "Firebase", "Appwrite", "Supabase Auth"],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "Postman",
    "Vercel",
    "Netlify",
    "Docker",
  ],
  "Data & Design": [
    "Power BI",
    "Pandas",
    "NumPy",
    "Figma",
    "Canva",
    "Photoshop",
  ],
};

const strengths = [
  "Project Management",
  "Public Relations",
  "Teamwork",
  "Time Management",
  "Leadership",
  "Effective Communication",
  "Critical Thinking",
];

const languages = [
  { name: "English", level: "Professional Proficiency" },
  { name: "Bangla", level: "Native" },
];

const AboutContent = () => {
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
      className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Contact Info */}
      <motion.section variants={itemVariants} className="space-y-4">
        <h3 className="subtitle-text">Contact</h3>
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+8801878710544"
            className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +8801878710544
          </a>
          <a
            href="mailto:adnan2001bin@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
          >
            <Mail className="w-4 h-4" />
            adnan2001bin@gmail.com
          </a>
          <span className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm">
            <MapPin className="w-4 h-4" />
            Ashulia, Dhaka
          </span>
          <a
            href="https://github.com/Adnan2001Bin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adnan-bin-hossen/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://adnan-bin-hossenebon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
          >
            <Globe className="w-4 h-4" />
            Portfolio
          </a>
        </div>
      </motion.section>

      {/* Profile Section */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h3 className="subtitle-text">Profile</h3>
        <p className="text-foreground/90 text-base sm:text-lg md:text-xl leading-relaxed">
          Ambitious Full-Stack Web Developer passionate about building
          user-centric applications and automating workflows. Proficient in both
          front-end and back-end development, I specialize in creating scalable
          and efficient solutions. With a keen interest in machine learning and
          automation, I stay ahead of industry trends to drive innovation and
          deliver impactful results.
        </p>
      </motion.section>

      {/* Work Experience */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h3 className="subtitle-text">Work Experience</h3>
        <div className="p-6 bg-muted/50 rounded-2xl border border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h4 className="font-display font-semibold text-lg">
                Web Developer
              </h4>
              <p className="text-primary font-medium">
                TAF Technology (Remote)
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              November 2025 – Present
            </p>
          </div>
          <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              Developed and maintained web applications using React.js, Node.js,
              Express.js, and Tailwind CSS.
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              Built React Native mobile applications with optimized performance
              and seamless API integration.
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              Collaborated with designers and backend teams to deliver scalable
              and efficient features.
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              Integrated RESTful APIs and optimized frontend performance for
              better user experience.
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              Worked with Git, GitHub, and project management tools to follow
              agile development workflows.
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              Contributed to debugging, bug fixing, and improving UI/UX across
              web and mobile platforms.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Technical Skills Section */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h3 className="subtitle-text">Technical Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="space-y-3"
              variants={itemVariants}
            >
              <h4 className="font-display font-semibold text-base text-foreground">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted text-foreground/80 rounded-full text-sm font-body"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Strengths & Languages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <motion.section variants={itemVariants} className="space-y-4">
          <h3 className="subtitle-text">Strengths</h3>
          <div className="flex flex-wrap gap-2">
            {strengths.map((strength) => (
              <span
                key={strength}
                className="px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium"
              >
                {strength}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-4">
          <h3 className="subtitle-text">Languages</h3>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-xl"
              >
                <span className="font-medium">{lang.name}</span>
                <span className="text-sm text-muted-foreground">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Education */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h3 className="subtitle-text">Education</h3>
        <div className="p-6 bg-muted/50 rounded-2xl border border-border">
          <h4 className="font-display font-semibold text-lg">
            Bachelor of Science in Computer Science
          </h4>
          <p className="text-primary font-medium mt-1">
            Daffodil International University
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Dhaka, Bangladesh
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutContent;
