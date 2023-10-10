export default defineEventHandler((event) => {
  const prices = [
    {
      id: 1,
      title: "Basic Plan",
      price: 599,
      isPopular: false,
      items: [
        "Electrical Service",
        "Distribution Power Systems",
        "High & Medium Voltages",
        "Industrial Control Systems",
        "Switch Installation",
        "Generator Installations",
        "Innovative Construction",
      ],
    },
    {
      id: 2,
      title: "Standard",
      price: 699,
      isPopular: true,
      items: [
        "PLC Controls",
        "Conveyor Systems",
        "Wiring Renovations",
        "Electric Water Heater Repair",
        "Service And Panel Upgrades",
        "Efficient Lighting Solutions",
        "Site Lighting",
      ],
    },
    {
      id: 3,
      title: "Professional",
      price: 799,
      isPopular: false,
      items: [
        "Cable Tray Installations",
        "Wiring Upgrades",
        "Energy Efficient Lighting",
        "Emergency Generating",
        "Pools And Hot Tubs",
        "Air Conditioning Units",
        "Generating Systems",
      ],
    },
  ];

  return prices;
});
