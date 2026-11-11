import { Router as WouterRouter, Switch, Route } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AppLanding from "@/pages/app-landing";
import GurbSupport from "@/pages/gurb-support";
import { PrivacyPolicyAR, PrivacyPolicyEN } from "@/pages/privacy-policy";

// Preview builds (VITE_HASH_ROUTING=1) route on the URL hash so the SPA works
// when hosted under a sub-path. Production keeps normal path routing.
const useHashRouting = import.meta.env.VITE_HASH_ROUTING === "1";

function Router() {
  return (
    <WouterRouter hook={useHashRouting ? useHashLocation : undefined}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gurb/support" component={GurbSupport} />
      <Route path="/:slug/privacy-ar" component={PrivacyPolicyAR} />
      <Route path="/:slug/privacy-en" component={PrivacyPolicyEN} />
      <Route path="/:slug" component={AppLanding} />
      <Route component={NotFound} />
    </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
