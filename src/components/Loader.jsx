import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#050510] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="font-display text-4xl font-bold gradient-text mb-2">&lt;Aakash /&gt;</div>
        <div className="font-mono text-xs text-white/30 mb-8">Initializing portfolio...</div>

        <div className="w-48 h-px bg-white/5 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              animate={{ y: [-4, 0, -4] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
              className="w-1.5 h-1.5 rounded-full bg-accent/60"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
