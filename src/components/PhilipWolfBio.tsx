
import { User, Award, BookOpen, Star } from 'lucide-react';

const PhilipWolfBio = () => {
  const credentials = [
    "Cannabis and Psychedelics Member Leader - Rolling Stone Culture Council 2025",
    "Pioneer in Cannabis Hospitality Industry",
    "Expert in Cannabis Consumption Theory and Applications",
    "Professional Cannabis Service Training Developer",
    "Mindful Cannabis Experience Designer"
  ];

  const achievements = [
    "Founded the Cannabis Hospitality Stewardship Certification Program",
    "Developer of CashoM training methodology",
    "Leading advocate for professional cannabis service standards",
    "Expert in space holding and vibe setting for cannabis experiences"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <User className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Meet Philip Wolf
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry Pioneer & Cannabis Hospitality Expert
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/91f0e0bf-59ed-4093-8106-b51ec5e5ad1e.png"
                  alt="Philip Wolf - Cannabis Hospitality Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Rolling Stone Badge Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg border-4 border-white">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-xs font-bold text-primary">Rolling Stone</p>
                  <p className="text-xs text-gray-600">Culture Council</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                  Cannabis Industry Trailblazer
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Philip Wolf is a recognized pioneer in the Cannabis Hospitality Industry and a distinguished member leader of the Rolling Stone Culture Council for Cannabis and Psychedelics. With years of dedicated experience, Philip has revolutionized how we approach cannabis consumption through mindful hospitality and professional service standards.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  His innovative approach combines deep plant knowledge with practical hospitality skills, creating transformational experiences that honor both the cannabis plant and the people who consume it. Through his comprehensive training programs, Philip empowers professionals to elevate cannabis service to the highest standards of excellence.
                </p>
              </div>

              {/* Credentials */}
              <div>
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-primary mr-3" />
                  <h4 className="text-xl font-serif font-semibold text-primary">
                    Professional Credentials
                  </h4>
                </div>
                <div className="space-y-3">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 font-medium">{credential}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary mr-3" />
                  <h4 className="text-xl font-serif font-semibold text-primary">
                    Key Achievements
                  </h4>
                </div>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* LinkedIn CTA */}
              <div className="pt-6">
                <a 
                  href="https://www.linkedin.com/in/philipwolf1111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Connect on LinkedIn
                  <User className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilipWolfBio;
