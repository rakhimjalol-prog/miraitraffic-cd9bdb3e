import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { choose } from "@/utils/lang";

// Bilingual Terms of Use Sections (1–6)
const termsSections = [
  {
    en: {
      title: "1. Eligibility",
      content: [
        "To use our services, you must be at least 18 years old or have reached the legal age of majority in your jurisdiction.",
        "Minors under 18 must obtain consent from a parent or legal guardian."
      ]
    },
    jp: {
      title: "1. 利用資格",
      content: [
        "当社サービスを利用するには、18歳以上またはお住まいの地域における成年年齢に達している必要があります。",
        "18歳未満の方は、保護者の同意を得る必要があります。"
      ]
    }
  },
  {
    en: {
      title: "2. Course Access and Completion",
      content: [
        "Our course is licensed by the California DMV.",
        "Users must complete all required sections, pass quizzes and the final exam to receive a Certificate of Completion.",
        "Access to the course remains available for two (2) years from the registration date."
      ]
    },
    jp: {
      title: "2. コースの利用と修了",
      content: [
        "本コースはカリフォルニア州DMVにより認可されています。",
        "ユーザーはすべてのセクションを完了し、クイズおよび最終試験に合格することで修了証を取得できます。",
        "登録日から2年間、コースにアクセス可能です。"
      ]
    }
  },
  {
    en: {
      title: "3. Identity Verification",
      content: [
        "We may use periodic security questions and other verification methods to confirm that the enrolled user is completing the course personally.",
        "Impersonation or use of false identities is strictly prohibited."
      ]
    },
    jp: {
      title: "3. 本人確認",
      content: [
        "本人が受講していることを確認するために、定期的なセキュリティ質問や他の確認方法を使用する場合があります。",
        "なりすましや虚偽の情報の使用は禁止されています。"
      ]
    }
  },
  {
    en: {
      title: "4. Payments and Refund Policy",
      content: [
        "All payments are securely processed via Stripe.",
        "Refunds may be requested within 30 days of purchase only if the user has not completed the course or received a certificate.",
        "Refunds are processed within 10 business days of approval."
      ]
    },
    jp: {
      title: "4. 支払いおよび返金ポリシー",
      content: [
        "すべての支払いはStripeを通じて安全に処理されます。",
        "返金は、ユーザーがコースを完了しておらず、修了証を受け取っていない場合に限り、購入から30日以内にリクエストできます。",
        "返金は承認後、営業日で10日以内に処理されます。"
      ]
    }
  },
  {
    en: {
      title: "5. Intellectual Property",
      content: [
        "All content on our site—including videos, text, animations, and design elements—is the property of Mirai Traffic School and protected by U.S. copyright and trademark laws.",
        "You may not reproduce, distribute, or modify any content without our written permission."
      ]
    },
    jp: {
      title: "5. 知的財産権",
      content: [
        "当サイトのすべてのコンテンツ（ビデオ、テキスト、アニメーション、デザイン要素など）はMirai Traffic Schoolの所有物であり、米国の著作権および商標法によって保護されています。",
        "書面による許可なしに、コンテンツを複製、配布、変更することは禁止されています。"
      ]
    }
  },
  {
    en: {
      title: "6. User Conduct",
      content: [
        "You agree not to:",
        "- Share your login with others.",
        "- Attempt to bypass course requirements.",
        "- Post or transmit unlawful, harmful, or misleading information on the site.",
        "- Use our website for unauthorized commercial purposes.",
        "Violation of these rules may result in immediate termination of your account and legal action."
      ]
    },
    jp: {
      title: "6. ユーザー行動規範",
      content: [
        "ユーザーは以下の行為を行わないことに同意します：",
        "- ログイン情報を他人と共有すること。",
        "- コース要件を回避しようとする行為。",
        "- 違法、有害、または誤解を招く情報をサイトに投稿または送信すること。",
        "- 本ウェブサイトを許可されていない商業目的で使用すること。",
        "これらの規則に違反した場合、アカウントの即時停止および法的措置が取られる可能性があります。"
      ]
    }
  }
];
  {
    en: {
      title: "7. Quizzes and Final Exam",
      content: [
        "After each section, users will complete a short quiz.",
        "To pass, a minimum score of 70% is required.",
        "The final exam may be attempted twice, and also requires a 70% to pass."
      ]
    },
    jp: {
      title: "7. クイズおよび最終試験",
      content: [
        "各セクションの後に、ユーザーは短いクイズを受けます。",
        "合格には70%以上のスコアが必要です。",
        "最終試験は2回まで受験でき、こちらも70%以上で合格となります。"
      ]
    }
  },
  {
    en: {
      title: "8. Certification and Submission",
      content: [
        "Upon passing the final exam, a Certificate of Completion will be generated.",
        "This certificate is electronically submitted to the DMV or court as required.",
        "A digital copy will also be available to the student for download."
      ]
    },
    jp: {
      title: "8. 修了証と提出",
      content: [
        "最終試験に合格すると、修了証が発行されます。",
        "必要に応じて、証明書は電子的にDMVまたは裁判所に提出されます。",
        "また、修了証のコピーはダウンロード用にユーザーにも提供されます。"
      ]
    }
  },
  {
    en: {
      title: "9. Technology Requirements",
      content: [
        "You must access the course using a modern web browser: Chrome, Firefox, Safari, or Edge.",
        "Some lessons include audio and video, so a device with audio capability is required.",
        "A stable internet connection is necessary to track your course progress accurately."
      ]
    },
    jp: {
      title: "9. 技術要件",
      content: [
        "コースの利用には、Chrome、Firefox、Safari、Edgeなどの最新のウェブブラウザが必要です。",
        "一部のレッスンには音声や動画が含まれるため、音声出力可能なデバイスをご用意ください。",
        "進捗を正確に記録するためには、安定したインターネット接続が必要です。"
      ]
    }
  },
  {
    en: {
      title: "10. Privacy",
      content: [
        "Please refer to our Privacy Policy for detailed information on how your personal data is collected, used, stored, and protected.",
        "We do not sell or rent your personal information to third parties."
      ]
    },
    jp: {
      title: "10. プライバシー",
      content: [
        "個人情報の収集、使用、保存、保護方法の詳細については、当社のプライバシーポリシーをご覧ください。",
        "当社は、お客様の個人情報を第三者に販売または貸与することはありません。"
      ]
    }
  },
  {
    en: {
      title: "11. Limitation of Liability",
      content: [
        "Mirai Traffic School is not liable for delays, outages, or technical issues caused by third-party systems or internet service interruptions.",
        "We are also not responsible for a student’s failure to receive credit due to incomplete or inaccurate information provided by the user.",
        "Our total liability is limited to the amount the user paid for the course."
      ]
    },
    jp: {
      title: "11. 責任の制限",
      content: [
        "Mirai Traffic Schoolは、第三者システムやインターネット接続の問題による遅延、停止、技術的問題について責任を負いません。",
        "また、ユーザーの情報不備や誤入力により、修了の認定を受けられなかった場合にも責任を負いません。",
        "当社の責任の上限は、ユーザーが本コースに支払った金額までとします。"
      ]
    }
  },
  {
    en: {
      title: "12. Third-Party Links",
      content: [
        "Our website may contain links to third-party websites for convenience or reference.",
        "We do not control or endorse those sites and are not responsible for their content, policies, or practices."
      ]
    },
    jp: {
      title: "12. 第三者リンク",
      content: [
        "当社ウェブサイトには、便宜や参考のために第三者のウェブサイトへのリンクが含まれている場合があります。",
        "これらの外部サイトは当社の管理下にはなく、その内容、ポリシー、慣行について当社は責任を負いません。"
      ]
    }
  }
  {
    en: {
      title: "13. Children’s Privacy",
      content: [
        "Our services are not directed at children under the age of 13.",
        "We do not knowingly collect or store personal information from anyone under 13 years old.",
        "If we become aware that we have collected data from a child, we will promptly delete it."
      ]
    },
    jp: {
      title: "13. 子供のプライバシー",
      content: [
        "当社サービスは13歳未満のお子様を対象としていません。",
        "13歳未満の個人情報を意図的に収集または保存することはありません。",
        "万が一、子供からのデータ収集が判明した場合には、速やかに削除いたします。"
      ]
    }
  },
  {
    en: {
      title: "14. Disclaimers and Limitation of Liability",
      content: [
        "Our services and website content are provided 'as is' without warranties of any kind, either express or implied.",
        "We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.",
        "Our liability is limited to the amount paid by the user in the last 12 months."
      ]
    },
    jp: {
      title: "14. 免責事項および責任制限",
      content: [
        "当社のサービスおよびウェブサイトのコンテンツは、いかなる保証もなく「現状のまま」で提供されます。",
        "商品性、特定目的への適合性、非侵害を含むすべての保証を明示的または黙示的に否認します。",
        "当社の責任は、ユーザーが過去12か月間に支払った金額を上限とします。"
      ]
    }
  },
  {
    en: {
      title: "15. Changes to Terms",
      content: [
        "We may update these Terms of Use at any time.",
        "Any changes will be posted on this page with the updated date.",
        "Your continued use of the site after changes means you accept the new terms."
      ]
    },
    jp: {
      title: "15. 規約の変更",
      content: [
        "当社は本利用規約をいつでも更新することがあります。",
        "変更があった場合は、このページに更新日とともに掲載します。",
        "変更後もサイトを継続利用することで、新しい規約に同意したものとみなされます。"
      ]
    }
  },
  {
    en: {
      title: "16. Governing Law and Jurisdiction",
      content: [
        "These Terms are governed by the laws of the State of California.",
        "Any disputes shall be resolved in a court located in Los Angeles County, California."
      ]
    },
    jp: {
      title: "16. 準拠法および裁判管轄",
      content: [
        "本利用規約はカリフォルニア州法に準拠します。",
        "すべての紛争は、カリフォルニア州ロサンゼルス郡に所在する裁判所で解決されるものとします。"
      ]
    }
  },
  {
    en: {
      title: "17. Arbitration and Class Action Waiver",
      content: [
        "You agree that any dispute will be resolved through binding individual arbitration under the rules of the American Arbitration Association (AAA).",
        "You waive your right to participate in class actions and jury trials."
      ]
    },
    jp: {
      title: "17. 仲裁および集団訴訟放棄",
      content: [
        "すべての紛争は、アメリカ仲裁協会（AAA）の規則に従い、拘束力のある個別仲裁で解決されることに同意します。",
        "集団訴訟および陪審裁判に参加する権利を放棄します。"
      ]
    }
  },
  {
    en: {
      title: "18. Attorney’s Fees",
      content: [
        "If any legal action is taken to enforce these Terms, the prevailing party is entitled to recover reasonable attorney’s fees and costs."
      ]
    },
    jp: {
      title: "18. 弁護士費用",
      content: [
        "本規約を執行するための法的措置が取られた場合、勝訴した当事者は合理的な弁護士費用および関連費用を回収する権利を有します。"
      ]
    }
  },
  {
    en: {
      title: "19. Severability",
      content: [
        "If any part of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect."
      ]
    },
    jp: {
      title: "19. 分離可能性",
      content: [
        "本規約の一部が無効または執行不能と判断された場合でも、残りの条項は引き続き完全に有効とします。"
      ]
    }
  },
  {
    en: {
      title: "20. Contact Us",
      content: [
        "If you have any questions or concerns about these Terms, please contact us at:",
        "Email: info@miraitrafficschool.com",
        "Address: 1024 Iron Point Rd #1043, Folsom, CA 95630"
      ]
    },
    jp: {
      title: "20. お問い合わせ",
      content: [
        "本規約に関するご質問やご不明点がある場合は、以下までご連絡ください：",
        "メール: info@miraitrafficschool.com",
        "住所: 1024 Iron Point Rd #1043, Folsom, CA 95630"
      ]
    }
  }
// Bilingual Privacy Policy Sections (1–4)
const privacySections = [
  {
    en: {
      title: "1. Information We Collect",
      content: [
        "We collect the following types of personal data:",
        "- Name, email, and phone number",
        "- Billing address and payment information (via Stripe)",
        "- Device/browser info via cookies and analytics tools",
        "- Course progress and quiz scores",
        "Data is collected through enrollment forms, automated logs, and analytics platforms."
      ]
    },
    jp: {
      title: "1. 収集する情報",
      content: [
        "当社が収集する個人データには以下が含まれます：",
        "- 氏名、メールアドレス、電話番号",
        "- 請求先住所および支払情報（Stripeを使用）",
        "- Cookieおよび分析ツールによるデバイス/ブラウザ情報",
        "- コースの進捗状況およびクイズのスコア",
        "データは登録フォーム、自動ログ、分析プラットフォームを通じて収集されます。"
      ]
    }
  },
  {
    en: {
      title: "2. How We Use Your Information",
      content: [
        "We use the information we collect to:",
        "- Register and manage your course enrollment",
        "- Issue certificates to DMV and courts",
        "- Process payments and refunds",
        "- Provide customer support and updates",
        "- Improve website functionality and security",
        "- Comply with legal obligations"
      ]
    },
    jp: {
      title: "2. 情報の使用方法",
      content: [
        "収集した情報の使用目的は以下の通りです：",
        "- コース登録の管理",
        "- DMVや裁判所への修了証の提出",
        "- 支払および返金の処理",
        "- カスタマーサポートおよび更新の提供",
        "- ウェブサイト機能とセキュリティの向上",
        "- 法的義務の遵守"
      ]
    }
  },
  {
    en: {
      title: "3. Sharing Your Information",
      content: [
        "We may share your data with trusted service providers such as:",
        "- Stripe (for secure payments)",
        "- AWS (for web hosting)",
        "- Google Analytics (for usage insights)",
        "We do not sell or rent your data. Disclosure only occurs to fulfill services or comply with the law."
      ]
    },
    jp: {
      title: "3. 情報の共有",
      content: [
        "以下の信頼できるサービスプロバイダーとデータを共有する場合があります：",
        "- Stripe（安全な決済処理）",
        "- AWS（ホスティング）",
        "- Google Analytics（利用状況分析）",
        "当社はお客様のデータを販売または貸与することはありません。サービス提供または法令遵守のためにのみ開示します。"
      ]
    }
  },
  {
    en: {
      title: "4. Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar technologies to improve your experience.",
        "They help keep you logged in, track progress, and understand how users interact with the site.",
        "You can manage cookie preferences in your browser. Disabling cookies may limit functionality."
      ]
    },
    jp: {
      title: "4. クッキーおよびトラッキング技術",
      content: [
        "クッキーや類似の技術を使用してユーザー体験を向上させています。",
        "これによりログイン状態の保持、進捗の追跡、サイト利用状況の把握が可能になります。",
        "ブラウザ設定でクッキーの管理が可能ですが、無効にすると一部機能が制限される場合があります。"
      ]
    }
  }
];
  {
    en: {
      title: "5. Your Rights",
      content: [
        "Depending on your location, you may have the right to access, update, or delete your personal data.",
        "California residents have rights under the California Consumer Privacy Act (CCPA), including:",
        "- The right to know what data we collect and how we use it.",
        "- The right to request deletion of your data.",
        "- The right to opt out of data selling (we do not sell your data).",
        "EU residents may exercise rights under the General Data Protection Regulation (GDPR), including:",
        "- The right to access, correct, delete, restrict, and port your data.",
        "- The right to withdraw consent at any time."
      ]
    },
    jp: {
      title: "5. ユーザーの権利",
      content: [
        "お住まいの地域により、個人データへのアクセス、更新、削除を求める権利があります。",
        "カリフォルニア州の住民は、以下を含むCCPA（カリフォルニア消費者プライバシー法）の権利を有します：",
        "- 当社が収集するデータとその利用方法を知る権利",
        "- データの削除を要求する権利",
        "- データの販売からオプトアウトする権利（当社はデータを販売していません）",
        "EUの住民は、GDPR（一般データ保護規則）に基づき以下の権利を有します：",
        "- データへのアクセス、訂正、削除、制限、移転の権利",
        "- 同意をいつでも撤回する権利"
      ]
    }
  },
  {
    en: {
      title: "6. Data Retention",
      content: [
        "We retain your data for as long as necessary to fulfill the purposes outlined in this Privacy Policy.",
        "Course completion and certification records are stored for at least 2 years, as required by California DMV regulations.",
        "If you request deletion of your data, we will comply unless we are legally required to retain it."
      ]
    },
    jp: {
      title: "6. データの保持期間",
      content: [
        "本プライバシーポリシーに記載された目的を達成するために必要な期間、データを保持します。",
        "カリフォルニア州DMVの規定により、修了記録は少なくとも2年間保存されます。",
        "削除を希望された場合でも、法的義務がある限りデータを保持する必要があります。"
      ]
    }
  },
  {
    en: {
      title: "7. Third-Party Tools",
      content: [
        "We use third-party services to operate our platform effectively, including:",
        "- Stripe (for payment processing)",
        "- AWS (for hosting infrastructure)",
        "- Google Analytics (to analyze traffic and behavior)",
        "- Google Ads and Facebook Ads (for marketing)",
        "- Google Optimize (for A/B testing)",
        "These services are bound by contracts to protect your data and cannot use it for their own purposes."
      ]
    },
    jp: {
      title: "7. 第三者ツール",
      content: [
        "以下の第三者サービスを使用して、プラットフォームを円滑に運営しています：",
        "- Stripe（決済処理）",
        "- AWS（ホスティング）",
        "- Google Analytics（トラフィックとユーザー行動の分析）",
        "- Google Ads および Facebook Ads（マーケティング）",
        "- Google Optimize（A/Bテスト）",
        "これらのサービスは、契約によりデータ保護が義務付けられており、自社目的で使用することはできません。"
      ]
    }
  }
  {
    en: {
      title: "8. Children’s Privacy",
      content: [
        "Our services are not intended for children under 13 years of age.",
        "We do not knowingly collect personal data from anyone under the age of 13.",
        "If we learn that data from a child under 13 has been collected, we will delete it immediately."
      ]
    },
    jp: {
      title: "8. 子どものプライバシー",
      content: [
        "当社のサービスは13歳未満のお子様を対象としていません。",
        "13歳未満の方から個人情報を意図的に収集することはありません。",
        "13歳未満の方からのデータ収集が判明した場合は、直ちに削除します。"
      ]
    }
  },
  {
    en: {
      title: "9. Do Not Track",
      content: [
        "Some browsers offer a 'Do Not Track' feature to signal your preference regarding online tracking.",
        "Currently, we do not alter our data collection or usage practices in response to these signals."
      ]
    },
    jp: {
      title: "9. Do Not Track（DNT）への対応",
      content: [
        "一部のブラウザには、オンライン追跡の拒否を示す「Do Not Track」機能があります。",
        "現在のところ、当社はDNT信号に応じてデータ収集や使用の方針を変更していません。"
      ]
    }
  },
  {
    en: {
      title: "10. Policy Updates",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
        "When we update the policy, we will revise the 'Effective Date' at the top of the page.",
        "Your continued use of the site after any changes means you agree to the revised policy."
      ]
    },
    jp: {
      title: "10. ポリシーの更新",
      content: [
        "当社は、実務や法的要件の変更を反映するために、このプライバシーポリシーを随時更新する場合があります。",
        "ポリシーを更新する際は、ページ上部の「発効日」を改訂します。",
        "変更後もサイトを引き続き利用することにより、新しいポリシーに同意したものとみなされます。"
      ]
    }
  }
];
const Legal = () => {
  const { language } = useLanguage();
  const [active, setActive] = useState<'terms' | 'privacy'>('terms');

  return (
    <div className="page-container">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1>{choose("Legal Information", "法的情報", language)}</h1>
          <p>{choose("Terms of Use and Privacy Policy", "利用規約とプライバシーポリシー", language)}</p>
        </div>

        <Tabs value={active} onValueChange={setActive as any} className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="terms" className="py-3">
              <FileText className="w-5 h-5 mr-2" />
              {choose("Terms of Use", "利用規約", language)}
            </TabsTrigger>
            <TabsTrigger value="privacy" className="py-3">
              <Shield className="w-5 h-5 mr-2" />
              {choose("Privacy Policy", "プライバシーポリシー", language)}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="terms">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <article className="prose prose-lg text-foreground max-w-none space-y-8">
                  <h2 className="flex items-center">
                    <FileText className="inline w-6 h-6 text-primary mr-2" />
                    {choose("Terms of Use", "利用規約", language)}
                  </h2>
                  <ol className="list-decimal list-inside space-y-6">
                    {termsSections.map((sec, idx) => (
                      <li key={idx}>
                        <h3 className="font-semibold text-lg">
                          {language === 'ja' ? sec.jp.title : sec.en.title}
                        </h3>
                        <div className="mt-2 space-y-2">
                          {(language === 'ja' ? sec.jp.content : sec.en.content).map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ol>
                </article>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8 md:p-12">
                <article className="prose prose-lg text-foreground max-w-none space-y-8">
                  <h2 className="flex items-center">
                    <Shield className="inline w-6 h-6 text-primary mr-2" />
                    {choose("Privacy Policy", "プライバシーポリシー", language)}
                  </h2>
                  <ol className="list-decimal list-inside space-y-6">
                    {privacySections.map((sec, idx) => (
                      <li key={idx}>
                        <h3 className="font-semibold text-lg">
                          {language === 'ja' ? sec.jp.title : sec.en.title}
                        </h3>
                        <div className="mt-2 space-y-2">
                          {(language === 'ja' ? sec.jp.content : sec.en.content).map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ol>
                </article>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
