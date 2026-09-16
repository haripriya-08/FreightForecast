import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { FreightIQ } from "@/components/freightiq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FreightIQ | Freight Intelligence Dashboard" },
      { name: "description", content: "Forecast bulk freight rates, optimize vessels, read port constraints, and plan multi-voyage charter coverage." },
      { property: "og:title", content: "FreightIQ | Freight Intelligence Dashboard" },
      { property: "og:description", content: "From reactive spot chartering to predictive freight strategy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <><FreightIQ /><Toaster /></>;
}
