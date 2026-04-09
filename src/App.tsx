import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/context/ThemeContext";
import DashboardLayout from "@/components/DashboardLayout";
import AuthPage from "@/pages/AuthPage";
import Overview from "@/pages/Overview";
import TurnoverRisk from "@/pages/TurnoverRisk";
import Diversity from "@/pages/Diversity";
import Recruitment from "@/pages/Recruitment";
import Alerts from "@/pages/Alerts";
import Pipeline from "@/pages/Pipeline";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<DashboardLayout><Overview /></DashboardLayout>} />
            <Route path="/turnover" element={<DashboardLayout><TurnoverRisk /></DashboardLayout>} />
            <Route path="/diversity" element={<DashboardLayout><Diversity /></DashboardLayout>} />
            <Route path="/recruitment" element={<DashboardLayout><Recruitment /></DashboardLayout>} />
            <Route path="/alerts" element={<DashboardLayout><Alerts /></DashboardLayout>} />
            <Route path="/pipeline" element={<DashboardLayout><Pipeline /></DashboardLayout>} />
            <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
