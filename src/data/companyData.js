// Arabian Sea Clearing and Shipping L.L.C Data Store

export const COMPANY_INFO = {
  name: "Arabian Sea Clearing and Shipping L.L.C",
  tagline: "Connecting the Gulf to the World with Sovereign Precision.",
  shortName: "Arabian Sea Shipping",
  location: "205, Petrofac House, Al Soor, Sharjah, United Arab Emirates",
  phone: "+971 6 568 6515",
  fax: "+971 6 5686414",
  poBox: "P.O. Box 4210, Sharjah, UAE",
  email: "info@arabianseashipping.ae",
  workingHours: "Monday – Saturday: 08:30 AM – 06:30 PM (GST)",

  services: [
    {
      id: "air-freight",
      title: "Air Freight",
      badge: "Air Cargo Solutions",
      icon: "Plane",
      description: "Fast and dependable air freight solutions for time-sensitive shipments and international cargo.",
      features: [
        "Time-sensitive shipments",
        "International cargo",
        "Airport-to-destination coordination",
        "Flexible shipping solutions"
      ]
    },
    {
      id: "sea-freight",
      title: "Sea Freight",
      badge: "Ocean Cargo",
      icon: "Ship",
      description: "Efficient ocean freight solutions for commercial cargo, containers and larger international shipments.",
      features: [
        "Containerized cargo",
        "Commercial shipments",
        "International sea routes",
        "Cost-efficient transportation"
      ]
    },
    {
      id: "international-courier",
      title: "International Courier",
      badge: "Express Routing",
      icon: "Package",
      description: "Reliable international courier solutions for documents, parcels and time-sensitive shipments.",
      carriers: ["DHL", "FedEx", "Aramex", "UPS"],
      features: [
        "Express document & parcel routing",
        "Multiple major courier options",
        "Door-to-door coordination",
        "Commercial document handling"
      ]
    },
    {
      id: "custom-shipping",
      title: "Custom Shipping Solutions",
      badge: "Logistics Coordination",
      icon: "Globe",
      description: "Flexible logistics coordination designed around your shipment requirements.",
      features: [
        "Shipment coordination",
        "Carrier selection",
        "International routing",
        "Business logistics support"
      ]
    }
  ],

  trustStrip: [
    {
      icon: "Globe",
      title: "Global Reach",
      subtitle: "International logistics connectivity"
    },
    {
      icon: "Layers",
      title: "Multimodal Freight",
      subtitle: "Air + Sea + Courier"
    },
    {
      icon: "Truck",
      title: "Trusted Carriers",
      subtitle: "DHL • FedEx • Aramex • UPS"
    },
    {
      icon: "MapPin",
      title: "Sharjah Based",
      subtitle: "Strategically positioned in the UAE"
    }
  ]
};
