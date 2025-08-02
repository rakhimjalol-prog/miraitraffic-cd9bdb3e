import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Building, Clock, ExternalLink } from "lucide-react";

const courtData: Record<string, {
  website?: string;
  lookup?: string;
  courts: { name: string; code: string }[];
}> = {
  "Alameda": {
    website: "https://www.alameda.courts.ca.gov/",
    lookup: "https://www.alameda.courts.ca.gov/lookup",
    courts: [
      { name: "Alameda", code: "01430" },
      { name: "Berkeley-Albany", code: "01430" },
      { name: "Dublin", code: "01430" },
      { name: "Fremont", code: "01430" },
      { name: "Hayward", code: "01430" },
      { name: "Oakland", code: "01440" }
    ]
  },
  "Alpine": {
    courts: [
      { name: "Markleeville", code: "02050" }
    ]
  },
  "Amador": {
    courts: [
      { name: "Jackson", code: "03050" }
    ]
  },
  "Butte": {
    courts: [
      { name: "Chico", code: "04030" },
      { name: "Oroville", code: "04030" },
      { name: "Paradise", code: "04030" }
    ]
  },
  "Calaveras": {
    courts: [
      { name: "San Andreas", code: "05050" }
    ]
  },
  "Colusa": {
    courts: [
      { name: "Colusa", code: "06050" }
    ]
  },
  "Contra Costa": {
    courts: [
      { name: "Martinez", code: "07030" },
      { name: "Pittsburg", code: "07030" },
      { name: "Richmond", code: "07030" }
    ]
  },
  "Del Norte": {
    courts: [
      { name: "Crescent City", code: "08050" }
    ]
  },
  "El Dorado": {
    courts: [
      { name: "Placerville", code: "09050" },
      { name: "South Lake Tahoe", code: "09050" }
    ]
  },
  "Fresno": {
    courts: [
      { name: "Fresno", code: "10050" }
    ]
  },
  "Glenn": {
    courts: [
      { name: "Willows", code: "11050" }
    ]
  },
  "Humboldt": {
    courts: [
      { name: "Eureka", code: "12050" }
    ]
  },
  "Imperial": {
    courts: [
      { name: "El Centro", code: "13050" }
    ]
  },
  "Inyo": {
    courts: [
      { name: "Independence", code: "14050" }
    ]
  },
  "Kern": {
    courts: [
      { name: "Bakersfield", code: "15050" },
      { name: "Mojave", code: "15060" },
      { name: "Ridgecrest", code: "15070" },
      { name: "Delano", code: "15080" }
    ]
  }
};

const Courts = () => {
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);

  const counties = Object.keys(courtData);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            California Traffic Courts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find traffic court information for your county in California
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-soft" id="county-list-section">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-primary">Select Your County</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {counties.map((county) => (
                    <Button
                      key={county}
                      variant={selectedCounty === county ? "default" : "outline"}
                      className="justify-start text-left h-auto py-3 px-4"
                      onClick={() => setSelectedCounty(county)}
                    >
                      {county} County
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="border-0 shadow-soft sticky top-6" id="county-info-section">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Building className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-semibold text-primary">Court Information</h2>
                </div>

                {selectedCounty ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {selectedCounty} County Court
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {courtData[selectedCounty]?.website && (
                        <div>
                          <a
                            href={courtData[selectedCounty].website}
                            target="_blank"
                            className="text-blue-600 hover:underline inline-flex items-center"
                            rel="noopener noreferrer"
                          >
                            Official Website <ExternalLink className="ml-1 w-4 h-4" />
                          </a>
                        </div>
                      )}
                      {courtData[selectedCounty]?.lookup && (
                        <div>
                          <a
                            href={courtData[selectedCounty].lookup}
                            target="_blank"
                            className="text-blue-600 hover:underline inline-flex items-center"
                            rel="noopener noreferrer"
                          >
                            Traffic Ticket Lookup <ExternalLink className="ml-1 w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="text-md font-medium text-foreground mb-2">Traffic Courts</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {courtData[selectedCounty]?.courts.map((court, index) => (
                          <li key={index}>{court.name} – Court Code {court.code}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Select a county from the list to view court information
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courts;
