import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Mic, Eye, Edit3 } from "lucide-react";
import vocabeeLogo from "@/assets/vocabee-logo-new.png";
import writingSkillsIcon from "@/assets/writing-skills-icon.png";

const skills = [
	{
		icon: Headphones,
		title: "Listening Skills",
		description:
			"Improve comprehension with audio exercises and real-world scenarios",
		color: "bg-gradient-primary",
	},
	{
		icon: Mic,
		title: "Speaking Skills",
		description:
			"Practice speaking with AI feedback on pronunciation and fluency",
		color: "bg-gradient-secondary",
	},
	{
		icon: Eye,
		title: "Reading Skills",
		description:
			"Enhance reading comprehension and technical document analysis",
		color: "bg-gradient-success",
	},
	{
		icon: Edit3,
		title: "Writing Skills",
		description:
			"Master professional writing, emails, and technical documentation",
		color: "bg-gradient-accent",
	},
];

const LSRWSkills = () => {
	return (
		<section className="py-20 bg-muted/30">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-foreground mb-4">
						LSRW Skills Training
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Comprehensive training for all four language skills
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{skills.map((skill, index) => (
						<Card
							key={index}
							className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border bg-card"
						>
							<CardContent className="p-8">
								<div
									className={`w-16 h-16 rounded-2xl ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
								>
									{(skill as any).customLogo ? (
										<img
											src={(skill as any).customLogo}
											alt={skill.title}
											className="w-10 h-10"
										/>
									) : (
										<skill.icon className="w-8 h-8 text-white" />
									)}
								</div>

								<h3 className="text-xl font-semibold text-card-foreground mb-3">
									{skill.title}
								</h3>

								<p className="text-muted-foreground break-words whitespace-normal">
									{skill.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default LSRWSkills;