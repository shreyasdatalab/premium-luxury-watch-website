export interface Timepiece {
  id: string;
  reference: string;
  name: string;
  collection: 'Éclat' | 'Noctis' | 'Meridian' | 'Celestial';
  tagline: string;
  price: number;
  priceFormatted: string;
  availability: 'Available' | 'Made to Order' | 'Allocation Only' | 'Vault Exclusive';
  editionLimit?: string;
  images: {
    hero: string;
    dial: string;
    profile: string;
    caseback: string;
    lifestyle: string;
  };
  specs: {
    calibre: string;
    movementType: 'Automatic' | 'Manual-Wind' | 'Tourbillon' | 'Monopusher Chronograph';
    powerReserve: string;
    frequency: string;
    jewels: number;
    components: number;
    caseMaterial: string;
    caseDiameter: string;
    caseThickness: string;
    waterResistance: string;
    crystal: string;
    casebackSpec: string;
    dialDescription: string;
    strapMaterial: string;
    buckle: string;
  };
  description: string;
  craftsmanshipNotes: string[];
  features: string[];
  calibreDiagram?: string;
}

export interface CollectionInfo {
  id: 'Éclat' | 'Noctis' | 'Meridian' | 'Celestial';
  number: string;
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  accent: string;
}

export interface MemberWatch {
  id: string;
  reference: string;
  name: string;
  image: string;
  acquisitionDate: string;
  serialNumber: string;
  warrantyValidUntil: string;
  status: 'In Vault' | 'Servicing' | 'In Transit';
  lastService: string;
  nextServiceRecommended: string;
  marketValuation: string;
  provenance: {
    coscCertified: boolean;
    poinconDeGeneve: boolean;
    masterWatchmaker: string;
    accuracyDelta: string;
  };
}

export interface Consultation {
  id: string;
  type: 'Bespoke Fitting' | 'Grand Complication Preview' | 'Vault Valuation' | 'Annual Service Review';
  specialist: {
    name: string;
    title: string;
    avatar: string;
    location: string;
  };
  date: string;
  time: string;
  location: string;
  isVirtual: boolean;
  status: 'Confirmed' | 'Pending' | 'Completed';
  notes?: string;
}

export interface CartItem {
  timepiece: Timepiece;
  quantity: number;
  engraving?: string;
  selectedStrapSize?: 'Small' | 'Standard' | 'Large';
}
