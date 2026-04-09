import { ReactNode } from "react";
import AnimatedCounter from "./AnimatedCounter";
import { ArrowUp, ArrowDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  change?: number;
  icon: ReactNode;
  delay?: number;
  pulse?: "success" | "warning" | "danger";
}

const MetricCard = ({ title, value, prefix, suffix, decimals, change, icon, delay = 0, pulse }: MetricCardProps) => {
  return (
    <div
      className="glass-card p-5 hover:glow-border transition-all duration-500 group cursor-pointer animate-slide-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "backwards" }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-2.5 rounded-lg bg-secondary/80 text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        {pulse && (
          <span className={`pulse-dot${pulse === "warning" ? "-warning" : pulse === "danger" ? "-danger" : ""}`} />
        )}
      </div>
      <AnimatedCounter end={value} prefix={prefix} suffix={suffix} decimals={decimals} />
      <p className="stat-label mt-1">{title}</p>
      {change !== undefined && (
        <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${change >= 0 ? "text-success" : "text-destructive"}`}>
          {change >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
          {Math.abs(change)}% vs last quarter
        </div>
      )}
    </div>
  );
};

export default MetricCard;
