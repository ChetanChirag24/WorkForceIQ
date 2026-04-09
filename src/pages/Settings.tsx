import { Settings as SettingsIcon, Shield, Bell, Database, Eye } from "lucide-react";
import { useState } from "react";

const stakeholderGroups = [
  { name: "Executive Leadership", access: "Full org metrics", rls: true },
  { name: "Department Heads", access: "Own department only", rls: true },
  { name: "HR Business Partners", access: "Assigned business units", rls: true },
  { name: "Recruiters", access: "Recruitment pipeline only", rls: true },
];

const Settings = () => {
  const [alertThreshold, setAlertThreshold] = useState(12);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [slackAlerts, setSlackAlerts] = useState(true);

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="glass-card p-6 animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <SettingsIcon className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-lg font-bold">Dashboard Configuration</h2>
        </div>

        {/* Alert Threshold */}
        <div className="space-y-4">
          <div>
            <label className="stat-label mb-2 block">Attrition Alert Threshold</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={5}
                max={25}
                value={alertThreshold}
                onChange={(e) => setAlertThreshold(Number(e.target.value))}
                className="flex-1 accent-primary"
              />
              <span className="metric-value text-xl w-16 text-right">{alertThreshold}%</span>
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">Airflow will flag departments exceeding this rate</p>
          </div>

          <div className="border-t border-border/50 pt-4 space-y-3">
            <label className="stat-label mb-2 block">Notification Channels</label>
            {[
              { label: "Email Alerts", state: emailAlerts, set: setEmailAlerts, icon: Bell },
              { label: "Slack Notifications", state: slackAlerts, set: setSlackAlerts, icon: Bell },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{item.label}</span>
                </div>
                <button
                  onClick={() => item.set(!item.state)}
                  className={`w-10 h-5 rounded-full transition-colors relative ${item.state ? "bg-primary" : "bg-secondary"}`}
                >
                  <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-foreground transition-transform ${item.state ? "left-5" : "left-0.5"}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RLS Config */}
      <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "200ms", animationFillMode: "backwards" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-accent/10">
            <Shield className="h-5 w-5 text-accent" />
          </div>
          <h2 className="text-lg font-bold">Row-Level Security</h2>
        </div>
        <div className="space-y-3">
          {stakeholderGroups.map((group, i) => (
            <div
              key={group.name}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 animate-slide-up"
              style={{ animationDelay: `${300 + i * 80}ms`, animationFillMode: "backwards" }}
            >
              <div className="flex items-center gap-3">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{group.name}</p>
                  <p className="text-[10px] text-muted-foreground">{group.access}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-success font-medium">
                <Shield className="h-3 w-3" />
                RLS Active
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "400ms", animationFillMode: "backwards" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-success/10">
            <Database className="h-5 w-5 text-success" />
          </div>
          <h2 className="text-lg font-bold">Stack Details</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          {[
            { label: "Data Warehouse", value: "Snowflake" },
            { label: "Transformation", value: "dbt Core" },
            { label: "Orchestration", value: "Apache Airflow" },
            { label: "Visualization", value: "Tableau Server" },
            { label: "Project Period", value: "Nov 2024 – Mar 2025" },
            { label: "Org Size", value: "5,000 employees" },
          ].map((item) => (
            <div key={item.label} className="p-3 rounded-lg bg-secondary/30">
              <p className="text-muted-foreground text-[10px] uppercase tracking-wider">{item.label}</p>
              <p className="font-semibold mt-0.5">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
