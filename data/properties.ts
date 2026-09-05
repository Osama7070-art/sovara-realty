export type Property = {
  id: string;

  projectName: string;
  developer: string;

  location: string;
  city: string;
  state: string;
  locality: string;

  propertyType: string;
  configuration: string;

  area: string;
  price: string;
  priceValue?: number;

  status: string;

  description: string;
  highlights: string[];
  amenities: string[];

  images: string[];
  videos: string[];
  floorPlans: string[];
  brochure?: string;

  contact?: {
    name: string;
    phone: string;
    email: string;
  };

  listingStatus: "DRAFT" | "ACTIVE" | "INACTIVE";
  verificationStatus: "UNVERIFIED" | "UNDER REVIEW" | "VERIFIED";

  image: string;
  name: string;
};

export const properties: Property[] = [
  {
    id: "demo-01",

    projectName: "[PLACEHOLDER — TO BE PROVIDED]",
    name: "[PLACEHOLDER — TO BE PROVIDED]",

    developer: "[PLACEHOLDER — TO BE PROVIDED]",

    location: "[PLACEHOLDER — TO BE PROVIDED]",
    city: "[PLACEHOLDER — TO BE PROVIDED]",
    state: "[PLACEHOLDER — TO BE PROVIDED]",
    locality: "[PLACEHOLDER — TO BE PROVIDED]",

    propertyType: "[PLACEHOLDER — TO BE PROVIDED]",
    configuration: "[PLACEHOLDER — TO BE PROVIDED]",

    area: "[PLACEHOLDER — TO BE PROVIDED]",
    price: "[PLACEHOLDER — TO BE PROVIDED]",

    status: "DEMO PROPERTY",

    description:
      "Demo listing for website presentation. Verified property information will be added after review by SOVARA.",

    highlights: [
      "[PLACEHOLDER — TO BE PROVIDED]",
      "[PLACEHOLDER — TO BE PROVIDED]",
    ],

    amenities: [
      "[PLACEHOLDER — TO BE PROVIDED]",
      "[PLACEHOLDER — TO BE PROVIDED]",
    ],

    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    ],

    videos: [],
    floorPlans: [],

    listingStatus: "DRAFT",
    verificationStatus: "UNVERIFIED",

    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "demo-02",

    projectName: "[PLACEHOLDER — TO BE PROVIDED]",
    name: "[PLACEHOLDER — TO BE PROVIDED]",

    developer: "[PLACEHOLDER — TO BE PROVIDED]",

    location: "[PLACEHOLDER — TO BE PROVIDED]",
    city: "[PLACEHOLDER — TO BE PROVIDED]",
    state: "[PLACEHOLDER — TO BE PROVIDED]",
    locality: "[PLACEHOLDER — TO BE PROVIDED]",

    propertyType: "[PLACEHOLDER — TO BE PROVIDED]",
    configuration: "[PLACEHOLDER — TO BE PROVIDED]",

    area: "[PLACEHOLDER — TO BE PROVIDED]",
    price: "[PLACEHOLDER — TO BE PROVIDED]",

    status: "DEMO PROPERTY",

    description:
      "Demo listing for website presentation. Verified property information will be added after review by SOVARA.",

    highlights: [
      "[PLACEHOLDER — TO BE PROVIDED]",
      "[PLACEHOLDER — TO BE PROVIDED]",
    ],

    amenities: [
      "[PLACEHOLDER — TO BE PROVIDED]",
      "[PLACEHOLDER — TO BE PROVIDED]",
    ],

    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    ],

    videos: [],
    floorPlans: [],

    listingStatus: "DRAFT",
    verificationStatus: "UNVERIFIED",

    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
  },
];
