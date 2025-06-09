
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-8">About Waypoint</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Your trusted companion for exploring the breathtaking beauty of Pakistan
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Waypoint, we believe Pakistan is home to some of the world's most spectacular landscapes and warmest hospitality. Our mission is to make these hidden gems accessible to travelers from around the globe, while supporting local communities and promoting sustainable tourism.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">What We Offer</h2>
                <ul className="text-muted-foreground space-y-3">
                  <li>• Carefully curated accommodations</li>
                  <li>• Local expert recommendations</li>
                  <li>• Sustainable tourism practices</li>
                  <li>• 24/7 customer support</li>
                  <li>• Authentic cultural experiences</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-primary/5 rounded-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Pakistan?</h2>
              <p className="text-muted-foreground leading-relaxed">
                From the mighty peaks of the Karakoram range to the serene valleys of the north, Pakistan offers unparalleled natural beauty. Experience the warmth of Pakistani hospitality, explore ancient cultures, and create memories that will last a lifetime. Whether you're seeking adventure in the mountains or tranquility in the hills, Pakistan has something extraordinary to offer every traveler.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
