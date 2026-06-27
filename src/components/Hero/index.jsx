import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import { personalInfo } from '../../utils/data';

function AnimatedSphere() {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.15;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={mesh} args={[1.6, 100, 200]} scale={1}>
        <MeshDistortMaterial
          color="#6c63ff"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
}

function OrbitRings() {
  const group = useRef();
  useFrame((state) => {
    group.current.rotation.y = state.clock.elapsedTime * 0.3;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
  });
  return (
    <group ref={group}>
      {[2.5, 3.2, 4].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.3, 0, i * 0.5]}>
          <torusGeometry args={[r, 0.015, 16, 100]} />
          <meshStandardMaterial color={['#6c63ff', '#a855f7', '#00d4ff'][i]} transparent opacity={0.4 - i * 0.1} />
        </mesh>
      ))}
    </group>
  );
}

const codeSnippets = [
  { code: 'docker run -d -p 80:8080 app:latest', pos: 'top-24 left-10', delay: 0 },
  { code: 'kubectl apply -f deployment.yaml', pos: 'top-40 right-8', delay: 1 },
  { code: 'jenkins pipeline { stages { ... } }', pos: 'bottom-40 left-6', delay: 2 },
  { code: 'aws ec2 run-instances --image-id ami', pos: 'bottom-24 right-10', delay: 1.5 },
  { code: 'git push origin main', pos: 'top-1/2 left-4', delay: 0.5 },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(108,99,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(108,99,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050510]" />
      </div>

      {/* Floating glow orbs */}
      <motion.div
        animate={{ x: mousePos.x * 0.8, y: mousePos.y * 0.8 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #6c63ff, transparent)' }}
      />
      <motion.div
        animate={{ x: -mousePos.x * 0.5, y: -mousePos.y * 0.5 }}
        transition={{ type: 'spring', stiffness: 30, damping: 20 }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}
      />
      <motion.div
        animate={{ x: mousePos.x * 0.3, y: -mousePos.y * 0.3 }}
        transition={{ type: 'spring', stiffness: 20, damping: 20 }}
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }}
      />

      {/* Floating code snippets */}
      {codeSnippets.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: [0, -8, 0] }}
          transition={{ delay: s.delay + 1.5, duration: 4, repeat: Infinity, repeatType: 'reverse' }}
          className={`absolute ${s.pos} hidden lg:block z-10`}
        >
          <div className="glass px-3 py-1.5 rounded-lg">
            <span className="font-mono text-xs text-accent/70">$ {s.code}</span>
          </div>
        </motion.div>
      ))}

      {/* 3D Canvas */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-10 opacity-70">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#6c63ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
          <pointLight position={[0, 0, 5]} intensity={0.8} color="#00d4ff" />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          <AnimatedSphere />
          <OrbitRings />
        </Canvas>
      </div>

      {/* Hero content */}
      <div className="relative z-20 section-padding w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3"
          >
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-xs text-white/40">~/aakash/portfolio.sh</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-accent text-sm md:text-base mb-4"
          >
            $ whoami
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold mb-4 leading-none"
          >
            <span className="gradient-text">Aakash</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl font-mono text-white/70 mb-6 h-8"
          >
            <span className="text-accent">~/</span>
            <TypeAnimation
              sequence={personalInfo.roles.flatMap(r => [r, 2000])}
              wrapper="span"
              repeat={Infinity}
              className="text-white"
            />
            <span className="animate-blink text-accent ml-0.5">_</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white/50 text-base md:text-lg max-w-lg mb-10 leading-relaxed"
          >
            Building scalable cloud infrastructure and automating the future — one pipeline at a time.
            <span className="text-accent"> AWS · Docker · Jenkins · Python.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(108,99,255,0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-xl font-mono text-sm font-medium bg-gradient-to-r from-accent to-accent2 text-white relative overflow-hidden group"
            >
              <span className="relative z-10">View Projects →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-xl font-mono text-sm font-medium gradient-border text-white/80 hover:text-white transition-colors duration-300"
            >
              Contact Me
            </motion.button>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-xl font-mono text-sm font-medium glass text-white/60 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <span>↓</span> Resume
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {personalInfo.stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass rounded-xl p-4 text-center glow-box-hover transition-all duration-300"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="font-display text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-white/40 font-mono mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="font-mono text-xs text-white/30">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
