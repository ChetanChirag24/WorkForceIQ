import { Users } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import { diversityData, diversityTrend } from "@/data/mockData";
import GlobeScene from "@/components/GlobeScene";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="glass-card p-3 text-xs">
      <p className="font-semibold text-foreground mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color }}>{p.name}: {p.value}%</p>
      ))}
    </div>
  );
};

const Diversity = () => {
  return (
    <div className="space-y-6">
      {/* Hero with globe */}
      <div className="glass-card p-6 flex items-center gap-6 animate-slide-up overflow-hidden relative">
        <div className="h-40 w-40 flex-shrink-0">
          <GlobeScene className="w-full h-full" interactive={false} />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold gradient-text mb-1">Global Diversity Index</h2>
          <p className="text-sm text-muted-foreground mb-3">Tracking representation across 4 stakeholder views with row-level security</p>
          <div className="flex gap-6">
            <div>
              <span className="metric-value text-2xl">0.74</span>
              <p className="stat-label">Diversity Score</p>
            </div>
            <div>
              <span className="metric-value text-2xl text-success">+2.1%</span>
              <p className="stat-label">QoQ Change</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Female Representation" value={42} suffix="%" icon={<Users className="h-5 w-5" />} change={2.6} delay={0} pulse="success" />
        <MetricCard title="Minority in Leadership" value={35} suffix="%" icon={<Users className="h-5 w-5" />} change={5.2} delay={100} pulse="success" />
        <MetricCard title="Pay Equity Ratio" value={0.96} decimals={2} icon={<Users className="h-5 w-5" />} change={1.1} delay={200} />
        <MetricCard title="ERG Participation" value={68} suffix="%" icon={<Users className="h-5 w-5" />} change={8.4} delay={300} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Pie Charts */}
        {diversityData.map((cat, ci) => (
          <div key={cat.category} className="glass-card p-5 animate-slide-up" style={{ animationDelay: `${400 + ci * 100}ms`, animationFillMode: "backwards" }}>
            <h3 className="text-sm font-semibold mb-4">{cat.category} Distribution</h3>
            <div className="flex items-center gap-6">
              <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                  <Pie data={cat.groups} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} animationDuration={1500}>
                    {cat.groups.map((g, i) => (
                      <Cell key={i} fill={g.color} stroke="transparent" />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v: number) => `${v}%`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2">
                {cat.groups.map((g) => (
                  <div key={g.name} className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ background: g.color }} />
                    <span className="text-xs text-muted-foreground">{g.name}</span>
                    <span className="text-xs font-mono font-semibold ml-auto">{g.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trend */}
      <div className="glass-card p-5 animate-slide-up" style={{ animationDelay: "600ms", animationFillMode: "backwards" }}>
        <h3 className="text-sm font-semibold mb-4">Diversity Trend (Quarterly)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={diversityTrend}>
            <defs>
              <linearGradient id="femaleGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(260, 70%, 60%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(260, 70%, 60%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="minorityGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(187, 92%, 52%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(187, 92%, 52%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 25%, 18%)" />
            <XAxis dataKey="quarter" tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Area type="monotone" dataKey="female" stroke="hsl(260, 70%, 60%)" fill="url(#femaleGrad)" strokeWidth={2} name="Female %" animationDuration={2000} />
            <Area type="monotone" dataKey="minority" stroke="hsl(187, 92%, 52%)" fill="url(#minorityGrad)" strokeWidth={2} name="Minority %" animationDuration={2000} />
            <Area type="monotone" dataKey="leadership" stroke="hsl(152, 70%, 45%)" fill="none" strokeWidth={2} strokeDasharray="5 5" name="Leadership %" animationDuration={2000} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Diversity;
