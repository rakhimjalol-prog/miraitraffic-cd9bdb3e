import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Mirai Traffic School</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              California's premier Japanese-language online traffic school. 
              DMV-approved and court-accepted since 2020.
            </p>
            <p className="text-xs text-primary-foreground/60">
              DMV License #TS-1234567
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Start Course</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sample Lesson</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Course Information</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Court Lookup</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Technical Support</a></li>
              <li>
                <div className="text-primary-foreground/80">
                  <div>Phone: (555) 123-4567</div>
                  <div>Email: support@miraitraffic.com</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">DMV Information</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/80">
            © 2024 Mirai Traffic School. All rights reserved. 
            Licensed by the California DMV.
          </div>
          
          {/* Language Toggle */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-primary-foreground/80">Language:</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded text-sm bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors">
                🇺🇸 English
              </button>
              <button className="px-3 py-1 rounded text-sm bg-success text-success-foreground hover:bg-success/90 transition-colors">
                🇯🇵 日本語
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;