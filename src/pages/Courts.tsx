import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Building, Clock } from "lucide-react";

const Courts = () => {
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);

  // California counties A-Z
  const counties = [
    "Alameda", "Alpine", "Amador", "Butte", "Calaveras", "Colusa", "Contra Costa",
    "Del Norte", "El Dorado", "Fresno", "Glenn", "Humboldt", "Imperial", "Inyo",
    "Kern", "Kings", "Lake", "Lassen", "Los Angeles", "Madera", "Marin", "Mariposa",
    "Mendocino", "Merced", "Modoc", "Mono", "Monterey", "Napa", "Nevada", "Orange",
    "Placer", "Plumas", "Riverside", "Sacramento", "San Benito", "San Bernardino",
    "San Diego", "San Francisco", "San Joaquin", "San Luis Obispo", "San Mateo",
    "Santa Barbara", "Santa Clara", "Santa Cruz", "Shasta", "Sierra", "Siskiyou",
    "Solano", "Sonoma", "Stanislaus", "Sutter", "Tehama", "Trinity", "Tulare",
    "Tuolumne", "Ventura", "Yolo", "Yuba"
  ];

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
          {/* County List Section */}
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

          {/* Selected County Info Section */}
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
                    
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <p className="text-muted-foreground italic text-center">
                        Insert content here
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground">Address</h4>
                          <p className="text-sm text-muted-foreground">Court address will be inserted here</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground">Hours</h4>
                          <p className="text-sm text-muted-foreground">Court hours will be inserted here</p>
                        </div>
                      </div>
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