
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import THCServeSmart from "./pages/THCServeSmart";
import CashomInitiation from "./pages/CashomInitiation";
import CannabisHospitalityCertification from "./pages/CannabisHospitalityCertification";
import Team from "./pages/Team";
import Signup from "./pages/Signup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<THCServeSmart />} />
          <Route path="/thc-servesmart" element={<THCServeSmart />} />
          <Route path="/cashom-initiation" element={<CashomInitiation />} />
          <Route path="/cannabis-hospitality-certification" element={<CannabisHospitalityCertification />} />
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
