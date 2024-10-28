import { motion, AnimatePresence } from "framer-motion";

interface TemplateDisplayProps {
  activeTemplate: number;
  component: () => JSX.Element;
}

export default function TemplateDisplay({
  activeTemplate,
  component,
}: TemplateDisplayProps) {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-300 shadow-2xl px-20 p-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTemplate}
          className="shadow-lg rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          {component()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
