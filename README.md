# FreightIQ — AI-Powered Freight Forecasting & Chartering Intelligence

Frontend for predictive freight strategy on India's East Coast bulk cargo routes.
Built with TanStack Start (React 19), TypeScript, Tailwind CSS v4, Recharts, and lucide-react.

## Run it

```bash
bun install
bun dev
```

## Project structure

```text
src/
  routes/
    __root.tsx        # Root layout, fonts, head metadata
    index.tsx         # App entry — renders FreightIQ + Toaster
  components/
    freightiq.tsx     # All screens: Landing, Dashboard, Forecast, Charter Planner,
                      # Vessel Optimizer, Port Intelligence, Idle Risk, Alerts,
                      # Contract Strategy, Reports, Settings
    ui/               # Reusable primitives (button, dialog, input, sheet, ...)
  lib/
    api.ts            # ★ Single data-access layer — backend integration point
    mockData.ts       # Deterministic demo data (used when no backend is set)
    types.ts          # All shared TypeScript interfaces
    utils.ts          # cn() class helper
  styles.css          # Design tokens (Light Maritime Paper theme)
```

## Connecting a real backend

Everything the UI displays flows through `src/lib/api.ts` — no component ever
reads mock data directly.

1. Create `.env` with your API base URL:

   ```env
   VITE_API_URL=http://localhost:4000
   ```

2. Implement these GET endpoints returning JSON matching `src/lib/types.ts`:

   | Endpoint | Returns |
   | --- | --- |
   | `/freight-forecast?vessel=…&horizon=…` | `FreightPoint[]` |
   | `/routes` | `Route[]` |
   | `/ports` | `Port[]` |
   | `/vessels` | `Vessel[]` |
   | `/market-alerts` | `MarketAlert[]` |
   | `/idle-risks` | `IdleRisk[]` |
   | `/charter-opportunities` | `CharterOpportunity[]` |
   | `/contract-strategy` | `ContractStrategy[]` |

3. That's it — when `VITE_API_URL` is set, the app fetches from your backend;
   when it is unset, it falls back to the built-in demo data. No other code changes needed.

## Notes

- All demo outputs are labeled "Demo Decision Model" — no real ML claims.
- Savings formula: `(spot rate − contract rate) × volume × voyages`.
