import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, Shield } from "lucide-react";

const features = [
	{
		icon: <Zap className="w-8 h-8 text-white" />,
		title: "AI-Powered Learning",
		description:
			"Advanced AI provides personalized feedback and adaptive learning paths",
		color: "bg-gradient-primary",
	},
	{
		icon: <Clock className="w-8 h-8 text-white" />,
		title: "Flexible Schedule",
		description: "Learn at your own pace with 24/7 access to all materials",
		color: "bg-gradient-accent",
	},
	{
		icon: <Shield className="w-8 h-8 text-white" />,
		title: "Industry Focused",
		description:
			"Content specifically designed for english learners and job seekers",
		color: "bg-gradient-secondary",
	},
];

const WhyChooseUs = () => {
	return (
		<section className="py-20 bg-muted/30">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-foreground mb-4">
						Why Choose VocabBee?
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Discover what makes our platform the perfect choice for your English
						learning journey
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<Card
							key={index}
							className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border bg-card">
							<CardContent className="p-8 text-center">
								<div
									className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
									{feature.icon}
								</div>
								<h3 className="text-xl font-semibold text-card-foreground mb-4">
									{feature.title}
								</h3>
								<p className="text-muted-foreground">
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;