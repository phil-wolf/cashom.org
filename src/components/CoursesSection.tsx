
import { Leaf, Users, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CoursesSection = () => {
  const courses = [
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Certified Steward of Cannabis",
      description: "Learn to guide others in conscious consumption practices, understanding the spiritual and therapeutic aspects of cannabis use.",
      features: ["Mindful consumption techniques", "Ceremonial practices", "Safety protocols", "Spiritual guidance"]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Certified Server of Cannabis",
      description: "Develop deep product knowledge and customer service skills for cannabis retail and hospitality professionals.",
      features: ["Product expertise", "Customer education", "Compliance training", "Professional service"]
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Cannabis Relationship Coaching",
      description: "One-on-one coaching sessions to develop a healthy, intentional relationship with cannabis for personal and professional growth.",
      features: ["Personal assessment", "Goal setting", "Ongoing support", "Customized plans"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Course Offerings
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Choose from our comprehensive certification programs designed for wellness professionals, 
            retailers, and individuals seeking deeper cannabis wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-accent/50 hover:border-primary/30 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  {course.icon}
                </div>
                <CardTitle className="text-xl font-serif text-primary mb-2">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground/80">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
