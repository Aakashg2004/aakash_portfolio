import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Terminal from '../Terminal';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: '⌥', color: '#fff', desc: 'github.com/aakash' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in', color: '#0A66C2', desc: 'linkedin.com/in/aakash' },
  { label: 'Email', href: 'mailto:aakashguru725@gmail.com', icon: '✉', color: '#6c63ff', desc: 'aakashguru725@gmail.com' },
  { label: 'Phone', href: 'tel:+916380267379', icon: '☎', color: '#00d4ff', desc: '+91 6380267379' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(108,99,255,0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(168,85,247,0.06) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div ref={ref} className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-accent text-sm mb-2">$ ssh aakash@hire.me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-accent to-transparent mx-auto" />
          <p className="mt-4 text-white/40 text-sm max-w-md mx-auto">
            Open to internships, full-time DevOps/Cloud roles, and interesting collaboration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">Interactive Terminal</h3>
            <Terminal />

            {/* Social links */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass rounded-xl p-4 flex items-center gap-3 border border-white/5 hover:border-white/15 transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0 transition-all duration-300"
                    style={{ background: `${link.color}20`, color: link.color }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white/80">{link.label}</div>
                    <div className="text-xs font-mono text-white/30 truncate">{link.desc}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h3 className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">Send a Message</h3>
            <div className="glass-strong rounded-2xl p-8 glow-box">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl mb-4">🚀</div>
                  <h4 className="font-display text-xl font-semibold mb-2">Message sent!</h4>
                  <p className="text-white/40 text-sm">I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { field: 'name', label: 'Your Name', type: 'text', placeholder: 'Recruiter Name' },
                    { field: 'email', label: 'Email Address', type: 'email', placeholder: 'recruiter@company.com' },
                  ].map(({ field, label, type, placeholder }) => (
                    <div key={field}>
                      <label className="block text-xs font-mono text-white/40 mb-2 uppercase tracking-wider">{label}</label>
                      <input
                        type={type}
                        value={formState[field]}
                        onChange={e => setFormState(prev => ({ ...prev, [field]: e.target.value }))}
                        placeholder={placeholder}
                        required
                        className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm font-mono text-white placeholder-white/20 focus:outline-none focus:border-accent/40 focus:bg-accent/5 transition-all duration-300"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-mono text-white/40 mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      value={formState.message}
                      onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Hi Aakash, we'd love to discuss a DevOps role..."
                      required
                      rows={5}
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm font-mono text-white placeholder-white/20 focus:outline-none focus:border-accent/40 focus:bg-accent/5 transition-all duration-300 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(108,99,255,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent2 font-mono text-sm font-medium text-white relative overflow-hidden group"
                  >
                    <span className="relative z-10">Send Message →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
