import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpCircle, BookOpen, ExternalLink } from "lucide-react";

const faqs = [
  {
    category: "About the Course",
    items: [
      { question: "What is Mirai Traffic School?", answer: "Mirai Traffic School is an online traffic school designed for Japanese-speaking drivers in California. Our course helps you meet court or DMV requirements to dismiss a traffic ticket and avoid points on your driving record." },
      { question: "Is the course approved by the California DMV?", answer: "Yes. Our course is licensed by the California DMV. However, DMV approval does not imply endorsement." },
      { question: "How long is the course?", answer: "The California DMV requires that online traffic school courses take a minimum of 340 minutes (about 5.5 hours). You can complete the course at your own pace, and your progress is saved automatically." },
      { question: "How does identity verification work during the course?", answer: "As required by the DMV, we verify your identity using your date of birth and periodic security questions throughout the course." },
      { question: "Will there be videos in the course?", answer: "Yes! The course includes 14 short, animated videos to help you understand California traffic laws in an easy and engaging way." }
    ]
  },
  {
    category: "Registration & Access",
    items: [
      { question: "How do I sign up for the course?", answer: "Click the 'Enroll Now' button on our website, enter your information, and complete payment. You’ll receive login instructions by email." },
      { question: "How long do I have to complete the course?", answer: "You have 60 days from your date of purchase to complete the course. After completion, your course remains accessible for another 30 days." }
    ]
  },
  {
    category: "Quizzes, Final Exam & Certificate",
    items: [
      { question: "Are there quizzes in the course?", answer: "Yes. You’ll take a short quiz after each section. You must score at least 70% to pass each quiz." },
      { question: "Is there a final exam?", answer: "Yes. At the end of the course, you must pass a final exam with a score of 70% or higher. You may attempt the final exam up to two times." },
      { question: "What happens if I fail a quiz?", answer: "You can retake each quiz as many times as needed until you pass." },
      { question: "When is my certificate sent to the DMV?", answer: "As soon as you pass the final exam, your completion certificate is submitted electronically to the DMV. You’ll also receive a copy for your records." }
    ]
  },
  {
    category: "Payments & Refunds",
    items: [
      { question: "What payment methods do you accept?", answer: "We accept all major credit and debit cards through our secure payment partner, Stripe. You may also see options like PayPal, Apple Pay, or Google Pay depending on your device." },
      { question: "Is there a refund policy?", answer: "Yes. Refunds are available if you have not yet started the course. Once you begin the course, refunds are no longer available." }
    ]
  },
  {
    category: "Technical Support",
    items: [
      { question: "Can I switch devices during the course?", answer: "Yes. Your progress is automatically saved. You can log in from any device and continue right where you left off." },
      { question: "What if I forget my login details?", answer: "Click 'Forgot Password' on the login page or contact us at support@miraitraffic.com for help." }
    ]
  },
  {
    category: "Language Options",
    items: [
      { question: "Is the course available in Japanese?", answer: "Yes. The full course is presented in Japanese, with English translation available where needed." }
    ]
  },
  {
    category: "Still Have Questions?",
    items: [
      { question: "Didn't find what you were looking for?", answer: "Contact our support team anytime at support@miraitraffic.com and we’ll be happy to assist you." }
    ]
  }
];

const helpTopics = [
  { title: "Create a MyDMV Account", url: "https://www.dmv.ca.gov/portal/mydmv/", icon: "🧾" },
  { title: "Renew Driver’s License or ID", url: "https://www.dmv.ca.gov/portal/dmv/detail/online/dl_renewal", icon: "🔄" },
  { title: "Replace a Driver’s License", url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/replace-your-license-id-card/", icon: "📋" },
  { title: "Vehicle Registration Renewal", url: "https://www.dmv.ca.gov/portal/dmv/detail/online/vrir/vr_top2", icon: "🚘" },
  { title: "Change Your Address", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/change-of-address/", icon: "🏠" },
  { title: "Transfer & Liability Notice", url: "https://www.dmv.ca.gov/portal/vehicle-registration/vehicle-title-transfer/notice-of-transfer-and-release-of-liability/", icon: "📑" },
  { title: "Traffic School Lookup", url: "https://www.dmv.ca.gov/portal/vehicle-industry-services/occupational-licenses/traffic-violator-school-program/", icon: "🔍" },
  { title: "Disabled Placard Application", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/disabled-person-placard/", icon: "🅿️" },
  { title: "Make a DMV Payment", url: "https://www.dmv.ca.gov/portal/dmv-virtual-office/dmv-payment/", icon: "💳" }
];
