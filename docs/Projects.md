## <b><u>Talcott Resolution Software Engineer</u></b> \(2023 - present)

- <u>Scheduled Stock Data File Transfers </u> </br>
Automated stock data file transfers within the business using Autosys and Azure datalake process configurations.



## <b><center><u>Optum</u></b> (2017-2023)</center>

<center><b>Software Engineer (full-time)</b></center></br>

- <u>Docker Schedule Check Jenkins Pipeline </u> </br>
Developed a Jenkins pipeline for an organization that runs daily to build and test all submitted Dockerfiles from another Jenkins pipeline. Each Dockerfile had specifications on how to build them, and images were pushed to an Azure ACR for scanning by the Defender to detect vulnerabilities. I used a graphQuery API call to access the resulting vulnerability scores, and Dockerfile owners were alerted via email with remediation guidelines if severe vulnerabilities were found.
</br>
- <u>API Kubernetes Deployment</u> </br>
Developed a RESTful API using Connexion, a Python framework similar to Flask, which runs in a Docker container on a Gunicorn server. The container is deployed to a Kubernetes cluster using a Jenkins pipeline, with the ability to scale replicas as needed. I verified the functionality of the API endpoints using kubectl CLI with port forwarding and Postman.
</br>
- <u>ML Data Preparation & Training</u> </br>
Wrote Python scripts to build data pipelines that trained and tested speech and language ML models for UnitedHealth Group. This involved implementing complex data preparation logic to ensure proper alignment and structure of transcriptions. In addition, I created Jupyter notebooks to run tests and evaluate model performance under different scenarios, and presented the results during sprint demos to the team.

- <u> Microsite Logging & Kibana Dashboard</u> </br>
Implemented Elastic Search logging across all of the organization's microsites, enabling OAuth user identification to track user navigation paths. Configured a Kibana dashboard with interactive visualizations that allow management to quickly identify problematic resources and prioritize improvements.

 <center><b>Software Engineer (Intern)</b></center> </br>

- <u> Fenway Health - React App Scheduler</u> </br>
Scrum master and product owner on an intern team of 5 software engineers. Developed a React app appointment scheduler for Fenway Health to schedule appointments for their patients.
- <u> Kibana Microsite Analytical Dashboard</u> </br>
Utilized Spark SQL in Azure Databricks to query UHG claims data, and indexed it using Elasticsearch-Hadoop connector to create Kibana dashboards. The dashboards contained statistical visuals that allowed management to identify wasteful spending by the company.
- <u> Boston Global Hackathon Winner</u> </br>
Won first place at the Boston location and won second nationally. Developed a mobile application which would incentivize youth to follow healthy daily routines.




## <b><center><u>Additional work</u></center></b>

- <u>Personal - Stock Trading App</u> </br>
Designed and implemented a Python script that runs on a daily basis, collecting stock recommendations from multiple sources through HTTP GET requests using the Python Requests library. The script leverages the Python Yfinance library to access real-time stock data, calculates key indicators such as moving averages and identifies potential breakout opportunities. The script integrates with the Twilio texting API to send automated notifications to subscribed users. Additionally, I set up and automated paper trading using the Alpaca broker Python API.
- <u>Sitetracker - WPI, React Mobile App</u> </br>
Created a mobile application for construction site project managers to prioritize tasks over project sites that they manage. Configured Express routing and configuration with project profiles in a NoSQL database.
Link to [final report](https://web.cs.wpi.edu/~claypool/mqp/sv/2019/site/).
