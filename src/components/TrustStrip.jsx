import React from 'react';
import { Globe, Layers, Truck, MapPin } from 'lucide-react';

export default function TrustStrip() {
  const items = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "International logistics connectivity"
    },
    {
      icon: Layers,
      title: "Multimodal Freight",
      description: "Air + Sea + Courier"
    },
    {
      icon: Truck,
      title: "Trusted Carriers",
      description: "DHL • FedEx • Aramex • UPS"
    },
    {
      icon: MapPin,
      title: "Sharjah Based",
      description: "Strategically positioned in the UAE"
    }
  ];

  return (
    <div className="trust-strip-wrapper">
      <div className="container">
        <div className="trust-strip-container">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="trust-item">
                <div className="trust-icon-box">
                  <IconComp size={24} />
                </div>
                <div className="trust-text">
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
