import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    let x = 0, y = 0, ox = 0, oy = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.left = x - 4 + 'px';
      dot.style.top = y - 4 + 'px';
    };

    const animate = () => {
      ox += (x - ox) * 0.12;
      oy += (y - oy) * 0.12;
      outline.style.left = ox - 20 + 'px';
      outline.style.top = oy - 20 + 'px';
      requestAnimationFrame(animate);
    };

    const addHover = () => outline.classList.add('hover');
    const removeHover = () => outline.classList.remove('hover');

    document.addEventListener('mousemove', move);
    const raf = requestAnimationFrame(animate);

    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={outlineRef} className="cursor-outline hidden md:block" />
    </>
  );
}
