import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, Activity, BarChart3, Shield, Zap } from "lucide-react";
import GlobeScene from "@/components/GlobeScene";
import ThemeToggle from "@/components/ThemeToggle";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1200);
  };

  const inputClasses =
    "w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all duration-200";

  return (
    <div className="min-h-screen flex bg-background transition-colors duration-500">
      {/* Left Panel — Branding + Globe */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
        <div className="absolute inset-0 opacity-40">
          <GlobeScene className="w-full h-full" interactive={false} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background" />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col justify-between p-10 w-full"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateX(0)" : "translateX(-20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Top */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
              <Activity className="h-4.5 w-4.5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground tracking-tight">
              WorkforceIQ
            </span>
          </div>

          {/* Center */}
          <div className="max-w-md">
            <h1 className="text-3xl font-bold text-foreground leading-tight mb-4">
              People analytics that
              <br />
              <span className="gradient-text">drive decisions</span>
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              A modular workforce planning platform built on Snowflake and dbt, delivering
              turnover risk scores, diversity metrics, and requisition aging insights
              to the right stakeholders through row-level secured views.
            </p>

            {/* Feature pills */}
            <div className="space-y-3">
              {[
                { icon: BarChart3, text: "Real-time attrition monitoring across 8 departments" },
                { icon: Shield, text: "Row-level security for 4 stakeholder groups" },
                { icon: Zap, text: "Airflow anomaly alerts within 24-hour SLA" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-xs text-muted-foreground"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(12px)",
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.12}s`,
                  }}
                >
                  <div className="h-7 w-7 rounded-md bg-secondary/80 border border-border/50 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats */}
          <div className="flex gap-8">
            {[
              { value: "5,000", label: "Employees" },
              { value: "47", label: "dbt Models" },
              { value: "99.7%", label: "Pipeline Uptime" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(16px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.7 + i * 0.1}s`,
                }}
              >
                <p className="font-mono text-xl font-bold text-foreground">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel — Auth Form */}
      <div className="flex-1 lg:max-w-[480px] flex flex-col bg-background border-l border-border/40">
        {/* Top bar */}
        <div className="flex items-center justify-between p-5 border-b border-border/30">
          <div className="lg:hidden flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
              <Activity className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">WorkforceIQ</span>
          </div>
          <div className="lg:block hidden" />
          <ThemeToggle />
        </div>

        {/* Form content */}
        <div
          className="flex-1 flex items-center justify-center p-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <div className="w-full max-w-sm">
            {/* Tab Toggle */}
            <div className="flex gap-1 p-1 rounded-lg bg-muted/50 mb-8">
              {["Sign In", "Sign Up"].map((tab, i) => {
                const active = i === 0 ? isLogin : !isLogin;
                return (
                  <button
                    key={tab}
                    onClick={() => setIsLogin(i === 0)}
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                      active
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-1">
                {isLogin ? "Welcome back" : "Get started"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {isLogin
                  ? "Sign in to access your workforce analytics"
                  : "Create an account to start planning"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name (signup) */}
              <div
                className="transition-all duration-300 overflow-hidden"
                style={{
                  maxHeight: !isLogin ? "60px" : "0px",
                  opacity: !isLogin ? 1 : 0,
                  marginBottom: !isLogin ? "0px" : "-14px",
                }}
              >
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClasses}
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${inputClasses} pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
                    <input type="checkbox" className="rounded border-border accent-primary h-3.5 w-3.5" />
                    Remember me
                  </label>
                  <button type="button" className="text-xs text-primary hover:text-primary/80 transition-colors">
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 mt-2"
              >
                {loading ? (
                  <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    {isLogin ? "Sign In" : "Create Account"}
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-border" />
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* SSO */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                {
                  name: "Google",
                  svg: (
                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  ),
                },
                {
                  name: "Microsoft",
                  svg: (
                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                      <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
                      <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
                      <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
                      <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
                    </svg>
                  ),
                },
              ].map((provider) => (
                <button
                  key={provider.name}
                  type="button"
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => { setLoading(false); navigate("/dashboard"); }, 1000);
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:bg-muted/50 transition-all duration-200 active:scale-[0.98]"
                >
                  {provider.svg}
                  {provider.name}
                </button>
              ))}
            </div>

            {/* Bottom text */}
            <p className="text-center text-[11px] text-muted-foreground mt-6 leading-relaxed">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-medium hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-border/30 text-center">
          <p className="text-[10px] text-muted-foreground">
            © 2025 WorkforceIQ · Built with Tableau, Snowflake & dbt
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
