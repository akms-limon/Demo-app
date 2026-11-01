// Fixed placeholder data. One record = one location.
// To add a location: copy an object, change the values. The UI picks it up automatically.
//
//   id        -> first part of custom_id
//   slugs     -> page path pieces, last part of custom_id (e.g. ['usa', 'south-carolina'])
//   location  -> fills {Location}
//   regions   -> fills {Regions}
//   cities    -> fills {Cities} and {cities}
//   count     -> fills {Count}
export const locations = [
  {
    key: "usa",
    id: "242",
    slugs: ["usa"],
    location: "USA",
    regions: "Florida, Texas, California",
    cities: "Naples, Orlando, Kissimmee, Panama City",
    count: "4-8",
  },
  {
    key: "italy",
    id: "310",
    slugs: ["italy"],
    location: "Italy",
    regions: "Lazio, Tuscany, Veneto, Lombardy",
    cities: "Rome, Florence, Venice, Milan",
    count: "4-8",
  },
  {
    key: "spain",
    id: "315",
    slugs: ["spain"],
    location: "Spain",
    regions: "Catalonia, Andalusia, Community of Madrid, Valencia",
    cities: "Barcelona, Seville, Madrid, Valencia",
    count: "4-8",
  },
  {
    key: "france",
    id: "320",
    slugs: ["france"],
    location: "France",
    regions: "Ile-de-France, Provence-Alpes-Cote d'Azur, Auvergne-Rhone-Alpes, Nouvelle-Aquitaine",
    cities: "Paris, Nice, Lyon, Bordeaux",
    count: "4-8",
  },
  {
    key: "japan",
    id: "402",
    slugs: ["japan"],
    location: "Japan",
    regions: "Kanto, Kansai, Kyushu, Hokkaido",
    cities: "Tokyo, Osaka, Fukuoka, Sapporo",
    count: "4",
  },
];

// Locations that are active when the app first opens.
export const defaultSelectedLocations = ["usa", "italy"];
