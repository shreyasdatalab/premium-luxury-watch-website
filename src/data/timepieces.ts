import { Timepiece, CollectionInfo, MemberWatch, Consultation } from '../types';

export const TIMEPIECES: Timepiece[] = [
  {
    id: 'eclat-38',
    reference: 'Ref. 3801-RG',
    name: 'ÉCLAT 38',
    collection: 'Éclat',
    tagline: 'Ultra-thin dress chronometry in 18K rose gold with grand feu enamel dial.',
    price: 145000,
    priceFormatted: '$145,000',
    availability: 'Made to Order',
    editionLimit: 'Limited to 25 Pieces Worldwide',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhzRX_e2WMjob1vvMcrKeIhAx1WLI1jWvV4wi-H78VOhG_S-Ev0S56FrgZLCErmIx1G_nJ-amkJM3VyfYg1x00ppmwK2BmmXCctTHDezn15kaf6Y153tjd4XJ1IIWgONEvE5K4fb_hhkHXpX-TukyHvutq8mJGr4WKff6AIye0BV9G_OcVY87WmW4FtD0MMEnxTHpb1jGmOLiam3JuzlyS5BZwc6RZki77xZ4R2J4AepKxs9vg0eFmUg',
      dial: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhzRX_e2WMjob1vvMcrKeIhAx1WLI1jWvV4wi-H78VOhG_S-Ev0S56FrgZLCErmIx1G_nJ-amkJM3VyfYg1x00ppmwK2BmmXCctTHDezn15kaf6Y153tjd4XJ1IIWgONEvE5K4fb_hhkHXpX-TukyHvutq8mJGr4WKff6AIye0BV9G_OcVY87WmW4FtD0MMEnxTHpb1jGmOLiam3JuzlyS5BZwc6RZki77xZ4R2J4AepKxs9vg0eFmUg',
      profile: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1En-jm-hYXK2b7n_81Dj6B1ePkIdRDEd542B1OO14dizuVd4mS3bxEV1fP3PzJB59C-A_znKaKZnI6UqjVbS78DfiboNWtg4aXR_kvRT7gl9dGZsx-zTYDl1oBOwXXgTj6SGaICPXl_jll2hgkIUkO0oTuHkF6EzDryZR3vNxlXVVPcCwY15YIIoD1dLqloritotcaKkure78oV-q9DvkCiP0DzgSjgtV7xt3bAD8pMS8s0ABz5w5iA',
      caseback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAojTp9B6CB_t68s5EaIKKkpJuDxMpxWq0FvQtoJTJFImWjIZS74LmNNCdt0eCqpMGROmwghYy04_GkMBR8qgg7mSvRJgQECU6bDewIBMSuBuvlE_RguVQIYqEnuQ1WruXhaSgYyrklXHWcOtTuItnuYp7Eal2AC4FxmPNamAY4sPH0lYS4coujqS8GHJ8cw9KoKku-n_zLcczphgiAJ7oWLgxsN-IJA4xvqyGSX6HpgswhQBVQcVio0w',
      lifestyle: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOimg8hZttnMtQhgczxbVNQl1coiqCyQkY6BrPaKPyI4YNEryclqTghhx13144aLs19GG0d3QUdOtvixAJ35a5RD_KRInSV0ijlqscyG5mEiA8GMTyXBsveuhLpJ1ImIqlIMlALKvrOUoCTdwKIe6G-H9F8LP76WvUdUoHwFN_BFFjiJMGe11GRDX2KUxrdYMFT3E8020K2pUuXOhH4OQeRnMEbwXd2KGLG5a2jxd0HxR3RrqdTQ2zzg'
    },
    specs: {
      calibre: 'In-house Calibre AV-01 Ultra-Plat',
      movementType: 'Manual-Wind',
      powerReserve: '72 Hours Twin-Barrel',
      frequency: '28,800 vph (4 Hz)',
      jewels: 29,
      components: 184,
      caseMaterial: '18K 4N Rose Gold, Mirror-Polished & Satin Flanks',
      caseDiameter: '38.0 mm',
      caseThickness: '7.2 mm',
      waterResistance: '30 Meters (3 ATM)',
      crystal: 'Anti-Reflective Double-Domed Sapphire Crystal',
      casebackSpec: 'Exhibition Sapphire Case Back with Poinçon de Genève Seal',
      dialDescription: 'Opaline Silver Grand Feu Enamel, Hand-Applied Faceted Rose Gold Indices',
      strapMaterial: 'Hand-Stitched Mississippiensis Alligator Leather in Matte Charcoal',
      buckle: '18K Rose Gold Pin Buckle with Hand-Angled Aurevant Emblem'
    },
    description: 'The Éclat 38 represents the purest manifestation of contemporary classical chronometry. Engineered with an ultra-slim 7.2mm architecture, it houses the proprietary Calibre AV-01, featuring hand-beveled bridges, black-polished screw heads, and twin mainspring barrels delivering 72 hours of uninterrupted chronometric precision.',
    craftsmanshipNotes: [
      'Over 120 hours of individual hand-anglage per movement bridge.',
      'Grand Feu enamel dial fired at 800°C across 7 successive kiln cycles.',
      'Independent balance wheel with variable inertia gold regulating blocks.'
    ],
    features: [
      'Poinçon de Genève Certified Chronometer',
      'Twin-Barrel Power Architecture',
      'Ultra-Plat 7.2mm Profile',
      'Bespoke Horological Engraving Available'
    ],
    calibreDiagram: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqnt-kuxgv9Gk2iysglu8EIYAhz5OiYt8ao5lxEg6JS3D8Vzg4JTi8tGKPebGDyG7Cnjfu010O0_lPg6OCvuvYa7ZG2QxQx5l-KSwi59fMFKCnLWEb1UR08tsLhuXld2xv52G71M1KgIDdKmmDriGZjPeec7mw3pycBhpX0GwQXbGjvCBshwan9Zb7NCemV3uoEPg3dMCrwwnEQjeXqzBj9QLfSg8cwW1GvAh96gPNdUZYyAErjj5zVg'
  },
  {
    id: 'noctis-chrono',
    reference: 'Ref. 4022-CE',
    name: 'NOCTIS CHRONOGRAPH',
    collection: 'Noctis',
    tagline: 'Monopusher column-wheel chronograph cased in micro-blasted black ceramic.',
    price: 168000,
    priceFormatted: '$168,000',
    availability: 'Available',
    editionLimit: 'Numbered Edition of 50',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXciJZOk-3XaeKdnTPKvScwARf1LxmcSE2budMT8i_QeXllc543qjz5e5jACQ4S3uU1Npf7YOxembsfaoZqxSdwVcZdWkO6WJbAxPakcTWWqVXNSB6TQyJtVC0UH5kJlD4iIAcv0p-Ct1ct8zkKiiO3EnV53ucrwzMMevhrdoJ4xF725mEKocYtgYWzG8fVH7sknIHYAUbPkydzzA7iu3m1IoxW3hJWeIJMJQWj5x8-6LHAER0sFF0RQ',
      dial: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEbWocCXRnCj3VufnG83NRItjDqCUSg5is66WLPPWSAjMUox0YTKJZkxMlQXvDeMk2pXhJnb0b60Yq8oUfEBixzALiuc1eiykrxin3bouMvCKB8CK7iAieUPDCC33m-5EKr32UIZgVz89rqecWtWTwE6fsQwo7HLsPMhagKphm2CRubZmmnKmkEKwNk1PGuX3pG45eGnSeH2Hp2strzwixITOyOIxqRkRFpTXhp8zHKjP4v_vEIpszCg',
      profile: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1En-jm-hYXK2b7n_81Dj6B1ePkIdRDEd542B1OO14dizuVd4mS3bxEV1fP3PzJB59C-A_znKaKZnI6UqjVbS78DfiboNWtg4aXR_kvRT7gl9dGZsx-zTYDl1oBOwXXgTj6SGaICPXl_jll2hgkIUkO0oTuHkF6EzDryZR3vNxlXVVPcCwY15YIIoD1dLqloritotcaKkure78oV-q9DvkCiP0DzgSjgtV7xt3bAD8pMS8s0ABz5w5iA',
      caseback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcxMABgKBZwe20jtyDhpcX7ruNUqzLpcRMcrLcJwAfB01IQC7NGjj49_L5smk7JZosZ4OyQtkW47DVnPAmDoprHDIn_7mMotqtS2lJsXUj92VaGlnJL-mUMNagsfP6ef0-_XiaeKalP67OHtTlr5H-DehlzHc9YvMW5srzjoTkstRaKrrfWhVDYwaZJZta5pJwNrewtbgqtD-iqzgL5AChPfEXKEiMN9iB69TXkKPLvYG0BTWpV2VblQ',
      lifestyle: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzVnxOH8cMwGwF1byPLJgmCLOUXE6c_aVL5jn70AxMFoJsZsifW1CTjZDEsT1_DkmfHtpIsQzVz2NUJeXRfjW1zEosJl1Wdu_FASDWREA5wXOhENDfRqT6KbuGLsRIxUI-Qc48zo4DPbTBc8zlOrUxaZlI3dI_A9CWEJUhtsXvtKeOXohIl8YLRZRk_uMJZLTftX_ZPzFTQg9ZAw0sWpFBGgfj_UGGPYe4aGvgMu-KTtt041VTbOcNrg'
    },
    specs: {
      calibre: 'In-house Calibre NC-02 Monopoussoir',
      movementType: 'Monopusher Chronograph',
      powerReserve: '65 Hours',
      frequency: '28,800 vph (4 Hz)',
      jewels: 35,
      components: 242,
      caseMaterial: 'High-Density Matte Black Zirconia Ceramic & DLC Titanium',
      caseDiameter: '41.0 mm',
      caseThickness: '9.8 mm',
      waterResistance: '50 Meters (5 ATM)',
      crystal: 'Sapphire Crystal with Anti-Glare Treatment Inside & Out',
      casebackSpec: 'Smoked Sapphire Exhibition Caseback with Ruthenium Bridges',
      dialDescription: 'Skeletonized Matte Obsidian with Super-LumiNova Grade X1 Accents',
      strapMaterial: 'Integrated Ballistic Rubberized Fabric with Titanium Deployant Clasp',
      buckle: 'DLC Matte Black Grade 5 Titanium Folding Clasp'
    },
    description: 'Born from a pursuit of shadowy modernism and technical command. The Noctis Chronograph combines lightweight, scratch-resistant zirconia ceramic with an integrated lateral-clutch monopusher column wheel mechanism.',
    craftsmanshipNotes: [
      'Ceramic sinterized under 1,500°C pressure for diamond-like surface hardness.',
      'Ruthenium anthracite electroplating on all movement bridges.',
      'Hand-finished column wheel with chamfered pillars.'
    ],
    features: [
      'Single-Push Tactile Chronograph Actuation',
      'Micro-Sandblasted Zirconia Body',
      'High-Contrast Luminescence In Darkness',
      'Titanium Crown with Ceramic Inlay'
    ]
  },
  {
    id: 'meridian-gmt',
    reference: 'Ref. 5100-PT',
    name: 'MERIDIAN GMT DUAL-TIME',
    collection: 'Meridian',
    tagline: 'World-time precision engineered with sunburst marine guilloché and platinum 950.',
    price: 192000,
    priceFormatted: '$192,000',
    availability: 'Made to Order',
    editionLimit: 'Annual Allocation: 15 Pieces',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNBW7cc9yziaTKHMZziCKvPevMYIwI4BRG_BYj86jxfHwX1BqMW39iojVvPsovWZmWtUlW6ssnis3t2bgH_rKE9_omSCGd9SAVDoH1jG_4ac35QxbW90FnfMYP2prtVoe7IgrFDGr-NtrFLe-kZyf73jHRVjkKvL9Px-g5EFK4KZcKPaM-0qWdNbDQJcWjGSikxExtj7QNFVOXWNSxKm2se5jPRsWEryKZ6w2JmAxHghe3fA51rJne0Q',
      dial: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNBW7cc9yziaTKHMZziCKvPevMYIwI4BRG_BYj86jxfHwX1BqMW39iojVvPsovWZmWtUlW6ssnis3t2bgH_rKE9_omSCGd9SAVDoH1jG_4ac35QxbW90FnfMYP2prtVoe7IgrFDGr-NtrFLe-kZyf73jHRVjkKvL9Px-g5EFK4KZcKPaM-0qWdNbDQJcWjGSikxExtj7QNFVOXWNSxKm2se5jPRsWEryKZ6w2JmAxHghe3fA51rJne0Q',
      profile: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1En-jm-hYXK2b7n_81Dj6B1ePkIdRDEd542B1OO14dizuVd4mS3bxEV1fP3PzJB59C-A_znKaKZnI6UqjVbS78DfiboNWtg4aXR_kvRT7gl9dGZsx-zTYDl1oBOwXXgTj6SGaICPXl_jll2hgkIUkO0oTuHkF6EzDryZR3vNxlXVVPcCwY15YIIoD1dLqloritotcaKkure78oV-q9DvkCiP0DzgSjgtV7xt3bAD8pMS8s0ABz5w5iA',
      caseback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAojTp9B6CB_t68s5EaIKKkpJuDxMpxWq0FvQtoJTJFImWjIZS74LmNNCdt0eCqpMGROmwghYy04_GkMBR8qgg7mSvRJgQECU6bDewIBMSuBuvlE_RguVQIYqEnuQ1WruXhaSgYyrklXHWcOtTuItnuYp7Eal2AC4FxmPNamAY4sPH0lYS4coujqS8GHJ8cw9KoKku-n_zLcczphgiAJ7oWLgxsN-IJA4xvqyGSX6HpgswhQBVQcVio0w',
      lifestyle: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARaXbLHsDCKWGQ8-uDi6-jQJ9TppFsO0pRm1d14pXxKspv3MyMzHW4Dy6xuq3LgKgZr4LBAUNGp3SmvScJLFLeYRIkx4IZDegrQcLlBSxDDJtW9duy1qv-HQ9WRhHQp-C9fHIQmH4-QVAPmOJqKolV6Jpa0VY4XVmtT8TiPtzea-fMYAc65fEKenmQNCk9YdJVGhnAe9spAOpRbSLmyyijs3CHDqoqo3BzY0nBIpt6AKitlPgF-Ue-3Q'
    },
    specs: {
      calibre: 'In-house Calibre MG-03 GMT Automatic',
      movementType: 'Automatic',
      powerReserve: '70 Hours',
      frequency: '28,800 vph (4 Hz)',
      jewels: 31,
      components: 226,
      caseMaterial: '950 Solid Platinum with Fluted Bezel',
      caseDiameter: '40.0 mm',
      caseThickness: '8.6 mm',
      waterResistance: '50 Meters (5 ATM)',
      crystal: 'Scratch-Resistant Sapphire with Triple Anti-Reflective Coating',
      casebackSpec: 'Solid Platinum Exhibition Back with 22K Rose Gold Micro-Rotor',
      dialDescription: 'Deep Abyss Marine Blue with Hand-Turned Rose Engine Guilloché',
      strapMaterial: 'Hand-Sewn Dark Navy Shell Cordovan with Platinum Threading',
      buckle: '950 Platinum Tang Buckle'
    },
    description: 'Created for the modern global connoisseur. The Meridian GMT pairs an instant-jump secondary timezone complication with a hand-turned guilloché dial capturing light like sunlight hitting deep ocean waters.',
    craftsmanshipNotes: [
      'Guilloché executed on a century-old rose engine machine in Geneva.',
      '22K solid gold micro-rotor engraved with celestial cartography.',
      'Laser-welded platinum lugs with high-mirror hand finish.'
    ],
    features: [
      'Instant-Jump Second Timezone Display',
      'Day/Night Subdial Indicator at 6 o’clock',
      '22K Gold Micro-Rotor Automatic Winding',
      'Solid Platinum 950 Case Weight'
    ]
  },
  {
    id: 'celestial-tourbillon',
    reference: 'Ref. 9901-TBN',
    name: 'THE CELESTIAL TOURBILLON',
    collection: 'Celestial',
    tagline: 'One-minute flying tourbillon with silicon escapement and openworked dial.',
    price: 320000,
    priceFormatted: '$320,000',
    availability: 'Allocation Only',
    editionLimit: 'Strictly 8 Pieces Worldwide',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwe1ch-UiWrPFT-NhosCvGNPX6iDRnziERmQcjOEXZfAlUdMSrpaFFNcgHqxjCm3EnDGM2I2dAM3H6a2nzC7UdKjfQ3ruoP6lrLpbUWJRMiXj4f995FeQXWPB7Um1Qlzwd25S3KIadENsyiJ7uXmkqm682UyKffMjZfX1ZUBVJtlvj5P7dldecaCtbVrClVqatBn0iOUMHdrgZB4HAPelJKO6hF6sjbUfEs7D2IPPHI-46k66n0g6wmQ',
      dial: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwe1ch-UiWrPFT-NhosCvGNPX6iDRnziERmQcjOEXZfAlUdMSrpaFFNcgHqxjCm3EnDGM2I2dAM3H6a2nzC7UdKjfQ3ruoP6lrLpbUWJRMiXj4f995FeQXWPB7Um1Qlzwd25S3KIadENsyiJ7uXmkqm682UyKffMjZfX1ZUBVJtlvj5P7dldecaCtbVrClVqatBn0iOUMHdrgZB4HAPelJKO6hF6sjbUfEs7D2IPPHI-46k66n0g6wmQ',
      profile: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1En-jm-hYXK2b7n_81Dj6B1ePkIdRDEd542B1OO14dizuVd4mS3bxEV1fP3PzJB59C-A_znKaKZnI6UqjVbS78DfiboNWtg4aXR_kvRT7gl9dGZsx-zTYDl1oBOwXXgTj6SGaICPXl_jll2hgkIUkO0oTuHkF6EzDryZR3vNxlXVVPcCwY15YIIoD1dLqloritotcaKkure78oV-q9DvkCiP0DzgSjgtV7xt3bAD8pMS8s0ABz5w5iA',
      caseback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcxMABgKBZwe20jtyDhpcX7ruNUqzLpcRMcrLcJwAfB01IQC7NGjj49_L5smk7JZosZ4OyQtkW47DVnPAmDoprHDIn_7mMotqtS2lJsXUj92VaGlnJL-mUMNagsfP6ef0-_XiaeKalP67OHtTlr5H-DehlzHc9YvMW5srzjoTkstRaKrrfWhVDYwaZJZta5pJwNrewtbgqtD-iqzgL5AChPfEXKEiMN9iB69TXkKPLvYG0BTWpV2VblQ',
      lifestyle: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMDiQBMNkzZDaz-yJwJMJrU8lne7eR7CJ5PgOkau5t0W_HdoTMmLsOdU3-MPXMEtfHaX99k-zI4fH34fjJRq-bSwvbasgjK19hGSYSPMVGHtHlamfw426DMT0Fqs_EYgouyLar9U80D-iyW8irRf6l2aIaQVb5IlnCi3eF7EMbIFJWXIixZ7-wyfgXJa0fE7FG6u0xYhCqndq-dRDBFnGRcjlflY0G6_QcrInbQpQaG_2gHSk-_ijsVw'
    },
    specs: {
      calibre: 'Proprietary Calibre CT-004 Flying Tourbillon',
      movementType: 'Tourbillon',
      powerReserve: '96 Hours Dual Spring Barrels',
      frequency: '21,600 vph (3 Hz)',
      jewels: 38,
      components: 298,
      caseMaterial: '18K White Gold with Titanium Grade 5 Core',
      caseDiameter: '42.5 mm',
      caseThickness: '10.2 mm',
      waterResistance: '30 Meters (3 ATM)',
      crystal: 'Full Box-Domed Sapphire Crystal with Anti-Reflective Glare Shield',
      casebackSpec: 'Sapphire Caseback Revealing Power Reserve Indicator & Tourbillon Cage',
      dialDescription: 'Architectural Openwork Skeleton Dial with Black PVD Bridges and Gold Train',
      strapMaterial: 'Matte Anthracite Alligator Leather with Hand-Polished White Gold Clasp',
      buckle: '18K White Gold Deployant Clasp'
    },
    description: 'The pinnacle of Aurevant high complication mastery. The Celestial Tourbillon eliminates gravitational disruption through a titanium flying tourbillon cage weighing merely 0.28 grams, rotating once every 60 seconds against a skeletal cosmic backdrop.',
    craftsmanshipNotes: [
      'Flying tourbillon cage crafted from ultra-lightweight grade 5 titanium.',
      'Diamond-coated silicon escape wheel and pallet fork for friction-free operation.',
      'Hand-chamfered inward angles executed exclusively under a 10x horological loupe.'
    ],
    features: [
      '60-Second Flying Tourbillon Carriage',
      '96-Hour Extended Chronometric Reserve',
      'Full Architectural Skeletonization',
      'Numbered Geneva Seal Provenance'
    ]
  },
  {
    id: 'eclat-40-chronograph',
    reference: 'Ref. 4920R-001',
    name: 'CHRONOGRAPHE MONOPOUSSOIR',
    collection: 'Éclat',
    tagline: 'Single-pusher dress chronograph with column wheel in 18K rose gold.',
    price: 182000,
    priceFormatted: '$182,000',
    availability: 'Vault Exclusive',
    editionLimit: 'Strictly 12 Pieces',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv3u840r7PqxW6fkUIrzoXTY6OuYLftktnjTFo_g1QZTZhLQAtdxzaa5Gyz5A5oKMkglMDp7naBJS8PVW2fd9bZa6N1IOVcumM8ADu2KrEfZoZFqGFSPY7VOnJ9DnN1_8EgHgQDmu3ItKzUQuV32krk6i80e67_0oV8dDO1qBhFsrMS8ukFnrkvwdAs6qQQqvNZXpsEMVeXFSDzNMstjHfHay0j83BDsMmpg99iXPq0UkxahS9T9ecQA',
      dial: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv3u840r7PqxW6fkUIrzoXTY6OuYLftktnjTFo_g1QZTZhLQAtdxzaa5Gyz5A5oKMkglMDp7naBJS8PVW2fd9bZa6N1IOVcumM8ADu2KrEfZoZFqGFSPY7VOnJ9DnN1_8EgHgQDmu3ItKzUQuV32krk6i80e67_0oV8dDO1qBhFsrMS8ukFnrkvwdAs6qQQqvNZXpsEMVeXFSDzNMstjHfHay0j83BDsMmpg99iXPq0UkxahS9T9ecQA',
      profile: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1En-jm-hYXK2b7n_81Dj6B1ePkIdRDEd542B1OO14dizuVd4mS3bxEV1fP3PzJB59C-A_znKaKZnI6UqjVbS78DfiboNWtg4aXR_kvRT7gl9dGZsx-zTYDl1oBOwXXgTj6SGaICPXl_jll2hgkIUkO0oTuHkF6EzDryZR3vNxlXVVPcCwY15YIIoD1dLqloritotcaKkure78oV-q9DvkCiP0DzgSjgtV7xt3bAD8pMS8s0ABz5w5iA',
      caseback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAojTp9B6CB_t68s5EaIKKkpJuDxMpxWq0FvQtoJTJFImWjIZS74LmNNCdt0eCqpMGROmwghYy04_GkMBR8qgg7mSvRJgQECU6bDewIBMSuBuvlE_RguVQIYqEnuQ1WruXhaSgYyrklXHWcOtTuItnuYp7Eal2AC4FxmPNamAY4sPH0lYS4coujqS8GHJ8cw9KoKku-n_zLcczphgiAJ7oWLgxsN-IJA4xvqyGSX6HpgswhQBVQcVio0w',
      lifestyle: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdH30Aj58EkhVNHe9YkmwmmUJVmfLHAqV1M7LQ5DeKr-4EyKqJ0ucqU-BVgzQbJ5hlLyLXqKUOMDjV4Uj9o6a_wr-vOlW_LcceJrlgmYf4zqcw7LbcGqZGTcT_Zhn4AwkNAmLQQFwVfVw5Z9VBQGWlbFxz2kjVSzsxAvlhe7r-_LuM-pDIvf0Q7LngBAKee6EZ6C2b7iuDpXg-K6lGkIUQBFaTxCa51-IKGSD80X_qSp-3ZQHoMUe2Tg'
    },
    specs: {
      calibre: 'Manufacture Calibre 4920 Manual Monopusher',
      movementType: 'Monopusher Chronograph',
      powerReserve: '60 Hours',
      frequency: '21,600 vph',
      jewels: 32,
      components: 260,
      caseMaterial: '18K 5N Rose Gold',
      caseDiameter: '39.5 mm',
      caseThickness: '8.4 mm',
      waterResistance: '30 Meters (3 ATM)',
      crystal: 'Curved Sapphire Glass',
      casebackSpec: 'Sapphire Exhibition Back',
      dialDescription: 'Ivory Enamel with Breguet Numerals',
      strapMaterial: 'Hand-Crafted Calfskin',
      buckle: '18K Rose Gold Pin Buckle'
    },
    description: 'An ode to vintage racing chronographs reinterpreted with ultra-modern manufacture tolerances and a single coaxial crown-pusher.',
    craftsmanshipNotes: [
      'Traditional column wheel operating horizontal clutch mechanism.',
      'Black mirror polish on hammer levers.'
    ],
    features: ['Crown-Integrated Monopusher', 'Ivory Grand Feu Dial', 'COSC Chronometer']
  },
  {
    id: 'aeronavale-titanium',
    reference: 'Ref. 7800T-010',
    name: 'AÉRONAVALE TITANIUM',
    collection: 'Noctis',
    tagline: 'Aviation instrument engineered in sandblasted titanium grade 5.',
    price: 135000,
    priceFormatted: '$135,000',
    availability: 'Available',
    editionLimit: 'Numbered Run of 100',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWmNhd2c3hwZOFeTwWA2dbsxInWCE807eE9QjFND7_7xeBRyMP20lj6fWBOBXyrPVzyb5sLzPnEGUqY-uLBr_FWnHMIZURloJQ3ZvPRcI0wRnPtdvxKPPfsLgd8QqO0R7VVOd5EC3I6HDm9rdNwEvAiWJPyXmNlMkGEl2ee4a0B387G_f0OLFnCJNcT_YXli3JPr-73MRyeArtRe3KRrQXR7SIyzW76GOwUtUDaY5CdQJbPGLpsMI3yA',
      dial: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWmNhd2c3hwZOFeTwWA2dbsxInWCE807eE9QjFND7_7xeBRyMP20lj6fWBOBXyrPVzyb5sLzPnEGUqY-uLBr_FWnHMIZURloJQ3ZvPRcI0wRnPtdvxKPPfsLgd8QqO0R7VVOd5EC3I6HDm9rdNwEvAiWJPyXmNlMkGEl2ee4a0B387G_f0OLFnCJNcT_YXli3JPr-73MRyeArtRe3KRrQXR7SIyzW76GOwUtUDaY5CdQJbPGLpsMI3yA',
      profile: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1En-jm-hYXK2b7n_81Dj6B1ePkIdRDEd542B1OO14dizuVd4mS3bxEV1fP3PzJB59C-A_znKaKZnI6UqjVbS78DfiboNWtg4aXR_kvRT7gl9dGZsx-zTYDl1oBOwXXgTj6SGaICPXl_jll2hgkIUkO0oTuHkF6EzDryZR3vNxlXVVPcCwY15YIIoD1dLqloritotcaKkure78oV-q9DvkCiP0DzgSjgtV7xt3bAD8pMS8s0ABz5w5iA',
      caseback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcxMABgKBZwe20jtyDhpcX7ruNUqzLpcRMcrLcJwAfB01IQC7NGjj49_L5smk7JZosZ4OyQtkW47DVnPAmDoprHDIn_7mMotqtS2lJsXUj92VaGlnJL-mUMNagsfP6ef0-_XiaeKalP67OHtTlr5H-DehlzHc9YvMW5srzjoTkstRaKrrfWhVDYwaZJZta5pJwNrewtbgqtD-iqzgL5AChPfEXKEiMN9iB69TXkKPLvYG0BTWpV2VblQ',
      lifestyle: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzVnxOH8cMwGwF1byPLJgmCLOUXE6c_aVL5jn70AxMFoJsZsifW1CTjZDEsT1_DkmfHtpIsQzVz2NUJeXRfjW1zEosJl1Wdu_FASDWREA5wXOhENDfRqT6KbuGLsRIxUI-Qc48zo4DPbTBc8zlOrUxaZlI3dI_A9CWEJUhtsXvtKeOXohIl8YLRZRk_uMJZLTftX_ZPzFTQg9ZAw0sWpFBGgfj_UGGPYe4aGvgMu-KTtt041VTbOcNrg'
    },
    specs: {
      calibre: 'Calibre 7800 Flyback Automatic',
      movementType: 'Automatic',
      powerReserve: '68 Hours',
      frequency: '28,800 vph',
      jewels: 36,
      components: 275,
      caseMaterial: 'Grade 5 Satin-Brushed Titanium',
      caseDiameter: '42.0 mm',
      caseThickness: '11.0 mm',
      waterResistance: '100 Meters (10 ATM)',
      crystal: 'Box Sapphire Crystal',
      casebackSpec: 'Titanium Screwed-down Caseback with Engraved Compass Rose',
      dialDescription: 'Matte Military Khaki with High-Contrast White Numerals',
      strapMaterial: 'Reinforced Technical Cordura & Rubber Composite',
      buckle: 'Titanium Deployant'
    },
    description: 'Designed for high-g endurance and tactical clarity, utilizing lightweight Grade 5 titanium capable of withstanding extreme pressure shifts.',
    craftsmanshipNotes: ['Flyback zero-reset mechanism allows rapid reset in mid-flight.'],
    features: ['Flyback Chronograph', 'Anti-Magnetic Inner Cage', '100m Water Resistance']
  }
];

export const COLLECTIONS_INFO: CollectionInfo[] = [
  {
    id: 'Éclat',
    number: '01',
    name: 'Éclat Collection',
    subtitle: 'Classic Haute Horlogerie & Grand Feu Enamel',
    description: 'Ultra-thin architectural profiles, opaline dials, and traditional hand-finishing honoring classic Geneva horological purity.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqP2gYNRF56uJlzKYS4drwR5ZTPlI9eADa8rysVZJitwVbwStBI0ibMTyOh956PdSxTh4oqtulWhGVeLGB9CEszJPrP69K4BEm-doJJ_oELppgYUqguJLq6fkvv6X4HI2tE70b7KFPOZSt9qXc1_7C2ZqJ6rjuwxY_juSXfU-QOUj9MswVVyvGUXTcLVoBJEPyiEzpbblTsg5W2NznBIoCBz22fBhNOGD42K1miFD8X_WP2tvhGAjwVQ',
    accent: '#c5a880'
  },
  {
    id: 'Noctis',
    number: '02',
    name: 'Noctis Collection',
    subtitle: 'Monochrome Modernism & Technical Mastery',
    description: 'Forged black zirconia ceramics, lightweight aerospace titanium, and high-frequency chronograph movements engineered for uncompromising strength.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXciJZOk-3XaeKdnTPKvScwARf1LxmcSE2budMT8i_QeXllc543qjz5e5jACQ4S3uU1Npf7YOxembsfaoZqxSdwVcZdWkO6WJbAxPakcTWWqVXNSB6TQyJtVC0UH5kJlD4iIAcv0p-Ct1ct8zkKiiO3EnV53ucrwzMMevhrdoJ4xF725mEKocYtgYWzG8fVH7sknIHYAUbPkydzzA7iu3m1IoxW3hJWeIJMJQWj5x8-6LHAER0sFF0RQ',
    accent: '#717682'
  },
  {
    id: 'Meridian',
    number: '03',
    name: 'Meridian Collection',
    subtitle: 'Astronomical Chronometry & World Time',
    description: 'Guilloché dials, multi-timezone complications, and precious platinum cases built for the boundless traveller.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNBW7cc9yziaTKHMZziCKvPevMYIwI4BRG_BYj86jxfHwX1BqMW39iojVvPsovWZmWtUlW6ssnis3t2bgH_rKE9_omSCGd9SAVDoH1jG_4ac35QxbW90FnfMYP2prtVoe7IgrFDGr-NtrFLe-kZyf73jHRVjkKvL9Px-g5EFK4KZcKPaM-0qWdNbDQJcWjGSikxExtj7QNFVOXWNSxKm2se5jPRsWEryKZ6w2JmAxHghe3fA51rJne0Q',
    accent: '#5a7bb5'
  },
  {
    id: 'Celestial',
    number: '04',
    name: 'Celestial Complications',
    subtitle: 'Flying Tourbillons & Grand Skeletons',
    description: 'The highest expression of horological art. Flying tourbillons, perpetual calendars, and openworked calibres with Geneva Seal certification.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwe1ch-UiWrPFT-NhosCvGNPX6iDRnziERmQcjOEXZfAlUdMSrpaFFNcgHqxjCm3EnDGM2I2dAM3H6a2nzC7UdKjfQ3ruoP6lrLpbUWJRMiXj4f995FeQXWPB7Um1Qlzwd25S3KIadENsyiJ7uXmkqm682UyKffMjZfX1ZUBVJtlvj5P7dldecaCtbVrClVqatBn0iOUMHdrgZB4HAPelJKO6hF6sjbUfEs7D2IPPHI-46k66n0g6wmQ',
    accent: '#d4af37'
  }
];

export const CURRENT_USER = {
  name: 'Alexander Voss',
  tier: 'Vanguard Member',
  memberNumber: 'AV-8842-GE',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-Daeiw3GbG_Cwn3mwNNZv7yHLtWUHIkbtdIWalbRn8NdwjcT9XAe3Zghioo6uLWeX6z3GccF5TTqGDPdVYK1YDqs2-dKhmIh0eWIs3tBwfD-urZk9cddXg49y8B45QgdZrWt8VvsbWq2o5yA5mtiG8km23sOYxk3FnS9crPc8a4glvnarpMrgR6zj_XZCChkioXIJqpyWWqElrw00i1P8JpYorkM3yt9DFVp6sUFHvrPNUlyQMrh_Hw',
  city: 'Geneva, Switzerland',
  memberSince: '2021',
  vaultCount: 4,
  dedicatedConcierge: 'Elena Rostova (Senior Horologist)',
  recentSelection: {
    name: 'The Celestial Tourbillon',
    reference: 'Ref. 9901-TBN',
    edition: 'Piece 03 of 08',
    status: 'In Final Certification',
    location: 'Geneva Manufacture Atelier 4',
    expectedDelivery: 'November 15, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwe1ch-UiWrPFT-NhosCvGNPX6iDRnziERmQcjOEXZfAlUdMSrpaFFNcgHqxjCm3EnDGM2I2dAM3H6a2nzC7UdKjfQ3ruoP6lrLpbUWJRMiXj4f995FeQXWPB7Um1Qlzwd25S3KIadENsyiJ7uXmkqm682UyKffMjZfX1ZUBVJtlvj5P7dldecaCtbVrClVqatBn0iOUMHdrgZB4HAPelJKO6hF6sjbUfEs7D2IPPHI-46k66n0g6wmQ'
  }
};

export const MEMBER_VAULT_WATCHES: MemberWatch[] = [
  {
    id: 'vault-1',
    reference: 'Ref. 4920R-001',
    name: 'Chronographe Monopoussoir',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv3u840r7PqxW6fkUIrzoXTY6OuYLftktnjTFo_g1QZTZhLQAtdxzaa5Gyz5A5oKMkglMDp7naBJS8PVW2fd9bZa6N1IOVcumM8ADu2KrEfZoZFqGFSPY7VOnJ9DnN1_8EgHgQDmu3ItKzUQuV32krk6i80e67_0oV8dDO1qBhFsrMS8ukFnrkvwdAs6qQQqvNZXpsEMVeXFSDzNMstjHfHay0j83BDsMmpg99iXPq0UkxahS9T9ecQA',
    acquisitionDate: 'June 2022',
    serialNumber: 'AUR-4920-0881',
    warrantyValidUntil: 'June 2030',
    status: 'In Vault',
    lastService: 'October 2023',
    nextServiceRecommended: 'October 2026',
    marketValuation: '$198,000',
    provenance: {
      coscCertified: true,
      poinconDeGeneve: true,
      masterWatchmaker: 'Henri Lecomte',
      accuracyDelta: '+0.4 sec/day'
    }
  },
  {
    id: 'vault-2',
    reference: 'Ref. 7800T-010',
    name: 'Aéronavale Titanium',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWmNhd2c3hwZOFeTwWA2dbsxInWCE807eE9QjFND7_7xeBRyMP20lj6fWBOBXyrPVzyb5sLzPnEGUqY-uLBr_FWnHMIZURloJQ3ZvPRcI0wRnPtdvxKPPfsLgd8QqO0R7VVOd5EC3I6HDm9rdNwEvAiWJPyXmNlMkGEl2ee4a0B387G_f0OLFnCJNcT_YXli3JPr-73MRyeArtRe3KRrQXR7SIyzW76GOwUtUDaY5CdQJbPGLpsMI3yA',
    acquisitionDate: 'January 2023',
    serialNumber: 'AUR-7800-0142',
    warrantyValidUntil: 'January 2031',
    status: 'In Vault',
    lastService: 'January 2023 (Delivery Test)',
    nextServiceRecommended: 'January 2027',
    marketValuation: '$142,000',
    provenance: {
      coscCertified: true,
      poinconDeGeneve: false,
      masterWatchmaker: 'Antoine Reymond',
      accuracyDelta: '+0.8 sec/day'
    }
  },
  {
    id: 'vault-3',
    reference: 'Ref. 3801-RG',
    name: 'Éclat 38 Rose Gold',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhzRX_e2WMjob1vvMcrKeIhAx1WLI1jWvV4wi-H78VOhG_S-Ev0S56FrgZLCErmIx1G_nJ-amkJM3VyfYg1x00ppmwK2BmmXCctTHDezn15kaf6Y153tjd4XJ1IIWgONEvE5K4fb_hhkHXpX-TukyHvutq8mJGr4WKff6AIye0BV9G_OcVY87WmW4FtD0MMEnxTHpb1jGmOLiam3JuzlyS5BZwc6RZki77xZ4R2J4AepKxs9vg0eFmUg',
    acquisitionDate: 'August 2023',
    serialNumber: 'AUR-3801-0019',
    warrantyValidUntil: 'August 2031',
    status: 'In Vault',
    lastService: 'Manufacture QA Pass',
    nextServiceRecommended: 'August 2028',
    marketValuation: '$155,000',
    provenance: {
      coscCertified: true,
      poinconDeGeneve: true,
      masterWatchmaker: 'Marc-Aurèle Vauthey',
      accuracyDelta: '+0.2 sec/day'
    }
  }
];

export const INITIAL_CONSULTATIONS: Consultation[] = [
  {
    id: 'consult-1',
    type: 'Bespoke Fitting',
    specialist: {
      name: 'Elena Rostova',
      title: 'Senior Horologist & Vanguard Concierge',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdiXLzidvdWwjsFoMB47ZzvdH0tmZihisktE0gcvwJTyQRY7UnwXAU9Z8-n4DK5Y-xzEyPC8JCUqyPubzXNsN6ADIaodNEMd3RG3odiwVZX0c7VNkdW94tYa8wqN7SFKMNWTZ8yeDeYp77pj9yVW41wqEH1Cqf8Gw6QgKR-ZODBjBDP6wCFOl2FykmxZ0J6ADfSUHTPDbDu3Pq_KNwHnsR6YRTwp_nqYhxhuiU_CD6sBBQSbyW1zQfTQ',
      location: 'Geneva Salon & Private Virtual Suite'
    },
    date: 'Thursday, October 24, 2024',
    time: '15:00 CET',
    location: 'Geneva Salon (Private Salon 2)',
    isVirtual: false,
    status: 'Confirmed',
    notes: 'Fitting session for custom platinum deployant buckle and leather strap measurement.'
  }
];

export const BOUTIQUES = [
  {
    city: 'Genève',
    type: 'Manufacture & Flagship Salon',
    address: '42 Rue du Rhône, 1204 Genève, Switzerland',
    phone: '+41 22 819 00 00',
    hours: 'Mon – Sat: 10:00 – 18:30',
    curator: 'Elena Rostova'
  },
  {
    city: 'London',
    type: 'Private Townhouse Salon',
    address: '14 New Bond Street, Mayfair, London W1S 3SX',
    phone: '+44 20 7946 0880',
    hours: 'By Private Appointment',
    curator: 'Lord Alistair Sterling'
  },
  {
    city: 'New York',
    type: 'Atelier & Vault',
    address: '740 Madison Avenue, New York, NY 10065',
    phone: '+1 212 555 0198',
    hours: 'Mon – Sat: 11:00 – 19:00',
    curator: 'Victoria Chen'
  },
  {
    city: 'Tokyo',
    type: 'Ginza Sanctuary',
    address: '6-10-1 Ginza, Chuo-ku, Tokyo 104-0061',
    phone: '+81 3 5555 0142',
    hours: 'Daily: 11:00 – 20:00',
    curator: 'Kenji Takahashi'
  }
];
