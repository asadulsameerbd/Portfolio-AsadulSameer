import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollTop = window.scrollY;
      const progress = (scrollTop / totalHeight) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const size = 60;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (scroll / 100) * circumference;

  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 cursor-pointer z-50 "
    >
      <svg width={size} height={size} className="rotate-[-90deg]">
        {/* background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1a1230"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />

        {/* gradient */}
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#AC70DB" />
            <stop offset="100%" stopColor="#635BC0" />
          </linearGradient>
        </defs>
      </svg>

      {/* icon */}
      <div className="absolute hover:scale-150 transform transition-all duration-300 inset-0 flex items-center justify-center">
        <FaArrowUp className="text-white text-sm" />
      </div>
    </div>
  );
};

export default ScrollProgress;
