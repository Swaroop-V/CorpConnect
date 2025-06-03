import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaMoneyBillWave, FaArrowLeft, FaInfoCircle } from 'react-icons/fa';
import styles from './ServiceDetail.module.css';

import cookingImage from '../../ServicesPhotos/cooking.jpg';
import baliImage from '../../ServicesPhotos/baliImage.jpg';
import goaImage from '../../ServicesPhotos/goa.jpg';
import mumbaiImage from '../../ServicesPhotos/mumbai.jpg';
import bangaloreImage from '../../ServicesPhotos/bangalore.jpg';
import keralaImage from '../../ServicesPhotos/kerala.jpg';
import rajasthanImage from '../../ServicesPhotos/rajasthan.jpg';
import natureHikingImage from '../../ServicesPhotos/naturehiking.jpg';
import beachRetreatImage from '../../ServicesPhotos/beachRetreat.jpg';
import adventureParkImage from '../../ServicesPhotos/adventurePark.png';
import gameTournamentImage from '../../ServicesPhotos/gameTournament.jpg';
import movieNightImage from '../../ServicesPhotos/movieNight.jpg';

// Service trip data
const tripData = {
  "corporate-trips": [
    {
      id: "bali",
      destination: "Bali",
      image: baliImage,
      duration: "5 Days, 4 Nights",
      price: "₹23,000",
      capacity: "2 Adults",
      description: "Experience the beauty of Bali with your team. Perfect for corporate retreats and team bonding."
    },
    {
      id: "goa",
      destination: "Goa",
      image: goaImage,
      duration: "4 Days, 3 Nights",
      price: "₹15,000",
      capacity: "2 Adults",
      description: "Enjoy the beaches and vibrant culture of Goa. Great for team relaxation and strategic planning."
    },
    {
      id: "mumbai",
      destination: "Mumbai",
      image: mumbaiImage,
      duration: "3 Days, 2 Nights",
      price: "₹12,000",
      capacity: "2 Adults",
      description: "Explore the business capital of India. Perfect for corporate meetings and networking."
    },
    {
      id: "bangalore",
      destination: "Bangalore",
      image: bangaloreImage,
      duration: "3 Days, 2 Nights",
      price: "₹13,500",
      capacity: "2 Adults",
      description: "Visit India's tech hub. Ideal for tech companies and innovation workshops."
    },
    {
      id: "kerala",
      destination: "Kerala",
      image: keralaImage,
      duration: "4 Days, 3 Nights",
      price: "₹16,500",
      capacity: "2 Adults",
      description:
        "Explore God's Own Country with backwaters, hill stations, and spice plantations. Perfect for team retreats in nature.",
    },
    {
      id: "rajasthan",
      destination: "Rajasthan",
      image: rajasthanImage,
      duration: "5 Days, 4 Nights",
      price: "₹18,000",
      capacity: "2 Adults",
      description:
        "Experience royal heritage and desert landscapes. Ideal for cultural immersion and leadership workshops.",
    }
  ],
  "fun-fridays": [
    {
      id: "cooking-challenge",
      destination: "Cooking Challenge",
      image: cookingImage,
      duration: "Half Day",
      price: "₹2,500",
      capacity: "Up to 20 people",
      description: "Team cooking challenges to boost creativity and collaboration."
    },
    {
      id: "game-tournament",
      destination: "Game Tournament",
      image: gameTournamentImage,
      duration: "Half Day",
      price: "₹1,800",
      capacity: "Up to 30 people",
      description: "Competitive gaming tournaments to foster team spirit and friendly competition."
    },
    {
      id: "movie-night",
      destination: "Movie Night",
      image: movieNightImage,
      duration: "Evening",
      price: "₹1,200",
      capacity: "Up to 50 people",
      description: "Relaxing movie nights with discussions to unwind and bond after a busy week."
    }
  ],
  "team-building": [
    {
      id: "adventure-camp",
      destination: "Adventure Camp",
      image: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e",
      duration: "2 Days",
      price: "₹8,000",
      capacity: "Up to 30 people",
      description: "Outdoor adventure activities designed to build trust and teamwork."
    },
    // Add more team building activities
  ],
  "conferences": [
    {
      id: "tech-summit",
      destination: "Tech Summit",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      duration: "3 Days",
      price: "₹20,000",
      capacity: "Up to 100 people",
      description: "Professional tech conference with industry speakers and networking opportunities."
    },
    // Add more conference options
  ],
   "weekend-outings": [
    {
      id: "nature-hiking",
      destination: "Nature Hiking",
      image: natureHikingImage,
      duration: "Full Day",
      price: "₹3,500",
      capacity: "Up to 25 people",
      description: "Refreshing hiking trips in scenic locations to rejuvenate and build team connections in nature."
    },
    {
      id: "beach-retreat",
      destination: "Beach Retreat",
      image: beachRetreatImage,
      duration: "Weekend",
      price: "₹8,000",
      capacity: "Up to 40 people",
      description: "Relaxing beach getaways with team activities, water sports, and bonfire sessions."
    },
    {
      id: "adventure-park",
      destination: "Adventure Park",
      image: adventureParkImage,
      duration: "Full Day",
      price: "₹4,200",
      capacity: "Up to 35 people",
      description: "Thrilling adventure park experiences with zip-lining, rock climbing, and team challenges."
    }
  ]
};

// Service titles mapping
const serviceTitles = {
  "corporate-trips": "Corporate Trips",
  "fun-fridays": "Fun Fridays",
  "team-building": "Team Building",
  "conferences": "Conferences",
  "weekend-outings": "Weekend Outings" // Added this line

};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  // Get trips for the selected service
  const trips = tripData[serviceId] || [];
  const serviceTitle = serviceTitles[serviceId] || "Service Details";

  return (
    <div className={styles.serviceDetailPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
      <button 
            className={styles.backButton} 
            onClick={() => navigate('/services')}
          >
            <FaArrowLeft /> Back to Services
          </button>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>{serviceTitle}</h1>
          <p className={styles.heroSubtitle}>
            Explore our {serviceTitle.toLowerCase()} options tailored for corporate teams
          </p>
        </div>
      </section>

      {/* Trips/Options List */}
      <section className={styles.tripsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Available Options</h2>
          <p className={styles.sectionSubtitle}>
            Choose from our carefully curated selection of {serviceTitle.toLowerCase()} designed for corporate teams
          </p>

          <div className={styles.tripGrid}>
            {trips.map((trip) => (
              <div key={trip.id} className={styles.tripCard}>
                <div className={styles.tripImageContainer}>
                  <img src={trip.image} alt={trip.destination} className={styles.tripImage} />
                  <div className={styles.tripDuration}>
                    <FaCalendarAlt /> {trip.duration}
                  </div>
                </div>
                <div className={styles.tripContent}>
                  <h3 className={styles.tripDestination}>
                    <FaMapMarkerAlt /> {trip.destination}
                  </h3>
                  <p className={styles.tripDescription}>{trip.description}</p>
                  <div className={styles.tripDetails}>
                    <div className={styles.tripDetail}>
                      <FaMoneyBillWave /> {trip.price} <span>per person</span>
                    </div>
                    <div className={styles.tripDetail}>
                      <FaUsers /> {trip.capacity}
                    </div>
                  </div>
                  <Link 
                    to={`/services/${serviceId}/${trip.id}/flow`} 
                    className={styles.moreInfoButton}
                  >
                    <FaInfoCircle /> View Process Flow
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Need a Custom Solution?</h2>
          <p className={styles.ctaDescription}>
            We can create tailored {serviceTitle.toLowerCase()} experiences for your specific team needs
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.primaryButton}>
              Contact Us
            </Link>
            <Link to="/services" className={styles.secondaryButton}>
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



