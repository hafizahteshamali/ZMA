const FancyButton = ({ onClick, type, className, text }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`relative inline-flex items-center justify-center overflow-hidden text-[var(--text-color)] font-bold tracking-wider rounded-full border-2 border-white transition-all duration-300 h-14 lg:h-[50px] px-8 lg:px-0 text-[17px] min-w-[200px] ${className}`}
    >

      {/* Top border */}
      <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent to-[var(--text-hover-color)] border-anim-top"></span>

      {/* Right border */}
      <span className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent to-[var(--text-hover-color)] border-anim-right"></span>

      {/* Bottom border */}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-l from-transparent to-[var(--text-hover-color)] border-anim-bottom"></span>

      {/* Left border */}
      <span className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-t from-transparent to-[var(--text-hover-color)] border-anim-left"></span>

      <span className="relative z-10">{text}</span>

      <style jsx>{`
        @keyframes animateTop {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes animateRight {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        @keyframes animateBottom {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes animateLeft {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .border-anim-top {
          animation: 2s animateTop linear infinite;
        }
        .border-anim-right {
          animation: 2s animateRight linear -1s infinite;
        }
        .border-anim-bottom {
          animation: 2s animateBottom linear infinite;
        }
        .border-anim-left {
          animation: 2s animateLeft linear -1s infinite;
        }
      `}</style>
    </button>
  );
};

export default FancyButton;
