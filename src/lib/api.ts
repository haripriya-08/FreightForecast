import { alerts, buildFreightSeries, contractStrategies, idleRisks, opportunities, ports, routes, vessels } from "./mockData";

const demoDelay = (ms = 260) => new Promise((resolve) => setTimeout(resolve, ms));
export async function getFreightForecast(vessel = "Panamax", horizon = 30) { await demoDelay(); return buildFreightSeries(vessel, horizon); }
export async function getRoutes() { await demoDelay(120); return routes; }
export async function getPorts() { await demoDelay(120); return ports; }
export async function getVessels() { await demoDelay(120); return vessels; }
export async function getMarketAlerts() { await demoDelay(120); return alerts; }
export async function getIdleRisks() { await demoDelay(120); return idleRisks; }
export async function getCharterOpportunities() { await demoDelay(120); return opportunities; }
export async function getContractStrategy() { await demoDelay(120); return contractStrategies; }
