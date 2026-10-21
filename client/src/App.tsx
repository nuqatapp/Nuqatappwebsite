import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AppLanding from "@/pages/app-landing";
import GurbSupport from "@/pages/gurb-support";
import { PrivacyPolicyAR, PrivacyPolicyEN } from "@/pages/privacy-policy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gurb/support" component={GurbSupport} />
      <Route path="/:slug/privacy-ar" component={PrivacyPolicyAR} />
      <Route path="/:slug/privacy-en" component={PrivacyPolicyEN} />
      <Route path="/:slug" component={AppLanding} />
      <Route component={NotFound} />
    </Switch>
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
