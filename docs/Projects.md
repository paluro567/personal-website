## <b><center><u>Talcott Resolution</u></b> \(2023 - present)</center>

<center><b>Software Engineer</b></center></br>

- <u>Financial Data Pipelines & Validation Systems</u> </br>
  Built Python-based pipelines to ingest, normalize, and validate trading data used in portfolio analytics and risk workflows. Focused on catching real-world issues like schema drift, stale valuations, and identifier mismatches across multiple data sources. Developed reconciliation logic to ensure consistency between Oracle, SQL Server, and downstream reporting systems.

- <u>Distributed Processing & Cloud Deployment</u> </br>
  Deployed containerized Python jobs in Azure Container Apps to run nightly financial data processing. Introduced asynchronous workflows (asyncio) to parallelize I/O-heavy ingestion tasks, improving throughput and reducing overall pipeline runtime.

- <u>Metadata-Driven Ingestion Framework</u> </br>
  Designed a flexible ingestion framework to handle vendor data in XML, JSON, and Excel formats. Standardized disparate inputs into consistent schemas for downstream analytics and reporting, reducing manual intervention and improving maintainability.

- <u>Hedging & Reporting Automation</u> </br>
  Built event-driven pipelines using AutoSys to process hedge data triggered by file arrivals. Structured job dependencies to ensure reliable execution and eliminate unnecessary reruns, improving stability of nightly actuarial and hedging reports.

- <u>Trade & Settlement Logging System (Full-Stack)</u> </br>
  Developed a React-based UI to surface positions missing trade/settlement records. Implemented backend logic to insert records into Oracle, trigger downstream jobs, and allow CSV exports. Reduced manual intervention when resolving data gaps.

- <u>Data Infrastructure & Reporting</u> </br>
  Designed Oracle views, tables, and stored procedures to support Power BI dashboards used for investment analysis and reconciliation. Built dashboards and embedded them into internal applications for easier access by business users.

---

## <b><center><u>Optum</u></b> (2017–2023)</center>

<center><b>Software Engineer</b></center></br>

- <u>Data Pipelines & ML Workflows</u> </br>
  Built Python pipelines to process large unstructured datasets (audio + metadata) used in machine learning workflows. Implemented data preparation and segmentation logic to improve dataset quality and model performance. Ran experiments in AzureML and evaluated results to guide improvements.

- <u>API & Kubernetes Deployment</u> </br>
  Developed REST APIs (Python/Connexion) deployed via Docker and Kubernetes. Built CI/CD pipelines in Jenkins to automate deployment and scaling. Validated endpoints using kubectl and Postman.

- <u>Container Security Pipeline</u> </br>
  Built a Jenkins pipeline to scan Docker images for vulnerabilities before deployment. Integrated with Azure Container Registry and Defender, and automated alerts to owners when critical issues were detected.

- <u>Logging & Observability</u> </br>
  Implemented centralized logging using Elasticsearch and built Kibana dashboards to track user behavior and identify performance bottlenecks across microservices.

<center><b>Software Engineer Intern</b></center></br>

- <u>Healthcare Scheduling App (React)</u> </br>
  Led a team of 5 engineers to build a React-based appointment scheduling app for Fenway Health.

- <u>Data Analytics Dashboard</u> </br>
  Queried large healthcare datasets using Spark SQL and built Kibana dashboards to surface insights around spending and inefficiencies.

- <u>Hackathon Winner</u> </br>
  1st place (Boston), 2nd nationally — built a mobile app promoting healthy daily routines.

---

## <b><center><u>Additional Work</u></center></b>

- <u>Systematic Trading Platform (Personal)</u> </br>
  Built a Python-based system that ingests intraday market data, tracks setups across multiple tickers, and generates signals based on EMA crossovers and breakout conditions. Runs on scheduled jobs in GCP and continuously evolves through testing and iteration.

- <u>Sitetracker (WPI Project)</u> </br>
  Built a mobile app for construction project management, including task prioritization and site tracking. Developed backend services using Express and a NoSQL database.  
  Link to [final report](https://web.cs.wpi.edu/~claypool/mqp/sv/2019/site/).
