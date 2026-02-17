import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface BottomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const BottomDrawer = ({ isOpen, onClose, title, children }: BottomDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Drawer Content */}
          <motion.div
            className="drawer-content"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 300,
            }}
          >
            {/* Handle */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="w-12 h-1 bg-muted rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 sm:py-4 border-b border-border">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold">{title}</h2>
              <motion.button
                onClick={onClose}
                className="magnetic-target p-2 rounded-full hover:bg-muted transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close drawer"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] px-4 sm:px-6 md:px-12 py-4 sm:py-6 md:py-8">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BottomDrawer;
