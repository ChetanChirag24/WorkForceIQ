export const turnoverByDept = [
  { dept: "Engineering", risk: 32, headcount: 1200, attrition: 8.2 },
  { dept: "Sales", risk: 45, headcount: 800, attrition: 12.1 },
  { dept: "Marketing", risk: 28, headcount: 400, attrition: 6.5 },
  { dept: "Operations", risk: 38, headcount: 900, attrition: 9.8 },
  { dept: "HR", risk: 22, headcount: 200, attrition: 5.1 },
  { dept: "Finance", risk: 18, headcount: 350, attrition: 4.2 },
  { dept: "Legal", risk: 15, headcount: 150, attrition: 3.8 },
  { dept: "Support", risk: 52, headcount: 600, attrition: 14.3 },
];

export const turnoverTrend = [
  { month: "Apr", voluntary: 45, involuntary: 12, total: 57 },
  { month: "May", voluntary: 52, involuntary: 15, total: 67 },
  { month: "Jun", voluntary: 38, involuntary: 10, total: 48 },
  { month: "Jul", voluntary: 61, involuntary: 18, total: 79 },
  { month: "Aug", voluntary: 55, involuntary: 14, total: 69 },
  { month: "Sep", voluntary: 42, involuntary: 11, total: 53 },
  { month: "Oct", voluntary: 48, involuntary: 16, total: 64 },
  { month: "Nov", voluntary: 65, involuntary: 20, total: 85 },
  { month: "Dec", voluntary: 58, involuntary: 17, total: 75 },
  { month: "Jan", voluntary: 44, involuntary: 13, total: 57 },
  { month: "Feb", voluntary: 50, involuntary: 15, total: 65 },
  { month: "Mar", voluntary: 47, involuntary: 12, total: 59 },
];

export const diversityData = [
  { category: "Gender", groups: [
    { name: "Male", value: 54, color: "hsl(187, 92%, 52%)" },
    { name: "Female", value: 42, color: "hsl(260, 70%, 60%)" },
    { name: "Non-Binary", value: 4, color: "hsl(152, 70%, 45%)" },
  ]},
  { category: "Ethnicity", groups: [
    { name: "White", value: 45, color: "hsl(187, 92%, 52%)" },
    { name: "Asian", value: 22, color: "hsl(260, 70%, 60%)" },
    { name: "Hispanic", value: 18, color: "hsl(152, 70%, 45%)" },
    { name: "Black", value: 12, color: "hsl(38, 92%, 55%)" },
    { name: "Other", value: 3, color: "hsl(0, 72%, 55%)" },
  ]},
];

export const diversityTrend = [
  { quarter: "Q1'24", female: 38, minority: 48, leadership: 28 },
  { quarter: "Q2'24", female: 39, minority: 49, leadership: 30 },
  { quarter: "Q3'24", female: 40, minority: 50, leadership: 31 },
  { quarter: "Q4'24", female: 41, minority: 52, leadership: 33 },
  { quarter: "Q1'25", female: 42, minority: 54, leadership: 35 },
];

export const openReqs = [
  { id: "REQ-001", title: "Sr. Data Engineer", dept: "Engineering", days: 45, priority: "high", candidates: 12 },
  { id: "REQ-002", title: "Product Manager", dept: "Product", days: 32, priority: "high", candidates: 8 },
  { id: "REQ-003", title: "UX Designer", dept: "Design", days: 28, priority: "medium", candidates: 15 },
  { id: "REQ-004", title: "Sales Director", dept: "Sales", days: 60, priority: "critical", candidates: 4 },
  { id: "REQ-005", title: "HR Business Partner", dept: "HR", days: 18, priority: "medium", candidates: 22 },
  { id: "REQ-006", title: "DevOps Engineer", dept: "Engineering", days: 52, priority: "high", candidates: 6 },
  { id: "REQ-007", title: "Marketing Analyst", dept: "Marketing", days: 14, priority: "low", candidates: 30 },
  { id: "REQ-008", title: "Finance Manager", dept: "Finance", days: 38, priority: "medium", candidates: 10 },
];

export const reqAgingData = [
  { range: "0-15 days", count: 12, fill: "hsl(152, 70%, 45%)" },
  { range: "16-30 days", count: 18, fill: "hsl(187, 92%, 52%)" },
  { range: "31-45 days", count: 15, fill: "hsl(38, 92%, 55%)" },
  { range: "46-60 days", count: 8, fill: "hsl(0, 72%, 55%)" },
  { range: "60+ days", count: 5, fill: "hsl(260, 70%, 60%)" },
];

export const alerts = [
  { id: 1, type: "critical", message: "Support dept attrition breached 14% threshold", time: "2 hours ago", resolved: false },
  { id: 2, type: "warning", message: "Sales pipeline has 3 reqs aged > 45 days", time: "6 hours ago", resolved: false },
  { id: 3, type: "critical", message: "Engineering voluntary turnover spiked 22% MoM", time: "12 hours ago", resolved: false },
  { id: 4, type: "info", message: "Diversity index improved +2.1% this quarter", time: "1 day ago", resolved: true },
  { id: 5, type: "warning", message: "Open headcount in Operations exceeds budget by 15%", time: "1 day ago", resolved: false },
  { id: 6, type: "info", message: "dbt model refresh completed successfully", time: "2 days ago", resolved: true },
  { id: 7, type: "critical", message: "REQ-004 Sales Director position aged 60 days", time: "3 days ago", resolved: false },
  { id: 8, type: "info", message: "Airflow DAG anomaly detection retrained", time: "3 days ago", resolved: true },
];

export const pipelineStages = [
  { stage: "Applied", count: 340, conversion: 100 },
  { stage: "Screened", count: 180, conversion: 53 },
  { stage: "Interview", count: 95, conversion: 28 },
  { stage: "Offer", count: 32, conversion: 9.4 },
  { stage: "Hired", count: 24, conversion: 7.1 },
];

export const headcountTrend = [
  { month: "Apr", count: 4820 },
  { month: "May", count: 4835 },
  { month: "Jun", count: 4870 },
  { month: "Jul", count: 4850 },
  { month: "Aug", count: 4880 },
  { month: "Sep", count: 4920 },
  { month: "Oct", count: 4910 },
  { month: "Nov", count: 4890 },
  { month: "Dec", count: 4930 },
  { month: "Jan", count: 4960 },
  { month: "Feb", count: 4980 },
  { month: "Mar", count: 5000 },
];
