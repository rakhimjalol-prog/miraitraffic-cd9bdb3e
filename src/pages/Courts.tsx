import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Building, Clock, ExternalLink } from "lucide-react";

export const courtDataFull = {
  Alameda: {
    website: "https://www.alameda.courts.ca.gov/divisions/traffic",
    lookup: "https://www.alameda.courts.ca.gov/online-services/look-and-pay-your-traffic-ticket",
    courts: [
      { name: "Alameda", code: "01430" },
      { name: "Berkeley‑Albany", code: "01430" },
      { name: "Dublin", code: "01430" },
      { name: "Fremont", code: "01430" },
      { name: "Hayward", code: "01430" },
      { name: "Oakland", code: "01440" }
    ]
  },

  Alpine: {
    website: "https://www.alpine.courts.ca.gov/divisions/traffic",
    lookup: "https://www.alpine.courts.ca.gov/divisions/traffic",
    courts: [
      { name: "Markleeville", code: "02050" }
    ]
  },

  Amador: {
    website: "https://www.amadorcourt.org",
    lookup: "https://www.amadorcourt.org/dv-traffic.aspx",
    courts: [
      { name: "Jackson", code: "03050" }
    ]
  },

  Butte: {
    website: "https://www.butte.courts.ca.gov/divisions/traffic",
    lookup: "https://www.butte.courts.ca.gov/divisions/traffic-information/traffic-payment-information",
    courts: [
      { name: "Chico", code: "04030" },
      { name: "Oroville", code: "04030" },
      { name: "Paradise", code: "04030" }
    ]
  },

  Calaveras: {
    website: "https://calaveras.courts.ca.gov",
    lookup: "https://calaveras.courts.ca.gov",
    courts: [
      { name: "San Andreas", code: "05050" }
    ]
  },

  Colusa: {
    website: "https://www.colusa.courts.ca.gov/divisions/traffic",
    lookup: "https://www.colusa.courts.ca.gov/online-services/pay-fines-fees",
    courts: [
      { name: "Colusa", code: "06050" }
    ]
  },

  "Contra Costa": {
    website: "https://www.cc-courts.org/traffic/traffic.aspx",
    lookup: "https://www.ncourt.com/x-press/x-onlinepayments.aspx?juris=A14912DF-E8F9-4AED-B0CF-48061B598D09",
    courts: [
      { name: "Martinez", code: "07030" },
      { name: "Pittsburg", code: "07030" },
      { name: "Richmond", code: "07030" }
    ]
  },

  "Del Norte": {
    website: "https://www.delnorte.courts.ca.gov/divisions/traffic-division",
    lookup: "https://www.delnorte.courts.ca.gov/online-services/pay-traffic-fines",
    courts: [
      { name: "Crescent City", code: "08050" }
    ]
  },

  "El Dorado": {
    website: "https://www.eldorado.courts.ca.gov/divisions/traffic",
    lookup: "https://www.eldorado.courts.ca.gov/online-services/pay-fines",
    courts: [
      { name: "Placerville", code: "09050" },
      { name: "South Lake Tahoe", code: "09050" }
    ]
  },

  Fresno: {
    website: "https://www.fresno.courts.ca.gov/divisions/traffic",
    lookup: "https://www.fresno.courts.ca.gov/online-services/pay-traffic-fines",
    courts: [
      { name: "Fresno", code: "10050" }
    ]
  },

  Glenn: {
    website: "https://www.glenn.courts.ca.gov/divisions/traffic",
    lookup: "https://www.glenn.courts.ca.gov/online-services/pay-traffic-ticket",
    courts: [
      { name: "Willows", code: "11050" }
    ]
  },

  Humboldt: {
    website: "https://www.humboldt.courts.ca.gov/divisions/traffic",
    lookup: "https://www.humboldt.courts.ca.gov/online-services/pay-traffic-fine",
    courts: [
      { name: "Eureka", code: "12050" }
    ]
  },

  Imperial: {
    website: "https://www.imperial.courts.ca.gov/divisions/traffic",
    lookup: "https://www.imperial.courts.ca.gov/online-services/pay-traffic-ticket",
    courts: [
      { name: "El Centro", code: "13050" }
    ]
  },

  Inyo: {
    website: "https://www.inyo.courts.ca.gov/divisions/traffic",
    lookup: "https://www.inyo.courts.ca.gov/online-services/traffic-payment",
    courts: [
      { name: "Independence", code: "14050" }
    ]
  },

    Kern: {
    website: "https://www.kern.courts.ca.gov/divisions/traffic",
    lookup: "https://www.kern.courts.ca.gov/online-services/pay-traffic-ticket",
    courts: [
      { name: "Bakersfield", code: "15030" },
      { name: "Delano", code: "15030" },
      { name: "Lamont", code: "15030" },
      { name: "Mojave", code: "15030" },
      { name: "Ridgecrest", code: "15030" },
      { name: "Shafter", code: "15030" },
      { name: "Taft", code: "15030" }
    ]
  },

  Kings: {
    website: "https://www.kings.courts.ca.gov/divisions/traffic",
    lookup: "https://www.kings.courts.ca.gov/online-services/pay-fines",
    courts: [
      { name: "Hanford", code: "16050" }
    ]
  },

  Lake: {
    website: "https://www.lake.courts.ca.gov/divisions/traffic",
    lookup: "https://www.lake.courts.ca.gov/online-services/pay-ticket",
    courts: [
      { name: "Lakeport", code: "17050" },
      { name: "Clearlake", code: "17050" }
    ]
  },

  Lassen: {
    website: "https://www.lassen.courts.ca.gov/divisions/traffic",
    lookup: "https://www.lassen.courts.ca.gov/online-services/traffic-payments",
    courts: [
      { name: "Susanville", code: "18050" }
    ]
  },

  "Los Angeles": {
    website: "https://www.lacourt.org/division/traffic/traffic.aspx",
    lookup: "https://www.lacourt.org/traffic/ui/",
    courts: [
      { name: "Beverly Hills", code: "19010" },
      { name: "Compton", code: "19020" },
      { name: "Downey", code: "19030" },
      { name: "El Monte", code: "19040" },
      { name: "Glendale", code: "19050" },
      { name: "Inglewood", code: "19060" },
      { name: "Long Beach", code: "19070" },
      { name: "Los Angeles", code: "19080" },
      { name: "Pasadena", code: "19090" },
      { name: "Pomona", code: "19100" },
      { name: "San Fernando", code: "19110" },
      { name: "Santa Clarita", code: "19120" },
      { name: "Torrance", code: "19130" },
      { name: "Van Nuys", code: "19140" },
      { name: "West Covina", code: "19150" }
    ]
  },

  Madera: {
    website: "https://www.madera.courts.ca.gov/divisions/traffic",
    lookup: "https://www.madera.courts.ca.gov/online-services/pay-fines",
    courts: [
      { name: "Madera", code: "20050" }
    ]
  },

  Marin: {
    website: "https://www.marincourt.org/traffic.htm",
    lookup: "https://www.marincourt.org/payments.htm",
    courts: [
      { name: "San Rafael", code: "21050" }
    ]
  },

  Mariposa: {
    website: "https://www.mariposacourt.org/divisions/traffic",
    lookup: "https://www.mariposacourt.org/self-help/traffic-tickets",
    courts: [
      { name: "Mariposa", code: "22050" }
    ]
  },

  Mendocino: {
    website: "https://www.mendocino.courts.ca.gov/divisions/traffic",
    lookup: "https://www.mendocino.courts.ca.gov/online-services/pay-traffic-fine",
    courts: [
      { name: "Ukiah", code: "23050" },
      { name: "Fort Bragg", code: "23060" }
    ]
  },

  Merced: {
    website: "https://www.merced.courts.ca.gov/divisions/traffic",
    lookup: "https://www.merced.courts.ca.gov/online-services/pay-traffic",
    courts: [
      { name: "Merced", code: "24050" },
      { name: "Los Banos", code: "24060" }
    ]
  },

  Modoc: {
    website: "https://www.modoc.courts.ca.gov/divisions/traffic",
    lookup: "https://www.modoc.courts.ca.gov/online-services/pay-traffic-fines",
    courts: [
      { name: "Alturas", code: "25050" }
    ]
  },

  Mono: {
    website: "https://www.mono.courts.ca.gov/divisions/traffic",
    lookup: "https://www.mono.courts.ca.gov/online-services/pay-traffic-ticket",
    courts: [
      { name: "Bridgeport", code: "26050" },
      { name: "Mammoth Lakes", code: "26060" }
    ]
  },

  Monterey: {
    website: "https://www.monterey.courts.ca.gov/divisions/traffic",
    lookup: "https://www.monterey.courts.ca.gov/online-services/pay-traffic-ticket",
    courts: [
      { name: "Monterey", code: "27050" },
      { name: "Salinas", code: "27060" },
      { name: "King City", code: "27070" }
    ]
  },

  Napa: {
    website: "https://www.napa.courts.ca.gov/divisions/traffic",
    lookup: "https://www.napa.courts.ca.gov/online-services/pay-traffic-ticket",
    courts: [
      { name: "Napa", code: "28050" }
    ]
  },

    Nevada: {
    website: "https://www.nevada.courts.ca.gov/divisions/traffic",
    lookup: "https://www.nevada.courts.ca.gov/online-services/pay-traffic-ticket",
    courts: [
      { name: "Nevada City", code: "29050" },
      { name: "Truckee", code: "29060" }
    ]
  },

  Orange: {
    website: "https://www.occourts.org/directory/traffic",
    lookup: "https://www.occourts.org/OnlineServices",
    courts: [
      { name: "Central Justice Center", code: "30010" },
      { name: "North Justice Center", code: "30020" },
      { name: "West Justice Center", code: "30030" },
      { name: "Harbor Justice Center", code: "30040" }
    ]
  },

  Placer: {
    website: "https://www.placer.courts.ca.gov/divisions/traffic",
    lookup: "https://www.placer.courts.ca.gov/online-services/pay-traffic-ticket",
    courts: [
      { name: "Roseville", code: "31050" },
      { name: "Auburn", code: "31060" },
      { name: "Tahoe City", code: "31070" }
    ]
  },

  Plumas: {
    website: "https://www.plumas.courts.ca.gov/divisions/traffic",
    lookup: "https://www.plumas.courts.ca.gov/online-services/pay-traffic-ticket",
    courts: [
      { name: "Quincy", code: "32050" }
    ]
  },

  Riverside: {
    website: "https://www.riverside.courts.ca.gov/Divisions/Traffic/traffic.php",
    lookup: "https://www.riverside.courts.ca.gov/OnlineServices/Traffic/TrafficSearch",
    courts: [
      { name: "Banning", code: "33010" },
      { name: "Blythe", code: "33020" },
      { name: "Hemet", code: "33030" },
      { name: "Indio", code: "33040" },
      { name: "Moreno Valley", code: "33050" },
      { name: "Murrieta", code: "33060" },
      { name: "Riverside", code: "33070" }
    ]
  },

  Sacramento: {
    website: "https://www.saccourt.ca.gov/traffic/traffic.aspx",
    lookup: "https://services.saccourt.ca.gov/Traffic",
    courts: [
      { name: "Sacramento", code: "34050" }
    ]
  },

  San Benito: {
    website: "https://www.sanbenito.courts.ca.gov/divisions/traffic",
    lookup: "https://www.sanbenito.courts.ca.gov/online-services/pay-traffic-ticket",
    courts: [
      { name: "Hollister", code: "35050" }
    ]
  },

  "San Bernardino": {
    website: "https://www.sb-court.org/divisions/traffic",
    lookup: "https://www.sb-court.org/Divisions/Traffic/TrafficCitations.aspx",
    courts: [
      { name: "Barstow", code: "36010" },
      { name: "Fontana", code: "36020" },
      { name: "Joshua Tree", code: "36030" },
      { name: "Needles", code: "36040" },
      { name: "Rancho Cucamonga", code: "36050" },
      { name: "San Bernardino", code: "36060" },
      { name: "Victorville", code: "36070" }
    ]
  },

  "San Diego": {
    website: "https://www.sdcourt.ca.gov/traffic",
    lookup: "https://www.sdcourt.ca.gov/portal",
    courts: [
      { name: "Central Division (Downtown)", code: "37010" },
      { name: "East County", code: "37020" },
      { name: "North County", code: "37030" },
      { name: "South County", code: "37040" }
    ]
  },

  "San Francisco": {
    website: "https://www.sfsuperiorcourt.org/divisions/traffic",
    lookup: "https://www.sfsuperiorcourt.org/online-services/traffic-payment",
    courts: [
      { name: "San Francisco", code: "38050" }
    ]
  },

  "San Joaquin": {
    website: "https://www.sjcourts.org/divisions/traffic",
    lookup: "https://www.sjcourts.org/online-services/pay-traffic-fines",
    courts: [
      { name: "Stockton", code: "39050" },
      { name: "Lodi", code: "39060" },
      { name: "Manteca", code: "39070" },
      { name: "Tracy", code: "39080" }
    ]
  },

  

const Courts = () => {
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  const counties = Object.keys(courtDataFull).sort();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">California Traffic Courts</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your local court information and requirements
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Select Your County</h2>
            <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
              {counties.map((county) => (
                <Button
                  key={county}
                  variant="outline"
                  className="justify-start text-left h-auto py-2"
                  onClick={() => setSelectedCounty(county)}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  {county}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Court Information</h2>
            {selectedCounty ? (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{selectedCounty} County</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        Courts
                      </h4>
                      <div className="space-y-2">
                        {courtDataFull[selectedCounty].courts.map((court, i) => (
                          <div key={i} className="bg-muted p-3 rounded">
                            <div className="font-medium">{court.name}</div>
                            <div className="text-sm text-muted-foreground">Code: {court.code}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="default">
                        <a
                          href={courtDataFull[selectedCounty].website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Court Website
                        </a>
                      </Button>
                      <Button variant="outline">
                        <a
                          href={courtDataFull[selectedCounty].lookup}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Clock className="w‑4 h‑4 mr‑2" />
                          Ticket Lookup
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p‑6 text‑center text‑muted‑foreground">
                  Select a county from the list to view court information
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courts;
