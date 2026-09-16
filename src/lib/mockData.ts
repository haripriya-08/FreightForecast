import type { CharterOpportunity, ContractStrategy, ForecastFactor, FreightPoint, IdleRisk, MarketAlert, Port, Route, Vessel } from "./types";

const round = (value: number) => Math.round(value * 100) / 100;

export const vesselTypes = ["Handysize", "Supramax", "Panamax", "Capesize"] as const;
export const origins = ["Australia", "USA", "Mozambique", "Russia", "Indonesia"] as const;
export const destinations = ["Paradip", "Vizag", "Gangavaram", "Gopalpur", "Dhamra", "Sagar-Sandheads", "Haldia"] as const;
export const cargos = ["Coal", "Iron Ore", "Other Bulk Cargo"] as const;

export const routes: Route[] = [
  { id: "au-paradip", origin: "Australia", destination: "Paradip", vessel: "Panamax", cargo: "Coal", currentRate: 23.8, weeklyChange: -3.1, forecast30: 21.4, congestion: "Moderate", risk: "Medium", opportunity: "Strong" },
  { id: "au-dhamra", origin: "Australia", destination: "Dhamra", vessel: "Capesize", cargo: "Coal", currentRate: 21.1, weeklyChange: -1.2, forecast30: 20.3, congestion: "Normal", risk: "Low", opportunity: "Low" },
  { id: "au-vizag", origin: "Australia", destination: "Vizag", vessel: "Panamax", cargo: "Coal", currentRate: 24.7, weeklyChange: -2.1, forecast30: 23.1, congestion: "Normal", risk: "Low", opportunity: "Fair" },
  { id: "id-paradip", origin: "Indonesia", destination: "Paradip", vessel: "Supramax", cargo: "Coal", currentRate: 24.6, weeklyChange: 1.6, forecast30: 25.2, congestion: "Moderate", risk: "Medium", opportunity: "Watch" },
  { id: "id-vizag", origin: "Indonesia", destination: "Vizag", vessel: "Supramax", cargo: "Iron Ore", currentRate: 25.2, weeklyChange: 2.4, forecast30: 27.1, congestion: "Normal", risk: "High", opportunity: "Watch" },
  { id: "id-gangavaram", origin: "Indonesia", destination: "Gangavaram", vessel: "Handysize", cargo: "Coal", currentRate: 22.9, weeklyChange: -0.7, forecast30: 22.1, congestion: "Normal", risk: "Low", opportunity: "Fair" },
  { id: "usa-haldia", origin: "USA", destination: "Haldia", vessel: "Handysize", cargo: "Other Bulk Cargo", currentRate: 28.4, weeklyChange: -0.6, forecast30: 27.8, congestion: "Moderate", risk: "Medium", opportunity: "Low" },
  { id: "mz-gopalpur", origin: "Mozambique", destination: "Gopalpur", vessel: "Supramax", cargo: "Coal", currentRate: 26.0, weeklyChange: -2.0, forecast30: 24.5, congestion: "Normal", risk: "Low", opportunity: "Fair" },
  { id: "ru-sagar", origin: "Russia", destination: "Sagar-Sandheads", vessel: "Panamax", cargo: "Coal", currentRate: 27.3, weeklyChange: 1.1, forecast30: 28.0, congestion: "High Risk", risk: "High", opportunity: "Watch" },
];

const portSeed: Omit<Port, "trend">[] = [
  { id: "paradip", name: "Paradip", code: "INPRT", status: "Moderate", congestion: 62, draft: 14.5, loa: 250, beam: 40, handlingRate: 55_000, turnaround: 2.8, berthAvailability: 68, waitingTime: 16 },
  { id: "vizag", name: "Visakhapatnam", code: "INVTZ", status: "Normal", congestion: 38, draft: 16.0, loa: 275, beam: 45, handlingRate: 62_000, turnaround: 2.2, berthAvailability: 81, waitingTime: 9 },
  { id: "gangavaram", name: "Gangavaram", code: "INGGV", status: "Normal", congestion: 31, draft: 18.0, loa: 300, beam: 48, handlingRate: 70_000, turnaround: 1.9, berthAvailability: 86, waitingTime: 7 },
  { id: "gopalpur", name: "Gopalpur", code: "INGPR", status: "Normal", congestion: 28, draft: 13.5, loa: 220, beam: 36, handlingRate: 42_000, turnaround: 2.6, berthAvailability: 73, waitingTime: 12 },
  { id: "dhamra", name: "Dhamra", code: "INDHM", status: "Normal", congestion: 35, draft: 18.5, loa: 300, beam: 48, handlingRate: 75_000, turnaround: 1.8, berthAvailability: 88, waitingTime: 6 },
  { id: "sagar", name: "Sagar-Sandheads", code: "INSSZ", status: "High Risk", congestion: 79, draft: 12.5, loa: 210, beam: 34, handlingRate: 35_000, turnaround: 4.4, berthAvailability: 42, waitingTime: 31 },
  { id: "haldia", name: "Haldia", code: "INHLD", status: "Moderate", congestion: 58, draft: 10.5, loa: 190, beam: 30, handlingRate: 31_000, turnaround: 3.7, berthAvailability: 57, waitingTime: 22 },
];
export const ports: Port[] = portSeed.map((port, index) => ({ ...port, trend: [port.congestion - 12, port.congestion - 6, port.congestion - 9, port.congestion - 2, port.congestion + (index % 2 ? 3 : 8), port.congestion] }));

export const vessels: Vessel[] = [
  { type: "Handysize", capacity: 38_000, draft: 9.8, loa: 180, beam: 28.0, estimatedFreight: 27.9, compatibility: 88, utilization: 74 },
  { type: "Supramax", capacity: 58_000, draft: 11.8, loa: 200, beam: 32.2, estimatedFreight: 25.2, compatibility: 94, utilization: 82 },
  { type: "Panamax", capacity: 82_000, draft: 13.8, loa: 229, beam: 32.3, estimatedFreight: 23.8, compatibility: 92, utilization: 91 },
  { type: "Capesize", capacity: 170_000, draft: 17.4, loa: 285, beam: 45.0, estimatedFreight: 20.6, compatibility: 64, utilization: 86 },
];

export const opportunities: CharterOpportunity[] = [
  { id: "opp-1", route: "Australia → Paradip", vessel: "Panamax", cargo: "Coal", currentRate: 23.8, forecastRate: 21.4, savings: "$620K", tag: "Strong window", recommendation: "Consider entering a 3–5 voyage contract within the next 2 weeks." },
  { id: "opp-2", route: "Indonesia → Vizag", vessel: "Supramax", cargo: "Iron ore", currentRate: 25.2, forecastRate: 27.1, savings: "$410K", tag: "Lock capacity", recommendation: "Consider locking capacity before the projected rate increase." },
  { id: "opp-3", route: "Mozambique → Gopalpur", vessel: "Supramax", cargo: "Coal", currentRate: 26.0, forecastRate: 24.5, savings: "$290K", tag: "Fair window", recommendation: "Keep a flexible 2-voyage option open for late-month liftings." },
];

export const alerts: MarketAlert[] = [
  { id: "alert-1", severity: "High", category: "Freight", timestamp: "12 min ago", route: "Indonesia → East Coast India", title: "Freight volatility detected", description: "Supramax indications widened as prompt tonnage tightened across Indonesia.", impact: "+8–12% rate volatility", action: "Review spot requirements and evaluate forward contract coverage." },
  { id: "alert-2", severity: "Medium", category: "Port", timestamp: "38 min ago", route: "Paradip", title: "Port congestion increasing", description: "Berth queue expanded after a weather-related loading delay.", impact: "+16h expected waiting", action: "Add laycan buffer and monitor draft windows." },
  { id: "alert-3", severity: "Low", category: "Vessel", timestamp: "1h ago", route: "Australia", title: "Panamax availability improving", description: "Open tonnage count is above the 30-day lane average.", impact: "-2.4% rate pressure", action: "Maintain optionality; no immediate action required." },
  { id: "alert-4", severity: "Medium", category: "Weather", timestamp: "2h ago", route: "Bay of Bengal", title: "Monsoon swell watch", description: "Short-term sea state may affect pilotage at exposed berths.", impact: "12–18h schedule risk", action: "Confirm vessel readiness and alternate discharge sequence." },
  { id: "alert-5", severity: "Low", category: "Contract", timestamp: "4h ago", route: "Australia → Dhamra", title: "Forward coverage gap", description: "October demand remains 22% uncovered against the planning baseline.", impact: "$180K exposure", action: "Review medium-term coverage in Contract Strategy." },
];

export const idleRisks: IdleRisk[] = [
  { vessel: "MV Ocean Star", route: "Australia → Paradip", eta: "18 Sep", discharge: "20 Sep", risk: "High", idleDays: 2.4, cost: "$42K", alternative: "Indonesia → Vizag" },
  { vessel: "MV Eastern Dawn", route: "Indonesia → Vizag", eta: "21 Sep", discharge: "22 Sep", risk: "Medium", idleDays: 1.2, cost: "$24K", alternative: "Gangavaram" },
  { vessel: "MV Coral Wind", route: "USA → Haldia", eta: "23 Sep", discharge: "25 Sep", risk: "Medium", idleDays: 1.8, cost: "$31K", alternative: "Dhamra" },
  { vessel: "MV Blue Meridian", route: "Mozambique → Gopalpur", eta: "25 Sep", discharge: "26 Sep", risk: "Low", idleDays: 0.6, cost: "$11K", alternative: "Hold current plan" },
  { vessel: "MV Kaveri", route: "Russia → Sagar-Sandheads", eta: "27 Sep", discharge: "30 Sep", risk: "High", idleDays: 3.1, cost: "$58K", alternative: "Haldia" },
];

export const contractStrategies: ContractStrategy[] = [
  { name: "Spot Market", freightCost: "$25.40 / MT", exposure: "High", flexibility: "High", certainty: "Low", availability: "Reactive", savings: "Baseline" },
  { name: "Short-Term Contract", freightCost: "$23.85 / MT", exposure: "Medium", flexibility: "Medium", certainty: "Medium", availability: "Planned", savings: "$780K" },
  { name: "Medium-Term Multiple Voyage", freightCost: "$23.10 / MT", exposure: "Low", flexibility: "Medium", certainty: "High", availability: "Secured", savings: "$1.47M" },
];

export const forecastFactors: ForecastFactor[] = [
  { name: "Vessel Supply", score: 74, direction: "Positive", explanation: "Open Panamax tonnage is easing on the Australia lane." },
  { name: "Cargo Demand", score: 58, direction: "Neutral", explanation: "Power-sector demand remains steady into October." },
  { name: "Port Congestion", score: 42, direction: "Negative", explanation: "Paradip queue risk offsets part of the downward rate signal." },
  { name: "Seasonal Effect", score: 67, direction: "Positive", explanation: "Post-monsoon operating conditions support smoother voyages." },
  { name: "Fuel Cost", score: 51, direction: "Neutral", explanation: "Bunker pricing is tracking close to the recent average." },
  { name: "Commodity Trend", score: 62, direction: "Positive", explanation: "Coal restocking plans support forward cargo visibility." },
];

export function buildFreightSeries(vessel: string = "Panamax", horizon = 30): FreightPoint[] {
  const base = vessel === "Capesize" ? 21.2 : vessel === "Supramax" ? 25.1 : vessel === "Handysize" ? 27.8 : 24.8;
  const points: FreightPoint[] = [];
  for (let index = 0; index < 90 + horizon; index += 1) {
    const historical = index < 90;
    const seasonal = Math.sin(index / 6) * 0.72;
    const momentum = historical ? Math.sin(index / 13) * 0.34 : -((index - 89) / horizon) * 1.6;
    const value = round(base + seasonal + momentum + (index % 7 === 0 ? 0.26 : -0.08));
    const date = new Date(Date.UTC(2026, 5, 24 + index));
    const label = `${date.getUTCDate()} ${date.toLocaleString("en", { month: "short", timeZone: "UTC" })}`;
    points.push(historical ? { date: label, shortDate: label, historical: value } : { date: label, shortDate: label, forecast: value, lower: round(value - 0.8 - index / 120), upper: round(value + 0.8 + index / 120) });
  }
  return points;
}
