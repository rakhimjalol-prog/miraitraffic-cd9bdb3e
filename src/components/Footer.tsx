import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="border-t border-border bg-[#71d4f6]/[0.56] pt-16 pb-6">
      <div className="container mx-auto px-6">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12 text-sm">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/dd4edfff-68f0-492b-8321-3146ba649956.png" alt="Mirai Traffic School Logo" className="-bottom-1/3 brightness-100 max-h-10" />
              <h3 className="text-lg font-semibold text-foreground">
                Mirai Traffic School
              </h3>
            </div>
            <p className="text-muted-foreground mb-2 leading-relaxed">
              © 2025 Mirai Traffic School<br />
              DMV License #XXXX<br />
              California DMV-Licensed Traffic Violator School
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Quick Links
            </h4>
            <ul className="space-y-1">
              <li><Link to="/about" className="hover:underline text-muted-foreground">About Us</Link></li>
              <li><Link to="/courts" className="hover:underline text-muted-foreground">CA Courts</Link></li>
              <li><a href="/start-course" className="hover:underline text-muted-foreground">Start Course</a></li>
              
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Support</h4>
            <ul className="space-y-1">
              <li><Link to="/help" className="hover:underline text-muted-foreground">Help Center</Link></li>
              <li><Link to="/contact" className="hover:underline text-muted-foreground">Contact</Link></li>
              
              <li className="text-muted-foreground">
                
                <div>Email: support@miraitraffic.com</div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Legal</h4>
            <ul className="space-y-1">
              <li><Link to="/legal" className="hover:underline text-muted-foreground">Terms & Privacy</Link></li>
              
              <li><a href="/refund-policy" className="hover:underline text-muted-foreground">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <Separator className="bg-border mb-4" />

        {/* Bottom Footer */}
        <div className="text-sm text-muted-foreground text-left">
          © 2025 Mirai Traffic School. All rights reserved. Licensed by the California DMV.
        </div>
      </div>
    </footer>;
};
export default Footer;