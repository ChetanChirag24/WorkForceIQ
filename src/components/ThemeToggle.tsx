import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative h-8 w-16 rounded-full border border-border/60 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-primary/30 overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(135deg, hsl(222, 47%, 8%), hsl(222, 40%, 14%))"
          : "linear-gradient(135deg, hsl(210, 60%, 92%), hsl(200, 50%, 85%))",
      }}
      aria-label="Toggle theme"
    >
      {/* Stars (dark mode) */}
      <span
        className="absolute top-1.5 left-2 h-1 w-1 rounded-full transition-all duration-500"
        style={{
          background: isDark ? "hsl(210, 40%, 70%)" : "transparent",
          transform: isDark ? "scale(1)" : "scale(0)",
        }}
      />
      <span
        className="absolute top-3 left-4 h-0.5 w-0.5 rounded-full transition-all duration-500"
        style={{
          background: isDark ? "hsl(210, 40%, 60%)" : "transparent",
          transform: isDark ? "scale(1)" : "scale(0)",
          transitionDelay: "100ms",
        }}
      />
      <span
        className="absolute bottom-2 left-3 h-0.5 w-0.5 rounded-full transition-all duration-500"
        style={{
          background: isDark ? "hsl(210, 40%, 55%)" : "transparent",
          transform: isDark ? "scale(1)" : "scale(0)",
          transitionDelay: "150ms",
        }}
      />

      {/* Cloud (light mode) */}
      <span
        className="absolute top-1 right-2.5 h-2 w-4 rounded-full transition-all duration-500"
        style={{
          background: isDark ? "transparent" : "hsl(0, 0%, 100%)",
          opacity: isDark ? 0 : 0.7,
          transform: isDark ? "translateX(8px)" : "translateX(0)",
        }}
      />

      {/* Thumb */}
      <span
        className="absolute top-1 h-6 w-6 rounded-full shadow-md flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
        style={{
          left: isDark ? "2px" : "calc(100% - 26px)",
          background: isDark
            ? "linear-gradient(135deg, hsl(220, 30%, 25%), hsl(220, 25%, 35%))"
            : "linear-gradient(135deg, hsl(40, 95%, 55%), hsl(35, 95%, 60%))",
          boxShadow: isDark
            ? "0 0 8px hsl(220, 30%, 30%)"
            : "0 0 12px hsl(40, 95%, 55%, 0.5)",
        }}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-foreground transition-transform duration-500 rotate-0" />
        ) : (
          <Sun className="h-3.5 w-3.5 transition-transform duration-500"  style={{ color: "hsl(30, 80%, 30%)" }} />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
