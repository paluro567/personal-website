# Projects

## Talcott Resolution <span class="tenure">2023 – Present</span> { .employer-header }

### GEAR — Enterprise Reporting Platform <span class="tenure">ACE Award Nominee · 2026</span>

Actuarial and investment reporting ran on manual data extraction, heavy Excel manipulation, and email distribution. It was slow, hard to scale, and exposed to human error and key-person dependency — and some analysis was never produced at all, because there was no capacity to assemble it by hand.

I built GEAR (General Email and Reporting Application), a cloud-native platform that generates formatted actuarial XLSX reports on demand and on a schedule. Reports are defined by configuration rather than code: GEAR starts from a template workbook, runs the configured queries against the investment data lake, and writes each result set into its designated sheet with the template's formatting intact.

A FastAPI service in Azure Container Apps exposes HTTP endpoints through ingress and handles orchestration, while Azure Container App Jobs run the heavier generation work as containerized Python processes that produce downloadable XLSX reports. Separating lightweight API orchestration from compute lets reports be generated on demand across environments without long-running batch jobs or permanently allocated compute. The platform also provides Microsoft Entra authentication, secure browser and Teams access, release management through Azure DevOps, and event-driven notifications that alert users when monitored conditions are met.

The configuration-driven design is what let it scale — new report types are onboarded without redesigning the application. The automated report inventory nearly doubled over the past year to 69 production use cases, removing an estimated 95 person-days of manual effort per month and shifting that time from assembling reports to interpreting them. I was nominated for Talcott's ACE Award in 2026 for my work on GEAR.

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">FastAPI</span>
  <span class="tech-badge">Azure Container Apps</span>
  <span class="tech-badge">Azure Container App Jobs</span>
  <span class="tech-badge">Docker</span>
  <span class="tech-badge">Microsoft Entra</span>
  <span class="tech-badge">Azure DevOps</span>
  <span class="tech-badge">Microsoft Teams</span>
  <span class="tech-badge">SQL</span>
  <span class="tech-badge">XLSX Reporting</span>
</div>

---

### GEAR — SLA Tracking & Operational Monitoring

Scheduled reporting depends on upstream files arriving on time. Daily and monthly delivery schedules, regional holidays, and different time zones made it difficult to distinguish a genuinely late file from one that was not yet due.

I built a configuration-driven SLA monitoring system for GEAR that checks file-processing logs against expected deadlines. The Python service supports daily and monthly business-day schedules, regional holiday calendars, time-zone-aware evaluation, and configurable grace periods. Each file is tracked by its originating SLA period, preserving outstanding obligations across day and month boundaries instead of overwriting them when a new period begins.

The system persists Pending, Met, and Violated states in SQL Server and records notification timestamps to control repeat alerts. Notifications are triggered only for confirmed violations, giving teams a consistent way to identify missed deliveries and investigate delays without manually checking file logs.

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">SQL Server</span>
  <span class="tech-badge">Configuration-Driven Design</span>
  <span class="tech-badge">Business Calendars</span>
  <span class="tech-badge">SLA Monitoring</span>
  <span class="tech-badge">Automated Alerts</span>
</div>

---

### Financial Data Validation & Reconciliation Platform

Downstream reporting depended on data from multiple systems that frequently diverged due to timing differences, schema mismatches, and vendor inconsistencies.

I built Python validation pipelines that compare datasets across Oracle, SQL Server, and vendor feeds, normalize schemas, and surface discrepancies before they reach reporting workflows. The system runs automatically and produces actionable outputs, allowing teams to quickly identify and resolve data issues without manual investigation.

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">SQL</span>
  <span class="tech-badge">Oracle</span>
  <span class="tech-badge">SQL Server</span>
  <span class="tech-badge">Pandas</span>
</div>

---

### Metadata-Driven Ingestion Framework

Adding new data sources previously required writing custom ingestion logic for each format, slowing onboarding and increasing maintenance overhead.

I designed a metadata-driven framework where each data source is defined by configuration rather than code. The system handles XML, JSON, and Excel inputs using shared processing logic, enabling rapid onboarding of new sources while maintaining consistent validation, transformation, and error handling across pipelines.

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">Pandas</span>
  <span class="tech-badge">XML</span>
  <span class="tech-badge">JSON</span>
  <span class="tech-badge">Configuration-Driven Design</span>
</div>

---

### Trade & Settlement Logging System

Trade and settlement activity needed to be captured, validated, and persisted in a way downstream processes could depend on — no gaps, no duplicates, with clear auditability.

I built the backend API routes and database logic to log trade activity, applying validation and upstream enrichment at ingestion time. I also added a React interface so the operations team could query and review settlement state without touching the database directly.

<div class="project-meta">
  <span class="tech-badge">Node.js</span>
  <span class="tech-badge">React</span>
  <span class="tech-badge">Oracle</span>
  <span class="tech-badge">SQL</span>
</div>

---

## Optum <span class="tenure">2020 – 2023</span> { .employer-header }

### Enterprise Data Pipeline Development

Healthcare data arrived from multiple upstream sources in inconsistent formats, with no standardized validation layer before it reached analytics consumers.

I built and maintained ETL pipelines that ingested, transformed, and routed large healthcare datasets across internal systems. I focused on correctness at the transformation layer — enforcing business rules, surfacing upstream data quality issues early, and ensuring downstream analytics workflows received clean, reliable inputs.

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">SQL</span>
  <span class="tech-badge">ETL</span>
  <span class="tech-badge">Data Validation</span>
</div>

---

### Kafka Application Logging to Azure Event Hubs & ELK Stack

Application logs were scattered across services with no centralized way to monitor behavior, trace errors, or analyze patterns across systems.

I configured a Kafka-based logging pipeline that captured application events and streamed them to Azure Event Hubs. From there, logs were ingested into an ELK stack — Elasticsearch for indexing and storage, Logstash for transformation and enrichment, and Kibana for visualization. I also built Kibana dashboards to surface error rates, latency trends, and service health across environments.

<div class="project-meta">
  <span class="tech-badge">Kafka</span>
  <span class="tech-badge">Azure Event Hubs</span>
  <span class="tech-badge">Elasticsearch</span>
  <span class="tech-badge">Logstash</span>
  <span class="tech-badge">Kibana</span>
  <span class="tech-badge">ELK Stack</span>
</div>

---

## Personal Projects { .employer-header }

### Trading Signal & Execution System

I built a Python system that monitors intraday market data and executes rule-based trades through Alpaca's brokerage API. It pulls a morning briefing from a Discord channel, builds a watchlist, and then monitors each ticker on a configurable candle interval — evaluating EMA crossovers and breakout conditions and submitting market orders with trailing-stop exits. PDT compliance is enforced automatically.

My goal was to understand the practical gap between signal generation and live execution: noisy data, timing constraints, and the difference between what a strategy looks like in backtesting and what it does under real market conditions.

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">Alpaca API</span>
  <span class="tech-badge">yfinance</span>
  <span class="tech-badge">Alpha Vantage</span>
  <span class="tech-badge">Discord API</span>
</div>

---

### Market Data Analysis & Research Tools

I wrote a set of personal scripts for analyzing historical stock performance, screening intraday setups, and evaluating valuation metrics across watchlists. They cover time-series pattern analysis, P/E screening, RSI-based momentum signals, and sentiment scoring from news feeds.

[View on GitHub](https://github.com/paluro567/trade-system)

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">Pandas</span>
  <span class="tech-badge">yfinance</span>
  <span class="tech-badge">Alpha Vantage</span>
</div>
