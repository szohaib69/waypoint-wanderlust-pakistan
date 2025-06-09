
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Waypoint
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`hover:text-accent transition-colors ${
              isActive('/') ? 'text-accent font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/destinations" 
            className={`hover:text-accent transition-colors ${
              isActive('/destinations') ? 'text-accent font-semibold' : ''
            }`}
          >
            Destinations
          </Link>
          <Link 
            to="/about" 
            className={`hover:text-accent transition-colors ${
              isActive('/about') ? 'text-accent font-semibold' : ''
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`hover:text-accent transition-colors ${
              isActive('/contact') ? 'text-accent font-semibold' : ''
            }`}
          >
            Contact
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-primary-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
