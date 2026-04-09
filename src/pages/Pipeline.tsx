import { Activity, Database, Cloud, Cpu, CheckCircle2, Clock } from "lucide-react";

const pipelineNodes = [
  { id: 1, name: "Snowflake", desc: "Raw data ingestion", icon: Database, status: "active", time: "Last sync: 2m ago" },
  { id: 2, name: "dbt Transform", desc: "Staging → Marts", icon: Cpu, status: "active", time: "Last run: 15m ago" },
  { id: 3, name: "Airflow DAG", desc: "Anomaly detection", icon: Activity, status: "active", time: "Next run: 45m" },
  { id: 4, name: "Tableau", desc: "RLS-secured views", icon: Cloud, status: "active", time: "4 stakeholder groups" },
];

const Pipeline = () => {
  return (
    <div className="space-y-6">
      <div className="glass-card p-6 animate-slide-up">
        <h2 className="text-lg font-bold gradient-text mb-1">Data Pipeline Architecture</h2>
        <p className="text-xs text-muted-foreground">End-to-end data flow: Snowflake → dbt → Airflow → Tableau</p>
      </div>

      {/* Pipeline Visualization */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch">
        {pipelineNodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div key={node.id} className="flex-1 flex items-center gap-0">
              <div
                className="flex-1 glass-card p-5 hover:glow-border transition-all duration-500 animate-slide-up group cursor-pointer"
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: "backwards" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="pulse-dot" />
                </div>
                <h3 className="text-sm font-bold mb-0.5">{node.name}</h3>
                <p className="text-[10px] text-muted-foreground mb-2">{node.desc}</p>
                <div className="flex items-center gap-1 text-[10px] text-success">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Healthy</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-1">
                  <Clock className="h-3 w-3" />
                  <span>{node.time}</span>
                </div>
              </div>
              {i < pipelineNodes.length - 1 && (
                <div className="hidden lg:flex items-center px-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent animate-shimmer" />
                  <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-primary" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Pipeline Uptime", value: "99.7%", sub: "Last 30 days" },
          { label: "Avg Latency", value: "< 24h", sub: "Alert detection" },
          { label: "Models Deployed", value: "47", sub: "dbt models" },
        ].map((stat, i) => (
          <div key={stat.label} className="glass-card p-5 text-center animate-slide-up" style={{ animationDelay: `${600 + i * 100}ms`, animationFillMode: "backwards" }}>
            <p className="metric-value text-2xl">{stat.value}</p>
            <p className="stat-label mt-1">{stat.label}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pipeline;
