import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogHeader, DialogTitle, DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterModal } from "@/components/RegisterModal";

export const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login - in real app, this would validate credentials
    if (email && password) {
      navigate("/onboarding");
    }
  };

  return (
    <div className="space-y-6">
      <DialogHeader>
        <DialogTitle className="text-center text-xl font-semibold text-foreground">
          Welcome Back
        </DialogTitle>
      </DialogHeader>

      <Button 
        variant="outline" 
        className="w-full bg-muted text-muted-foreground border-border hover:bg-accent"
      >
        Continue with Google
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">OR</span>
        </div>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-input border-border"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-foreground">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-input border-border"
            required
          />
        </div>

        <Button 
          type="submit"
          className="w-full bg-gradient-primary text-primary-foreground border-0 hover:bg-gradient-secondary"
        >
          Login
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Not a user?{" "}
        <Dialog>
          <DialogTrigger asChild>
            <span className="text-primary cursor-pointer hover:underline">
              Register
            </span>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <RegisterModal />
          </DialogContent>
        </Dialog>
      </p>
    </div>
  );
};