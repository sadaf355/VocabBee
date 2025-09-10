import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { VocaBeeSidebar } from "@/components/VocaBeeSidebar";
import { ArrowLeft, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const levels = [
	{
		id: "basic",
		title: "Basic",
		description: "Start with simple conversations and everyday scenarios",
		difficulty: "Beginner",
		route: "/lsrw/listening/basic",
	},
	{
		id: "intermediate-l1",
		title: "Intermediate L1",
		description: "Progress to workplace discussions and news reports",
		difficulty: "Intermediate",
		route: "/lsrw/listening/intermediate-l1",
	},
	{
		id: "intermediate-l2",
		title: "Intermediate L2",
		description: "Handle complex topics and technical presentations",
		difficulty: "Intermediate+",
		route: "/lsrw/listening/intermediate-l2",
	},
	{
		id: "expert-l1",
		title: "Expert L1",
		description: "Master advanced academic and professional content",
		difficulty: "Advanced",
		route: "/lsrw/listening/expert-l1",
	},
	{
		id: "expert-l2",
		title: "Expert L2",
		description: "Understand nuanced speech and cultural contexts",
		difficulty: "Advanced+",
		route: "/lsrw/listening/expert-l2",
	},
	{
		id: "proficient",
		title: "Proficient",
		description: "Achieve native-level comprehension across all domains",
		difficulty: "Expert",
		route: "/lsrw/listening/proficient",
	},
];

const ListeningLevels = () => {
	return (
		<SidebarProvider>
			<div className="min-h-screen flex w-full bg-background">
				<VocaBeeSidebar />
				<main className="flex-1">
					{/* Header */}
					<header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
						<div className="container mx-auto px-4 h-full flex items-center gap-4">
							<SidebarTrigger />
							<Link to="/dashboard">
								<Button variant="ghost" size="sm" className="gap-2">
									<ArrowLeft className="w-4 h-4" />
									Back to Dashboard
								</Button>
							</Link>
							<div className="flex items-center gap-2">
								<Headphones className="w-6 h-6 text-primary" />
								<h1 className="text-2xl font-bold text-foreground">
									Listening Skills Levels
								</h1>
							</div>
						</div>
					</header>

					<div className="container mx-auto px-6 py-8">
						{/* Overview Section */}
						<div className="mb-8">
							<h2 className="text-3xl font-bold text-foreground mb-4">
								Choose Your Listening Level
							</h2>
							<p className="text-lg text-muted-foreground max-w-3xl">
								Progress through our carefully structured listening comprehension
								levels. Each level builds upon the previous one, helping you
								develop stronger listening skills step by step.
							</p>
						</div>

						{/* Levels Grid */}
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{levels.map((level) => (
								<Card
									key={level.id}
									className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-card cursor-pointer"
								>
									<CardHeader>
										<div className="flex items-start justify-between">
											<div>
												<CardTitle className="text-lg">{level.title}</CardTitle>
												<Badge
													variant="secondary"
													className="text-xs mt-1"
												>
													{level.difficulty}
												</Badge>
											</div>
										</div>
									</CardHeader>
									<CardContent className="space-y-4">
										<CardDescription className="text-sm">
											{level.description}
										</CardDescription>
										<Link to={level.route}>
											<Button
												variant="outline"
												size="sm"
												className="w-full bg-primary/5 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground"
											>
												Start Exercise
											</Button>
										</Link>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</main>
			</div>
		</SidebarProvider>
	);
};

export default ListeningLevels;