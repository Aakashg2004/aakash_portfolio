import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../../utils/data';

const timeline = [
  { year: '2022', title: 'Started B.Tech', desc: 'Enrolled in AI & Data Science at Muthayammal Engineering College', icon: '🎓' },
  { year: '2023', title: 'DSA Journey', desc: 'Solved 300+ problems on CodeChef, mastered algorithms and data structures', icon: '💻' },
  { year: '2024', title: 'Python Dev Intern', desc: 'Joined Optimus Technologies — built automation scripts, Linux ops, Git workflows', icon: '⚡' },
  { year: '2024', title: 'DevOps Pivot', desc: 'Mastered Jenkins, Docker, AWS, CI/CD. Built production pipeline for Java app', icon: '🚀' },
  { year: '2025', title: 'Cloud Certifications', desc: 'Earned ITIL 4, ServiceNow, Automation Anywhere certifications', icon: '🏆' },
  { year: '2026', title: 'Graduation', desc: 'Completing B.Tech — ready for full-time DevOps/Cloud engineering roles', icon: '🎯' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6c63ff, transparent)' }} />
      </div>

      <div ref={ref} className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-sm mb-2">$ cat about.txt</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="glass-strong rounded-2xl p-8 glow-box mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-2xl font-bold">
                  A
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">Aakash</h3>
                  <p className="text-white/50 text-sm font-mono">DevOps & Cloud Engineer</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400/70 font-mono">Open to opportunities</span>
                  </div>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed text-sm mb-6">
                {personalInfo.summary}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Location', val: 'Villupuram, TN', icon: '📍' },
                  { label: 'Email', val: 'aakashguru725@gmail.com', icon: '✉️' },
                  { label: 'Degree', val: 'B.Tech AI & DS', icon: '🎓' },
                  { label: 'Status', val: 'Final Year', icon: '📅' },
                ].map((item, i) => (
                  <div key={i} className="glass rounded-lg p-3">
                    <div className="text-xs text-white/30 font-mono mb-1">{item.icon} {item.label}</div>
                    <div className="text-xs text-white/70 font-mono truncate">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-wrap gap-2"
            >
              {['Python', 'Java', 'Bash', 'Linux', 'AWS', 'Docker', 'Jenkins', 'Git', 'Maven', 'CI/CD', 'Kubernetes'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1 glass rounded-full text-xs font-mono text-accent/80 border border-accent/20 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="font-display text-xl font-semibold mb-8 text-white/80">Career Timeline</h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent2 to-transparent" />

              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="relative flex gap-6 group"
                  >
                    {/* Dot */}
                    <div className="relative flex-shrink-0 w-12 h-12 rounded-xl glass-strong flex items-center justify-center text-lg z-10 border border-accent/20 group-hover:border-accent/50 transition-all duration-300">
                      {item.icon}
                      <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent/5 transition-all duration-300" />
                    </div>

                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-xs text-accent/60">{item.year}</span>
                        <h4 className="font-display text-sm font-semibold text-white/90">{item.title}</h4>
                      </div>
                      <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
