# Projects

## Talcott Resolution <span class="tenure">2023 – Present</span>

### Financial Data Validation & Reconciliation Platform

Financial datasets arriving from Oracle, SQL Server, and vendor feeds routinely contained identifier mismatches, schema inconsistencies, and valuation timing gaps — issues that, uncaught, propagate silently into nightly reporting and risk workflows.

I built Python validation pipelines that compare datasets across systems, normalize schemas, and surface discrepancies before downstream consumption. The system runs automatically and flags anomalies with enough context for consuming teams to act without manual investigation.

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">SQL</span>
  <span class="tech-badge">Oracle</span>
  <span class="tech-badge">SQL Server</span>
  <span class="tech-badge">Pandas</span>
</div>

---

### Azure On-Demand Reporting Platform

Business users needed a way to generate operational reports on demand without relying on long-running batch jobs or permanently allocated compute.

I built a FastAPI service deployed in Azure Container Apps, exposing HTTP endpoints through ingress to trigger report-generation workflows. These endpoints launch Azure Container App Jobs that spin up containerized Python processes to generate downloadable XLSX reports for the business. This architecture cleanly separates lightweight API orchestration from heavier compute workloads, enabling scalable, on-demand report generation across environments.

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">FastAPI</span>
  <span class="tech-badge">Azure Container Apps</span>
  <span class="tech-badge">Azure Container App Jobs</span>
  <span class="tech-badge">Docker</span>
  <span class="tech-badge">HTTP APIs</span>
  <span class="tech-badge">XLSX Reporting</span>
</div>

---

### Metadata-Driven Ingestion Framework

Onboarding a new data source meant writing custom ingestion code for each file format — a pattern that was brittle to maintain and slow to extend.

I replaced it with a configuration-driven framework where each source is described by a metadata spec. Adding a new source means writing config, not code. The framework handles XML, JSON, and Excel uniformly with shared validation and error handling across all formats.

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">Pandas</span>
  <span class="tech-badge">XML</span>
  <span class="tech-badge">JSON</span>
</div>

---

### Trade & Settlement Logging System

Trade and settlement activity needed to be captured, validated, and persisted in a way downstream processes could depend on — no gaps, no duplicates, with clear auditability.

I built the backend API routes and database logic to log trade activity, applying validation and upstream enrichment at ingestion time. Added a React interface for the operations team to query and review settlement state without touching the database directly.

<div class="project-meta">
  <span class="tech-badge">Node.js</span>
  <span class="tech-badge">React</span>
  <span class="tech-badge">Oracle</span>
  <span class="tech-badge">SQL</span>
</div>

---

## Optum <span class="tenure">2021 – 2023</span>

### Enterprise Data Pipeline Development

Built and maintained ETL pipelines supporting healthcare analytics workflows. Focused on efficient transformation, validation, and routing of large datasets across internal systems.

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">SQL</span>
  <span class="tech-badge">ETL</span>
</div>

---

### Kafka Application Logging to Azure Event Hubs & ELK Stack

Application logs were scattered across services with no centralized way to monitor behavior, trace errors, or analyze patterns across systems.

I configured a Kafka-based logging pipeline that captured application events and streamed them to Azure Event Hubs. From there, logs were ingested into an ELK stack — Elasticsearch for indexing and storage, Logstash for transformation and enrichment, and Kibana for visualization. Built dashboards in Kibana to surface error rates, latency trends, and service health across environments.

<div class="project-meta">
  <span class="tech-badge">Kafka</span>
  <span class="tech-badge">Azure Event Hubs</span>
  <span class="tech-badge">Elasticsearch</span>
  <span class="tech-badge">Logstash</span>
  <span class="tech-badge">Kibana</span>
  <span class="tech-badge">ELK Stack</span>
</div>

---

## Personal Projects

### Trading Signal & Execution System

A Python system that monitors intraday market data and executes rule-based trades through Alpaca's brokerage API. The system pulls a morning briefing from a Discord channel, builds a watchlist, then monitors each ticker on a configurable candle interval — evaluating EMA crossovers and breakout conditions and submitting market orders with trailing-stop exits. PDT compliance is enforced automatically.

Built to understand the practical gap between signal generation and live execution: noisy data, timing constraints, and the difference between what a strategy looks like in backtesting versus what it does under real market conditions.

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">Alpaca API</span>
  <span class="tech-badge">yfinance</span>
  <span class="tech-badge">Alpha Vantage</span>
  <span class="tech-badge">Discord API</span>
</div>

---

### Market Data Analysis & Research Tools

Scripts for analyzing historical stock performance, screening intraday setups, and evaluating valuation metrics across watchlists. Work spans time-series pattern analysis, P/E screening, RSI-based momentum signals, and sentiment scoring from news feeds.

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">Pandas</span>
  <span class="tech-badge">yfinance</span>
  <span class="tech-badge">Alpha Vantage</span>
</div>
