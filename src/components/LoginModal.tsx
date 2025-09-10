import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogHeader, DialogTitle, DialogContent, Dialog } from "@/components/ui/dialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterModal } from "@/components/RegisterModal";
import { useUser } from "../context/UserContext";

export const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();
  const { login } = useUser();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    try {
      const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      let data: any = {};
      if (res.headers.get("content-type")?.includes("application/json")) {
        data = await res.json();
      }

      if (res.status === 404) {
        alert("Not registered! Please register.");
        setShowRegister(true);
      } else if (res.status === 401) {
        alert("Invalid credentials.");
      } else if (res.ok) {
        login(data.user);
        // Navigate based on user status
        if (!data.user.onboarded) navigate("/onboarding");
        else if (!data.user.assessed) navigate("/assessment");
        else navigate("/home");
      } else {
        alert(data.message || "Login failed.");
      }
    } catch {
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="space-y-6">
      <DialogHeader>
        <DialogTitle className="text-center text-xl font-semibold text-foreground">
          Welcome Back
        </DialogTitle>
      </DialogHeader>

      <Button variant="outline" className="w-full bg-muted text-muted-foreground border-border hover:bg-accent">
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

        <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground border-0 hover:bg-gradient-secondary">
          Login
        </Button>
      </form>

      <Dialog open={showRegister} onOpenChange={setShowRegister}>
        <DialogContent className="sm:max-w-md">
          <RegisterModal />
        </DialogContent>
      </Dialog>
    </div>
  );
};
