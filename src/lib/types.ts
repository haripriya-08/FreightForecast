export type VesselType = "Handysize" | "Supramax" | "Panamax" | "Capesize";
export type Severity = "High" | "Medium" | "Low";
export type PortStatus = "Normal" | "Moderate" | "High Risk";
export type AlertCategory = "Freight" | "Port" | "Vessel" | "Weather" | "Market" | "Contract";

export interface FreightPoint {
  date: string;
  shortDate: string;
  historical?: number;
  forecast?: number;
  lower?: number;
  upper?: number;
}

export interface Route {
  id: string;
  origin: string;
  destination: string;
  vessel: VesselType;
  cargo: string;
  currentRate: number;
  weeklyChange: number;
  forecast30: number;
  congestion: PortStatus;
  risk: Severity;
  opportunity: "Strong" | "Watch" | "Fair" | "Low";
}

export interface Port {
  id: string;
  name: string;
  code: string;
  status: PortStatus;
  congestion: number;
  draft: number;
  loa: number;
  beam: number;
  handlingRate: number;
  turnaround: number;
  berthAvailability: number;
  waitingTime: number;
  trend: number[];
}

export interface Vessel {
  type: VesselType;
  capacity: number;
  draft: number;
  loa: number;
  beam: number;
  estimatedFreight: number;
  compatibility: number;
  utilization: number;
}

export interface MarketAlert {
  id: string;
  severity: Severity;
  category: AlertCategory;
  timestamp: string;
  route: string;
  title: string;
  description: string;
  impact: string;
  action: string;
}

export interface CharterOpportunity {
  id: string;
  route: string;
  vessel: VesselType;
  cargo: string;
  currentRate: number;
  forecastRate: number;
  savings: string;
  tag: string;
  recommendation: string;
}

export interface IdleRisk {
  vessel: string;
  route: string;
  eta: string;
  discharge: string;
  risk: Severity;
  idleDays: number;
  cost: string;
  alternative: string;
}

export interface ContractStrategy {
  name: string;
  freightCost: string;
  exposure: string;
  flexibility: string;
  certainty: string;
  availability: string;
  savings: string;
}

export interface ForecastFactor {
  name: string;
  score: number;
  direction: "Positive" | "Negative" | "Neutral";
  explanation: string;
}
