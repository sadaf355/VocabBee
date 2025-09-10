import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LoginModal } from "@/components/LoginModal";
import { RegisterModal } from "@/components/RegisterModal";
// Update the import path below to the correct relative path if your UserContext is in src/context/UserContext.tsx
import { useUser } from "../context/UserContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img src="/src/assets/vocabee-main-logo.png" alt="VocabBee" className="w-8 h-8" />
          </div>
          <span className="text-xl font-bold text-primary">VocabBee</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact Us
          </a>
        </nav>

        {/* Desktop CTA Buttons or User Info */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              <UserIcon className="w-6 h-6 text-primary" />
              <span className="text-foreground">{user.username}</span>
            </div>
          ) : (
            <>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Sign In</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <LoginModal />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="bg-gradient-primary text-primary-foreground border-0 hover:bg-gradient-secondary">
                    Get Started
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <RegisterModal />
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              {user ? (
                <Button
                  variant="ghost"
                  className="w-full flex items-center gap-2 justify-center"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/profile");
                  }}
                >
                  <UserIcon className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{user.username}</span>
                </Button>
              ) : (
                <>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">Sign In</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <LoginModal />
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default" className="w-full bg-gradient-primary text-primary-foreground">
                        Get Started
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <RegisterModal />
                    </DialogContent>
                  </Dialog>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;