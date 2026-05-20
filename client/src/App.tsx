import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Certification from "./pages/Certification";
import Privacy from "./pages/Privacy";
import LegalNotice from "./pages/LegalNotice";
import Disclosure from "./pages/Disclosure";
import Apply from "./pages/Apply";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/activities" component={Activities} />
      <Route path="/certification" component={Certification} />
      <Route path="/apply" component={Apply} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/legal-notice" component={LegalNotice} />
      <Route path="/disclosure" component={Disclosure} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
