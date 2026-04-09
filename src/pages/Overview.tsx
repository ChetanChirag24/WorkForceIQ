import { Users, AlertTriangle, Briefcase, TrendingUp, Activity } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { headcountTrend, turnoverByDept, pipelineStages } from "@/data/mockData";
import heroBg from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="glass-card p-3 text-xs">
      <p className="font-semibold text-foreground mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color }}>{p.name}: {p.value}</p>
      ))}
    </div>
  );
};

const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden h-48 glass-card">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" width={1920} height={600} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="relative z-10 p-8 flex flex-col justify-center h-full">
          <div className="flex items-center gap-2 mb-2">
            <span className="pulse-dot" />
            <span className="text-xs text-success font-medium">Live Pipeline</span>
          </div>
          <h1 className="text-2xl font-bold gradient-text mb-1">Workforce Planning Dashboard</h1>
          <p className="text-sm text-muted-foreground max-w-md">
            5,000-employee org · Tableau + Snowflake + dbt · Real-time anomaly detection
          </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Headcount" value={5000} icon={<Users className="h-5 w-5" />} change={2.4} delay={0} pulse="success" />
        <MetricCard title="Attrition Rate" value={8.7} suffix="%" decimals={1} icon={<AlertTriangle className="h-5 w-5" />} change={-1.2} delay={100} pulse="warning" />
        <MetricCard title="Open Requisitions" value={58} icon={<Briefcase className="h-5 w-5" />} change={12} delay={200} />
        <MetricCard title="Avg Days to Fill" value={34} icon={<TrendingUp className="h-5 w-5" />} change={-8} delay={300} pulse="success" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Headcount Trend */}
        <div className="lg:col-span-2 glass-card p-5 animate-slide-up" style={{ animationDelay: "400ms", animationFillMode: "backwards" }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Headcount Trend</h3>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">12 Months</span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={headcountTrend}>
              <defs>
                <linearGradient id="headcountGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(187, 92%, 52%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(187, 92%, 52%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 25%, 18%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
              <YAxis domain={[4750, 5050]} tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="count" stroke="hsl(187, 92%, 52%)" strokeWidth={2} fill="url(#headcountGrad)" name="Headcount" animationDuration={2000} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pipeline Funnel */}
        <div className="glass-card p-5 animate-slide-up" style={{ animationDelay: "500ms", animationFillMode: "backwards" }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Hiring Funnel</h3>
            <button onClick={() => navigate("/recruitment")} className="text-[10px] text-primary hover:underline">View All →</button>
          </div>
          <div className="space-y-3">
            {pipelineStages.map((stage, i) => (
              <div key={stage.stage} className="animate-slide-up" style={{ animationDelay: `${600 + i * 100}ms`, animationFillMode: "backwards" }}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{stage.stage}</span>
                  <span className="font-mono font-semibold">{stage.count}</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${stage.conversion}%`,
                      background: `linear-gradient(90deg, hsl(187, 92%, 52%), hsl(260, 70%, 60%))`,
                      animationDelay: `${600 + i * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dept Risk */}
      <div className="glass-card p-5 animate-slide-up" style={{ animationDelay: "700ms", animationFillMode: "backwards" }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold">Department Risk Scores</h3>
          <button onClick={() => navigate("/turnover")} className="text-[10px] text-primary hover:underline">Deep Dive →</button>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={turnoverByDept} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 25%, 18%)" horizontal={false} />
            <XAxis type="number" tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="dept" tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} width={90} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="risk" name="Risk Score" radius={[0, 4, 4, 0]} animationDuration={1500}>
              {turnoverByDept.map((entry, i) => (
                <rect key={i} fill={entry.risk > 40 ? "hsl(0, 72%, 55%)" : entry.risk > 25 ? "hsl(38, 92%, 55%)" : "hsl(152, 70%, 45%)"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;
