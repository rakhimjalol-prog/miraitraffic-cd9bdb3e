import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpCircle, BookOpen, ExternalLink } from "lucide-react";

const faqs = [ /* unchanged for brevity */ ];

const helpTopics = [
  {
    category: "Renew",
    items: [
      { title: "Driver’s License/ID Card Renewal", url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/driver-license-id-card-online-renewal/", icon: "🔄" },
      { title: "Commercial Driver’s License Renewal", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/commercial-driver-license-renewal/", icon: "🚛" },
      { title: "Upgrade to REAL ID", url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/real-id/", icon: "⭐" },
      { title: "Vehicle Registration Renewal", url: "https://www.dmv.ca.gov/portal/vehicle-registration/vehicle-registration-renewal/", icon: "🚘" },
      { title: "Disabled Person Parking Placard Renewal", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/dppp-renewal/", icon: "🅿️" },
      { title: "Planned Nonoperation Renewal", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/file-for-planned-non-operation-vfo/", icon: "📆" }
    ]
  },
  {
    category: "Apply / Request",
    items: [
      { title: "Driver’s License/ID Card Application", url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/dl-id-online-app-edl-44/", icon: "📝" },
      { title: "Change Address on DL/ID", url: "https://www.dmv.ca.gov/portal/online-change-of-address-coa-system/", icon: "🏠" },
      { title: "Title Transfer", url: "https://www.dmv.ca.gov/portal/vehicle-registration/titles/title-transfers-and-changes/title-transfer/", icon: "🔁" },
      { title: "Notice of Transfer & Release of Liability", url: "https://www.dmv.ca.gov/portal/vehicle-registration/titles/title-transfers-and-changes/notice-of-transfer-and-release-of-liability-nrl/", icon: "📑" },
      { title: "Disabled Person Parking Placard Application", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/dppp-application/", icon: "🅿️" },
      { title: "Affidavit of Non-Use", url: "https://www.dmv.ca.gov/portal/vehicle-registration/affidavit-of-non-use/", icon: "📃" }
    ]
  },
  {
    category: "Order",
    items: [
      { title: "Order Driver’s Record", url: "https://www.dmv.ca.gov/portal/customer-service/request-vehicle-or-driver-records/online-driver-record-request/", icon: "📄" },
      { title: "Order Vehicle Record", url: "https://www.dmv.ca.gov/portal/customer-service/request-vehicle-or-driver-records/online-vehicle-record-request/", icon: "🚗" },
      { title: "Special Interest or Personalized Plates", url: "https://www.dmv.ca.gov/portal/vehicle-registration/license-plates-decals-and-placards/license-plates/order-special-interest-and-personalized-license-plates/", icon: "🔠" },
      { title: "Clean Air Vehicle Decal", url: "https://www.dmv.ca.gov/portal/vehicle-registration/license-plates-decals-and-placards/clean-air-vehicle-decals-for-using-carpool-lanes/", icon: "🌿" },
      { title: "Mussel Fee Sticker", url: "https://www.dmv.ca.gov/portal/vehicle-registration/new-registration/register-your-boat-vessel/quagga-sticker-request/", icon: "🐚" }
    ]
  },
  {
    category: "Replace",
    items: [
      { title: "Driver’s License Replacement", url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/replace-your-driver-license-or-identification-dl-id-card/online-duplicate-driver-license-request/", icon: "♻️" },
      { title: "Sticker or Registration Card Replacement", url: "https://www.dmv.ca.gov/portal/vehicle-registration/online-replacement-sticker-or-registration-card/", icon: "🏷️" },
      { title: "Title Replacement", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/replacement-title/", icon: "🆕" },
      { title: "Disabled Person Parking Placard Replacement", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/dppp-replacement/", icon: "🔁" },
      { title: "License Plate Replacement", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/replacement-license-plates/", icon: "🔧" }
    ]
  },
  {
    category: "Lookup / Status Check",
    items: [
      { title: "Virtual Office Case Status", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/case-status/", icon: "📋" },
      { title: "Driver’s License/ID Card Status", url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/drivers-license-id-card-status/", icon: "🔎" },
      { title: "Vehicle Registration Status", url: "https://www.dmv.ca.gov/portal/vehicle-registration/vehicle-registration-status/", icon: "🚙" },
      { title: "Occupational Licensing Lookup", url: "https://www.dmv.ca.gov/portal/vehicle-industry-services/occupational-licensing/occupational-licensing-status-information-system/", icon: "🧑‍💼" },
      { title: "Traffic School Lookup", url: "https://www.dmv.ca.gov/portal/vehicle-industry-services/occupational-licensing/occupational-licensing-status-information-system/traffic-school-list/", icon: "🏫" },
      { title: "Active Motor Carrier Permit Holders", url: "https://www.dmv.ca.gov/portal/vehicle-industry-services/motor-carrier-services-mcs/motor-carrier-permits/active-motor-carriers/", icon: "🚛" }
    ]
  },
  {
    category: "Make a Payment",
    items: [
      { title: "Dishonored Check Payment", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/dishonored-check-payment/", icon: "❌💵" },
      { title: "Reinstatement Fee", url: "https://www.dmv.ca.gov/portal/vehicle-registration/insurance-requirements/suspended-vehicle-registration/", icon: "💰" },
      { title: "Reissue Fee Payment (Driver’s License)", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/reissue-fees/", icon: "♻️" },
      { title: "Fee Calculators", url: "https://www.dmv.ca.gov/portal/vehicle-registration/registration-fees/vehicle-registration-fee-calculator/calculate-my-fees/", icon: "🧮" }
    ]
  },
  {
    category: "Submit a Report or Certification",
    items: [
      { title: "Report an Accident", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/accident-reporting/", icon: "🚨" },
      { title: "Submit Medical Examination Report", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/medical-examination-report/", icon: "🩺" },
      { title: "Submit Commercial Behind-the-Wheel Training Certification", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/submit-dl-1236-vfo/", icon: "📄" }
    ]
  }
];
