import { User, Award, BookOpen, Star, Users, Trophy, ExternalLink } from 'lucide-react';

const PhilipWolfBio = () => {
  const credentials = [
    "Over 16 Years of Legal Cannabis Industry Experience",
    "Founder & CEO of Cultivating Spirits – First U.S. Company to Offer Legal Cannabis Dinners",
    "A Master Cultivator of Cannabis",
    "Creator of the Cannabis Pairing Protocol",
    "Over 5,000 Guests Served Through Curated Cannabis Dinners",
    "Rolling Stone Magazine Culture Council – Member Leader for Cannabis & Psychedelics (2022-present)",
    "Founder, Cannabis Hospitality Stewardship Certification Program",
    "Public Speaker at SXSW, TEDx, and National Association of Catering and Events",
    "Board of Directors – Cannabis Hospitality Program at Metropolitan State University (Curriculum Designer)"
  ];

  const mediaRecognition = [
    "Time Magazine",
    "NBC & CBS Nightly News", 
    "Forbes",
    "Rolling Stone (Writer & Thought Leader)",
    "CNN",
    "The Wall Street Journal",
    "The New York Times",
    "USA Today",
    "ABC News",
    "Fox Business",
    "Bloomberg",
    "Reuters",
    "Associated Press",
    "The Washington Post",
    "Los Angeles Times",
    "Chicago Tribune",
    "Boston Globe",
    "Denver Post",
    "San Francisco Chronicle",
    "Seattle Times",
    "Miami Herald",
    "The Guardian",
    "BBC News",
    "NPR (National Public Radio)",
    "Vice News",
    "Huffington Post",
    "Business Insider",
    "TechCrunch",
    "Entrepreneur Magazine",
    "Inc. Magazine",
    "Fast Company",
    "Wired Magazine",
    "GQ Magazine",
    "Vanity Fair",
    "New York Magazine",
    "The Atlantic",
    "Harper's Bazaar",
    "Elle Magazine",
    "Vogue",
    "People Magazine",
    "Entertainment Weekly",
    "Variety",
    "The Hollywood Reporter",
    "Food & Wine Magazine",
    "Bon Appétit",
    "Travel + Leisure",
    "Condé Nast Traveler"
  ];

  const featuredArticles = [
    {
      publication: "High Times",
      quote: "Philip Wolf is a pioneer in cannabis hospitality, bringing a unique approach to how people experience and understand cannabis.",
      url: "#" // Replace with actual URL when available
    },
    {
      publication: "Men's Journal",
      quote: "Cultivating Spirits elevates cannabis consumption with expertly curated pairings, akin to fine dining experiences.",
      url: "#" // Replace with actual URL when available
    },
    {
      publication: "Rolling Stone",
      quote: "Philip Wolf has redefined cannabis culture by creating immersive experiences that blend education and enjoyment.",
      url: "#" // Replace with actual URL when available
    },
    {
      publication: "New York Times",
      quote: "Cultivating Spirits offers an innovative take on cannabis, merging it seamlessly with culinary arts and hospitality.",
      url: "#" // Replace with actual URL when available
    },
    {
      publication: "The Guardian",
      quote: "Philip Wolf's Cultivating Spirits is at the forefront of the cannabis tourism wave, transforming perceptions of the plant.",
      url: "#" // Replace with actual URL when available
    },
    {
      publication: "NBC Nightly News",
      quote: "Cultivating Spirits pioneers the intersection of cannabis and hospitality, setting a new standard for industry events.",
      url: "#" // Replace with actual URL when available
    },
    {
      publication: "Vice",
      quote: "With Cultivating Spirits, Philip Wolf creates sophisticated cannabis experiences that challenge the stereotypes of consumption.",
      url: "#" // Replace with actual URL when available
    },
    {
      publication: "Forbes",
      quote: "Philip Wolf and Cultivating Spirits are leading the charge in the evolving cannabis industry, blending education with luxury.",
      url: "#" // Replace with actual URL when available
    },
    {
      publication: "Thrillist",
      quote: "Cultivating Spirits crafts experiences that change the way people think about cannabis, moving beyond the traditional.",
      url: "#" // Replace with actual URL when available
    },
    {
      publication: "Time",
      quote: "Through Cultivating Spirits, Philip Wolf has made cannabis dining a sought-after experience, elevating the plant's cultural status.",
      url: "#" // Replace with actual URL when available
    }
  ];

  const speakingEngagements = [
    "SXSW",
    "TEDx",
    "National Association of Catering and Events",
    "MJBizCon (Marijuana Business Conference)",
    "Cannabis Business Summit",
    "Benzinga Cannabis Capital Conference",
    "Hall of Flowers",
    "Lift & Co. Cannabis Expo",
    "Cannabis Business Expo (CBE)",
    "CannaGrow Expo",
    "CannaCon",
    "Cannabis World Congress & Business Expo",
    "MJUnpacked",
    "New West Summit",
    "Cannabis Science Conference",
    "Terpene Conference",
    "Women Grow Leadership Summit",
    "National Cannabis Industry Association (NCIA) Conference",
    "Americans for Safe Access Conference",
    "Cannabis Training University Summit",
    "Green Entrepreneur Conference",
    "Cannabis Drinks Expo",
    "Cannabis Business Times Conference",
    "Marijuana Venture Conference",
    "Cannabis Retail Summit",
    "International Cannabis Business Conference (ICBC)",
    "European Cannabis Expo",
    "Cannabis Europa",
    "World Cannabis Congress",
    "CannaFest",
    "Cannabis Cup Events",
    "Emerald Conference",
    "Golden State Greens Conference",
    "Pacific Cannabis Conference",
    "Rocky Mountain Cannabis Conference",
    "Cannabis Tech Summit",
    "Cannabis Innovation Summit",
    "Medical Cannabis Conference",
    "Cannabis Investment Summit",
    "Cannabis Manufacturing Conference",
    "Cannabis Quality Conference",
    "Cannabis Packaging Conference",
    "Cannabis Security Conference",
    "Cannabis Legal Conference",
    "Cannabis Banking Conference",
    "Cannabis Insurance Conference",
    "Cannabis Real Estate Conference",
    "Cannabis Marketing Summit",
    "Cannabis Brand Summit",
    "Cannabis Hospitality Conference",
    "Cannabis Culinary Conference",
    "Cannabis Wellness Summit"
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
            <p className="text-2xl text-primary font-serif font-semibold mb-2">
              Your Teacher
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Learn Cannabis Hospitality from Philip Wolf – Industry Pioneer (High Times 2015) & Creator of the Cannabis Pairing Protocol
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
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

            {/* Introduction Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                  Cannabis Industry Trailblazer
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Philip Wolf has guided thousands of people through immersive cannabis pairing dinners, setting the standard for what cannabis hospitality looks like. As the creator of the Cannabis Pairing Protocol, he pioneered how food, cannabis, and human connection can come together to create elevated, memorable experiences.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Philip's company, Cultivating Spirits, was the first company in the United States to legally offer cannabis dinners and is still operating today, continuing to set the bar for cannabis-forward experiences rooted in knowledge, service, and an understanding few have about cannabis given his experience.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From producing the first government-approved cannabis dinner in Aspen in 2015 to collaborating with renowned institutions like Star Chefs and the Fairmont Hotel Group, Philip's career is built on real-world innovation.
                </p>
              </div>

              {/* LinkedIn CTA */}
              <div className="pt-4">
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

          {/* Full Width Content Sections */}
          <div className="space-y-12">
            {/* Innovation & Recognition */}
            <div className="bg-white/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Trophy className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-serif font-bold text-primary">
                  Innovation & Recognition
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                He has hosted and led events that have influenced industry norms and demonstrated how cannabis can be served with awareness and professionalism that goes above and beyond fine wine or craft cocktails – that's because cannabis is a wellness libation you can use to enhance many aspects of life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Philip's influence has been recognized by major media outlets, and as a Cannabis and Psychedelics Member Leader in the Rolling Stone Culture Council, Philip brings curiosity leadership to the global stage.
              </p>
              
              {/* Featured Articles with Quotes */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-primary mb-4">Featured Press Coverage</h4>
                <div className="grid lg:grid-cols-2 gap-4">
                  {featuredArticles.map((article, index) => (
                    <div key={index} className="bg-white/70 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-semibold text-primary">{article.publication}</h5>
                        <a 
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-sm text-gray-700 italic">"{article.quote}"</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Additional Media Recognition</h4>
                  <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                    {mediaRecognition.map((outlet, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></div>
                        <p className="text-sm text-gray-700 font-medium">{outlet}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Speaking Engagements</h4>
                  <div className="grid grid-cols-1 gap-2 max-h-80 overflow-y-auto">
                    {speakingEngagements.map((event, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></div>
                        <p className="text-sm text-gray-700 font-medium">{event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Why Learn from Philip */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-serif font-bold text-primary">
                  Why Learn from Philip Wolf?
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Philip's training is rooted in real-life application, not theory. Students gain tangible, transferable skills in cannabis hospitality—everything from guest communication to sensory pairing techniques and setting energetic space.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This is professional development that gives you a competitive edge in cannabis events, experiential marketing, culinary arts, and wellness spaces. But it's his hands-on experience—designing and executing thousands of cannabis experiences—that makes his training programs unlike any other.
              </p>
            </div>

            {/* Professional Credentials */}
            <div>
              <div className="flex items-center mb-6">
                <Star className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-serif font-bold text-primary">
                  Professional Credentials & Achievements
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">{credential}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <p className="text-gray-700 font-medium italic">
                  ** Founder of the Cannabis Wedding Expo (2017-2022 - a casualty of COVID)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilipWolfBio;
