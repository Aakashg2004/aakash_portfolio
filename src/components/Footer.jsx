import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-white/30">
            <span className="gradient-text font-bold">&lt;Aakash /&gt;</span>
            {' '}· Built with React, Tailwind & Framer Motion
          </div>
          <div className="font-mono text-xs text-white/20">
            © 2024 Aakash · Villupuram, Tamil Nadu
          </div>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -4 }}
            className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:border-accent/30 border border-white/5 transition-all duration-300 font-mono"
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
