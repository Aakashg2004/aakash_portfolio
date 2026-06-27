import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience, education, certifications } from '../../utils/data';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />
      </div>

      <div ref={ref} className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-sm mb-2">$ cat experience.json</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm text-white/40 uppercase tracking-widest mb-6"
            >
              Work Experience
            </motion.h3>

            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-strong rounded-2xl p-6 mb-6 glow-box relative overflow-hidden group"
              >
                {/* Background accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent2 rounded-l-2xl" />

                <div className="ml-4">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h4 className="font-display text-lg font-semibold">{exp.role}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-accent text-sm font-mono">{exp.company}</span>
                        <span className="text-white/30 text-xs">•</span>
                        <span className="text-white/40 text-xs">{exp.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/20">
                        {exp.period}
                      </span>
                      <div className="text-xs text-white/30 mt-1">{exp.type}</div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + j * 0.08 }}
                        className="flex gap-3 text-sm text-white/50"
                      >
                        <span className="text-accent/60 flex-shrink-0 mt-1">▸</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="font-mono text-sm text-white/40 uppercase tracking-widest mb-6 mt-10"
            >
              Education
            </motion.h3>

            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent2 to-[#00d4ff] rounded-l-2xl" />
                <div className="ml-4">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-display text-base font-semibold">{edu.degree}</h4>
                      <p className="text-accent2/80 text-sm font-mono mt-1">{edu.institution}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs font-mono text-white/40">{edu.period}</span>
                      <div className="text-xs font-mono text-accent mt-1">{edu.grade}</div>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="text-xs text-white/40 flex gap-2">
                        <span className="text-accent2/50">▸</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm text-white/40 uppercase tracking-widest mb-6"
            >
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="glass rounded-xl p-5 flex items-center gap-4 border border-transparent hover:border-white/10 transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}30` }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-sm font-semibold">{cert.name}</h4>
                    <p className="text-xs text-white/40 font-mono mt-1">{cert.issuer}</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-xs">✓</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-10 glass-strong rounded-2xl p-6"
            >
              <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-5">Achievements</h4>
              <div className="space-y-4">
                {[
                  { label: 'DSA Problems on CodeChef', value: '300+', bar: 75, color: '#6c63ff' },
                  { label: 'Academic CGPA', value: '8.0/10', bar: 80, color: '#a855f7' },
                  { label: 'ICT Academy Programs', value: '3+', bar: 60, color: '#00d4ff' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs text-white/50 font-mono">{item.label}</span>
                      <span className="text-xs font-mono" style={{ color: item.color }}>{item.value}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.bar}%` } : {}}
                        transition={{ delay: 0.8 + i * 0.1, duration: 1 }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${item.color}80, ${item.color})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
