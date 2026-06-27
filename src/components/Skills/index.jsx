import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../utils/data';

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-mono text-white/70">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-4 blur-sm" style={{ background: color }} />
        </motion.div>
      </div>
    </div>
  );
}

const techIcons = [
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'Java', icon: '☕', color: '#ED8B00' },
  { name: 'Linux', icon: '🐧', color: '#FCC624' },
  { name: 'Docker', icon: '🐳', color: '#2496ED' },
  { name: 'AWS', icon: '☁️', color: '#FF9900' },
  { name: 'Jenkins', icon: '🔧', color: '#D24939' },
  { name: 'Git', icon: '🌿', color: '#F05032' },
  { name: 'Maven', icon: '⚡', color: '#C71A36' },
  { name: 'Bash', icon: '$_', color: '#4EAA25' },
  { name: 'K8s', icon: '⎈', color: '#326CE5' },
  { name: 'VS Code', icon: '</>', color: '#007ACC' },
  { name: 'GitHub', icon: '🐙', color: '#fff' },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />
      </div>

      <div ref={ref} className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-sm mb-2">$ ls -la skills/</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
        </motion.div>

        {/* Tech icon cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 mb-16"
        >
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.04 }}
              whileHover={{ scale: 1.2, y: -6 }}
              className="glass rounded-xl p-3 text-center cursor-default group glow-box-hover transition-all duration-300"
            >
              <div className="text-2xl mb-1 font-mono">{tech.icon}</div>
              <div className="text-[10px] font-mono text-white/40 group-hover:text-white/70 transition-colors">{tech.name}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Cloud & DevOps', data: skills.cloud, icon: '☁️', color: '#FF9900' },
            { title: 'Scripting & Ops', data: skills.devops, icon: '⚙️', color: '#6c63ff' },
            { title: 'Programming', data: skills.programming, icon: '💻', color: '#3776AB' },
          ].map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + ci * 0.15, duration: 0.7 }}
              className="glass-strong rounded-2xl p-6 glow-box"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
              </div>

              {cat.data.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={0.5 + ci * 0.15 + i * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tools row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <h3 className="font-mono text-sm text-white/40 mb-4">TOOLS & PLATFORMS</h3>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.07 }}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-2 glass-strong rounded-lg text-sm font-mono text-white/70 border border-accent2/20 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
