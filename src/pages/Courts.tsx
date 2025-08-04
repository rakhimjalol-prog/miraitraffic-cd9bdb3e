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
  }
};

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
