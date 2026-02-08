import { motion } from 'framer-motion';

interface BlobProps {
  className?: string;
}

const Blob = ({ className = '' }: BlobProps) => {
  return (
    <div className={`blob-container ${className}`}>
      <motion.div
        className="blob"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </div>
  );
};

export default Blob;
