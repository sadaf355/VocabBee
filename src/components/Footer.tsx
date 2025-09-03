import { Button } from "@/components/ui/button";
import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src="/src/assets/vocabee-logo-white.png" alt="VocabBee" className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">VocabBee</span>
            </div>
            <p className="text-background/70 text-sm">
              Master Technical English with AI-powered learning platform designed 
              for engineering and technical students.
            </p>
            <div className="flex gap-2">
              <Button variant="hero" size="sm">
                Start Learning
              </Button>
            </div>
          </div>

          {/* Learning Section */}
          <div>
            <h3 className="font-semibold mb-4">Learning</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Grammar Essentials</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Professional Communication</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Vocabulary Builder</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pronunciation Practice</a></li>
            </ul>
          </div>

          {/* LSRW Skills */}
          <div>
            <h3 className="font-semibold mb-4">LSRW Skills</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Listening Skills</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Speaking Practice</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Reading Comprehension</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Writing Skills</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@vocabbee.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 99999 00000</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              © 2024 VocabBee. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/70">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;