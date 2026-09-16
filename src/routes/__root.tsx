import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FreightIQ | Freight Intelligence" },
      { name: "description", content: "AI-powered freight forecasting and chartering intelligence for India's East Coast bulk cargo." },
      { property: "og:title", content: "FreightIQ | Freight Intelligence" },
      { property: "og:description", content: "Move from reactive spot chartering to predictive freight strategy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>;
}
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>; }
function ErrorComponent({ error }: { error: Error }) { useEffect(() => { reportLovableError(error, { boundary: "root" }); }, [error]); return <div className="grid min-h-screen place-items-center bg-background p-6"><div className="text-center"><h1 className="font-display text-4xl text-navy">FreightIQ</h1><p className="mt-2 text-muted-foreground">This workspace could not load. Refresh to try again.</p></div></div>; }
