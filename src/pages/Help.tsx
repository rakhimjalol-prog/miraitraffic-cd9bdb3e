import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpCircle, BookOpen, ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Help = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("faq");

  const faqs = [
    {
      question: t('help.faq1.question'),
      answer: t('help.faq1.answer')
    },
    {
      question: t('help.faq2.question'),
      answer: t('help.faq2.answer')
    },
    {
      question: t('help.faq3.question'),
      answer: t('help.faq3.answer')
    }
  ];

  const helpTopics = [
    {
      category: t('help.topics.renew'),
      items: [
        { title: t('help.topics.driverLicenseRenewal'), url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/driver-license-id-card-online-renewal/", icon: "🔄" },
        { title: t('help.topics.commercialLicenseRenewal'), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/commercial-driver-license-renewal/", icon: "🚛" },
        { title: t('help.topics.realIdUpgrade'), url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/real-id/", icon: "⭐" },
        { title: t('help.topics.vehicleRegistrationRenewal'), url: "https://www.dmv.ca.gov/portal/vehicle-registration/vehicle-registration-renewal/", icon: "🚘" },
        { title: t('help.topics.disabledParkingRenewal'), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/dppp-renewal/", icon: "🅿️" },
        { title: t('help.topics.plannedNonoperationRenewal'), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/file-for-planned-non-operation-vfo/", icon: "📆" }
      ]
    },
    {
      category: t('help.topics.applyRequest'),
      items: [
        { title: t('help.topics.driverLicenseApplication'), url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/dl-id-online-app-edl-44/", icon: "📝" },
        { title: t('help.topics.changeAddress'), url: "https://www.dmv.ca.gov/portal/online-change-of-address-coa-system/", icon: "🏠" },
        { title: t('help.topics.titleTransfer'), url: "https://www.dmv.ca.gov/portal/vehicle-registration/titles/title-transfers-and-changes/title-transfer/", icon: "🔁" },
        { title: t('help.topics.noticeOfTransfer'), url: "https://www.dmv.ca.gov/portal/vehicle-registration/titles/title-transfers-and-changes/notice-of-transfer-and-release-of-liability-nrl/", icon: "📑" },
        { title: t('help.topics.disabledParkingApplication'), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/dppp-application/", icon: "🅿️" },
        { title: t('help.topics.affidavitNonUse'), url: "https://www.dmv.ca.gov/portal/vehicle-registration/affidavit-of-non-use/", icon: "📃" }
      ]
    },
    {
      category: t('help.topics.order'),
      items: [
        { title: t('help.topics.orderDriverRecord'), url: "https://www.dmv.ca.gov/portal/customer-service/request-vehicle-or-driver-records/online-driver-record-request/", icon: "📄" },
        { title: t('help.topics.orderVehicleRecord'), url: "https://www.dmv.ca.gov/portal/customer-service/request-vehicle-or-driver-records/online-vehicle-record-request/", icon: "🚗" },
        { title: t('help.topics.personalizedPlates'), url: "https://www.dmv.ca.gov/portal/vehicle-registration/license-plates-decals-and-placards/license-plates/order-special-interest-and-personalized-license-plates/", icon: "🔠" },
        { title: t('help.topics.cleanAirDecal'), url: "https://www.dmv.ca.gov/portal/vehicle-registration/license-plates-decals-and-placards/clean-air-vehicle-decals-for-using-carpool-lanes/", icon: "🌿" },
        { title: t('help.topics.musselSticker'), url: "https://www.dmv.ca.gov/portal/vehicle-registration/new-registration/register-your-boat-vessel/quagga-sticker-request/", icon: "🐚" }
      ]
    },
    {
      category: t('help.topics.replace'),
      items: [
        { title: t('help.topics.driverLicenseReplacement'), url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/replace-your-driver-license-or-identification-dl-id-card/online-duplicate-driver-license-request/", icon: "♻️" },
        { title: t('help.topics.stickerReplacement'), url: "https://www.dmv.ca.gov/portal/vehicle-registration/online-replacement-sticker-or-registration-card/", icon: "🏷️" },
        { title: t('help.topics.titleReplacement'), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/replacement-title/", icon: "🆕" },
        { title: t('help.topics.disabledParkingReplacement'), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/dppp-replacement/", icon: "🔁" },
        { title: t('help.topics.licensePlateReplacement'), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/replacement-license-plates/", icon: "🔧" }
      ]
    },
    {
      category: t('help.topics.lookupStatus'),
      items: [
        { title: t('help.topics.virtualOfficeCaseStatus'), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/case-status/", icon: "📋" },
        { title: t('help.topics.driverLicenseStatus'), url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/drivers-license-id-card-status/", icon: "🔎" },
        { title: t('help.topics.vehicleRegistrationStatus'), url: "https://www.dmv.ca.gov/portal/vehicle-registration/vehicle-registration-status/", icon: "🚙" },
        { title: t('help.topics.occupationalLicensing'), url: "https://www.dmv.ca.gov/portal/vehicle-industry-services/occupational-licensing/occupational-licensing-status-information-system/", icon: "🧑‍💼" },
        { title: t('help.topics.trafficSchoolLookup'), url: "https://www.dmv.ca.gov/portal/vehicle-industry-services/occupational-licensing/occupational-licensing-status-information-system/traffic-school-list/", icon: "🏫" },
        { title: t('help.topics.motorCarrierPermit'), url: "https://www.dmv.ca.gov/portal/vehicle-industry-services/motor-carrier-services-mcs/motor-carrier-permits/active-motor-carriers/", icon: "🚛" }
      ]
    },
    {
      category: t('help.topics.makePayment'),
      items: [
        { title: t('help.topics.dishonoredCheckPayment'), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/dishonored-check-payment/", icon: "❌💵" },
        { title: t('help.topics.reinstatementFee'), url: "https://www.dmv.ca.gov/portal/vehicle-registration/insurance-requirements/suspended-vehicle-registration/", icon: "💰" },
        { title: t('help.topics.reissueFeePayment'), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/reissue-fees/", icon: "♻️" },
        { title: t('help.topics.feeCalculators'), url: "https://www.dmv.ca.gov/portal/vehicle-registration/registration-fees/vehicle-registration-fee-calculator/calculate-my-fees/", icon: "🧮" }
      ]
    },
    {
      category: t('help.topics.submitReport'),
      items: [
        { title: t('help.topics.reportAccident'), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/accident-reporting/", icon: "🚨" },
        { title: t('help.topics.medicalExamination'), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/medical-examination-report/", icon: "🩺" },
        { title: t('help.topics.commercialTraining'), url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/submit-dl-1236-vfo/", icon: "📄" }
      ]
    }
  ];

  return (
    <div className="page-container">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1>{t('help.title')}</h1>
            <p>{t('help.description')}</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="faq" className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                {t('help.tabs.faq')}
              </TabsTrigger>
              <TabsTrigger value="topics" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {t('help.tabs.topics')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="faq" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-primary mb-4">{t('help.faqTitle')}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="topics" className="mt-6">
              <div className="grid gap-6">
                <h2 className="text-2xl font-semibold text-primary">{t('help.dmvTopicsTitle')}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {helpTopics.map((topic, index) => (
                    <Card key={index} className="h-fit">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4 text-primary">{topic.category}</h3>
                        <div className="space-y-2">
                          {topic.items.map((item, itemIndex) => (
                            <a
                              key={itemIndex}
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-muted"
                            >
                              <span className="text-base">{item.icon}</span>
                              <span className="flex-1">{item.title}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Help;