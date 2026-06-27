import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../../utils/data';

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.7 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative glass rounded-2xl overflow-hidden group cursor-default glow-box-hover transition-all duration-500"
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      {/* Hover glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}15, transparent 70%)` }}
      />

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: `${project.color}20`, border: `1px solid ${project.color}30` }}
            >
              {project.icon}
            </div>
            {project.featured && (
              <span className="text-xs font-mono px-2 py-0.5 rounded-full border text-white/50"
                style={{ borderColor: `${project.color}40` }}>
                Featured
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-colors text-sm"
              title="GitHub"
            >
              ⌥
            </motion.a>
            <motion.a
              href={project.demo}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-colors text-sm"
              title="Live Demo"
            >
              ↗
            </motion.a>
          </div>
        </div>

        <h3 className="font-display text-lg font-semibold mb-3 text-white group-hover:gradient-text transition-all">
          {project.title}
        </h3>

        <p className="text-sm text-white/50 leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-mono rounded-lg"
              style={{
                background: `${project.color}12`,
                color: `${project.color}cc`,
                border: `1px solid ${project.color}25`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom line animation */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6c63ff, transparent)' }} />
      </div>

      <div ref={ref} className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-sm mb-2">$ ls -la ./projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
          <p className="mt-4 text-white/40 text-sm max-w-xl">
            Real-world projects blending DevOps, automation, and software engineering principles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl font-mono text-sm text-white/50 hover:text-white hover:border-accent/40 border border-white/5 transition-all duration-300"
          >
            View all on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
