## <b><center><u>Talcott Resolution</u></b> \(2023 - present)</center>

<center><b>Software Engineer (full-time)</b></center></br>

- <u> Oracle Azure Transition </u> </br>
  Researched Oracle Cloud Infrastructure (OCI) and Microsoft Azure platforms to understand and implement dyanmic commands for uploading and retrieving data files to and from bucket storage. Evaluated authentication methods, command-line utilities, and permission configurations needed for secure access. Integrated this logic with several pre-existing Python scripts, enhancing automation of data transfers and aligning with cloud-based storage workflows for streamlined operational efficiency.

  - <u> Automated Hedging Oracle Database & Reporting</u> </br>
    Implemented event-driven data processing in a data pipeline that handled nightly hedge data ingestion. The pipeline monitored the arrival of trigger files in a network directory, and once a file was detected, it kicked off a sequence of ETL processes using AutoSys jobs and Oracle procedures. To make the process event-driven and decoupled, I used file watcher jobs as the initial trigger, followed by conditional job dependencies that ensured the appropriate downstream processing only occurred if the previous stage succeeded.

- <u> Trade/Settlement Log UI </u> </br>
  Led initiative to create a React UI displaying asset positions that have changed from the prior market date, which do not have a corresponding trade/settlement log in the associated Hedging Oracle database. The logic includes dynamic field selection for transaction type, inserting into the trade log tables for each position, CSV download, and the ability to restart the corresponding AutoSys job that has failed due to missing trades data.
- <u> Datalake Market Data Automation & Processing </u> </br>
  Implemented a configurable Autosys automation framework capable of processing diverse data sources such as market data files delivered via scheduled emails, file drops, or other means. Each data process is encapsulated into its own modular and reusable component within the organization's Python Datalake project.
- <u> Oracle Database Design & Implementation </u> </br>
  Implemented various views, tables, & stored procedures to organize data utilized by Power BI reports and other company resources.
- <u> Power BI Reports </u> </br>
  Created several Power BI dashboards that visualize investments for management to reconcile numbers and gather key insight. Published these reports to a Power BI workspace and embeded reports in React company website via Power BI Client.
- <u>Full-Stack 1065 Tax Form</u> </br>
  Structured a full-stack React application for the organization to submit 1065 tax forms to a database and incorporated logic to enable versioning of submissions.
- <u>Revamaped Company Site with Embedded Power BI Reports</u> </br>
  Improved accessibility for management to upload new files with company data and visualize through embedded Power BI reports.

## <b><center><u>Optum</u></b> (2017-2023)</center>

<center><b>Software Engineer (full-time)</b></center></br>

- <u>Docker Schedule Check Jenkins Pipeline </u> </br>
  Developed a Jenkins pipeline that runs daily to build and test all submitted Dockerfiles from another Jenkins pipeline. Each project Dockerfile had specifications on how to build them, and images were pushed to an Azure ACR for scanning by the Defender to detect vulnerabilities. Utilizing a graphQuery API call to access the resulting vulnerability scores, and Dockerfile owners were alerted via email with remediation guidelines if severe vulnerabilities were found.
  </br>
- <u>API Kubernetes Deployment</u> </br>
  Developed a RESTful API using Connexion, a Python framework similar to Flask, which runs in a Docker container on a Gunicorn server. The container is deployed to a Kubernetes cluster using a Jenkins pipeline, with the ability to scale replicas as needed. I verified the functionality of the API endpoints using kubectl CLI with port forwarding and Postman.
  </br>
- <u>ML Data Preparation & Training</u> </br>
  Wrote Python scripts to build data pipelines that trained and tested speech and language ML models for UnitedHealth Group. This involved implementing complex data preparation logic to ensure proper alignment and structure of transcriptions. In addition, I created Jupyter notebooks to run tests and evaluate model performance under different scenarios, and presented the results during sprint demos to the team.

- <u> Microsite Logging & Kibana Dashboard</u> </br>
  Implemented Elastic Search logging across all of the organization's microsites, enabling OAuth user identification to track user navigation paths. Configured a Kibana dashboard with interactive visualizations that allow management to quickly identify problematic resources and prioritize improvements.

<center><b>Software Engineer (Intern)</b></center></br>

- <u> Fenway Health - React App Scheduler</u> </br>
  Scrum master and product owner on an intern team of 5 software engineers. Developed a React app appointment scheduler for Fenway Health to schedule appointments for their patients.
- <u> Kibana Microsite Analytical Dashboard</u> </br>
  Utilized Spark SQL in Azure Databricks to query UHG claims data, and indexed it using Elasticsearch-Hadoop connector to create Kibana dashboards. The dashboards contained statistical visuals that allowed management to identify wasteful spending by the company.
- <u> Boston Global Hackathon Winner</u> </br>
  Won first place at the Boston location and won second nationally. Developed a mobile application which would incentivize youth to follow healthy daily routines.

## <b><center><u>Additional work</u></center></b>

- <u>Personal - Stock Trading App</u> </br>
  Implemented several scripts that run in GCP cloud on a daily crontab schedule, which utilize the Python Requests library with HTTP GET requests and authorization headers to pull stock recommendations from various sources each day. Then using the Python Alpha Vantage API, I am able to pull real-time stock data and place automated buy and sell orders to complete an entirely automated trading system that has been profitable so far!
- <u>Sitetracker - WPI, React Mobile App</u> </br>
  Created a mobile application for construction site project managers to prioritize tasks over project sites that they manage. Configured Express routing and configuration with project profiles in a NoSQL database.
  Link to [final report](https://web.cs.wpi.edu/~claypool/mqp/sv/2019/site/).
