import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogHeader, DialogTitle, DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog";
import { useState } from "react";
import { LoginModal } from "@/components/LoginModal";

export const RegisterModal = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && username && password) {
      try {
        const res = await fetch("http://localhost:4000/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, username, password }),
        });
        let data = {};
        if (res.headers.get("content-type")?.includes("application/json")) {
          data = await res.json();
        }
        if (res.status === 409) {
          alert("Already registered! Please login.");
          setShowLogin(true);
        } else if (res.ok) {
          alert("Registered successfully! Please login.");
          setShowLogin(true);
        } else {
          alert((data as any).message || "Registration failed.");
        }
      } catch (err) {
        alert("Network error. Please try again.");
      }
    }
  };

  return (
    <div className="space-y-6">
      <DialogHeader>
        <DialogTitle className="text-center text-xl font-semibold text-foreground">
          Join VocaBee
        </DialogTitle>
      </DialogHeader>
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
      <Dialog open={showLogin} onOpenChange={setShowLogin}>
        <DialogContent className="sm:max-w-md">
          <LoginModal />
        </DialogContent>
      </Dialog>
    </div>
  );
};