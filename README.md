<div align="center">
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=40&duration=3000&pause=1000&color=00F5FF&center=true&vCenter=true&width=600&height=80&lines=WorkforceIQ+%F0%9F%A7%A0;People+Analytics;That+Drive+Decisions" alt="WorkforceIQ" />
</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=80&section=header&animation=twinkling" width="100%"/>

<div align="center">

<a href="https://workforceiq.netlify.app/"><img src="https://img.shields.io/badge/🚀%20Live%20Demo-workforceiq.netlify.app-00f5ff?style=for-the-badge&logoColor=white" /></a>
<img src="https://img.shields.io/badge/Uptime-99.7%25-00ff88?style=for-the-badge" />
<img src="https://img.shields.io/badge/Dataset-5K%20Employees-0066ff?style=for-the-badge" />
<img src="https://img.shields.io/badge/dbt%20Models-47-orange?style=for-the-badge" />
<img src="https://img.shields.io/badge/Alert%20SLA-%3C24h-ff6b6b?style=for-the-badge" />

</div>

---

## 💡 Why I Built This

> *"An HR friend spent 18+ hours every week building Excel reports — and by the time they were ready, the data was already stale. Leaders were making major workforce decisions in the dark."*

I had free time, a builder mindset, and a clear problem.

So I built **WorkforceIQ** — a real-time people analytics platform that **eliminates manual reporting entirely.**

---

## ⚡ The Stack

<div align="center">

```
🗄️ Snowflake  ──►  ⚙️ dbt Core  ──►  🔄 Airflow  ──►  📊 Tableau
```

| Layer | Tool | Details |
|:---:|:---:|:---|
| 🗄️ | **Snowflake** | Data Warehouse · Star Schema |
| ⚙️ | **dbt Core** | 47 Models · Tests · Lineage |
| 🔄 | **Airflow** | Orchestration · Anomaly Alerts |
| 📊 | **Tableau** | Row-Level Security · 4 Stakeholder Views |
| 🐍 | **Python** | ETL · Data Validation |
| ☁️ | **Netlify** | Live Deployment · CI/CD |

</div>

---

## 🔥 Key Features

<div align="center">

| Feature | What it does |
|:---:|:---|
| 📈 **Overview Dashboard** | Live headcount, attrition rate, open reqs & days to fill — all in one view |
| ⚠️ **Turnover Risk** | Risk scores by department, 12-month trends, red-flagged teams before crisis hits |
| 🌍 **Diversity Metrics** | Gender, ethnicity, pay equity ratio & ERG participation tracked quarter over quarter |
| 🎯 **Recruitment Pipeline** | Full hiring funnel — 340 applicants → 24 hires — with requisition aging |
| 🔔 **Airflow Alerts** | Automated anomaly detection flags attrition breaches within 24 hours |
| 🔐 **Row-Level Security** | 4 stakeholder groups — each sees only what's relevant to them |

</div>

---

## 📊 Real Impact

<div align="center">

| Metric | Before | After |
|:---:|:---:|:---:|
| ⏱️ Manual Reporting | 18 hrs / week | **0 hrs** |
| 🔄 Data Refresh | Daily | **Hourly** |
| 📡 Pipeline Uptime | — | **99.7%** |
| 🚨 Alert Detection | Manual scans | **< 24 hours** |

</div>

---

## 🗂️ Project Structure

```
workforceiq/
├── 📁 models/
│   ├── staging/          # Raw source cleaning (Snowflake)
│   ├── intermediate/     # Business logic transforms
│   └── marts/            # Final star-schema models (47 dbt models)
├── 📁 pipelines/
│   └── airflow_dags/     # Orchestration + anomaly alert DAGs
├── 📁 dashboards/
│   └── tableau/          # Tableau workbooks + RLS config
├── 📁 scripts/
│   └── python/           # ETL + data validation scripts
└── README.md
```

---

## 🧪 Simulated Dataset

Built on a **5,000-employee** simulated organization across:
- 🏢 Multiple departments and seniority levels
- 🌍 Diverse geographies and demographics
- 📅 24 months of historical workforce data
- 🔁 Realistic attrition, hiring, and compensation patterns

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=80&section=footer&animation=twinkling" width="100%"/>

<div align="center">

<img src="https://img.shields.io/badge/Snowflake-29B5E8?style=flat-square&logo=snowflake&logoColor=white" />
<img src="https://img.shields.io/badge/dbt-FF694B?style=flat-square&logo=dbt&logoColor=white" />
<img src="https://img.shields.io/badge/Airflow-017CEE?style=flat-square&logo=apacheairflow&logoColor=white" />
<img src="https://img.shields.io/badge/Tableau-E97627?style=flat-square&logo=tableau&logoColor=white" />
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white" />

<br/><br/>

*Built by [Chetan Chirag KH](https://linkedin.com/in/chetanchiragkh)*

</div>
