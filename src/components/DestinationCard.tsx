
import { Link } from 'react-router-dom';

interface DestinationCardProps {
  name: string;
  description: string;
  image: string;
  slug: string;
}

const DestinationCard = ({ name, description, image, slug }: DestinationCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-lg overflow-hidden hover-lift fade-in-up">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <Link 
          to={`/destination/${slug}`}
          className="inline-block interactive-bg px-6 py-2 rounded-lg transition-all duration-300 font-medium hover:shadow-lg"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
