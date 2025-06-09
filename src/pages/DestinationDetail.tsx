
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HotelCard from '../components/HotelCard';

const DestinationDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const destinationData: Record<string, any> = {
    hunza: {
      name: "Hunza Valley",
      description: "Hunza Valley is a mountainous valley in the Gilgit-Baltistan region of Pakistan. Known for its spectacular scenery, rich culture, and hospitality of the local people.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      hotels: [
        {
          name: "Serena Inn Hunza",
          image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$120-180/night",
          description: "Luxury accommodation with panoramic mountain views and traditional architecture."
        },
        {
          name: "Eagle's Nest Hotel",
          image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$80-120/night",
          description: "Perched on a cliff offering breathtaking views of the valley and Rakaposhi peak."
        },
        {
          name: "Hunza Embassy Hotel",
          image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$60-90/night",
          description: "Comfortable mid-range hotel with excellent local cuisine and friendly service."
        },
        {
          name: "Rakaposhi View Hotel",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$70-100/night",
          description: "Beautiful hotel with stunning views of Rakaposhi peak and valley gardens."
        },
        {
          name: "Hunza Baltit Inn",
          image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$50-80/night",
          description: "Traditional guesthouse near historic Baltit Fort with authentic local experience."
        },
        {
          name: "Mountain Heritage Hotel",
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$90-130/night",
          description: "Modern amenities combined with traditional Hunza architecture and hospitality."
        },
        {
          name: "Altit Palace Hotel",
          image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$100-150/night",
          description: "Historic palace converted to luxury hotel with royal treatment and valley views."
        },
        {
          name: "Cherry Blossom Lodge",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$40-70/night",
          description: "Cozy family-run lodge surrounded by apricot orchards and cherry trees."
        }
      ]
    },
    skardu: {
      name: "Skardu",
      description: "Skardu is the main town of the region and the gateway for expeditions to K2, the world's second highest mountain. It's surrounded by stunning lakes and dramatic landscapes.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      hotels: [
        {
          name: "Concordia K2 Hotel",
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$100-150/night",
          description: "Premier hotel for mountaineers and trekkers with expedition planning services."
        },
        {
          name: "Skardu Inn",
          image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$70-100/night",
          description: "Central location with comfortable rooms and local dining options."
        },
        {
          name: "Shangrila Resort",
          image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$90-130/night",
          description: "Famous resort by the Lower Kachura Lake with unique boat-shaped restaurant."
        },
        {
          name: "K2 Base Camp Lodge",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$80-120/night",
          description: "Adventure lodge specializing in K2 base camp expeditions and gear rental."
        },
        {
          name: "Deosai National Park Hotel",
          image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$60-90/night",
          description: "Gateway to Deosai Plains with wildlife viewing and plateau access."
        },
        {
          name: "Satpara Lake Resort",
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$75-110/night",
          description: "Lakeside resort with water sports, fishing, and scenic boat rides."
        },
        {
          name: "Skardu Serena Hotel",
          image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$120-180/night",
          description: "Luxury accommodation with modern amenities and traditional Balti culture."
        },
        {
          name: "Cold Desert Camp",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$50-80/night",
          description: "Unique desert camping experience with sand dunes and camel rides."
        }
      ]
    },
    "nathia-gali": {
      name: "Nathia Gali",
      description: "Nathia Gali is a charming hill station in the Abbottabad District, known for its cool climate, pine forests, and colonial-era architecture.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      hotels: [
        {
          name: "Pearl Continental Bhurban",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$150-200/night",
          description: "Luxury resort with world-class amenities and stunning valley views."
        },
        {
          name: "Green Hotel Nathia Gali",
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$50-80/night",
          description: "Cozy family-run hotel in the heart of the hill station."
        },
        {
          name: "Pine View Hotel",
          image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$60-90/night",
          description: "Beautiful location surrounded by pine forests with peaceful atmosphere."
        },
        {
          name: "Himalayan Heights Resort",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$80-120/night",
          description: "Mountain resort with hiking trails, spa services, and panoramic views."
        },
        {
          name: "Colonial Heritage Hotel",
          image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$70-100/night",
          description: "Historic colonial building restored as boutique hotel with period charm."
        },
        {
          name: "Forest Glen Lodge",
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$55-85/night",
          description: "Rustic lodge deep in pine forests with nature walks and bird watching."
        },
        {
          name: "Murree Hills Hotel",
          image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$65-95/night",
          description: "Traditional hill station hotel with modern comforts and local cuisine."
        },
        {
          name: "Alpine Meadows Resort",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$45-75/night",
          description: "Budget-friendly resort with meadow views and outdoor activities."
        }
      ]
    },
    naran: {
      name: "Naran Valley",
      description: "Naran is a town and popular tourist destination in the Kaghan Valley. It serves as a base for trips to Saif-ul-Malook Lake and other scenic spots.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      hotels: [
        {
          name: "Lake View Hotel Naran",
          image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$80-120/night",
          description: "Situated near the lake with spectacular mountain and water views."
        },
        {
          name: "Mountain Lodge Naran",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$60-90/night",
          description: "Traditional lodge offering authentic local experience and hospitality."
        },
        {
          name: "Naran Continental",
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$70-100/night",
          description: "Modern amenities with easy access to major attractions and trekking routes."
        },
        {
          name: "Saif-ul-Malook Resort",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$90-130/night",
          description: "Premium resort with lake access, boat tours, and luxury accommodations."
        },
        {
          name: "Valley Paradise Hotel",
          image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$55-85/night",
          description: "Family-friendly hotel with garden views and local dining specialties."
        },
        {
          name: "Ansoo Lake Lodge",
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$65-95/night",
          description: "Adventure lodge for trekkers heading to Ansoo Lake with gear rental."
        },
        {
          name: "Glacial Waters Inn",
          image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$50-80/night",
          description: "Riverside inn with fresh mountain water and peaceful river sounds."
        },
        {
          name: "Naran Heights Hotel",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$75-110/night",
          description: "Elevated hotel with panoramic valley views and modern facilities."
        }
      ]
    },
    kaghan: {
      name: "Kaghan Valley",
      description: "Kaghan Valley is an alpine valley located in the Kaghan Valley in the Khyber Pakhtunkhwa province of Pakistan. The valley is known for its lakes, waterfalls and glaciers.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      hotels: [
        {
          name: "Kaghan Valley Resort",
          image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$90-130/night",
          description: "Premium resort with full-service amenities and adventure activity planning."
        },
        {
          name: "Valley View Inn",
          image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$50-75/night",
          description: "Budget-friendly accommodation with stunning valley views and local cuisine."
        },
        {
          name: "Alpine Guest House",
          image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$40-65/night",
          description: "Family-run guest house offering warm hospitality and home-cooked meals."
        },
        {
          name: "Shogran Heights Hotel",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$70-100/night",
          description: "Mountain hotel in Shogran with meadow access and hiking opportunities."
        },
        {
          name: "Lulusar Lake Resort",
          image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$85-125/night",
          description: "Lakeside resort with fishing, boating, and pristine mountain lake views."
        },
        {
          name: "Kaghan Continental",
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$60-90/night",
          description: "Modern hotel with conference facilities and business traveler amenities."
        },
        {
          name: "Waterfall Lodge",
          image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$55-85/night",
          description: "Scenic lodge near cascading waterfalls with nature sounds and fresh air."
        },
        {
          name: "Glacier Point Hotel",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          priceRange: "$45-75/night",
          description: "Adventure base camp for glacier viewing and high-altitude trekking."
        }
      ]
    }
  };

  const destination = destinationData[slug || ''];

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Destination Not Found</h1>
          <p className="text-muted-foreground">Sorry, we couldn't find the destination you're looking for.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${destination.image}")` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 fade-in-up">
            {destination.name}
          </h1>
          <p className="text-xl max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.3s' }}>
            {destination.description}
          </p>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Places to Stay
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully selected accommodations that offer comfort, authentic experiences, and breathtaking views.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {destination.hotels.map((hotel: any, index: number) => (
              <HotelCard 
                key={index}
                {...hotel}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationDetail;
