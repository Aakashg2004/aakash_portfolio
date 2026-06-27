import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { terminalCommands } from '../../utils/data';

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Aakash\'s terminal v1.0.0' },
    { type: 'system', text: 'Type "help" to see available commands.' },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newEntry = { type: 'input', text: trimmed };
    setCmdHistory(prev => [trimmed, ...prev]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    const output = terminalCommands[trimmed];
    if (output) {
      setHistory(prev => [...prev, newEntry, { type: 'output', text: output }]);
    } else {
      setHistory(prev => [...prev, newEntry, {
        type: 'error',
        text: `Command not found: ${trimmed}\nType "help" for available commands.`,
      }]);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIdx = Math.min(historyIndex + 1, cmdHistory.length - 1);
      setHistoryIndex(newIdx);
      setInput(cmdHistory[newIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIdx = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIdx);
      setInput(newIdx === -1 ? '' : cmdHistory[newIdx]);
    }
  };

  const quickCommands = ['about', 'skills', 'projects', 'contact', 'help', 'clear'];

  return (
    <div
      className="glass-strong rounded-2xl overflow-hidden glow-box"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="font-mono text-xs text-white/40 ml-2">aakash@portfolio:~$</span>
        </div>
        <div className="flex gap-2">
          {quickCommands.map(cmd => (
            <button
              key={cmd}
              onClick={(e) => { e.stopPropagation(); runCommand(cmd); }}
              className="px-2 py-0.5 text-xs font-mono glass rounded text-white/40 hover:text-accent hover:border-accent/30 border border-white/5 transition-all duration-200"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal body */}
      <div className="p-4 h-72 overflow-y-auto font-mono text-sm">
        <AnimatePresence>
          {history.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`mb-1.5 ${
                entry.type === 'input' ? 'text-accent' :
                entry.type === 'error' ? 'text-red-400' :
                entry.type === 'system' ? 'text-white/30' :
                'text-green-400/80'
              }`}
            >
              {entry.type === 'input' && (
                <span className="text-white/40">~/aakash $ </span>
              )}
              <span className="whitespace-pre-wrap">{entry.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Input line */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-white/40">~/aakash $</span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            className="flex-1 bg-transparent text-accent outline-none caret-accent font-mono text-sm"
            placeholder="type a command..."
            autoComplete="off"
            spellCheck={false}
          />
          <span className="animate-blink text-accent">█</span>
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
