import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { User, Camera, Shield, LogOut, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { user, updateUser, logout, deleteUser } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [profile, setProfile] = useState({
    id: user?.id || 0,
    name: user?.username || "",
    email: user?.email || "",
    bio: user?.bio || "",
    photoUrl: user?.photo_url || null,
  });

  useEffect(() => {
    setProfile({
      id: user?.id || 0,
      name: user?.username || "",
      email: user?.email || "",
      bio: user?.bio || "",
      photoUrl: user?.photo_url || null,
    });
  }, [user]);

  const handlePhotoChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // For demo: generate object URL
    const url = URL.createObjectURL(file);

    // TODO: Upload real file and update DB

    setProfile((prev) => ({ ...prev, photoUrl: url }));
    updateUser({ photo_url: url });
    toast({ title: "Photo updated successfully" });
  };

  const handleSave = async () => {
    // TODO: Save updated profile data to backend

    updateUser({ username: profile.name, email: profile.email, bio: profile.bio });
    toast({ title: "Profile Updated", description: "Your changes have been saved." });
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      deleteUser();
      navigate("/login");
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <VocaBeeSidebar />
        <main className="flex-1">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between px-4">
            <SidebarTrigger className="p-2" />
            <div className="flex items-center gap-4 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-medium">{profile.name}</span>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold mb-2">Settings & Profile</h1>
            <p className="text-muted-foreground mb-8">Manage your account settings and preferences</p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Profile Overview */}
                <Card className="flex flex-col items-center justify-center text-center p-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-primary flex items-center justify-center mb-4">
                    {profile.photoUrl ? (
                      <img src={profile.photoUrl} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-28 h-28 text-white" />
                    )}
                  </div>
                  <h2 className="text-2xl font-semibold mb-1">{profile.name}</h2>
                  <p className="text-muted-foreground mb-6">{profile.email}</p>
                  <Button
                    onClick={() => document.getElementById("photoUpload")?.click()}
                    className="bg-[#a06a32] text-white w-full hover:bg-[#dab78a] mt-2"
                  >
                    Change Photo
                  </Button>
                  <input
                    type="file"
                    id="photoUpload"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                </Card>


              {/* Profile Info Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <p className="text-muted-foreground mt-1">Update your personal info and bio</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile((prev) => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      onChange={(e) => setProfile((prev) => ({ ...prev, bio: e.target.value }))}
                      placeholder="Tell us about your learning goals..."
                      className="min-h-[80px]"
                    />
                  </div>
                  <Button onClick={handleSave} className="bg-brown-700 text-white w-full hover:bg-brown-600">
                    Save
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Security Card */}
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield />
                    Security & Privacy
                  </CardTitle>
                  <p className="text-muted-foreground mt-1">Manage your account security settings</p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full mb-4">
                    Change Password
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full mb-4 flex items-center"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2" />
                    Logout
                  </Button>
                  <Button variant="destructive" className="w-full flex items-center" onClick={handleDelete}>
                    <Trash2 className="mr-2" />
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;
