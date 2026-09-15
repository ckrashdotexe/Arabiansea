// Arabian Sea Clearing and Shipping L.L.C Data Store

export const COMPANY_INFO = {
  name: "Arabian Sea Clearing and Shipping L.L.C",
  nameArabic: "ارابيان سي للتخليص والشحن ذ.م.م",
  tagline: "Connecting the Gulf to the World with Sovereign Precision.",
  shortName: "ASCS",

  // Official Headquarters in UAE
  offices: {
    dubai: {
      name: "Dubai Corporate Headquarters",
      address: "Naif St, Deira, Dubai, United Arab Emirates",
      poBox: "P.O. Box: 27597, Dubai, UAE",
      phone: "04-2729388",
      phoneIntl: "+971 4 272 9388",
      fax: "04-2725233",
      faxIntl: "+971 4 272 5233"
    }
  },

  email: "info@arabianseashipping.ae",
  workingHours: "Monday – Saturday: 08:30 AM – 06:30 PM (GST)",

  services: [
    {
      id: "air-freight",
      number: "01",
      title: "Air Freight",
      badge: "Fastest Transit",
      icon: "Plane",
      description: "Fast and dependable air freight solutions for time-sensitive shipments and international cargo.",
      features: [
        "Time-sensitive shipments",
        "International cargo",
        "Airport-to-destination coordination",
        "Flexible shipping solutions"
      ],
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "sea-freight",
      number: "02",
      title: "Sea Freight",
      badge: "Ocean Cargo",
      icon: "Ship",
      description: "Efficient ocean freight solutions for commercial cargo, containers and larger international shipments.",
      features: [
        "Containerized cargo",
        "Commercial shipments",
        "International sea routes",
        "Cost-efficient transportation"
      ],
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "international-courier",
      number: "03",
      title: "International Courier",
      badge: "Express Routing",
      icon: "Package",
      description: "Reliable international courier solutions for documents, parcels and time-sensitive shipments.",
      carriers: ["DHL", "FedEx", "Aramex", "UPS"],
      features: [
        "Express document & parcel routing",
        "Door-to-door courier dispatch",
        "Major international carrier choices",
        "Commercial documentation handling"
      ],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "custom-shipping",
      number: "04",
      title: "Custom Shipping Solutions",
      badge: "Logistics Coordination",
      icon: "Globe",
      description: "Flexible logistics coordination designed around your shipment requirements.",
      features: [
        "Shipment coordination",
        "Carrier selection",
        "International routing",
        "Business logistics support"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    }
  ],

  trustStrip: [
    {
      icon: "Globe",
      title: "Global Reach",
      description: "International logistics connectivity"
    },
    {
      icon: "Layers",
      title: "Multimodal Freight",
      description: "Air + Sea + Courier"
    },
    {
      icon: "Truck",
      title: "Trusted Carriers",
      description: "DHL • FedEx • Aramex • UPS"
    },
    {
      icon: "MapPin",
      title: "Dubai Operations Hub",
      description: "Naif St, Deira, Dubai, UAE"
    }
  ]
};
