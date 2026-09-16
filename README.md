# Freight Navigator Pro

You are a senior frontend engineer and UI/UX designer specializing in logistics, maritime analytics, freight trading platforms, and data-heavy enterprise dashboards.

I am building a hackathon project based on this problem statement:

PROJECT:

Intelligent Freight Forecasting & Vessel Chartering Decision Support System

BUSINESS PROBLEM:

Bulk cargo procurement for India's East Coast ports currently relies heavily on daily spot-market exploration and reactive chartering decisions. Freight rates are volatile, and chartering teams have difficulty identifying the right time to enter short-term or medium-term multiple-voyage contracts.

The system must help logistics/chartering managers move from:

"multiple individual spot contracts"

to:

"planned short-term / medium-term multiple-voyage contracts"

The system should forecast freight rates, recommend suitable vessel types, account for port infrastructure constraints, identify idle-time risks, and provide alerts for market/port disruptions.

IMPORTANT:

Build ONLY the complete FRONTEND for now.

Do not build a real backend, database, authentication system, or real ML model.

Use realistic mock data and create clean service/API abstraction files so a real backend can be connected later.

TECH STACK:

- Next.js latest stable version

- React

- TypeScript

- HTML/JSX

- CSS

- Tailwind CSS is allowed

- Recharts or another lightweight chart library for charts

- Lucide React for icons

- No unnecessary UI libraries

- No Bootstrap

- No Material UI

- No Firebase

- No backend

DESIGN GOAL:

The application should look like a real enterprise maritime freight intelligence platform that could be shown to SIH judges, logistics managers, or recruiters.

Do NOT make it look like:

- a basic student dashboard

- a generic admin template

- a cryptocurrency dashboard

- a social media application

The visual language should feel like:

- maritime logistics

- shipping intelligence

- financial analytics

- enterprise SaaS

- professional control room

Use:

- dark navy / slate base colors

- white/light cards where appropriate

- blue/cyan accent colors

- subtle green for positive trends

- amber for warnings

- red only for critical alerts

- clean typography

- high information density without becoming cluttered

- rounded cards but not excessive "glassmorphism"

- subtle shadows

- professional charts

- responsive layout

APPLICATION NAME:

"FreightIQ"

Subtitle:

"AI-Powered Freight Forecasting & Chartering Intelligence"

==================================================

1. GLOBAL APPLICATION STRUCTURE

==================================================

Create a professional dashboard application with:

Left sidebar:

- FreightIQ logo

- Dashboard

- Freight Forecast

- Charter Planner

- Vessel Optimizer

- Port Intelligence

- Idle Risk

- Market Alerts

- Contract Strategy

- Reports

- Settings

Bottom of sidebar:

- User profile

- "Chartering Manager"

- Online indicator

Top header:

- Page title

- Current market status

- Search

- Notification icon

- Date/time

- User profile

The sidebar should collapse on smaller screens.

Use Next.js App Router.

Suggested structure:

app/

  page.tsx

  dashboard/

    page.tsx

  freight-forecast/

    page.tsx

  charter-planner/

    page.tsx

  vessel-optimizer/

    page.tsx

  port-intelligence/

    page.tsx

  idle-risk/

    page.tsx

  market-alerts/

    page.tsx

  contract-strategy/

    page.tsx

  reports/

    page.tsx

  settings/

    page.tsx

components/

  Sidebar.tsx

  Header.tsx

  StatCard.tsx

  FreightChart.tsx

  ForecastChart.tsx

  RouteTable.tsx

  VesselCard.tsx

  PortCard.tsx

  AlertCard.tsx

  RecommendationCard.tsx

  ContractCard.tsx

  RiskIndicator.tsx

  LoadingSpinner.tsx

  EmptyState.tsx

  Modal.tsx

data/

  mockFreightData.ts

  mockPorts.ts

  mockVessels.ts

  mockAlerts.ts

  mockRoutes.ts

lib/

  api.ts

  calculations.ts

  constants.ts

  types.ts

==================================================

2. MAIN DASHBOARD

==================================================

Create an impressive executive dashboard.

Page title:

"Freight Intelligence Dashboard"

Subtitle:

"Monitor freight markets, vessel availability and chartering opportunities."

At the top display KPI cards:

1. Current Average Freight Rate

   Example:

   "$24.80 / MT"

   "-4.2% vs last week"

2. Forecasted 30-Day Rate

   "$22.95 / MT"

   "↓ 7.5% expected"

3. Chartering Opportunities

   "12"

   "Potential contract windows"

4. Port Congestion Risk

   "Medium"

   "3 ports affected"

5. Idle Risk

   "8.4%"

   "↓ 2.1% vs previous period"

6. Estimated Savings

   "$1.8M"

   "Potential annualized savings"

Use realistic mock data.

Then create:

SECTION A:

"Freight Market Overview"

Large interactive line chart.

Chart:

- X-axis = Date

- Y-axis = Freight Rate ($/MT)

Allow filters:

- Vessel type

- Origin

- Destination

- Time period

Vessel types:

Handysize

Supramax

Panamax

Capesize

Origins:

Australia

USA

Mozambique

Russia

Indonesia

Destinations:

Paradip

Vizag

Gangavaram

Gopalpur

Dhamra

Sagar-Sandheads

Haldia

Display:

Historical rate

Forecast rate

Confidence band

Clearly distinguish historical and forecast periods.

SECTION B:

"Market Opportunities"

Create cards:

Opportunity 1:

"Panamax | Australia → Paradip"

Current Rate: $23.8/MT

Forecast 30D: $21.4/MT

Potential saving: $620K

Recommended action:

"Consider entering a 3–5 voyage contract within the next 2 weeks."

Opportunity 2:

"Supramax | Indonesia → Vizag"

Current Rate: $25.2/MT

Forecast 30D: $27.1/MT

Potential saving: $410K

Recommendation:

"Consider locking capacity before projected rate increase."

IMPORTANT:

These are simulated recommendations based on mock data.

Clearly label demo/mock predictions.

SECTION C:

"Route Performance"

Create a professional table:

Route

Vessel

Current Rate

7D Change

30D Forecast

Congestion

Risk

Opportunity

Example routes:

Australia → Paradip

Australia → Dhamra

Indonesia → Vizag

Indonesia → Gangavaram

USA → Haldia

Mozambique → Gopalpur

Russia → Sagar-Sandheads

Add sorting/filtering.

SECTION D:

"Market Alerts"

Examples:

HIGH:

"Freight volatility detected on Indonesia → East Coast India"

MEDIUM:

"Port congestion increasing at Paradip"

LOW:

"Panamax availability improving in Australia"

==================================================

3. FREIGHT FORECAST PAGE

==================================================

Create a dedicated forecasting screen.

Header:

"Freight Rate Forecast"

Controls:

Origin dropdown

Destination dropdown

Vessel Type dropdown

Forecast horizon:

7 days

14 days

30 days

60 days

90 days

Cargo:

Coal

Iron Ore

Other Bulk Cargo

Button:

"Generate Forecast"

When clicked:

Show loading animation for 1–2 seconds.

Then update the forecast visualization.

Main chart:

Historical freight rates + predicted rates.

Show:

- Current rate

- Forecast rate

- Expected percentage change

- Confidence range

- Trend direction

Example:

Current:

$24.80 / MT

30-Day Forecast:

$22.95 / MT

Expected Change:

-7.5%

Confidence:

82%

Trend:

Downward

Create a "Forecast Explanation" panel:

"Model indicates a potential downward trend based on historical freight movement, seasonal demand, vessel availability and route conditions."

This is a simulated frontend explanation.

Do not claim real ML accuracy.

Add:

"Key Factors"

Cards:

- Vessel Supply

- Cargo Demand

- Port Congestion

- Seasonal Effect

- Fuel Cost

- Commodity Trend

Each factor should have:

impact score

direction

short explanation

==================================================

4. CHARTER PLANNER PAGE

==================================================

This is one of the most important pages.

Purpose:

Help users move from individual spot contracts toward short-term / medium-term multiple-voyage contracts.

Header:

"Charter Contract Planner"

Create input form:

Cargo Type

Cargo Volume (MT)

Origin

Destination

Preferred Vessel

Contract Duration

Options:

Spot

1–3 months

3–6 months

6–12 months

Number of Voyages

Expected Start Date

Budget Freight Rate

Button:

"Analyze Charter Strategy"

After submission show:

"Recommended Contract Strategy"

Example:

Recommended:

"3–6 Month Multiple Voyage Contract"

Expected Voyages:

8

Estimated Freight:

$23.10 / MT

Estimated Spot Equivalent:

$25.40 / MT

Potential Savings:

$1.47M

Market Risk:

Medium

Confidence:

78%

Then show comparison:

SPOT CONTRACTS

vs

MULTIPLE VOYAGE CONTRACT

Metrics:

Number of contracts

Average freight

Rate volatility exposure

Expected savings

Planning certainty

Vessel availability risk

Use a bar chart or comparison cards.

Add a timeline:

Month 1

Month 2

Month 3

Month 4

Month 5

Month 6

Show projected voyage schedule.

==================================================

5. VESSEL OPTIMIZER PAGE

==================================================

Purpose:

Recommend suitable vessel type based on:

Cargo quantity

Origin

Destination

Port restrictions

Draft

LOA

Beam

Cargo handling capacity

Page title:

"Vessel Type Optimizer"

Input section:

Cargo Quantity

Origin Port

Destination Port

Cargo Type

Button:

"Find Optimal Vessel"

Output:

Recommended Vessel:

"Panamax"

Score:

92%

Reason:

"Panamax provides the best balance between cargo capacity, port compatibility and estimated freight cost for this route."

Then show vessel comparison:

Handysize

Capacity

Draft

LOA

Beam

Estimated Freight

Port Compatibility

Utilization

Supramax

...

Panamax

...

Capesize

...

Highlight the recommended vessel.

Add a "Port Compatibility Check":

Loading Port:

Compatible ✓

Discharge Port:

Compatible ✓

Draft:

Maximum allowed: 14.5m

Vessel draft: 13.8m

LOA:

Port max: 250m

Vessel LOA: 229m

Beam:

Port max: 40m

Vessel beam: 32.3m

Cargo Handling:

Required: 45,000 MT/day

Port capability: 55,000 MT/day

==================================================

6. PORT INTELLIGENCE PAGE

==================================================

Title:

"East Coast Port Intelligence"

Create cards for:

Paradip

Visakhapatnam

Gangavaram

Gopalpur

Dhamra

Sagar-Sandheads

Haldia

Each card should show:

Port status

Congestion level

Maximum draft

Maximum LOA

Maximum beam

Cargo handling rate

Average turnaround

Berth availability

Use status indicators:

Normal

Moderate

High Risk

Clicking a port opens detailed information.

Detailed port page/modal:

Infrastructure

Berths

Draft restrictions

Vessel restrictions

Cargo handling

Congestion trend

Average waiting time

Historical turnaround

Create a congestion trend chart.

==================================================

7. IDLE RISK PAGE

==================================================

Title:

"Vessel Idle Risk Management"

Purpose:

Predict and manage vessel idle time.

Create:

Idle Risk KPI:

8.4%

Potential Idle Days:

126

At-Risk Vessels:

7

Estimated Idle Cost:

$430K

Create an "Idle Risk Forecast" chart.

Then table:

Vessel

Route

ETA

Expected Discharge

Idle Risk

Idle Days

Estimated Cost

Alternative Employment

Example:

MV Ocean Star

Australia → Paradip

18 Sep

20 Sep

High

2.4 days

$42K

Indonesia → Vizag

Add "Recommended Actions":

- Reposition vessel

- Seek alternative cargo

- Delay sailing

- Change discharge port

- Negotiate laycan

==================================================

8. MARKET ALERTS PAGE

==================================================

Title:

"Market Alerts & Risk Monitoring"

Create filters:

All

Freight

Port

Vessel

Weather

Market

Contract

Alert cards should include:

Severity

Timestamp

Route

Description

Potential Impact

Suggested Action

Example:

HIGH

"Freight volatility detected"

Route:

Indonesia → East Coast India

Potential impact:

+8–12% rate volatility

Suggested action:

"Review upcoming spot requirements and evaluate forward contract coverage."

Again, this is simulated demo data.

==================================================

9. CONTRACT STRATEGY PAGE

==================================================

Title:

"Contract Strategy"

Create visual comparison:

Spot Market

Short-Term Contract

Medium-Term Multiple Voyage Contract

Show:

Freight Cost

Market Exposure

Flexibility

Planning Certainty

Vessel Availability

Expected Savings

Create a "Contract Coverage Planner".

Example:

Monthly cargo demand:

Sep: 120,000 MT

Oct: 150,000 MT

Nov: 140,000 MT

Dec: 180,000 MT

Jan: 170,000 MT

Feb: 160,000 MT

Show how much cargo is:

Spot covered

Contract covered

Uncovered

Use stacked bar chart.

Main objective:

Visually communicate the transition from:

"reactive spot procurement"

to:

"predictive contract planning"

==================================================

10. REPORTS PAGE

==================================================

Create:

"Generate Report"

Report types:

Freight Forecast

Charter Strategy

Vessel Optimization

Port Risk

Monthly Procurement

Date range

Generate button

After clicking show a report preview.

Include:

KPIs

Charts

Recommendations

Risk summary

Contract strategy

Add a "Download Report" button.

For frontend demo, it can generate/download a simple mock report or show a notification.

==================================================

11. SETTINGS PAGE

==================================================

Sections:

Profile

Notification Preferences

Market Preferences

Default Ports

Default Vessel Types

Dashboard Preferences

==================================================

12. INTERACTION REQUIREMENTS

==================================================

The frontend must NOT be static.

Implement:

- Sidebar navigation

- Active navigation state

- Dropdowns

- Search

- Filters

- Sortable tables

- Tabs

- Modals

- Buttons

- Chart interactions

- Date selectors

- Toggle controls

- Loading states

- Empty states

- Toast notifications

- Responsive mobile sidebar

- Hover states

- Tooltips

All important buttons should actually do something.

For example:

"Generate Forecast"

→ loading

→ update mock forecast

→ show results

"Analyze Charter Strategy"

→ loading

→ display recommendation

"Find Optimal Vessel"

→ calculate/mock result

→ display recommended vessel

"Generate Report"

→ show report preview

==================================================

13. MOCK DATA

==================================================

Create realistic mock datasets.

Freight routes:

Australia → Paradip

Australia → Dhamra

Australia → Vizag

Indonesia → Paradip

Indonesia → Vizag

Indonesia → Gangavaram

USA → Haldia

Mozambique → Gopalpur

Russia → Sagar-Sandheads

Vessel types:

Handysize

Supramax

Panamax

Capesize

Create at least:

- 90 days historical freight data

- 30 days forecast data

- port infrastructure data

- vessel specification data

- congestion data

- alert data

- charter opportunity data

Do NOT use random values every render.

Keep mock data deterministic.

==================================================

14. TYPESCRIPT TYPES

==================================================

Create proper types/interfaces:

FreightData

ForecastData

Port

Vessel

Route

CharterOpportunity

MarketAlert

IdleRisk

ContractStrategy

Recommendation

Avoid using "any" wherever possible.

==================================================

15. RESPONSIVE DESIGN

==================================================

Desktop:

Optimized for 1440px+ screens.

Tablet:

Sidebar collapses.

Mobile:

Sidebar becomes drawer.

Charts should resize properly.

Tables should become horizontally scrollable or card-based.

Do not allow horizontal page overflow.

==================================================

16. COMPONENT QUALITY

==================================================

Do not put everything in page.tsx.

Create reusable components.

For example:

<StatCard />

<FreightChart />

<ForecastChart />

<PortCard />

<VesselComparison />

<AlertCard />

<RecommendationCard />

<RouteTable />

<ContractComparison />

Use clean props and TypeScript interfaces.

==================================================

17. UX DETAILS

==================================================

Add a small top banner:

"Demo Environment • Forecast data is simulated"

This is important because the project does not yet have a real forecasting backend.

Use realistic microcopy.

Avoid generic text like:

"Welcome to your dashboard."

Instead use domain-specific language such as:

"Monitor freight exposure and identify upcoming chartering windows."

==================================================

18. LANDING PAGE

==================================================

Create a professional landing page at "/".

Hero:

"From Reactive Spot Chartering

to Predictive Freight Strategy"

Subtitle:

"AI-powered freight forecasting and vessel optimization for bulk cargo procurement."

Buttons:

"Open Dashboard"

"Explore Forecast"

Hero visual:

A sophisticated freight analytics dashboard preview.

Sections:

1. The Problem

2. How FreightIQ Works

3. Core Capabilities

4. Freight Forecasting

5. Vessel Optimization

6. Port Intelligence

7. Charter Strategy

8. Risk Management

Final CTA:

"Turn freight uncertainty into actionable chartering intelligence."

==================================================

19. DESIGN SYSTEM

==================================================

Use consistent:

Spacing

Typography

Card radius

Button styles

Input styles

Table styles

Badge styles

Create reusable CSS classes/components.

Do not overuse gradients.

Do not overuse animations.

Use subtle transitions.

Use professional icons.

==================================================

20. ACCESSIBILITY

==================================================

Implement:

- semantic HTML

- accessible buttons

- labels for inputs

- keyboard-friendly controls

- reasonable color contrast

- aria labels where needed

==================================================

21. CODE QUALITY

==================================================

The generated project must:

- compile without TypeScript errors

- have no missing imports

- have no undefined variables

- use correct Next.js App Router conventions

- use "use client" only where necessary

- avoid hydration problems

- avoid unnecessary dependencies

- have clean folder structure

- be easy to connect to a backend later

Before finishing:

Run the equivalent of:

npm run build

and fix ALL errors.

Also check:

npx tsc --noEmit

There should be zero TypeScript errors.

==================================================

22. API ABSTRACTION

==================================================

Even though we are using mock data now, create:

lib/api.ts

with functions such as:

getFreightForecast()

getRoutes()

getPorts()

getVessels()

getMarketAlerts()

getIdleRisks()

getCharterOpportunities()

getContractStrategy()

Initially these functions should return mock data.

Structure them so later they can easily be replaced with real API calls.

==================================================

23. IMPORTANT BUSINESS LOGIC

==================================================

Implement basic frontend calculations for demo purposes.

Example:

Potential Savings =

(Spot Freight - Contract Freight)

× Cargo Volume

× Number of Voyages

Vessel compatibility should consider:

draft

LOA

beam

cargo capacity

port limitations

Risk score should combine mock values for:

freight volatility

port congestion

vessel availability

seasonality

Do not claim these calculations are a real ML model.

Label them as:

"Demo Decision Model"

==================================================

24. FINAL OUTPUT

==================================================

Generate the COMPLETE source code for the frontend.

Do not only provide snippets.

Provide:

- package.json dependencies

- app structure

- components

- pages

- CSS/Tailwind configuration

- mock data

- TypeScript types

- utility functions

- API abstraction

- all required imports

Every page must work.

The user should be able to run:

npm install

npm run dev

and immediately see the complete working application.

Make the UI polished enough for:

- SIH presentation

- hackathon demo

- GitHub portfolio

- resume project

- recruiter demonstration

Prioritize:

1. Professional UI

2. Clear business value

3. Working interactions

4. Data visualization

5. Chartering workflow

6. Vessel optimization

7. Port intelligence

8. Contract strategy

9. Clean code

10. Responsive design

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://charter-smart-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/aa5076a0-cb49-4b82-9155-2c69b1b3e738).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
