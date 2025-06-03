import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaCalendarCheck, FaUsers, FaClipboardList, 
  FaUtensils, FaMedal, FaSmile, FaGamepad, FaFilm, 
  FaTrophy, FaChess, FaLaptop, FaArrowRight, FaHiking, FaMountain, FaGlassCheers, FaUmbrellaBeach, 
  FaSwimmer, FaFire, FaMusic, FaTree
} from 'react-icons/fa';
import styles from './EventFlow.module.css';
//  ADD these imports to your existing EventFlow.jsx imports
// import { FaHiking, FaMountain, FaUmbrellaBeach, FaSwimmer, FaFire, FaMusic, FaTree } from 'react-icons/fa';
// import { FaCalendarAlt, FaGlassCheers } from 'react-icons/fa';


const eventFlowData = {
 

  "fun-fridays": {
    "cooking-challenge": {
      title: "Cooking Challenge",
      description: "A fun and engaging cooking competition that brings teams together through culinary creativity",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Choose a convenient Friday afternoon for your team's cooking challenge"
        },
        {
          icon: <FaUsers />,
          title: "Team Formation",
          description: "Divide participants into balanced teams of 4-5 members each"
        },
        {
          icon: <FaClipboardList />,
          title: "Challenge Briefing",
          description: "Teams receive their cooking challenge and rules from our professional chef"
        },
        {
          icon: <FaUtensils />,
          title: "Cooking Competition",
          description: "Teams work together to create their culinary masterpieces within the time limit"
        },
        {
          icon: <FaMedal />,
          title: "Judging & Awards",
          description: "Dishes are judged on taste, presentation, creativity, and teamwork"
        },
        {
          icon: <FaSmile />,
          title: "Celebration",
          description: "Everyone enjoys the food together in a celebratory team dinner"
        }
      ],
      benefits: [
        "Improves team communication",
        "Builds collaboration skills",
        "Encourages creativity",
        "Creates shared memories",
        "Reduces workplace stress"
      ],
      testimonial: {
        quote: "The cooking challenge was the highlight of our quarter! Our team is still talking about it months later.",
        author: "Priya Sharma, HR Director at TechCorp India"
      }
    },
    "game-tournament": {
      title: "Game Tournament",
      description: "Competitive gaming that builds team spirit through friendly competition",
      image: "https://images.unsplash.com/photo-1511882150382-421056c89033",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Select a Friday afternoon for your team's gaming tournament"
        },
        {
          icon: <FaGamepad />,
          title: "Game Selection",
          description: "Choose from our catalog of team-based games that match your team's interests"
        },
        {
          icon: <FaUsers />,
          title: "Team Formation",
          description: "Create balanced teams to ensure fair and fun competition"
        },
        {
          icon: <FaChess />,
          title: "Tournament Setup",
          description: "Our facilitators set up the tournament brackets and explain the rules"
        },
        {
          icon: <FaLaptop />,
          title: "Game Play",
          description: "Teams compete in rounds of exciting gameplay with professional facilitation"
        },
        {
          icon: <FaTrophy />,
          title: "Awards Ceremony",
          description: "Winners receive prizes and all participants celebrate their achievements"
        }
      ],
      benefits: [
        "Builds team spirit",
        "Encourages healthy competition",
        "Improves strategic thinking",
        "Creates a fun work environment",
        "Strengthens team bonds"
      ],
      testimonial: {
        quote: "Our team gaming tournament revealed leadership qualities in team members we hadn't noticed before!",
        author: "Rahul Mehta, Team Lead at InnovateTech"
      }
    },
    "movie-night": {
      title: "Movie Night",
      description: "A relaxing evening of film and discussion to unwind and bond",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Select a Friday evening for your team's movie night"
        },
        {
          icon: <FaFilm />,
          title: "Film Selection",
          description: "Choose a film that aligns with your team's interests or learning objectives"
        },
        {
          icon: <FaClipboardList />,
          title: "Setup & Preparation",
          description: "We prepare a comfortable viewing environment with premium audio-visual setup"
        },
        {
          icon: <FaUtensils />,
          title: "Refreshments",
          description: "Enjoy gourmet snacks and beverages during the screening"
        },
        {
          icon: <FaUsers />,
          title: "Discussion",
          description: "Participate in a facilitated discussion about themes and insights from the film"
        },
        {
          icon: <FaSmile />,
          title: "Team Bonding",
          description: "Continue the evening with informal socializing and team bonding"
        }
      ],
      benefits: [
        "Provides stress relief",
        "Encourages thoughtful discussion",
        "Creates shared cultural experiences",
        "Improves team communication",
        "Builds a positive team culture"
      ],
      testimonial: {
        quote: "Our movie nights have become a monthly tradition that everyone looks forward to. It's amazing how much closer our team has become.",
        author: "Ananya Patel, CEO at CreativeMinds"
      }
    }
  },
  "weekend-outings": {
    "nature-hiking": {
      title: "Nature Hiking",
      description: "Refreshing hiking experience in scenic locations to rejuvenate and build team connections",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Book your preferred hiking date and select difficulty level"
        },
        {
          icon: <FaUsers />,
          title: "Group Formation",
          description: "Organize hiking groups based on fitness levels and preferences"
        },
        {
          icon: <FaClipboardList />,
          title: "Safety Briefing",
          description: "Essential safety guidelines, equipment check, and route overview"
        },
        {
          icon: <FaHiking />,
          title: "Hiking Adventure",
          description: "Guided hiking experience with team challenges along the trail"
        },
        {
          icon: <FaMountain />,
          title: "Summit Activities",
          description: "Reach the destination with team building activities and photo sessions"
        },
        {
          icon: <FaGlassCheers />,
          title: "Celebration",
          description: "Refreshments and reflection session celebrating the achievement"
        }
      ],
      benefits: [
        "Stress relief in nature",
        "Physical fitness boost",
        "Team bonding in natural settings",
        "Mental wellness and clarity",
        "Shared accomplishment feeling",
        "Rejuvenation through adventure"
      ],
      testimonial: {
        quote: "The hiking trip was exactly what our team needed after a stressful quarter. The beautiful scenery and physical activity really brought us together.",
        author: "Vikram Singh, Project Manager at GlobalTech"
      }
    },
    "beach-retreat": {
      title: "Beach Retreat",
      description: "Relaxing beach getaway with team activities, water sports, and bonfire sessions",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Book your weekend retreat dates and accommodation preferences"
        },
        {
          icon: <FaUsers />,
          title: "Team Check-in",
          description: "Welcome session and room assignments for all participants"
        },
        {
          icon: <FaUmbrellaBeach />,
          title: "Beach Activities",
          description: "Beach volleyball, sandcastle building, and team games"
        },
        {
          icon: <FaSwimmer />,
          title: "Water Sports",
          description: "Swimming, water volleyball, and other aquatic team activities"
        },
        {
          icon: <FaFire />,
          title: "Bonfire Session",
          description: "Evening bonfire with team discussions and entertainment"
        },
        {
          icon: <FaMusic />,
          title: "Farewell",
          description: "Closing ceremony and departure with renewed team spirit"
        }
      ],
      benefits: [
        "Complete relaxation in beach environment",
        "Vitamin D boost from natural sunlight",
        "Team coordination through beach games",
        "Open communication in informal settings",
        "Work-life balance perspective",
        "Creativity boost inspired by nature's serenity"
      ],
      testimonial: {
        quote: "Our beach retreat transformed our team dynamics completely. The informal setting allowed people to connect on a personal level we hadn't achieved in the office.",
        author: "Neha Kapoor, HR Manager at InnovaSolutions"
      }
    },
    "adventure-park": {
      title: "Adventure Park",
      description: "Thrilling adventure park experience with zip-lining, rock climbing, and team challenges",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Book your adventure day and select activity packages"
        },
        {
          icon: <FaUsers />,
          title: "Safety Training",
          description: "Comprehensive safety briefing and equipment fitting session"
        },
        {
          icon: <FaTree />,
          title: "Zip-lining",
          description: "Exciting zip-line adventures building trust and confidence"
        },
        {
          icon: <FaMountain />,
          title: "Rock Climbing",
          description: "Team rock climbing challenges with mutual support and encouragement"
        },
        {
          icon: <FaChess />,
          title: "Team Challenges",
          description: "Obstacle courses and problem-solving activities"
        },
        {
          icon: <FaTrophy />,
          title: "Victory Celebration",
          description: "Achievement celebration with refreshments and team photos"
        }
      ],
      benefits: [
        "Adrenaline rush from exciting activities",
        "Trust building through mutual support",
        "Confidence boost from overcoming fears",
        "Goal achievement as a team",
        "Shared victories and accomplishments",
        "Pure joy and laughter through thrilling shared adventures"
      ],
      testimonial: {
        quote: "The adventure park day was transformative for our team. Seeing colleagues help each other overcome challenges created a level of trust we've never had before.",
        author: "Arjun Mehta, CTO at TechInnovate"
      }
    }
  },


  "corporate-trips": {
    bali: {
      title: "Bali Corporate Retreat",
      description: "Experience the beauty of Bali with your team. Perfect for corporate retreats and team bonding.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Plan your 5-day Bali retreat with flexible dates and accommodation options",
        },
        {
          icon: <FaUsers />,
          title: "Team Preparation",
          description: "Pre-trip briefing, travel documentation, and team activity planning",
        },
        {
          icon: <FaClipboardList />,
          title: "Arrival & Check-in",
          description: "Airport transfer, hotel check-in, and welcome orientation session",
        },
        {
          icon: <FaUtensils />,
          title: "Cultural Activities",
          description: "Temple visits, traditional cooking classes, and local cultural experiences",
        },
        {
          icon: <FaMedal />,
          title: "Team Building",
          description: "Beach activities, water sports, and collaborative team challenges",
        },
        {
          icon: <FaSmile />,
          title: "Reflection & Departure",
          description: "Final team session, feedback collection, and departure arrangements",
        },
      ],
      benefits: [
        "Enhanced team bonding in exotic location",
        "Cultural exposure and global perspective",
        "Stress relief through tropical environment",
        "Improved communication in relaxed setting",
        "Memorable shared experiences",
        "Inspiration and creativity sparked by scenic and cultural richness"
      ],
      testimonial: {
        quote:
          "Our Bali retreat was transformational. The team came back more connected and motivated than ever before.",
        author: "Rajesh Kumar, CEO at TechVentures",
      },
    },
    goa: {
      title: "Goa Beach Corporate Getaway",
      description: "Enjoy the beaches and vibrant culture of Goa. Great for team relaxation and strategic planning.",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Book your 4-day Goa getaway with beachfront accommodation",
        },
        {
          icon: <FaUsers />,
          title: "Travel Coordination",
          description: "Group travel arrangements and pre-trip team briefing",
        },
        {
          icon: <FaUmbrellaBeach />,
          title: "Beach Activities",
          description: "Beach volleyball, water sports, and seaside team building games",
        },
        {
          icon: <FaClipboardList />,
          title: "Strategic Sessions",
          description: "Beachside planning sessions and strategic workshops",
        },
        {
          icon: <FaUtensils />,
          title: "Cultural Exploration",
          description: "Local cuisine experiences and cultural site visits",
        },
        {
          icon: <FaGlassCheers />,
          title: "Celebration",
          description: "Beach party, team achievements celebration, and departure",
        },
      ],
      benefits: [
        "Relaxed environment for strategic thinking",
        "Beach activities promote team spirit",
        "Cultural diversity appreciation",
        "Work-life balance demonstration",
        "Rejuvenation through coastal atmosphere",
        "Strategic networking in a relaxed, scenic environment"
      ],
      testimonial: {
        quote:
          "Goa provided the perfect backdrop for our strategic planning. The relaxed atmosphere helped us think outside the box.",
        author: "Priya Nair, Strategy Director at InnovateCorp",
      },
    },
    mumbai: {
      title: "Mumbai Business Hub Experience",
      description: "Explore the business capital of India. Perfect for corporate meetings and networking.",
      image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Plan your 3-day Mumbai business trip with premium hotel bookings",
        },
        {
          icon: <FaUsers />,
          title: "Business Networking",
          description: "Industry meetups, networking events, and business district tours",
        },
        {
          icon: <FaClipboardList />,
          title: "Corporate Meetings",
          description: "Client meetings, partnership discussions, and business presentations",
        },
        {
          icon: <FaUtensils />,
          title: "Cultural Immersion",
          description: "Bollywood studio visit, local market tours, and authentic dining",
        },
        {
          icon: <FaMedal />,
          title: "Team Activities",
          description: "Marine Drive walks, team dinners, and collaborative sessions",
        },
        {
          icon: <FaSmile />,
          title: "Business Closure",
          description: "Final meetings, deal closures, and departure planning",
        },
      ],
      benefits: [
        "Business networking opportunities",
        "Exposure to India's financial capital",
        "Professional development through city experience",
        "Cultural diversity understanding",
        "Strategic business insights",
        "Exposure to India's dynamic corporate culture and innovation hubs"
      ],
      testimonial: {
        quote: "Mumbai opened our eyes to new business opportunities. The networking alone was worth the entire trip.",
        author: "Amit Sharma, Business Development Head at GlobalTech",
      },
    },
    bangalore: {
      title: "Bangalore Tech Hub Innovation Tour",
      description: "Visit India's tech hub. Ideal for tech companies and innovation workshops.",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Plan your 3-day Bangalore tech tour with innovation center visits",
        },
        {
          icon: <FaUsers />,
          title: "Tech Ecosystem Tour",
          description: "Startup incubators, tech parks, and innovation center visits",
        },
        {
          icon: <FaLaptop />,
          title: "Innovation Workshops",
          description: "Hands-on workshops, tech demos, and collaborative innovation sessions",
        },
        {
          icon: <FaClipboardList />,
          title: "Industry Interactions",
          description: "Meet tech leaders, attend seminars, and participate in panel discussions",
        },
        {
          icon: <FaUtensils />,
          title: "Cultural Experience",
          description: "Local cuisine, garden city tours, and traditional experiences",
        },
        {
          icon: <FaTrophy />,
          title: "Knowledge Synthesis",
          description: "Team reflection sessions, learning consolidation, and action planning",
        },
      ],
      benefits: [
        "Exposure to cutting-edge technology",
        "Innovation mindset development",
        "Tech industry networking",
        "Best practices learning",
        "Future-ready skill development",
        "Exposure to innovative ideas in India’s tech capital"
      ],
      testimonial: {
        quote:
          "Bangalore showed us the future of technology. Our team returned with fresh perspectives and innovative ideas.",
        author: "Deepak Patel, CTO at FutureTech Solutions",
      },
    },
    kerala: {
      title: "Kerala Backwaters Corporate Retreat",
      description:
        "Explore God's Own Country with backwaters, hill stations, and spice plantations. Perfect for team retreats in nature.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Plan your 4-day Kerala retreat with houseboat and hill station experiences",
        },
        {
          icon: <FaUsers />,
          title: "Nature Immersion",
          description: "Backwater cruise, spice plantation tours, and nature walks",
        },
        {
          icon: <FaClipboardList />,
          title: "Wellness Activities",
          description: "Ayurvedic treatments, yoga sessions, and meditation workshops",
        },
        {
          icon: <FaUtensils />,
          title: "Cultural Discovery",
          description: "Traditional Kerala cuisine, cultural performances, and local interactions",
        },
        {
          icon: <FaMountain />,
          title: "Hill Station Experience",
          description: "Tea plantation visits, mountain activities, and scenic team building",
        },
        {
          icon: <FaGlassCheers />,
          title: "Reflection & Departure",
          description: "Team reflection by the backwaters and peaceful departure",
        },
      ],
      benefits: [
        "Deep relaxation in natural environment",
        "Wellness and health focus",
        "Cultural appreciation and learning",
        "Stress reduction through nature therapy",
        "Enhanced team bonding in serene settings",
        "Mindfulness and reflection in tranquil waterscapes"
      ],
      testimonial: {
        quote:
          "Kerala's natural beauty provided the perfect environment for our team to reconnect and recharge. Truly transformative.",
        author: "Kavitha Menon, HR Director at WellnessCorp",
      },
    },
    rajasthan: {
      title: "Rajasthan Royal Heritage Experience",
      description:
        "Experience royal heritage and desert landscapes. Ideal for cultural immersion and leadership workshops.",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Plan your 5-day royal Rajasthan experience with palace accommodations",
        },
        {
          icon: <FaUsers />,
          title: "Heritage Exploration",
          description: "Palace tours, fort visits, and royal architecture appreciation",
        },
        {
          icon: <FaClipboardList />,
          title: "Leadership Workshops",
          description: "Leadership lessons from royal history and strategic thinking sessions",
        },
        {
          icon: <FaUtensils />,
          title: "Cultural Immersion",
          description: "Royal cuisine experiences, folk performances, and traditional crafts",
        },
        {
          icon: <FaMountain />,
          title: "Desert Adventure",
          description: "Camel safari, desert camping, and team challenges in unique terrain",
        },
        {
          icon: <FaTrophy />,
          title: "Royal Celebration",
          description: "Grand farewell dinner in palace setting and achievement recognition",
        },
      ],
      benefits: [
        "Leadership inspiration from royal history",
        "Cultural richness and heritage appreciation",
        "Unique desert team building experiences",
        "Luxury and comfort in royal settings",
        "Historical perspective on leadership and strategy",
        "Creative stimulation from vibrant arts and architecture"
      ],
      testimonial: {
        quote:
          "Rajasthan taught us about leadership, heritage, and teamwork in the most magnificent setting. An unforgettable experience.",
        author: "Ravi Agarwal, Managing Director at Heritage Industries",
      },
    },
  },
  
};

export default function EventFlow() {
  const { serviceId, eventId } = useParams();
  const navigate = useNavigate();
  

  const eventFlow = eventFlowData[serviceId]?.[eventId];
  
  useEffect(() => {
 
    const steps = document.querySelectorAll(`.${styles.processStep}`);
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.classList.add(styles.animate);
      }, 300 * index);
    });
    

    const benefits = document.querySelectorAll(`.${styles.benefitItem}`);
    benefits.forEach((benefit, index) => {
      setTimeout(() => {
        benefit.classList.add(styles.animate);
      }, 200 * index);
    });
  }, []);
  
  if (!eventFlow) {
    return (
      <div className={styles.errorContainer}>
        <h2>Event information not found</h2>
        <button 
          className={styles.backButton} 
          onClick={() => navigate(`/services/${serviceId}`)}
        >
          <FaArrowLeft /> Back to {serviceId.replace(/-/g, ' ')}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.eventFlowPage}>
      {/* Back Navigation */}
      <div className={styles.backNavigation}>
        <div className={styles.container}>
          <button 
            className={styles.backButton} 
            onClick={() => navigate(`/services/${serviceId}`)}
          >
            <FaArrowLeft /> Back to {serviceId.replace(/-/g, ' ')}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${eventFlow.image || eventFlow.heroImage})` }}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>{eventFlow.title}</h1>
          <p className={styles.heroSubtitle}>{eventFlow.description}</p>
        </div>
      </section>

      {/* Process Flow */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            Follow our proven process to deliver an exceptional {eventFlow.title} experience
          </p>

          <div className={styles.processFlowTimeline}>
            {eventFlow.steps.map((step, index) => (
              <div key={index} className={`${styles.processStep} ${index % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.stepContent}>
                  <div className={styles.stepIconContainer}>
                    <div className={styles.stepIcon}>{step.icon}</div>
                  </div>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  {index < eventFlow.steps.length - 1 && (
                    <div className={styles.stepArrow}>
                      
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Benefits</h2>
          <p className={styles.sectionSubtitle}>
            Why {eventFlow.title} is great for your team
          </p>

          <div className={styles.benefitsList}>
            {eventFlow.benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <div className={styles.benefitCheck}>✓</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>

          {eventFlow.testimonial && (
          <div className={styles.testimonial}>
            <blockquote className={styles.testimonialQuote}>
              "{eventFlow.testimonial.quote}"
            </blockquote>
            <p className={styles.testimonialAuthor}>— {eventFlow.testimonial.author}</p>
          </div>
        )}

        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Book Your {eventFlow.title}?</h2>
          <p className={styles.ctaDescription}>
            Contact us today to schedule this event for your team
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.primaryButton}>
              Book Now
            </Link>
            <Link to={`/services/${serviceId}`} className={styles.secondaryButton}>
              Explore Other Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

