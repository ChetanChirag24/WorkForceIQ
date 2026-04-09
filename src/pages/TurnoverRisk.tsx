import { AlertTriangle } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell, ScatterChart, Scatter, ZAxis } from "recharts";
import { turnoverByDept, turnoverTrend } from "@/data/mockData";

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

const riskColor = (risk: number) =>
  risk > 40 ? "hsl(0, 72%, 55%)" : risk > 25 ? "hsl(38, 92%, 55%)" : "hsl(152, 70%, 45%)";

const TurnoverRisk = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Overall Attrition" value={8.7} suffix="%" decimals={1} icon={<AlertTriangle className="h-5 w-5" />} change={-1.2} delay={0} pulse="warning" />
        <MetricCard title="Voluntary Turnover" value={6.2} suffix="%" decimals={1} icon={<AlertTriangle className="h-5 w-5" />} change={-0.8} delay={100} />
        <MetricCard title="High Risk Depts" value={3} icon={<AlertTriangle className="h-5 w-5" />} delay={200} pulse="danger" />
        <MetricCard title="90-Day Retention" value={94.2} suffix="%" decimals={1} icon={<AlertTriangle className="h-5 w-5" />} change={1.5} delay={300} pulse="success" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Turnover Trend */}
        <div className="glass-card p-5 animate-slide-up" style={{ animationDelay: "400ms", animationFillMode: "backwards" }}>
          <h3 className="text-sm font-semibold mb-4">Turnover Trend (12M)</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={turnoverTrend}>
              <defs>
                <linearGradient id="volGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(0, 72%, 55%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(0, 72%, 55%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="involGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(38, 92%, 55%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(38, 92%, 55%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 25%, 18%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="voluntary" stroke="hsl(0, 72%, 55%)" fill="url(#volGrad)" strokeWidth={2} name="Voluntary" animationDuration={2000} />
              <Area type="monotone" dataKey="involuntary" stroke="hsl(38, 92%, 55%)" fill="url(#involGrad)" strokeWidth={2} name="Involuntary" animationDuration={2000} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Risk by Department */}
        <div className="glass-card p-5 animate-slide-up" style={{ animationDelay: "500ms", animationFillMode: "backwards" }}>
          <h3 className="text-sm font-semibold mb-4">Risk Score by Department</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={turnoverByDept}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 25%, 18%)" />
              <XAxis dataKey="dept" tick={{ fontSize: 10, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="risk" name="Risk Score" radius={[4, 4, 0, 0]} animationDuration={1500}>
                {turnoverByDept.map((entry, i) => (
                  <Cell key={i} fill={riskColor(entry.risk)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Scatter: Headcount vs Attrition */}
      <div className="glass-card p-5 animate-slide-up" style={{ animationDelay: "600ms", animationFillMode: "backwards" }}>
        <h3 className="text-sm font-semibold mb-4">Headcount vs Attrition Rate (bubble = risk score)</h3>
        <ResponsiveContainer width="100%" height={280}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 25%, 18%)" />
            <XAxis type="number" dataKey="headcount" name="Headcount" tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
            <YAxis type="number" dataKey="attrition" name="Attrition %" tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
            <ZAxis type="number" dataKey="risk" range={[60, 400]} name="Risk Score" />
            <Tooltip content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              const d = payload[0].payload;
              return (
                <div className="glass-card p-3 text-xs">
                  <p className="font-semibold text-foreground">{d.dept}</p>
                  <p className="text-muted-foreground">Headcount: {d.headcount}</p>
                  <p className="text-muted-foreground">Attrition: {d.attrition}%</p>
                  <p className="text-muted-foreground">Risk: {d.risk}</p>
                </div>
              );
            }} />
            <Scatter data={turnoverByDept} fill="hsl(187, 92%, 52%)" fillOpacity={0.7} animationDuration={2000} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TurnoverRisk;
