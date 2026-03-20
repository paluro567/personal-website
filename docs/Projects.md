# Projects

## Talcott Resolution (2023 – Present)

### Financial Data Validation & Reconciliation Platform

**Problem**  
Financial datasets sourced from multiple systems (Oracle, SQL Server, vendor feeds) often contained inconsistencies in identifiers, schema structure, and valuation timing. These issues created downstream risk in reporting and analytics workflows.

**What I Built**  
Developed Python-based validation pipelines that compare datasets across systems, normalize schema differences, and surface inconsistencies before downstream consumption.

**Tech Stack**  
Python, SQL, Oracle, SQL Server, Pandas

**Impact**  
Improved reliability of nightly reporting workflows and reduced time spent manually investigating data discrepancies.

---

### Azure Data Processing & Ingestion Pipelines

**Problem**  
Large financial datasets needed to be processed in a consistent and repeatable way across environments, with visibility into failures and execution state.

**What I Built**  
Designed containerized Python jobs running in Azure that handle ingestion, transformation, and validation of data files. Implemented structured logging, retry logic, and environment-aware execution.

**Tech Stack**  
Python, Azure Container Apps, Docker, SQL

**Impact**  
Enabled scalable and repeatable processing of data feeds with improved observability and failure handling.

---

### Metadata-Driven Data Ingestion Framework

**Problem**  
Ingesting multiple file formats (XML, JSON, Excel) required repetitive and brittle code, making it difficult to scale ingestion workflows.

**What I Built**  
Created a flexible ingestion framework driven by configuration metadata, allowing new data sources to be integrated with minimal code changes.

**Tech Stack**  
Python, Pandas, XML/JSON parsing

**Impact**  
Reduced onboarding time for new datasets and improved maintainability of ingestion logic.

---

### Trade & Settlement Logging System

**Problem**  
Trade and settlement data needed to be captured, validated, and persisted reliably for downstream processes.

**What I Built**  
Developed backend API routes and database logic to log trade and settlement activity, including validation checks and enrichment from upstream systems. Built a React-based interface for interacting with this data.

**Tech Stack**  
Node.js, React, Oracle, SQL

**Impact**  
Improved visibility into trade data and reduced manual tracking efforts.

---

## Optum (2021 – 2023)

### Enterprise Data Pipeline Development

Built and maintained data pipelines supporting healthcare analytics workflows. Focused on data transformation, validation, and efficient processing of large datasets.

**Tech Stack**  
Python, SQL, ETL pipelines

---

## Personal Projects

### Trading Signal & Execution System

**Overview**  
Developed a Python-based system that monitors intraday market data and identifies breakout conditions based on price action and moving averages.

**Core Components**

- Market data ingestion (intraday intervals)
- Signal generation based on technical conditions (e.g., EMA crossovers, breakout levels)
- Execution logic with constraints to prevent duplicate or excessive trades
- Logging and monitoring of trade activity

**What I Learned**

- Handling noisy real-time data and incomplete datasets
- Avoiding duplicate signals and overtrading
- Managing execution timing and constraints
- Understanding the gap between theoretical signals and real-world execution

---

### Data Analysis & Market Research Tooling

Built scripts to analyze historical stock performance, evaluate valuation metrics, and explore patterns in price behavior under different market conditions.

**Focus Areas**

- Time-series analysis
- Valuation metrics (P/E, forward P/E)
- Market behavior under different macro conditions

---

## Selected Problems I've Solved

- Reconciling inconsistent identifiers across financial datasets
- Detecting schema drift between environments
- Handling incomplete or delayed market data feeds
- Designing ingestion pipelines for multiple file formats
- Ensuring reliability in scheduled and event-driven workflows
