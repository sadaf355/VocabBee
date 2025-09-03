import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogHeader, DialogTitle, DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginModal } from "@/components/LoginModal";

export const RegisterModal = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo registration - in real app, this would create account
    if (email && username && password) {
      navigate("/onboarding");
    }
  };

  return (
    <div className="space-y-6">
      <DialogHeader>
        <DialogTitle className="text-center text-xl font-semibold text-foreground">
          Join VocaBee
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

      <form onSubmit={handleRegister} className="space-y-4">
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
          <Label htmlFor="username" className="text-foreground">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-input border-border"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-foreground">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Create a password"
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
          Register
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Already registered?{" "}
        <Dialog>
          <DialogTrigger asChild>
            <span className="text-primary cursor-pointer hover:underline">
              Login
            </span>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <LoginModal />
          </DialogContent>
        </Dialog>
      </p>
    </div>
  );
};