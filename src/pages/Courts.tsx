import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Building, Clock, ExternalLink } from "lucide-react";

export const courtDataFull = {
  "Alameda": {
    website: "https://www.alameda.courts.ca.gov/",
    lookup: "https://www.alameda.courts.ca.gov/online-services/traffic-ticket",
    courts: [
      { name: "Alameda", code: "01430" },
      { name: "Berkeley-Albany", code: "01430" },
      { name: "Dublin", code: "01430" },
      { name: "Fremont", code: "01430" },
      { name: "Hayward", code: "01430" },
      { name: "Oakland", code: "01440" }
    ]
  },
  "Alpine": { website: "#", lookup: "#", courts: [{ name: "Markleeville", code: "02050" }] },
  "Amador": { website: "#", lookup: "#", courts: [{ name: "Jackson", code: "03050" }] },
  "Butte": { website: "#", lookup: "#", courts: [
      { name: "Chico", code: "04030" },
      { name: "Oroville", code: "04030" },
      { name: "Paradise", code: "04030" }
    ]
  },
  "Calaveras": { website: "#", lookup: "#", courts: [{ name: "San Andreas", code: "05050" }] },
  "Colusa": { website: "#", lookup: "#", courts: [{ name: "Colusa", code: "06050" }] },
  "Contra Costa": { website: "#", lookup: "#", courts: [
      { name: "Martinez", code: "07030" },
      { name: "Pittsburg", code: "07030" },
      { name: "Richmond", code: "07030" }
    ]
  },
  "Del Norte": { website: "#", lookup: "#", courts: [{ name: "Crescent City", code: "08050" }] },
  "El Dorado": { website: "#", lookup: "#", courts: [
      { name: "Placerville", code: "09050" },
      { name: "South Lake Tahoe", code: "09050" }
    ]
  },
  "Fresno": { website: "#", lookup: "#", courts: [{ name: "Fresno", code: "10050" }] },
  "Glenn": { website: "#", lookup: "#", courts: [{ name: "Willows", code: "11050" }] },
  "Humboldt": { website: "#", lookup: "#", courts: [{ name: "Eureka", code: "12050" }] },
  "Imperial": { website: "#", lookup: "#", courts: [{ name: "El Centro", code: "13050" }] },
  "Inyo": { website: "#", lookup: "#", courts: [{ name: "Independence", code: "14050" }] },
  "Kern": { website: "#", lookup: "#", courts: [
      { name: "Bakersfield", code: "15050" },
      { name: "Mojave", code: "15060" },
      { name: "Ridgecrest", code: "15070" },
      { name: "Delano", code: "15080" }
    ]
  },
  "Kings": { website: "#", lookup: "#", courts: [{ name: "Hanford", code: "16050" }] },
  "Lake": { website: "#", lookup: "#", courts: [{ name: "Lakeport", code: "17050" }] },
  "Lassen": { website: "#", lookup: "#", courts: [{ name: "Susanville", code: "18050" }] },
  "Los Angeles": { website: "#", lookup: "#", courts: [
      { name: "Downey", code: "19052" },
      { name: "Glendale", code: "19080" },
      { name: "Long Beach", code: "19100" },
      { name: "Van Nuys", code: "19445" },
      { name: "West Covina", code: "19625" },
      { name: "Beverly Hills", code: "19060" }
    ]
  },
  "Madera": { website: "#", lookup: "#", courts: [{ name: "Madera", code: "20050" }] },
  "Marin": { website: "#", lookup: "#", courts: [{ name: "San Rafael", code: "21050" }] },
  "Mariposa": { website: "#", lookup: "#", courts: [{ name: "Mariposa", code: "22050" }] },
  "Mendocino": { website: "#", lookup: "#", courts: [
      { name: "Ukiah", code: "23050" },
      { name: "Fort Bragg", code: "23060" }
    ]
  },
  "Merced": { website: "#", lookup: "#", courts: [
      { name: "Merced", code: "24050" },
      { name: "Los Banos", code: "24060" }
    ]
  },
  "Modoc": { website: "#", lookup: "#", courts: [{ name: "Alturas", code: "25050" }] },
  "Mono": { website: "#", lookup: "#", courts: [{ name: "Bridgeport", code: "26050" }] },
  "Monterey": { website: "#", lookup: "#", courts: [
      { name: "Monterey", code: "27050" },
      { name: "Marina", code: "27060" },
      { name: "King City", code: "27070" }
    ]
  },
  "Napa": { website: "#", lookup: "#", courts: [{ name: "Napa", code: "28050" }] },
  "Nevada": { website: "#", lookup: "#", courts: [
      { name: "Nevada City", code: "29050" },
      { name: "Truckee", code: "29060" }
    ]
  },
  "Orange": { website: "#", lookup: "#", courts: [
      { name: "Santa Ana", code: "30150" },
      { name: "Westminster", code: "30160" },
      { name: "Newport Beach", code: "30162" },
      { name: "Fullerton", code: "30165" },
      { name: "Laguna Hills", code: "30167" },
      { name: "Harbor Justice Center", code: "30169" }
    ]
  },
  "Placer": { website: "#", lookup: "#", courts: [
      { name: "Roseville", code: "31050" },
      { name: "Tahoma", code: "31060" },
      { name: "Auburn", code: "31070" }
    ]
  },
  "Plumas": { website: "#", lookup: "#", courts: [{ name: "Quincy", code: "32050" }] },
  "Riverside": { website: "#", lookup: "#", courts: [
      { name: "Banning", code: "33050" },
      { name: "Blythe", code: "33060" },
      { name: "Hemet", code: "33070" },
      { name: "Indio", code: "33080" },
      { name: "Moreno Valley", code: "33090" },
      { name: "Murrieta", code: "33100" },
      { name: "Riverside", code: "33110" }
    ]
  },
  "Sacramento": { website: "#", lookup: "#", courts: [{ name: "Gordon D. Schaber", code: "34050" }] },
  "San Benito": { website: "#", lookup: "#", courts: [{ name: "Hollister", code: "35050" }] },
  "San Bernardino": { website: "#", lookup: "#", courts: [
      { name: "Barstow", code: "36100" },
      { name: "Fontana", code: "36110" },
      { name: "Joshua Tree", code: "36120" },
      { name: "Needles", code: "36130" },
      { name: "Rancho Cucamonga", code: "36140" },
      { name: "San Bernardino", code: "36150" },
      { name: "Victorville", code: "36160" }
    ]
  },
  "San Diego": { website: "#", lookup: "#", courts: [
      { name: "Central Division", code: "37200" },
      { name: "East County Division", code: "37210" },
      { name: "North County Division", code: "37220" },
      { name: "South County Division", code: "37230" }
    ]
  },
  "San Francisco": { website: "#", lookup: "#", courts: [{ name: "San Francisco Hall of Justice", code: "38050" }] },
  "San Joaquin": { website: "#", lookup: "#", courts: [
      { name: "Stockton", code: "39050" },
      { name: "Lodi", code: "39060" },
      { name: "Manteca", code: "39070" },
      { name: "Tracy", code: "39080" }
    ]
  },
  "San Luis Obispo": { website: "#", lookup: "#", courts: [
      { name: "San Luis Obispo", code: "40050" },
      { name: "Grover Beach", code: "40060" },
      { name: "Paso Robles", code: "40070" }
    ]
  },
  "San Mateo": { website: "#", lookup: "#", courts: [
      { name: "South San Francisco", code: "41050" },
      { name: "Redwood City", code: "41060" }
    ]
  },
  "Santa Barbara": { website: "#", lookup: "#", courts: [
      { name: "Santa Maria", code: "42050" },
      { name: "Lompoc", code: "42060" },
      { name: "Santa Barbara", code: "42070"
