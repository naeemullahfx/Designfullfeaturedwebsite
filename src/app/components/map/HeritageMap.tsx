import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Helper to get SVG string for specific icons
const getIconSvg = (type: string, color: string = 'white') => {
  const commonProps = `width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
  
  switch (type) {
    case 'Shrine':
    case 'Religious':
    case 'Landmark':
      // Landmark Icon
      return `<svg ${commonProps}><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>`;
    
    case 'Walk':
    case 'Route':
      // Navigation Icon
      return `<svg ${commonProps}><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>`;
    
    case 'Event':
    case 'Cultural':
      // Calendar Icon
      return `<svg ${commonProps}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
    
    case 'Desert':
    case 'Adventure':
      // Mountain Icon
      return `<svg ${commonProps}><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>`;
    
    case 'Booking':
    default:
      // MapPin Icon
      return `<svg ${commonProps}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
  }
};

// Custom Icon Generator
const createCustomIcon = (type: string) => {
  let color = '#d97706'; // amber-600 default
  let iconType = 'Default';

  switch (type) {
    case 'Shrine':
    case 'Religious':
      color = '#059669'; // emerald-600
      iconType = 'Shrine';
      break;
    case 'Walk':
    case 'Route':
      color = '#d97706'; // amber-600
      iconType = 'Walk';
      break;
    case 'Event':
    case 'Cultural':
      color = '#2563eb'; // blue-600
      iconType = 'Event';
      break;
    case 'Desert':
    case 'Adventure':
      color = '#eab308'; // yellow-500
      iconType = 'Desert';
      break;
    case 'Booking':
      color = '#dc2626'; // red-600
      iconType = 'Booking';
      break;
  }

  const svgContent = getIconSvg(iconType, 'white');

  const iconMarkup = `
    <div style="
      background-color: ${color};
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    ">
      ${svgContent}
    </div>
  `;

  return new L.DivIcon({
    html: iconMarkup,
    className: 'custom-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
};

interface Location {
  id: string;
  name?: string;
  title?: string;
  coordinates: { lat: number; lng: number };
  type: string;
  image?: string;
  description?: string;
  onClick?: () => void;
}

interface Route {
  id: string;
  path: { lat: number; lng: number }[];
  color?: string;
}

interface HeritageMapProps {
  locations?: Location[];
  routes?: Route[];
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
  interactive?: boolean;
}

const MapUpdater: React.FC<{ center: { lat: number; lng: number }; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

export const HeritageMap: React.FC<HeritageMapProps> = ({ 
  locations = [], 
  routes = [], 
  center = { lat: 30.9693, lng: 70.9428 }, 
  zoom = 13,
  className = "h-full w-full",
  interactive = true
}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-sm border border-stone-200 ${className}`}>
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        dragging={interactive}
        zoomControl={interactive}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapUpdater center={center} zoom={zoom} />

        {/* Render Routes */}
        {routes.map(route => (
          <Polyline 
            key={route.id}
            positions={route.path}
            pathOptions={{ color: route.color || '#d97706', weight: 4, opacity: 0.8, dashArray: '10, 10' }}
          />
        ))}

        {/* Render Markers */}
        {locations.map(loc => (
          loc.coordinates && (
            <Marker 
              key={loc.id} 
              position={loc.coordinates}
              icon={createCustomIcon(loc.type)}
              eventHandlers={{
                click: () => {
                  if (loc.onClick) loc.onClick();
                }
              }}
            >
              <Popup className="custom-popup">
                <div className="w-48">
                  {loc.image && (
                    <img src={loc.image} alt={loc.name || loc.title} className="w-full h-24 object-cover rounded-t-lg mb-2" />
                  )}
                  <h3 className="font-bold text-stone-900 text-sm">{loc.name || loc.title}</h3>
                  <p className="text-xs text-stone-500 line-clamp-2 mt-1">{loc.description}</p>
                  {interactive && loc.onClick && (
                    <button 
                      className="mt-2 text-xs font-bold text-amber-600 hover:text-amber-700 w-full text-left"
                      onClick={loc.onClick}
                    >
                      View Details →
                    </button>
                  )}
                </div>
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
};
