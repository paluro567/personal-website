# <center><b><u>Optum</u></b></center>
## <b>Software Engineer (full-time)</b></br>

- <u>Docker Schedule Check Jenkins Pipeline </u>- Developed a Jenkins pipeline which runs on a daily schedule to build and test all of the organization's project Dockerfiles, submitted by another Jenkins pipeline with all specifications on how to build each Dockerfile. The images pushed to an Azure ACR for the Defender to scan for vulnerabilities. The resulting vulnerability scores are accessed through a graphQuery API call and all Dockerfile owners, with severe vulnerabilities, are emailed an alert with remediation guidelines.
</br>
- <u>API Kubernetes Deployment</u> - Developed a Python Connexion API (similar to Flask) that is ran in a Docker container on a Gunicorn server. The container is Deployed in a Kubernetes deployment, with replicas, by a Jenkins pipeline. I tested the endpoints through the kubectl CLI via port forwarding and Postman.
</br>
- <u>ML Data Preparation & Training</u> - Python scripting for building data pipelines that train and test UHG speech and language ML models. This work required significant logic for preparing the data and transcriptions with proper alignment and structure. I also completed Jupyter notebooks which ran tests on how each model performed under given scenarios and presented the results to the team in sprint demos.
- <u> Microsite Logging & Kibana Dashboard</u> - Conifgured Elastic Search logging on all of the organization's microsites with OAuth user identifictation to track all user navigation paths. Created a Kibana dashboard with visuals, for management to see where resources were problematic and should be addressed.


## <b>Software Engineer (Intern)</b></br>

- <u> Kibana Microsite Analytical Dashboard</u> - Queried UHG claims data using Spark SQL in Azure Databricks. Configured a connection with Elasticsearch-Hadoop connector to index the data and create Kibana dashboards configured with statistical visuals on UHG's spending for management to reference to identify wasteful spending by the company
- <u> Boston Global Hackathon Winner</u> - Won first place at the Boston location and won second nationally. Developed a mobile application which would incentivize youth to follow healthy daily routines.


# <center><b><u>Additional work</u></b></center>

- <u>Personal, Stock Trading App</u> - Created a Python script, running on a crontab schedule ran every morning, which would pull stock recommendations from various sources using the Python Requests library and HTTP GET requests. Using the Python Yfinance library to pull realtime stock data, I calculated moving averages and other metrics to determine high probability breakouts. Set up texting notifications using Twilio texting API. I also configured entirely automated paper trading using the Alpaca broker Python API.
- <u>Sitetracker - WPI, React Mobile App</u> - Created a mobile application for constructions site project managers to prioritize tasks over project sites that they manage. Configured Express routing and configuration with project profiles in a NoSQL database.
Link to [final report](https://web.cs.wpi.edu/~claypool/mqp/sv/2019/site/)
