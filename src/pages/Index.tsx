
import Header from '../components/Header';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';

const Index = () => {
  const destinations = [
    {
      name: "Hunza",
      description: "Experience the breathtaking beauty of Hunza Valley, home to ancient forts, crystal-clear lakes, and stunning mountain vistas. Perfect for adventure seekers and culture enthusiasts.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      slug: "hunza"
    },
    {
      name: "Skardu",
      description: "Discover the gateway to K2 and home to spectacular lakes, desert landscapes, and towering peaks. Skardu offers unparalleled trekking and mountaineering opportunities.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      slug: "skardu"
    },
    {
      name: "Nathia Gali",
      description: "Escape to the cool, pine-scented hills of Nathia Gali. This charming hill station offers peaceful walks, colonial architecture, and stunning views of the surrounding valleys.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      slug: "nathia-gali"
    },
    {
      name: "Naran",
      description: "Journey through the mesmerizing Naran Valley, where emerald lakes, cascading waterfalls, and snow-capped peaks create a paradise for nature lovers and photographers.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      slug: "naran"
    },
    {
      name: "Kaghan",
      description: "Explore the pristine beauty of Kaghan Valley, where lush green meadows, alpine lakes, and majestic mountains offer the perfect backdrop for adventure and relaxation.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      slug: "kaghan"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
            Explore Pakistan with Waypoint
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.3s' }}>
            Discover the hidden gems of Pakistan. Find the perfect place to stay, explore local experiences, and plan your dream trip.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors fade-in-up" style={{ animationDelay: '0.6s' }}>
            Start Exploring
          </button>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From the mighty peaks of the north to the serene valleys and hill stations, Pakistan offers diverse landscapes waiting to be explored.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard 
                key={destination.slug}
                {...destination}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
