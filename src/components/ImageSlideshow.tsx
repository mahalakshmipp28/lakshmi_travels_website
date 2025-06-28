import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 0,
    image: 'https://www.magizhchidental.in/wp-content/uploads/2021/03/tamilnadu.jpg',
    title: 'Lakshmi Travels Madurai',
    description: 'Discover the timeless beauty and rich heritage of Madurai',
  },
  {
    id: 1,
    image: 'https://image3.mouthshut.com/images/imagesp/925769222s.jpg',
    title: 'Meenakshi Amman Temple',
    description: 'Marvel at the architectural grandeur of this ancient temple dedicated to Goddess Meenakshi'
  },
  {
    id: 2,
    image: 'https://lakshmisharath.com/wp-content/uploads/2021/01/Madurai-Thirumalainayakmahal-ceiling-photo.jpg',
    title: 'Thirumalai Nayakkar Mahal',
    description: 'Explore the magnificent royal palace showcasing Indo-Saracenic architecture'
  },
  {
    id: 3,
    image: 'https://thumbs.dreamstime.com/b/mariamman-teppakulam-tank-madurai-india-52724727.jpg',
    title: 'Teppakulam',
    description: 'Experience serenity at this sacred temple tank with its annual float festival'
  },
  {
    id: 4,
    image: 'https://www.mkgandhi.org/images/madurai%20museum.jpg',
    title: 'Gandhi Museum',
    description: 'Discover the legacy of Mahatma Gandhi and India\'s freedom struggle'
  },
  {
    id: 5,
    image: 'https://maduraitourism.co.in/images/places-to-visit/headers/azhagar-kovil-alagar-koyil-temple-madurai-entry-fee-timings-holidays-reviews-header.jpg',
    title: 'Azhagar Kovil',
    description: 'Visit the hilltop temple dedicated to Lord Vishnu amidst scenic beauty'
  },
  {
    id: 6,
    image: 'https://www.pgclick.com/file_uploads/pg_photos/1000/f9r2m_1550041662.jpg',
    title: 'Palamudhircholai',
    description: 'Seek blessings at the sacred abode of Lord Muruga nestled in the lush greenery of Palamudhircholai hills.'
  },
  {
    id: 7,
    image: 'https://www.liturgicaltemples.com/wp-content/uploads/2023/01/Thiruparankundram-Temple.jpg',
    title: 'Thirupparanundram Murugan Temple',
    description: 'Worship Lord Muruga at this ancient cave temple nestled in the sacred Thirupparankundram Hills.'
  },
  {
    id: 8,
    image: 'https://admin.southindiatoursandtravels.com/pages/gallery/247517.jpg',
    title: 'Koodal Azhagar Temple',
    description: 'Seek blessings from Lord Vishnu at this majestic temple in the heart of Madurai, known for its rare triple-posture deity.'
  },
  {
    id: 9,
    image: 'https://i.ytimg.com/vi/QjcBl1EpfuY/maxresdefault.jpg',
    title: 'Keelakuyilkudi Samanar Hills',
    description: 'Explore ancient Jain heritage carved into rocky hillsides at this serene and historic site near Madurai.'
  },
  {
    id: 10,
    image: 'https://www.astroved.com/astropedia/assets/images/temples/divya-desam-temples/Thirumohoor-Kalamegaperumal-Temple.jpg',
    title: 'Thirumohoor Kalamegaperumal Temple',
    description: 'Experience divine grace at this sacred Vishnu temple, famed for its legends and serene Dravidian architecture near Madurai.'
  },
  {
    id: 11,
    image: 'https://1.bp.blogspot.com/-N_voDslNOLI/WxlMGjwfK9I/AAAAAAABG_o/DWcyupJ-i3seutdzCBhBX6iPLXAQ0YAZgCLcBGAs/s1600/yoganarasimhar-madurai-1.jpg',
    title: 'Narasingam Yoga Narasimha Perumal Temple',
    description: 'Feel spiritual serenity at this rock-cut shrine where Lord Narasimha sits in yogic posture, radiating power and peace near Madurai.'
  },
  {
    id: 12,
    image: 'https://static.hindutamil.in/hindu/uploads/news/2022/04/15/xlarge/788378.jpg',
    title: 'Chithirai Thiruvizha Therottam',
    description: 'Celebrate divine tradition during Madurai’s grand Chithirai Thiruvizha Therottam, where majestic temple chariots roll through the vibrant city streets.'
  },
  {
    id: 13,
    image: 'https://worldmagzine.com/wp-content/uploads/2024/04/Chithirai-Festival-Celebrations-in-Madurai-WorldMagzine.jpg',
    title: 'Azhagar Aatril Irangudhal',
    description: 'Witness the divine moment of Azhagar Aatril Irangudhal, as Lord Azhagar majestically enters the Vaigai River to bless the devotees during Chithirai festival.'
  },
  {
    id: 14,
    image: 'https://live.staticflickr.com/5522/10586619904_5a111c9961_b.jpg',
    title: 'Nandhi Statue near Meenakshi Amman Temple',
    description: 'Marvel at the majestic Nandhi statue near Meenakshi Amman Temple, a symbol of devotion and divine guardianship in the heart of Madurai.'
  },
  {
    id: 15,
    image: 'https://th.bing.com/th/id/OIP.b5OhwFk_fUedGZba_A1IegHaE8?w=264&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    title: 'Raya Gopuram',
    description: 'Stand in awe of the unfinished yet grand Raya Gopuram in Madurai, showcasing the architectural ambition and legacy of the Vijayanagara Empire.'
  },
  {
    id: 16,
    image: 'https://th.bing.com/th/id/OIP.POu94GgZ-Zt78roa-fRkAAHaFj?w=600&h=450&rs=1&pid=ImgDetMain',
    title: 'Pudhu Mandapam',
    description: 'Admire the vibrant Puthu Mandapam in Madurai, a bustling 17th-century pillared hall that blends regal architecture with lively local trade.'
  },
  {
    id: 17,
    image: 'https://wallpapercave.com/wp/wp4683240.jpg',
    title: 'Jallikattu',
    description: 'Experience the raw energy of Jallikattu in Madurai, where tradition, bravery, and festive spirit collide in a thrilling display of bull-taming during Pongal.'
  },
  {
    id: 18,
    image: 'https://www.carkhabri.com/Gallery/toyota/toyota-etios/common/large/101.jpg',
    title: 'Toyota Etios',
    description: 'Ride with elegance and efficiency in the Toyota Etios — where comfort meets performance for every journey.'
  },
  {
    id: 19,
    image: 'https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg',
    title: 'Toyota Innova - Crysta',
    description: 'Embrace luxury and power with the Toyota Crysta, where bold design meets unmatched comfort for every unforgettable road trip.'
  },
  {
    id: 20,
    image: 'https://www.surfindia.com/automobile/gifs/toyota-innova-front.jpg',
    title: 'Toyota Innova',
    description: 'Experience the unmatched comfort of the Toyota Innova — where space, style, and reliability come together for every unforgettable journey through Madurai and beyond.'
  },
  {
    id: 21,
    image: 'https://static.wixstatic.com/media/efa081_9c60ab074bbb458d8b37598992380ca9~mv2.jpg/v1/fill/w_1600,h_950,al_c/efa081_9c60ab074bbb458d8b37598992380ca9~mv2.jpg',
    title: 'Tempo Traveller 12 Seater',
    description: 'Explore South India in comfort and style with the 12-Seater Tempo Traveller — perfect for group adventures, family trips, and unforgettable journeys together.'
  },
  {
    id: 22,
    image: 'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://img.haymarketsac.in/autocarpro/3ab34e02-9da0-44b2-a41c-977af7a0cb5b_IMG_20221121_130956.jpg&w=750&h=490&q=75&c=1',
    title: 'Urbania 12 Seater',
    description: 'Discover the power and comfort of the Urbania 12-Seater, built for smooth rides, spacious journeys, and unforgettable group travel across Madurai and beyond.'
  },
  {
    id: 23,
    image: 'https://www.coachrentalcompany.com/jap/media/uploads/21-seater-mini2.jpg',
    title: '21 Seater Coach',
    description: 'Embrace the joy of group travel with the 21-Seater Traveller, where comfort meets convenience for every celebration, pilgrimage, and adventure across Madurai and Tamil Nadu.'
  },
  {
    id: 24,
    image: 'https://autoline.info/img/s/coach-bus-SCANIA-Scania-Touring-Higer-A-Series-4x2-Euro6-bus---1657648857611559520_big--22062713530549322200.jpg',
    title: '36 Seater Coach',
    description: 'Experience the grandeur of travel in the 36-Seater Coach, where spacious comfort, togetherness, and scenic journeys come alive for unforgettable group adventures across Tamil Nadu.'
  },
  {
    id: 25,
    image: 'https://1.bp.blogspot.com/-GsF8UA_ufZc/Tq3nhCj024I/AAAAAAAAACg/4EilsP_FkK8/s1600/IMG_2498.JPG',
    title: 'Chettinad',
    description: 'Discover the timeless charm of Chettinad, where palatial mansions, rich culture, and fiery cuisine come together in a vibrant celebration of Tamil heritage.'
  },
  {
    id: 25,
    image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/rameswaram-1655457953_09de320de48b98dece1a.webp',
    title: 'Rameshwaram',
    description: 'Embrace the spiritual serenity of Rameshwaram, where sacred shores, ancient temples, and divine legends converge in a soulful journey of faith and devotion.'
  },
  {
    id: 26,
    image: 'https://th.bing.com/th/id/R.607bbd4eace911ac28ef01b581e6b203?rik=uIwDV03eVgDv0w&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f0%2f0d%2fPillar_Rocks_in_Kodaikanal.jpg&ehk=gU5paPwhHBQJ4XityPxslQ56hQjxlj73cw60zdS15r8%3d&risl=&pid=ImgRaw&r=0',
    title: 'Kodaikanal',
    description: 'Breathe in the misty magic of Kodaikanal, where serene lakes, pine forests, and rolling hills create a refreshing escape into nature’s tranquil embrace.'
  },
  {
    id: 27,
    image: 'https://imgcld.yatra.com/ytimages/image/upload/v1481614632/Kanyakumari_Kanyakumari_Beach.jpg',
    title: 'Kanyakumari',
    description: 'Witness the breathtaking beauty of Kanyakumari, where the oceans meet, the sun rises and sets in splendor, and history, culture, and nature unite at India’s southernmost tip.'
  },
  {
    id: 28,
    image: 'https://static.india.com/wp-content/uploads/2022/08/Dhanushkodi-f.jpg',
    title: 'Dhanushkodi',
    description: 'Discover the haunting beauty of Dhanushkodi, where the land ends, the seas converge, and remnants of a lost town whisper stories of mystery, divinity, and resilience.'
  }
];

const ImageSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">{slide.title}</h2>
              <p className="text-xl md:text-2xl font-light">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
