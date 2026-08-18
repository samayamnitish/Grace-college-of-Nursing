import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";

import AdmissionsPopup from "./components/AdmissionsPopup";

// Pages
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ApplicationPage from "./pages/ApplicationPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import ManagementPage from "./pages/ManagementPage";
import StudentLifePage from "./pages/StudentLifePage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="grace-college-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-right" richColors />
        <BrowserRouter>
          <ScrollToTop />
          <AdmissionsPopup />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/apply" element={<ApplicationPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/student-life" element={<StudentLifePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
