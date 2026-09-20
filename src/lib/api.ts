import { alerts, buildFreightSeries, contractStrategies, idleRisks, opportunities, ports, routes, vessels } from "./mockData";

// ─── Backend integration point ───────────────────────────────────────────────
// Every screen in the app reads data ONLY through this module.
// To connect a real backend, set VITE_API_URL in your .env (e.g. http://localhost:4000)
// and implement the matching endpoints server-side — no component changes needed.
//
// Expected endpoints (GET, JSON responses matching the types in ./types):
//   GET /freight-forecast?vessel=Panamax&horizon=30  -> FreightPoint[]
//   GET /routes                                      -> Route[]
//   GET /ports                                       -> Port[]
//   GET /vessels                                     -> Vessel[]
//   GET /market-alerts                               -> MarketAlert[]
//   GET /idle-risks                                  -> IdleRisk[]
//   GET /charter-opportunities                       -> CharterOpportunity[]
//   GET /contract-strategy                           -> ContractStrategy[]

const API_URL = import.meta.env["VITE_API_URL"] as string | undefined;
const demoDelay = (ms = 260) => new Promise((resolve) => setTimeout(resolve, ms));

async function get<T>(path: string, mock: () => T | Promise<T>, delay = 120): Promise<T> {
  if (API_URL) {
    const res = await fetch(`${API_URL}${path}`);
    if (!res.ok) throw new Error(`API ${path} failed: ${res.status}`);
    return (await res.json()) as T;
  }
  await demoDelay(delay);
  return mock();
}

export const getFreightForecast = (vessel = "Panamax", horizon = 30) =>
  get(`/freight-forecast?vessel=${vessel}&horizon=${horizon}`, () => buildFreightSeries(vessel, horizon));
export const getRoutes = () => get("/routes", () => routes);
export const getPorts = () => get("/ports", () => ports);
export const getVessels = () => get("/vessels", () => vessels);
export const getMarketAlerts = () => get("/market-alerts", () => alerts);
export const getIdleRisks = () => get("/idle-risks", () => idleRisks);
export const getCharterOpportunities = () => get("/charter-opportunities", () => opportunities);
export const getContractStrategy = () => get("/contract-strategy", () => contractStrategies);
