import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="h-screen w-full bg-[#020012] flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Glitch 404 */}
      <h1 className="text-8xl md:text-[150px] font-extrabold relative glitch">
        404
      </h1>

      {/* Text */}
      <p className="text-lg md:text-2xl mt-4 text-gray-300 animate-pulse">
        Page not found
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-8 px-6 py-2 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-600 hover:text-white transition"
      >
        ⬅ Go Home
      </Link>

      {/* CSS */}
      <style>
        {`
        .glitch {
          color: white;
          position: relative;
          animation: glitch 1s infinite;
        }

        .glitch::before,
        .glitch::after {
          content: "404";
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
        }

        .glitch::before {
          top: -2px;
          color: #ff00c1;
          animation: glitchTop 1s infinite linear alternate-reverse;
        }

        .glitch::after {
          top: 2px;
          color: #00fff9;
          animation: glitchBottom 1s infinite linear alternate-reverse;
        }

        @keyframes glitch {
          0% { transform: skew(0deg); }
          20% { transform: skew(5deg); }
          40% { transform: skew(-5deg); }
          60% { transform: skew(3deg); }
          80% { transform: skew(-3deg); }
          100% { transform: skew(0deg); }
        }

        @keyframes glitchTop {
          0% { clip-path: inset(0 0 80% 0); }
          50% { clip-path: inset(0 0 40% 0); }
          100% { clip-path: inset(0 0 80% 0); }
        }

        @keyframes glitchBottom {
          0% { clip-path: inset(80% 0 0 0); }
          50% { clip-path: inset(40% 0 0 0); }
          100% { clip-path: inset(80% 0 0 0); }
        }
        `}
      </style>
    </div>
  );
};

export default NotFound;
