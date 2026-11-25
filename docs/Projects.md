# Projects

## GEAR · Enterprise Reporting Platform

Investment and actuarial teams relied on recurring SQL extracts, Excel preparation, and manual distribution. I helped automate that work through GEAR, a Python platform that generates formatted Excel reports on demand and on a schedule.

I refactored the reporting engine to update workbook XML directly so generated reports preserve their Excel template formatting. I built a smoke-test suite covering 67 report configurations and Azure DevOps pipelines that deploy the web application and report workers to Azure Container Apps and Jobs.

I delivered 44 automated reporting workflows, saving an estimated 68 person-days per month. The production report job recorded 5,450 successful executions over a 30-day period. I received Talcott’s ACE Award for my work on GEAR.

---

## TalQL · On-Demand Market Data and Valuation APIs

I developed FastAPI services that let users trigger market data, base valuation, and scenario NPV workflows on demand. The API starts asynchronous Azure jobs and exposes run status by batch ID, so users can track a run after the initial request returns. The service uses Microsoft Entra ID authentication and role-based access.

---

## Project Stellar · Financial Data Pipelines

I led technical delivery of Microsoft Fabric and PySpark pipelines supporting the Nippon Life reinsurance transaction. The pipelines ingested, validated, and reconciled policy and financial data.

---

## File Delivery SLA Monitoring

I built a Python and SQL system that checks whether daily and monthly files arrive by their deadlines. It applies U.S. and Japanese business calendars, time zones, and grace periods, records outcomes in SQL Server, and alerts teams when files miss their deadlines.

---

## Microsoft Fabric Data Agent Evaluation

I evaluated Fabric Data Agent responses against expected answers for Oracle financial data. I authored natural-language questions paired with SQL examples to guide source selection, data type handling, and interpretation of financial terminology.

---

## Optum · Speech Recognition Data Pipelines

I built Python pipelines for healthcare audio and metadata and automated batch processing and monitoring with Jenkins. I also developed and evaluated speech-recognition models in Azure Machine Learning, comparing accuracy across experiments.

---

## Personal · Trading Signal and Execution System

I built a Python system that monitors intraday market data, evaluates EMA crossovers and breakout conditions, and submits orders through Alpaca. I built it to understand the engineering involved in taking a trading rule from a market-data signal to an order.

---

## Personal · Market Data Analysis Tools

I built Python scripts for historical stock analysis, intraday screening, and valuation comparisons across watchlists. The tools cover RSI-based signals, P/E screening, and historical price patterns.

[GitHub](https://github.com/paluro567)
