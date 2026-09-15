import React from 'react';
import { Globe, Layers, Truck, MapPin } from 'lucide-react';

export default function TrustStrip() {
  const items = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Comprehensive air, ocean, and ground freight connectivity across worldwide trade lanes."
    },
    {
      icon: Layers,
      title: "Multimodal Freight",
      description: "Integrated Air Freight + Sea Freight + Express International Courier solutions."
    },
    {
      icon: Truck,
      title: "Major Carriers",
      description: "Coordinating with leading courier networks: DHL • FedEx • Aramex • UPS."
    },
    {
      icon: MapPin,
      title: "Dubai Operations Hub",
      description: "Centrally positioned in Naif St, Deira, Dubai, UAE."
    }
  ];

  return (
    <div className="trust-strip-fullscreen">
      <div className="container-full">
        <div className="trust-grid-full">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="trust-item-box">
                <div className="trust-icon-container">
                  <IconComp size={26} />
                </div>
                <div className="trust-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
