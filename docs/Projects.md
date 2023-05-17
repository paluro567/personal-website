# <center><b><u>Optum</u></b></center>
## <b>Software Engineer (full-time)</b></br>

- <u>Docker Schedule Check Jenkins Pipeline </u> </br>
I developed a Jenkins pipeline for an organization that runs daily to build and test all submitted Dockerfiles from another Jenkins pipeline. Each Dockerfile had specifications on how to build them, and images were pushed to an Azure ACR for scanning by the Defender to detect vulnerabilities. I used a graphQuery API call to access the resulting vulnerability scores, and Dockerfile owners were alerted via email with remediation guidelines if severe vulnerabilities were found.
</br>
- <u>API Kubernetes Deployment</u> </br>
I developed a RESTful API using Connexion, a Python framework similar to Flask, which runs in a Docker container on a Gunicorn server. The container is deployed to a Kubernetes cluster using a Jenkins pipeline, with the ability to scale replicas as needed. I verified the functionality of the API endpoints using kubectl CLI with port forwarding and Postman.
</br>
- <u>ML Data Preparation & Training</u> </br>
I wrote Python scripts to build data pipelines that trained and tested speech and language ML models for UnitedHealth Group. This involved implementing complex data preparation logic to ensure proper alignment and structure of transcriptions. In addition, I created Jupyter notebooks to run tests and evaluate model performance under different scenarios, and presented the results during sprint demos to the team.

- <u> Microsite Logging & Kibana Dashboard</u> </br>
I Implemented Elastic Search logging across all of the organization's microsites, enabling OAuth user identification to track user navigation paths. Configured a Kibana dashboard with interactive visualizations that allow management to quickly identify problematic resources and prioritize improvements.


## <b>Software Engineer (Intern)</b></br>

- <u> Kibana Microsite Analytical Dashboard</u> </br>
I Utilized Spark SQL in Azure Databricks to query UHG claims data, and indexed it using Elasticsearch-Hadoop connector to create Kibana dashboards. The dashboards contained statistical visuals that allowed management to identify wasteful spending by the company.
- <u> Boston Global Hackathon Winner</u> </br>
I won first place at the Boston location and won second nationally. Developed a mobile application which would incentivize youth to follow healthy daily routines.


# <center><b><u>Additional work</u></b></center>

- <u>Personal, Stock Trading App</u> </br>
I designed and implemented a Python script that runs on a daily basis, collecting stock recommendations from multiple sources through HTTP GET requests using the Python Requests library. The script leverages the Python Yfinance library to access real-time stock data, calculates key indicators such as moving averages and identifies potential breakout opportunities. The script integrates with the Twilio texting API to send automated notifications to subscribed users. Additionally, I set up and automated paper trading using the Alpaca broker Python API.
- <u>Sitetracker - WPI, React Mobile App</u> </br>
I created a mobile application for construction site project managers to prioritize tasks over project sites that they manage. Configured Express routing and configuration with project profiles in a NoSQL database.
Link to [final report](https://web.cs.wpi.edu/~claypool/mqp/sv/2019/site/)
