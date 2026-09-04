export type Property = {
  id: string; name: string; location: string; configuration: string; propertyType?: string; priceValue?: number;
  area: string; price: string; status: string; image: string;
  developer: string; description: string; amenities: string[];
};

export const properties: Property[] = [
  {
    id:"demo-01", name:"[PLACEHOLDER — TO BE PROVIDED]", location:"[PLACEHOLDER — TO BE PROVIDED]",
    configuration:"[PLACEHOLDER — TO BE PROVIDED]", area:"[PLACEHOLDER — TO BE PROVIDED]",
    price:"[PLACEHOLDER — TO BE PROVIDED]", status:"DEMO PROPERTY",
    image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    developer:"[PLACEHOLDER — TO BE PROVIDED]",
    description:"Demo listing for website presentation. Verified property information will be added after review by SOVARA.",
    amenities:["[PLACEHOLDER — TO BE PROVIDED]","[PLACEHOLDER — TO BE PROVIDED]"]
  },
  {
    id:"demo-02", name:"[PLACEHOLDER — TO BE PROVIDED]", location:"[PLACEHOLDER — TO BE PROVIDED]",
    configuration:"[PLACEHOLDER — TO BE PROVIDED]", area:"[PLACEHOLDER — TO BE PROVIDED]",
    price:"[PLACEHOLDER — TO BE PROVIDED]", status:"DEMO PROPERTY",
    image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    developer:"[PLACEHOLDER — TO BE PROVIDED]",
    description:"Demo listing for website presentation. Verified property information will be added after review by SOVARA.",
    amenities:["[PLACEHOLDER — TO BE PROVIDED]","[PLACEHOLDER — TO BE PROVIDED]"]
  }
];
