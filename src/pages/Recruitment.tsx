import { Briefcase, Clock, Users, TrendingDown } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";
import { openReqs, reqAgingData, pipelineStages } from "@/data/mockData";
import { useState } from "react";

const priorityColor: Record<string, string> = {
  critical: "text-destructive",
  high: "text-warning",
  medium: "text-primary",
  low: "text-success",
};

const priorityDot: Record<string, string> = {
  critical: "pulse-dot-danger",
  high: "pulse-dot-warning",
  medium: "",
  low: "",
};

const Recruitment = () => {
  const [filter, setFilter] = useState<string>("all");
  const filtered = filter === "all" ? openReqs : openReqs.filter(r => r.priority === filter);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Open Requisitions" value={58} icon={<Briefcase className="h-5 w-5" />} change={12} delay={0} />
        <MetricCard title="Avg Days to Fill" value={34} icon={<Clock className="h-5 w-5" />} change={-8} delay={100} pulse="success" />
        <MetricCard title="Offer Accept Rate" value={75} suffix="%" icon={<Users className="h-5 w-5" />} change={3.2} delay={200} />
        <MetricCard title="Cost per Hire" value={4250} prefix="$" icon={<TrendingDown className="h-5 w-5" />} change={-5} delay={300} pulse="success" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Funnel */}
        <div className="glass-card p-5 animate-slide-up" style={{ animationDelay: "400ms", animationFillMode: "backwards" }}>
          <h3 className="text-sm font-semibold mb-4">Recruitment Funnel</h3>
          <div className="space-y-4">
            {pipelineStages.map((stage, i) => (
              <div key={stage.stage} className="animate-slide-up" style={{ animationDelay: `${500 + i * 80}ms`, animationFillMode: "backwards" }}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">{stage.stage}</span>
                  <div className="flex gap-3">
                    <span className="font-mono font-semibold">{stage.count}</span>
                    <span className="text-muted-foreground">{stage.conversion}%</span>
                  </div>
                </div>
                <div className="h-3 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-[1500ms] ease-out"
                    style={{
                      width: `${stage.conversion}%`,
                      background: `linear-gradient(90deg, hsl(187, 92%, 52%), hsl(260, 70%, 60%))`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Req Aging */}
        <div className="glass-card p-5 animate-slide-up" style={{ animationDelay: "500ms", animationFillMode: "backwards" }}>
          <h3 className="text-sm font-semibold mb-4">Requisition Aging Distribution</h3>
          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={reqAgingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 25%, 18%)" />
              <XAxis dataKey="range" tick={{ fontSize: 10, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="count" name="Requisitions" radius={[4, 4, 0, 0]} animationDuration={1500}>
                {reqAgingData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Open Reqs Table */}
      <div className="glass-card p-5 animate-slide-up" style={{ animationDelay: "600ms", animationFillMode: "backwards" }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold">Open Requisitions</h3>
          <div className="flex gap-1">
            {["all", "critical", "high", "medium", "low"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider transition-colors ${
                  filter === f ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-2 text-muted-foreground font-medium">ID</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Position</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Dept</th>
                <th className="text-center py-2 text-muted-foreground font-medium">Days Open</th>
                <th className="text-center py-2 text-muted-foreground font-medium">Candidates</th>
                <th className="text-center py-2 text-muted-foreground font-medium">Priority</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((req, i) => (
                <tr key={req.id} className="border-b border-border/30 hover:bg-secondary/30 transition-colors animate-slide-up" style={{ animationDelay: `${700 + i * 50}ms`, animationFillMode: "backwards" }}>
                  <td className="py-2.5 font-mono text-muted-foreground">{req.id}</td>
                  <td className="py-2.5 font-medium">{req.title}</td>
                  <td className="py-2.5 text-muted-foreground">{req.dept}</td>
                  <td className="py-2.5 text-center font-mono">{req.days}</td>
                  <td className="py-2.5 text-center font-mono">{req.candidates}</td>
                  <td className="py-2.5 text-center">
                    <span className={`inline-flex items-center gap-1.5 ${priorityColor[req.priority]}`}>
                      {priorityDot[req.priority] && <span className={priorityDot[req.priority]} />}
                      {req.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
