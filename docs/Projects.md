# Projects

## Talcott Resolution <span class="tenure">2023 – Present</span> { .employer-header }

### Financial Data Validation & Reconciliation Platform

Downstream reporting depended on data from multiple systems that frequently diverged due to timing differences, schema mismatches, and vendor inconsistencies.

I built Python validation pipelines that compare datasets across Oracle, SQL Server, and vendor feeds, normalize schemas, and surface discrepancies before they reach reporting workflows. The system runs automatically and produces actionable outputs, allowing teams to quickly identify and resolve data issues without manual investigation.

<div class="project-meta"> <span class="tech-badge">Python</span> <span class="tech-badge">SQL</span> <span class="tech-badge">Oracle</span> <span class="tech-badge">SQL Server</span> <span class="tech-badge">Pandas</span> </div>

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

Adding new data sources previously required writing custom ingestion logic for each format, slowing onboarding and increasing maintenance overhead.

I designed a metadata-driven framework where each data source is defined by configuration rather than code. The system handles XML, JSON, and Excel inputs using shared processing logic, enabling rapid onboarding of new sources while maintaining consistent validation, transformation, and error handling across pipelines.

<div class="project-meta"> <span class="tech-badge">Python</span> <span class="tech-badge">Pandas</span> <span class="tech-badge">XML</span> <span class="tech-badge">JSON</span> <span class="tech-badge">Configuration-Driven Design</span> </div>

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

## Optum <span class="tenure">2020 – 2023</span> { .employer-header }

### Enterprise Data Pipeline Development

Healthcare data arrived from multiple upstream sources in inconsistent formats, with no standardized validation layer before it reached analytics consumers.

I built and maintained ETL pipelines that ingested, transformed, and routed large healthcare datasets across internal systems. Focused on correctness at the transformation layer — enforcing business rules, surfacing upstream data quality issues early, and ensuring downstream analytics workflows received clean, reliable inputs.

<div class="project-meta">
  <span class="tech-badge">Python</span>
  <span class="tech-badge">SQL</span>
  <span class="tech-badge">ETL</span>
  <span class="tech-badge">Data Validation</span>
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

## Personal Projects { .employer-header }

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
