import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Building, Clock, ExternalLink } from "lucide-react";

export const courtDataFull = {
  Alameda: {
    website: "https://www.alameda.courts.ca.gov/divisions/traffic",
    lookup: "https://www.alameda.courts.ca.gov/online-services/look-or-pay-your-traffic-ticket",
    courts: [
      { name: "Alameda", code: "01430" },
      { name: "Berkeley-Albany", code: "01430" },
      { name: "Dublin", code: "01430" },
      { name: "Fremont", code: "01430" },
      { name: "Hayward", code: "01430" },
      { name: "Oakland", code: "01440" }
    ]
  },

  Alpine: {
    website: "https://www.alpine.courts.ca.gov/divisions/traffic",
    lookup: "https://www.alpine.courts.ca.gov/online-services",
    courts: [
      { name: "Markleeville", code: "02050" }
    ]
  },

  Amador: {
    website: "https://www.amadorcourt.org",
    lookup: "https://www.amadorcourt.org/divisions/traffic.aspx",
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
  }
};

