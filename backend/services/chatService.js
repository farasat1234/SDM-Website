const responses = [
  {
    keywords: ['hello', 'hi', 'hey', 'salaam', 'salam', 'assalam'],
    reply: "Hello! Welcome to System Dies and Mould (SDM). I'm here to help you with information about our services, pricing, or to get a quote. How can I assist you today?",
  },
  {
    keywords: ['service', 'what do you do', 'what you do', 'offer', 'provide'],
    reply: "SDM offers a full range of precision manufacturing services:\n\n• Dies & Press Tools\n• Injection & Blow Moulds\n• FRP / GRP Fabrication\n• CNC Precision Machining\n• Jigs & Fixtures\n• Reverse Engineering\n\nWhich service would you like to know more about?",
  },
  {
    keywords: ['die', 'press tool', 'stamping', 'progressive', 'blanking'],
    reply: "Our Dies & Press Tools division manufactures progressive dies, blanking dies, deep draw tools, and compound dies machined to tight tolerances. We serve high-volume automotive and sheet metal stamping applications. Call us at 0333-5499004 for a quote.",
  },
  {
    keywords: ['mould', 'mold', 'injection', 'blow', 'plastic', 'rubber'],
    reply: "We design and manufacture plastic injection moulds, blow moulds, and rubber moulds with optimal gate/runner systems, cooling channels, and Class A surface finishes. Contact us at c47.sdm@gmail.com with your drawings for a quotation.",
  },
  {
    keywords: ['frp', 'grp', 'fiberglass', 'fibreglass', 'composite', 'duct', 'tank', 'vessel'],
    reply: "Our FRP/GRP Fabrication shop produces tanks, vessels, hoods, canopies, ducts, and custom profiles using hand lay-up, spray-up, and RTM processes. Acid-resistant and custom laminate options available.",
  },
  {
    keywords: ['cnc', 'machining', 'milling', 'turning', 'precision', '5-axis', '3-axis'],
    reply: "We offer 3-axis and 5-axis CNC milling, turning, and grinding for steel, aluminium, brass, and engineering plastics. We routinely achieve ±0.005mm tolerances. Send your drawings to c47.sdm@gmail.com.",
  },
  {
    keywords: ['jig', 'fixture', 'welding fixture', 'assembly', 'gauge'],
    reply: "Our Jigs & Fixtures team manufactures assembly jigs, welding fixtures, checking gauges, and drilling templates engineered to reduce cycle times and guarantee repeatability on the production floor.",
  },
  {
    keywords: ['reverse engineer', 'reverse engineering', '3d scan', 'cad reconstruction', 'legacy part'],
    reply: "We offer full reverse engineering services — 3D scanning, CMM measurement, and CAD reconstruction of legacy parts and obsolete tooling. We provide rapid re-tooling with full DFM documentation.",
  },
  {
    keywords: ['quote', 'quotation', 'price', 'cost', 'pricing', 'how much'],
    reply: "To get a competitive quotation, please share your drawings or requirements:\n\n📧 Email: c47.sdm@gmail.com\n📞 Phone: 0333-5499004\n\nOr fill in the Contact form on this page and our engineering team will respond within 24 hours.",
  },
  {
    keywords: ['address', 'location', 'where', 'site', 'karachi', 'office'],
    reply: "We are located at:\n📍 C-47, SITE, Super Highway, Karachi, Pakistan\n\nWorking hours: Monday to Saturday, 8:00 AM – 6:00 PM",
  },
  {
    keywords: ['phone', 'contact', 'call', 'number', 'reach', 'whatsapp'],
    reply: "You can reach us at:\n📞 0333-5499004 (also on WhatsApp)\n📧 c47.sdm@gmail.com\n\nOr visit: C-47, SITE, Super Highway, Karachi",
  },
  {
    keywords: ['email', 'mail'],
    reply: "You can email us at: c47.sdm@gmail.com\n\nOur engineering team typically responds within 24 hours with a technical review and quotation.",
  },
  {
    keywords: ['hour', 'timing', 'open', 'close', 'time', 'working'],
    reply: "Our working hours are:\n🕐 Monday to Saturday: 8:00 AM – 6:00 PM\n\nWe are closed on Sundays and public holidays.",
  },
  {
    keywords: ['iso', 'certified', 'certification', 'quality'],
    reply: "SDM is ISO 9001:2015 certified with a fully documented quality management system. All components go through in-process CMM inspection and first-article approval before delivery.",
  },
  {
    keywords: ['experience', 'years', 'history', 'founded', 'since', 'how long'],
    reply: "SDM was founded in 1998 — giving us over 25 years of precision manufacturing experience. We have delivered 1200+ projects with a 98% client retention rate across automotive, industrial, and infrastructure sectors.",
  },
  {
    keywords: ['equipment', 'machine', 'edm', 'vmc', 'hmc', 'surface grinder', 'cmm'],
    reply: "Our facility includes:\n• EDM, VMC, HMC, CNC turning centres\n• Surface grinders and CMM machines\n• Wire / Sink EDM\n• 5-Axis CNC milling centres\n• In-house heat treatment up to 62 HRC\n• FRP fabrication shop\n\nAll in a 12,000 sq.ft. climate-controlled facility.",
  },
  {
    keywords: ['automotive', 'industrial', 'sector', 'industry', 'client'],
    reply: "SDM serves clients across multiple sectors:\n• Automotive OEMs\n• Industrial equipment manufacturers\n• Pharma\n• Infrastructure developers\n• Consumer products\n\nWe operate across Pakistan and the Gulf region.",
  },
  {
    keywords: ['director', 'farasat', 'owner', 'management', 'team'],
    reply: "SDM is led by Mr. Farasat Karim (Director). You can reach him directly at 0333-5499004 or c47.sdm@gmail.com.",
  },
  {
    keywords: ['thank', 'thanks', 'thankyou', 'thank you'],
    reply: "You're welcome! If you need anything else, feel free to ask. You can also reach us at 0333-5499004 or c47.sdm@gmail.com. We look forward to working with you!",
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'later'],
    reply: "Goodbye! Thank you for visiting SDM. Don't hesitate to get in touch at 0333-5499004 or c47.sdm@gmail.com whenever you're ready to discuss your project.",
  },
];

function getBotReply(message) {
  const lower = message.toLowerCase();
  for (const item of responses) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.reply;
    }
  }
  return "Thanks for your message! For the best assistance, please contact us directly:\n\n📞 0333-5499004\n📧 c47.sdm@gmail.com\n📍 C-47, SITE, Super Highway, Karachi\n\nOur team will be happy to help with any enquiry about dies, moulds, FRP, or CNC machining.";
}

module.exports = { getBotReply };
