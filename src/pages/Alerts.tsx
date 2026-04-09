import { Bell, AlertTriangle, AlertCircle, Info, CheckCircle2 } from "lucide-react";
import { alerts } from "@/data/mockData";
import { useState } from "react";

const typeConfig: Record<string, { icon: typeof Bell; colorClass: string; bgClass: string }> = {
  critical: { icon: AlertTriangle, colorClass: "text-destructive", bgClass: "bg-destructive/10" },
  warning: { icon: AlertCircle, colorClass: "text-warning", bgClass: "bg-warning/10" },
  info: { icon: Info, colorClass: "text-primary", bgClass: "bg-primary/10" },
};

const Alerts = () => {
  const [resolvedFilter, setResolvedFilter] = useState<"all" | "active" | "resolved">("all");
  const [localAlerts, setLocalAlerts] = useState(alerts);

  const filtered = localAlerts.filter((a) => {
    if (resolvedFilter === "active") return !a.resolved;
    if (resolvedFilter === "resolved") return a.resolved;
    return true;
  });

  const toggleResolve = (id: number) => {
    setLocalAlerts((prev) => prev.map((a) => (a.id === id ? { ...a, resolved: !a.resolved } : a)));
  };

  const activeCount = localAlerts.filter((a) => !a.resolved).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-card p-6 flex items-center justify-between animate-slide-up">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-destructive/10">
            <Bell className="h-6 w-6 text-destructive" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Airflow Anomaly Alerts</h2>
            <p className="text-xs text-muted-foreground">Attrition threshold breaches flagged within 24 hours</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="pulse-dot-danger" />
          <span className="text-sm font-mono font-semibold text-destructive">{activeCount}</span>
          <span className="text-xs text-muted-foreground">active</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {(["all", "active", "resolved"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setResolvedFilter(f)}
            className={`px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wider transition-all ${
              resolvedFilter === f
                ? "bg-primary/20 text-primary glow-border"
                : "glass-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Alert List */}
      <div className="space-y-3">
        {filtered.map((alert, i) => {
          const config = typeConfig[alert.type];
          const Icon = config.icon;
          return (
            <div
              key={alert.id}
              className={`glass-card p-4 flex items-center gap-4 transition-all duration-300 hover:glow-border animate-slide-up ${
                alert.resolved ? "opacity-50" : ""
              }`}
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
            >
              <div className={`p-2 rounded-lg ${config.bgClass}`}>
                <Icon className={`h-4 w-4 ${config.colorClass}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{alert.message}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{alert.time}</p>
              </div>
              <button
                onClick={() => toggleResolve(alert.id)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-medium uppercase tracking-wider transition-all ${
                  alert.resolved
                    ? "bg-success/10 text-success"
                    : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {alert.resolved ? (
                  <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Resolved</span>
                ) : (
                  "Resolve"
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alerts;
