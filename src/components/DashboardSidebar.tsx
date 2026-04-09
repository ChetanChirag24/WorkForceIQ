import { LayoutDashboard, AlertTriangle, Users, Briefcase, Bell, Settings, Activity } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const mainNav = [
  { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
  { title: "Turnover Risk", url: "/turnover", icon: AlertTriangle },
  { title: "Diversity", url: "/diversity", icon: Users },
  { title: "Recruitment", url: "/recruitment", icon: Briefcase },
  { title: "Alerts", url: "/alerts", icon: Bell },
];

const secondaryNav = [
  { title: "Pipeline", url: "/pipeline", icon: Activity },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarContent className="pt-4">
        <div className={`px-4 mb-6 flex items-center gap-2 ${collapsed ? "justify-center" : ""}`}>
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Activity className="h-4 w-4 text-primary" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-sm font-bold text-foreground tracking-tight">HR Analytics</h1>
              <p className="text-[10px] text-muted-foreground">Workforce Planning</p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] tracking-[0.2em] text-muted-foreground/60">
            ANALYTICS
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={isActive(item.url) ? "nav-item-active" : ""}>
                    <NavLink to={item.url} end className="hover:bg-secondary/50 transition-colors" activeClassName="nav-item-active">
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] tracking-[0.2em] text-muted-foreground/60">
            SYSTEM
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className="hover:bg-secondary/50 transition-colors" activeClassName="nav-item-active">
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4" />
    </Sidebar>
  );
}
