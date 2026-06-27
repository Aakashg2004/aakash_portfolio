import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const pipelineSteps = [
  {
    id: 'code',
    label: 'Code',
    icon: '💻',
    color: '#6c63ff',
    desc: 'Developer writes code locally using VS Code on Linux. Python scripts, Java services, Bash utilities.',
    tools: ['VS Code', 'Python', 'Java'],
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: '🐙',
    color: '#F05032',
    desc: 'Code pushed to GitHub repository. Pull requests, branch protection, code reviews enforced.',
    tools: ['Git', 'GitHub', 'PRs'],
  },
  {
    id: 'jenkins',
    label: 'Jenkins',
    icon: '🔧',
    color: '#D24939',
    desc: 'Jenkins detects push via webhook. Triggers Jenkinsfile pipeline automatically.',
    tools: ['Jenkins', 'Webhook', 'Pipeline'],
  },
  {
    id: 'maven',
    label: 'Maven',
    icon: '⚡',
    color: '#C71A36',
    desc: 'Maven builds the Java project, runs unit tests, packages as WAR artifact.',
    tools: ['Maven', 'JUnit', 'WAR'],
  },
  {
    id: 'docker',
    label: 'Docker',
    icon: '🐳',
    color: '#2496ED',
    desc: 'Application containerized into Docker image. Tagged and pushed to container registry.',
    tools: ['Docker', 'Dockerfile', 'Registry'],
  },
  {
    id: 'aws',
    label: 'AWS Deploy',
    icon: '☁️',
    color: '#FF9900',
    desc: 'Docker container deployed to AWS EC2. Apache Tomcat serves the application at scale.',
    tools: ['AWS EC2', 'Tomcat', 'S3'],
  },
];

export default function DevOps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeStep, setActiveStep] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [currentRunStep, setCurrentRunStep] = useState(-1);

  const runPipeline = async () => {
    setIsRunning(true);
    setCompletedSteps([]);
    setCurrentRunStep(-1);

    for (let i = 0; i < pipelineSteps.length; i++) {
      setCurrentRunStep(i);
      await new Promise(r => setTimeout(r, 800));
      setCompletedSteps(prev => [...prev, pipelineSteps[i].id]);
    }

    setCurrentRunStep(-1);
    setIsRunning(false);
  };

  return (
    <section id="devops" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(108,99,255,0.03) 0%, transparent 70%)',
          }}
        />
      </div>

      <div ref={ref} className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-sm mb-2">$ ./run-pipeline.sh</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            DevOps <span className="gradient-text">Pipeline</span>
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
          <p className="mt-4 text-white/40 text-sm max-w-xl">
            An interactive CI/CD workflow — the exact pipeline I built at Optimus Technologies. Click "Run Pipeline" to see it in action.
          </p>
        </motion.div>

        {/* Pipeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="glass-strong rounded-2xl p-8 mb-8"
        >
          {/* Pipeline header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-xs text-white/40">CI/CD Pipeline • Jenkins</span>
            </div>

            <motion.button
              onClick={runPipeline}
              disabled={isRunning}
              whileHover={{ scale: isRunning ? 1 : 1.05 }}
              whileTap={{ scale: isRunning ? 1 : 0.95 }}
              className={`px-5 py-2 rounded-lg font-mono text-sm transition-all duration-300 flex items-center gap-2 ${
                isRunning
                  ? 'bg-accent/20 text-accent/50 cursor-not-allowed'
                  : 'bg-gradient-to-r from-accent to-accent2 text-white hover:shadow-lg hover:shadow-accent/20'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isRunning ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} />
              {isRunning ? 'Running...' : '▶ Run Pipeline'}
            </motion.button>
          </div>

          {/* Pipeline steps - horizontal scroll on mobile */}
          <div className="overflow-x-auto pb-4">
            <div className="flex items-center gap-0 min-w-max">
              {pipelineSteps.map((step, i) => {
                const isDone = completedSteps.includes(step.id);
                const isActive = currentRunStep === i;

                return (
                  <div key={step.id} className="flex items-center">
                    <motion.div
                      onClick={() => setActiveStep(activeStep?.id === step.id ? null : step)}
                      whileHover={{ y: -4 }}
                      className={`relative flex flex-col items-center cursor-pointer w-24 group`}
                    >
                      {/* Step circle */}
                      <div className={`relative w-16 h-16 rounded-2xl flex flex-col items-center justify-center mb-3 transition-all duration-500 ${
                        isDone ? 'border-2' : isActive ? 'border-2' : 'border border-white/10'
                      }`}
                      style={{
                        borderColor: isDone || isActive ? step.color : undefined,
                        background: isDone ? `${step.color}20` : isActive ? `${step.color}15` : 'rgba(255,255,255,0.03)',
                        boxShadow: isDone || isActive ? `0 0 20px ${step.color}30` : undefined,
                      }}>
                        <span className="text-2xl">{step.icon}</span>
                        {isDone && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-green-400 flex items-center justify-center text-xs text-black font-bold"
                          >
                            ✓
                          </motion.div>
                        )}
                        {isActive && (
                          <div className="absolute inset-0 rounded-2xl animate-pulse"
                            style={{ background: `${step.color}20` }} />
                        )}
                      </div>

                      <span className="font-mono text-xs text-white/60 text-center leading-tight">{step.label}</span>
                    </motion.div>

                    {/* Connector line */}
                    {i < pipelineSteps.length - 1 && (
                      <div className="relative w-8 h-0.5 mx-1 flex-shrink-0">
                        <div className="absolute inset-0 bg-white/10 rounded" />
                        <motion.div
                          className="absolute inset-0 rounded"
                          style={{ background: `linear-gradient(90deg, ${step.color}, ${pipelineSteps[i+1].color})` }}
                          initial={{ scaleX: 0 }}
                          animate={{
                            scaleX: completedSteps.includes(step.id) && completedSteps.includes(pipelineSteps[i+1].id) ? 1 : 0
                          }}
                          transition={{ duration: 0.4 }}
                        />
                        {/* Arrow */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0"
                          style={{ borderLeft: '6px solid rgba(255,255,255,0.15)', borderTop: '3px solid transparent', borderBottom: '3px solid transparent' }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step detail panel */}
          {activeStep && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-6 glass rounded-xl p-5 border-l-2"
              style={{ borderColor: activeStep.color }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{activeStep.icon}</span>
                <h4 className="font-display font-semibold">{activeStep.label} Stage</h4>
              </div>
              <p className="text-sm text-white/50 mb-3">{activeStep.desc}</p>
              <div className="flex gap-2">
                {activeStep.tools.map(t => (
                  <span key={t} className="px-2 py-1 text-xs font-mono rounded-md"
                    style={{ background: `${activeStep.color}15`, color: activeStep.color, border: `1px solid ${activeStep.color}30` }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {!activeStep && (
            <p className="text-xs text-white/30 font-mono mt-6 text-center">
              ↑ Click any stage for details • Run the pipeline to see it animate
            </p>
          )}
        </motion.div>

        {/* Code snippet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <span className="font-mono text-xs text-white/30">Jenkinsfile</span>
          </div>
          <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">
            <div className="text-white/30 mb-1">// Aakash's Production CI/CD Pipeline</div>
            {[
              { t: 'pipeline {', c: 'text-accent2' },
              { t: '  agent any', c: 'text-white/50' },
              { t: '  stages {', c: 'text-accent2' },
              { t: '    stage("Git Checkout") {', c: 'text-[#00d4ff]' },
              { t: '      steps { git url: "github.com/aakash/app.git" }', c: 'text-white/60' },
              { t: '    }', c: 'text-[#00d4ff]' },
              { t: '    stage("Maven Build") {', c: 'text-[#FF9900]' },
              { t: '      steps { sh "mvn clean package -DskipTests" }', c: 'text-white/60' },
              { t: '    }', c: 'text-[#FF9900]' },
              { t: '    stage("Docker Build & Push") {', c: 'text-[#2496ED]' },
              { t: '      steps { sh "docker build -t aakash/app:latest ." }', c: 'text-white/60' },
              { t: '    }', c: 'text-[#2496ED]' },
              { t: '    stage("Deploy to AWS EC2") {', c: 'text-[#D24939]' },
              { t: '      steps { sh "./deploy.sh" }', c: 'text-white/60' },
              { t: '    }', c: 'text-[#D24939]' },
              { t: '  }', c: 'text-accent2' },
              { t: '}', c: 'text-accent2' },
            ].map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.04 }}
                className={line.c}
              >
                {line.t}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
