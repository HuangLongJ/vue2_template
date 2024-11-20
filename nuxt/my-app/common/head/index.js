const head = {
  homePage: {
    title: 'The Next Generation B2B Marketing Technology Platform',
    meta: [
      { name: 'description', content: 'Improve marketing efficiency and business performance with our AI-driven platform. Enhance customer experience, align marketing and sales, and achieve breakthroughs with enriched data.' },
      { name: 'keywords', content: 'B2B Marketing Technology, AI-Driven Marketing, Social Media Integration, Real-time Personalization, Marketing & Sales Alignment, Embedded AI, Customer Experience Enhancement, Data-Driven Sales Performance, Global Enterprise Growth, End-To-End Marketing Solutions' },
    ]
  },
  products: {
    title: 'JINGdigital - AI-Powered Marketing Platform for B2B Growth',
    meta: [
      { name: 'description', content: 'JINGdigital offers a suite of products and services for B2B enterprises to enhance large-scale personalized customer experiences and drive tangible business impact. Discover our Marketing Automation, Sales Engage, Omni Social, AI Suite, AppExchange, and CDP solutions for end-to-end digital management of the customer lifecycle.' },
      { name: 'keywords', content: 'B2B Marketing Technology, Marketing Automation, Sales Engagement, Omni Social Media Integration, AI Marketing Solutions, AppExchange Integration, Customer Data Platform, Digital Customer Lifecycle Management, Social Media Marketing Services, Content Production and Distribution, Customer Experience, CRM Integration, Data Security, Personalized Marketing Management' },
    ]
  },
  solutions: {
    title: 'JINGdigital - Comprehensive B2B Marketing Technology Solutions',
    meta: [
      { name: 'description', content: 'JINGdigital offers a comprehensive integrated marketing solution designed to connect marketing and sales, boost conversion rates, and optimize costs. Our platform empowers brands to achieve KPIs effectively with scalable, data-driven technology, supporting customer-centric growth and enhancing operational efficiency.' },
      { name: 'keywords', content: 'B2B Marketing Automation, Integrated Marketing Solutions, Content Management, Event Management, E-Commerce Integration, Distributor Enablement, Lead Nurturing, Sales Enablement, Customer Lifecycle Engagement, Social Media Marketing, Data-Driven Technology, Digital Content Hub, Real-time Personalization, AI-Driven Sales Operations, Webinar Management, Customer Experience Optimization' },
    ]
  },
  caseStudies: {
    title: 'JINGdigital - Unified Marketing Automation for B2B Success',
    meta: [
      { name: 'description', content: "Empower your B2B company with JINGdigital's AI marketing platform for accelerated digital transformation and sustainable growth. Experience a 132% increase in lead pool growth, a 63% boost in lead-to-opportunity conversion rates, and a 78% enhancement in marketing team performance." },
      { name: 'keywords', content: 'B2B Digital Marketing Transformation, AI Marketing Platform, Lead Pool Growth, Lead Conversion Rate,  Automated Marketing Workflows, Content Marketing, Live Streaming, Event Management, E-Commerce Integration, Customer Acquisition, Personalized Follow-Ups, ROI Enhancement, Unified Marketing and Sales Cycle' },
    ]
  },
  company: {
    title: "JINGdigital - Asia's Leading B2B Marketing Software Provider",
    meta: [
      { name: 'description', content: 'JINGdigital empowers B2B marketers to make a significant impact on revenue. As a leading marketing technology company, we specialize in lead acquisition, prospect nurturing, and sales empowerment, driving substantial revenue growth for businesses across various industries.' },
      { name: 'keywords', content: 'B2B Marketing Software, Lead Acquisition, Prospect Nurturing, Marketing Technology, SaaS Marketing Solutions,  Marketing Automation,Multinational Services' },
    ]
  },

}
export default (pageName) => {
  return head[pageName] || head['homePage']
}
