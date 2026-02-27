//funcion para generar gotas de lluvia con estilos aleatorios
const drops = Array.from({ length: 40 }, (_, i) => ({
  left: `${2 + i * 2.4}%`,
  delay: `${(Math.random() * 2.5).toFixed(1)}s`,
  duration: `${(1.5 + Math.random()).toFixed(1)}s`,
  opacity: (0.08 + Math.random() * 0.12).toFixed(2),
  height: `${60 + Math.floor(Math.random() * 40)}px`,
}));

export const Lluvia = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {drops.map((drop, i) => (
        <div
          key={i}
          className="absolute top-0 w-px animate-rain-fall"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
            opacity: drop.opacity,
            height: drop.height,
            background: `linear-gradient(to bottom, transparent, var(--color-primary))`,
          }}
        />
      ))}
    </div>
  );
};