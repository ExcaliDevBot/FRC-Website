import React, { useState } from 'react';
import { Camera, Calendar, MapPin, Users, X, Filter, ChevronRight } from 'lucide-react';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleries = {
    competitions: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        title: "District Championship 2024",
        date: "March 2024",
        location: "Tel Aviv",
        category: "Competition",
        description: "Our team competing at the district championships, showcasing our latest robot design."
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        title: "Robot Testing Day",
        date: "February 2024",
        location: "Workshop",
        category: "Build Season",
        description: "Final testing phase of our competition robot, ensuring all systems are functioning perfectly."
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1581092787765-e31949c96fdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        title: "Regional Competition",
        date: "March 2024",
        location: "Jerusalem",
        category: "Competition",
        description: "Competing against the best teams in our region."
      }
    ],
    buildSeason: [
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        title: "CAD Design Session",
        date: "January 2024",
        location: "Lab",
        category: "Design",
        description: "Our design team working on the robot's CAD models and prototypes."
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        title: "Prototyping Phase",
        date: "January 2024",
        location: "Workshop",
        category: "Build Season",
        description: "Testing different mechanical solutions for this year's game challenge."
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1581092160582-2119646b4d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        title: "Electronics Assembly",
        date: "January 2024",
        location: "Lab",
        category: "Build Season",
        description: "Wiring and testing the robot's electrical systems."
      }
    ],
    community: [
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        title: "STEM Outreach Day",
        date: "December 2023",
        location: "Local School",
        category: "Community",
        description: "Inspiring the next generation of engineers through hands-on robotics demonstrations."
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1581092160582-2119646b4d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        title: "Robotics Workshop",
        date: "November 2023",
        location: "Community Center",
        category: "Education",
        description: "Teaching basic robotics concepts to middle school students."
      },
      {
        id: 9,
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        title: "Science Fair",
        date: "October 2023",
        location: "City Hall",
        category: "Community",
        description: "Showcasing our robots and inspiring young minds at the annual science fair."
      }
    ],
    behindTheScenes: [
      {
        id: 10,
        image: "https://images.unsplash.com/photo-1581092787765-e31949c96fdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        title: "Team Meeting",
        date: "February 2024",
        location: "Team Room",
        category: "Team",
        description: "Strategic planning session for the upcoming competition."
      },
      {
        id: 11,
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        title: "Late Night Build",
        date: "January 2024",
        location: "Workshop",
        category: "Build Season",
        description: "The team working late to meet competition deadlines."
      },
      {
        id: 12,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        title: "Mentor Session",
        date: "December 2023",
        location: "Lab",
        category: "Team",
        description: "Learning from our experienced mentors during a technical session."
      }
    ]
  };

  const allImages = [
    ...galleries.competitions,
    ...galleries.buildSeason,
    ...galleries.community,
    ...galleries.behindTheScenes
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'competitions', name: 'Competitions' },
    { id: 'buildSeason', name: 'Build Season' },
    { id: 'community', name: 'Community' },
    { id: 'behindTheScenes', name: 'Behind the Scenes' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? allImages 
    : allImages.filter(img => img.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-team-blue overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-team-blue to-blue-900 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold text-white mb-6">
                Photo Gallery
                <span className="text-team-gold block mt-4">Follow along our Journey </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-0 z-30 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <Filter className="h-5 w-5 text-team-gold" />
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === category.id
                    ? 'bg-team-blue text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((item) => (
            <div 
              key={item.id}
              className="group relative cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-team-blue group-hover:text-team-gold transition-colors">
                    {item.title}
                  </h3>
                  <ChevronRight className="h-5 w-5 text-team-gold transform group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="flex items-center text-gray-600 text-sm space-x-4 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-team-gold transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full max-w-7xl">
            {allImages.map((image) => (
              image.id === selectedImage && (
                <div key={image.id} className="relative">
                  <img 
                    src={image.image}
                    alt={image.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-3xl font-bold text-white mb-3">{image.title}</h3>
                    <p className="text-gray-200 mb-4">{image.description}</p>
                    <div className="flex items-center text-gray-300 space-x-6">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>{image.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{image.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Camera className="h-5 w-5 mr-2" />
                        <span>{image.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;