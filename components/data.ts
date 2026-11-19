// All copy, fees and photos live here, so the site is quick to adapt for a new clinic.

export const CLINIC = {
  name: "Harkat",
  full: "Harkat Physiotherapy",
  urdu: "حرکت",
  area: "Block J, Johar Town, Lahore",
  phoneDisplay: "+92 335 4679492",
  whatsapp: "923354679492",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Johar+Town+Lahore",
};

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const PHOTOS = {
  hero: "1649751361457-01d3a696c7e6",
  shoulder: "1645005512968-0c1fe99f0093",
  table: "1706353399656-210cca727a33",
  band: "1645005512942-a17817fb7c11",
  weights: "1645005513713-9e2b92a687d3",
  ball: "1522898467493-49726bf28798",
  neck: "1768507423533-b87b62769758",
  stretch: "1645005513751-e22717a66ae6",
};

export const CONDITIONS = [
  {
    name: "Back and neck pain",
    body: "From long hours at a desk, driving or lifting. We loosen stiff joints by hand, then give you a few exercises that stop the pain coming back.",
    sessions: "Usually 4 to 6 sessions",
  },
  {
    name: "Sciatica and slipped disc",
    body: "Pain running down the leg. We find which movements ease it, take pressure off the nerve and build up your core so you can sit and walk again.",
    sessions: "Usually 6 to 10 sessions",
  },
  {
    name: "Frozen shoulder",
    body: "Gentle stretching and joint work to win back movement step by step, plus a home routine you can do in front of the TV.",
    sessions: "Usually 8 to 12 sessions",
  },
  {
    name: "Knee pain and arthritis",
    body: "Strengthening for the muscles around the knee so stairs, namaz and walking get easier, with or without an injection or surgery.",
    sessions: "Usually 6 to 8 sessions",
  },
  {
    name: "Sports injuries",
    body: "Ankle sprains, hamstring pulls and cricket shoulders. We get you training again, then test you before you go back to playing.",
    sessions: "Depends on the injury",
  },
  {
    name: "After surgery",
    body: "Knee or hip replacement, ACL repair, fractures. We work with your surgeon's plan from the first week, at the clinic or at home.",
    sessions: "Usually 10 to 20 sessions",
  },
  {
    name: "Stroke and nerve conditions",
    body: "Balance, walking and hand use after a stroke, Parkinson's or nerve injury. Family members are welcome to join and learn the exercises.",
    sessions: "Ongoing, reviewed monthly",
  },
  {
    name: "Pregnancy and postnatal pain",
    body: "Back and pelvic pain during and after pregnancy, treated by a female physiotherapist in a private room.",
    sessions: "Usually 4 to 6 sessions",
  },
];

export const STEPS = [
  {
    title: "Assessment",
    body: "45 minutes. We ask about your pain, test how you move and measure your range of motion.",
  },
  {
    title: "A plan you understand",
    body: "We tell you what is wrong in plain words, how many sessions it should take and what it will cost.",
  },
  {
    title: "Treatment sessions",
    body: "Hands-on therapy, exercise and machines like TENS or shockwave only when they actually help.",
  },
  {
    title: "Exercises for home",
    body: "A short routine on WhatsApp with videos, so you keep improving between visits.",
  },
];

export const FEES = [
  { item: "First assessment", note: "45 minutes, includes your plan", price: "3,000" },
  { item: "Clinic session", note: "40 minutes", price: "3,500" },
  { item: "Home visit", note: "Anywhere in Lahore", price: "5,500" },
  { item: "10 clinic sessions", note: "Pay upfront, use within 2 months", price: "30,000" },
];

export const HOURS = [
  { days: "Monday to Saturday", time: "9 am – 9 pm" },
  { days: "Sunday", time: "Home visits only" },
];
