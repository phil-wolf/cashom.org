import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import THCServePro from "./pages/THCServePro";
import CoursePage from "./pages/CoursePage";
import LoungeAttendant from "./pages/LoungeAttendant";
import Team from "./pages/Team";
import Signup from "./pages/Signup";
import PromoModal from "./components/PromoModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PromoModal />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/thc-servepro" element={<THCServePro />} />
          <Route path="/thc-servesmart" element={<THCServePro />} />
          <Route path="/courses/cannabis-lounge-attendant" element={<LoungeAttendant />} />
          <Route path="/courses/:slug" element={<CoursePage />} />
          {/* Legacy course URLs → new course pages */}
          <Route
            path="/cannabis-hospitality-certification"
            element={<Navigate to="/courses/certified-server-of-cannabis" replace />}
          />
          <Route
            path="/cannabis-activator-certification"
            element={<Navigate to="/courses/certified-steward-of-cannabis" replace />}
          />
          <Route
            path="/cashom-initiation"
            element={<Navigate to="/courses/cashom-level-1" replace />}
          />
          <Route path="/team" element={<Team />} />
          <Route path="/signup" element={<Signup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
