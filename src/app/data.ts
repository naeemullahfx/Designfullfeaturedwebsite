import imgFatehpurWalk from 'figma:asset/094747da906b532860d6d76bb5c9440f0809e15a.png';

// --- EXPERIENCES (Bookable Activities) ---
export const experiences = [
  {
    id: 'exp-1',
    title: 'Choubara Desert Jeep Safari',
    description: 'Experience the thrill of the desert with a guided jeep safari through the dunes of Choubara. Witness the golden sands stretching as far as the eye can see and experience the unique culture of the desert dwellers.',
    image: 'https://images.unsplash.com/photo-1721327473745-f70f87ba675e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBqZWVwJTIwc2FmYXJpJTIwcGFraXN0YW58ZW58MXx8fHwxNzcwMDUzNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'PKR 5,000',
    duration: '4 Hours',
    rating: 4.8,
    category: 'Desert',
    familyFriendly: false,
    highlights: ['Dune Bashing', 'Sunset Photography', 'Local Desert Tea', 'Camel Interaction'],
    coordinates: { lat: 30.9850, lng: 71.3500 }, // Choubara (approx east of Layyah)
    gallery: [
      'https://images.unsplash.com/photo-1547234935-80c7142ee969?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'exp-2',
    title: 'Karor Lal Esan Spiritual Walk',
    description: 'A guided spiritual journey through the historic shrine of Hazrat Lal Esan. Discover the intricate tile work, the peaceful courtyards, and the deep spiritual history of this Sufi saint.',
    image: 'https://images.unsplash.com/photo-1606673401341-4970722e6298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWZpJTIwc2hyaW5lJTIwcGFraXN0YW4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwMDUzNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'PKR 1,500',
    duration: '2 Hours',
    rating: 4.9,
    category: 'Shrines',
    familyFriendly: true,
    highlights: ['Shrine Architecture', 'Sufi Poetry Session', 'Langart (Community Food)', 'Historical Guided Tour'],
    coordinates: { lat: 31.2185, lng: 70.9520 }, // Karor Lal Esan
    gallery: [
      'https://images.unsplash.com/photo-1580220261314-255d65415754?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1566802871077-d5dc25392e22?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'exp-3',
    title: 'Layyah Old City Heritage Walk',
    description: 'Walk through the narrow streets of Old Layyah, exploring colonial architecture, ancient gates, and bustling local bazaars. Taste the local street food and meet the artisans keeping old traditions alive.',
    image: 'https://images.unsplash.com/photo-1730698129439-6470f7fef39e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwc3RyZWV0JTIwcGFraXN0YW5lJTIwb2xkJTIwY2l0eXxlbnwxfHwxfHwxNzcwMDUzNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'PKR 1,000',
    duration: '1.5 Hours',
    rating: 4.7,
    category: 'Walks',
    familyFriendly: true,
    highlights: ['Colonial Architecture', 'Spice Market Visit', 'Traditional Snacks', 'Artisan Workshops'],
    coordinates: { lat: 30.9693, lng: 70.9428 }, // Layyah City Center
    gallery: [
      'https://images.unsplash.com/photo-1598556606889-8d752984577c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1577033503289-543b59353086?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'exp-4',
    title: 'Indus River Boating & Sunset',
    description: 'Relax on a traditional boat ride along the Indus River as you watch the sunset paints the sky in shades of orange and purple. A perfect way to end the day with peace and nature.',
    image: 'https://images.unsplash.com/photo-1762718873498-32fffc310dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHdhbGtpbmclMjB0b3VyJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzcwMDUzNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'PKR 2,000',
    duration: '2 Hours',
    rating: 4.6,
    category: 'Events',
    familyFriendly: true,
    highlights: ['Sunset Views', 'Traditional Boat Ride', 'Bird Watching', 'Riverside Tea'],
    coordinates: { lat: 30.9500, lng: 70.9200 }, // Indus River near Layyah
    gallery: [
      'https://images.unsplash.com/photo-1502088513349-3ff6482aa816?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

// --- HISTORICAL & CULTURAL PLACES (Section 1) ---
export const places = [
  {
    id: 'plc-1',
    name: 'Bail Chowk',
    description: 'The central historic square of Layyah, representing the agricultural heart of the region. It features a prominent statue of a pair of bulls, symbolizing the farming heritage of the Thal desert.',
    location: 'Central Layyah City',
    image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=1080',
    relatedRouteId: 'route-3',
    coordinates: { lat: 30.9680, lng: 70.9430 }
  },
  {
    id: 'plc-2',
    name: 'Karor Lal Esan',
    description: 'A historic town and spiritual center dating back centuries. It serves as the resting place of Hazrat Lal Esan and features narrow ancient streets and pre-partition architecture.',
    location: 'Karor Lal Esan',
    image: 'https://images.unsplash.com/photo-1580220261314-255d65415754?auto=format&fit=crop&q=80&w=1080',
    relatedRouteId: 'route-2',
    coordinates: { lat: 31.2185, lng: 70.9520 }
  },
  {
    id: 'plc-3',
    name: 'Chowk Azam',
    description: 'A historic commercial hub and major intersection in the district. It has grown from a small settlement into a bustling trade center connecting various parts of South Punjab.',
    location: 'Chowk Azam',
    image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80&w=1080',
    relatedRouteId: null,
    coordinates: { lat: 30.9700, lng: 71.1800 }
  },
  {
    id: 'plc-4',
    name: 'Chowk Azam Mini Yadgaar',
    description: 'A local memorial monument located in Chowk Azam, serving as a landmark and a reminder of local history and community identity.',
    location: 'Chowk Azam',
    image: 'https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80&w=1080',
    relatedRouteId: null,
    coordinates: { lat: 30.9705, lng: 71.1805 }
  },
  {
    id: 'plc-5',
    name: 'Thal Desert',
    description: 'A vast geographical and cultural heritage region. The Thal desert is known for its unique ecosystem, nomadic lifestyle, and chickpea cultivation. It is the soul of Layyah\'s landscape.',
    location: 'Greater Layyah Region',
    image: 'https://images.unsplash.com/photo-1547234935-80c7142ee969?auto=format&fit=crop&q=80&w=1080',
    relatedRouteId: 'route-4',
    coordinates: { lat: 31.1000, lng: 71.5000 }
  },
  {
    id: 'plc-6',
    name: 'Forest Park Chowk Azam',
    description: 'A large recreational area offering a glimpse into the local flora. It serves as a green lung for the area and a popular spot for family picnics and nature walks.',
    location: 'Chowk Azam',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1080',
    relatedRouteId: null,
    coordinates: { lat: 30.9800, lng: 71.1700 }
  },
  {
    id: 'plc-7',
    name: 'TDA Park Layyah',
    description: 'One of the oldest parks in the city, established by the Thal Development Authority. It reflects the greening efforts of the desert region and provides a serene environment.',
    location: 'Layyah City',
    image: 'https://images.unsplash.com/photo-1566802871077-d5dc25392e22?auto=format&fit=crop&q=80&w=1080',
    relatedRouteId: null,
    coordinates: { lat: 30.9650, lng: 70.9450 }
  },
  {
    id: 'plc-8',
    name: 'Family Park Layyah',
    description: 'A modern community space designed for families, featuring walking tracks and play areas, representing the evolving urban lifestyle of Layyah.',
    location: 'Layyah City',
    image: 'https://images.unsplash.com/photo-1585642436098-b02447d25e4c?auto=format&fit=crop&q=80&w=1080',
    relatedRouteId: null,
    coordinates: { lat: 30.9750, lng: 70.9480 }
  },
  {
    id: 'plc-9',
    name: 'Sports Complex Layyah',
    description: 'The hub of local sports, where traditional games like Kabaddi intersect with modern cricket and football. A place of energy and youth culture.',
    location: 'Layyah City',
    image: 'https://images.unsplash.com/photo-1550136262-675e810a7019?auto=format&fit=crop&q=80&w=1080',
    relatedRouteId: null,
    coordinates: { lat: 30.9550, lng: 70.9400 }
  },
  {
    id: 'plc-10',
    name: 'Children Park (Sugar Mills)',
    description: 'Located near the historic Sugar Mills, this park has served generations of workers\' families and locals, holding nostalgic value for the community.',
    location: 'Layyah City',
    image: 'https://images.unsplash.com/photo-1598556606889-8d752984577c?auto=format&fit=crop&q=80&w=1080',
    relatedRouteId: null,
    coordinates: { lat: 30.9600, lng: 70.9350 }
  }
];

// --- EVENTS (Section 3) ---
export const events = [
  {
    id: 'evt-1',
    title: 'Mela Inayat Shah',
    date: 'March 18–22, 2026',
    season: 'Spring · Cultural',
    description: 'A vibrant celebration of culture, devotion, and local crafts in the heart of the Thal region.',
    image: 'https://images.unsplash.com/photo-1640699509658-41518a662882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lbCUyMGNhcmF2YW4lMjBkZXNlcnQlMjBwYWtpc3RhbnxlbnwxfHx8fDE3NzAxMzYyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cultural',
    culturalNote: 'Famous for its Camel Dance performances and traditional tent pegging competitions.',
    history: 'Dating back over a century, this festival marks the start of the harvest season in the region, bringing together communities from across Layyah.',
    activities: ['Camel Dance', 'Tent Pegging', 'Kabaddi Matches', 'Craft Stalls', 'Folk Music'],
    significance: 'It preserves the indigenous sports and artistic traditions of the Thal desert region.',
    relatedId: null,
    coordinates: { lat: 30.9800, lng: 70.9600 }
  },
  {
    id: 'evt-2',
    title: 'Baisakhi Mela',
    date: 'April 13, 2026',
    season: 'Spring · Cultural',
    description: 'Celebrating the wheat harvest with joy, music, and traditional Punjabi food.',
    image: 'https://images.unsplash.com/photo-1628672455749-89510181e191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGhhcnZlc3QlMjBmZXN0aXZhbCUyMHB1bmphYiUyMHBha2lzdGFuJTIwdmlicmFudHxlbnwxfHx8fDE3NzAxMzYxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cultural',
    culturalNote: 'A thanksgiving festival for the abundant wheat harvest.',
    history: 'An ancient festival celebrated across Punjab to mark the solar new year and the ripening of the rabi harvest.',
    activities: ['Bhangra Dance', 'Food Festivals', 'Bull Races', 'Kite Flying'],
    significance: 'Symbolizes prosperity and gratitude towards the land.',
    relatedId: null,
    coordinates: { lat: 30.9700, lng: 70.9500 }
  },
  {
    id: 'evt-3',
    title: 'Urs Hazrat Lal Esan',
    date: 'September 2026',
    season: 'Autumn · Religious',
    description: 'The annual spiritual gathering at the historic shrine in Karor.',
    image: 'https://images.unsplash.com/photo-1606673401341-4970722e6298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWZpJTIwc2hyaW5lJTIwcGFraXN0YW4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwMDUzNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Religious',
    culturalNote: 'Devotees gather to pay homage to the great Sufi saint.',
    history: 'Hazrat Lal Esan was a 15th-century Sufi saint. His Urs has been observed for over 400 years.',
    activities: ['Qawwali Nights', 'Chadarr Poshi', 'Distribution of Langar', 'Sufi Poetry'],
    significance: 'A major spiritual event that unites people of all backgrounds in devotion and peace.',
    relatedId: 'exp-2',
    coordinates: { lat: 31.2185, lng: 70.9520 }
  },
  {
    id: 'evt-4',
    title: 'Mela Chodhwein',
    date: 'July 2026',
    season: 'Summer · Religious',
    description: 'A traditional fair linked with the spiritual legacy of Hazrat Lal Esan.',
    image: 'https://images.unsplash.com/photo-1733158175552-401b752f7155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWZpJTIwc2hyaW5lJTIwbmlnaHQlMjBjcm93ZCUyMGxhbXBzJTIwcGFraXN0YW58ZW58MXx8fHwxNzcwMTM2MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Religious',
    culturalNote: 'Held on the 14th of the lunar month, attracting local devotees.',
    history: 'A monthly or annual observance that keeps the spiritual connection alive throughout the year.',
    activities: ['Naat Recitation', 'Evening Prayers', 'Local Bazaar'],
    significance: 'Reinforces the bond between the community and the shrine.',
    relatedId: 'shr-1',
    coordinates: { lat: 31.2185, lng: 70.9520 }
  },
  {
    id: 'evt-5',
    title: 'Mela Chiraghan',
    date: 'October 2026',
    season: 'Autumn · Cultural',
    description: 'The "Festival of Lights" celebrated at local shrines, illuminating the spiritual night.',
    image: 'https://images.unsplash.com/photo-1737728516454-6e6624838623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBsYW1wcyUyMHNocmluZSUyMG5pZ2h0JTIwcGFraXN0YW58ZW58MXx8fHwxNzcwMTM2MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cultural',
    culturalNote: 'Symbolizes the light of knowledge and spirituality dispelling darkness.',
    history: 'Inspired by the great Mela Chiraghan of Lahore, local versions are held to honor Sufi saints.',
    activities: ['Lighting of Lamps (Chiragh)', 'Dhamal', 'Folk Singing'],
    significance: 'A visual spectacle that brings spiritual joy to the community.',
    relatedId: null,
    coordinates: { lat: 30.9650, lng: 70.9400 }
  },
  {
    id: 'evt-6',
    title: 'Local Seasonal Melas',
    date: 'Winter 2026',
    season: 'Winter · Agricultural',
    description: 'Various village fairs celebrating rural life, livestock, and local sports.',
    image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&q=80&w=1080',
    category: 'Agricultural',
    culturalNote: 'Bail Mela (Bull Fair) and camel decorations are highlights.',
    history: 'Grassroots gatherings that have occurred for centuries to trade livestock and celebrate rural fraternity.',
    activities: ['Bail Mela', 'Camel Decoration', 'Village Wrestling'],
    significance: 'Vital for the local economy and social cohesion of rural Layyah.',
    relatedId: null,
    coordinates: { lat: 31.0500, lng: 71.0500 }
  }
];

// --- SHRINES (Section 2) ---
export const shrines = [
  {
    id: 'shr-1',
    name: 'Hazrat Lal Esan (Karor)',
    location: 'Karor Lal Esan, Layyah',
    description: 'A masterpiece of Multani tile work and spiritual significance, dating back centuries.',
    image: 'https://images.unsplash.com/photo-1606673401341-4970722e6298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWZpJTIwc2hyaW5lJTIwcGFraXN0YW4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwMDUzNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    history: 'Founded by Hazrat Lal Esan in the late 15th century, this shrine is one of the oldest and most significant examples of Multani architectural style in the region. The saint played a crucial role in spreading Islam in the Thal desert.',
    significance: 'Known as the "Saint of the Red Robe", Hazrat Lal Esan is revered for his poetry, miracles, and message of universal love. The shrine serves as a center for spiritual healing for thousands.',
    ursInfo: 'The Urs is held annually in September, attracting devotees from all over Punjab. The celebrations last for 3 days and include Qawwali, Dhamal, and community feasting (Langar).',
    coordinates: { lat: 31.2185, lng: 70.9520 },
    etiquette: [
      'Remove shoes before entering the main courtyard',
      'Cover your head (both men and women)',
      'Dress modestly',
      'Keep your voice low to respect those praying',
      'Ask for permission before taking photos of people'
    ]
  },
  {
    id: 'shr-2',
    name: 'Darbar Bero Sharif',
    location: 'Fatehpur, Layyah',
    description: 'A center of Sufi learning and devotion, attracting pilgrims from across the region.',
    image: 'https://images.unsplash.com/photo-1661470468460-5733b5e74ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWZpJTIwZGFyYmFyJTIwZ3JlZW4lMjBkb21lJTIwcGFraXN0YW58ZW58MXx8fHwxNzcwMTM2MDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    history: 'Established in the 19th century by Hazrat Khawaja Ghulam Hassan Swag, Bero Sharif became a beacon of religious education and spiritual guidance in the area.',
    significance: 'The shrine is not just a resting place but an active seminary (Madrassa) where students learn Quran and Sufi philosophy. It represents the scholarly tradition of Sufism.',
    ursInfo: 'The annual gathering takes place in the lunar month of Rajab. It focuses heavily on religious discourses and Naat recitations.',
    coordinates: { lat: 31.0200, lng: 71.2000 },
    etiquette: [
      'Remove shoes at the entrance',
      'Men and women have separate prayer areas',
      'Silence is observed during prayer times',
      'Donations to the Langar (kitchen) are welcome'
    ]
  },
  {
    id: 'shr-3',
    name: 'Shrine of Pir Fakir Allah',
    location: 'Layyah District',
    description: 'A revered shrine known for its simplicity and the devotion of the local desert communities.',
    image: 'https://images.unsplash.com/photo-1538923009630-a05a89b5deed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVY2glMjBTaGFyaWYlMjBzaHJpbmUlMjBibHVlJTIwdGlsZXN8ZW58MXx8fHwxNzcwMTM2MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    history: 'Pir Fakir Allah was a wandering Sufi dervish who settled in the Thal region, preaching humility and detachment from material wealth.',
    significance: 'A spiritual refuge for the nomadic people of Thal. It acts as a community hub where disputes are resolved and blessings are sought.',
    ursInfo: 'The Urs is a quiet, solemn affair involving prayers and recitation of the Quran.',
    coordinates: { lat: 31.1500, lng: 71.1000 },
    etiquette: [
      'Respect the silence of the surroundings',
      'Modest clothing is essential',
      'Offerings of flowers are common'
    ]
  },
  {
    id: 'shr-4',
    name: 'Shrine of Rajan Shah',
    location: 'Layyah City',
    description: 'A serene sanctuary located within the city, known for its peaceful atmosphere.',
    image: 'https://images.unsplash.com/photo-1585642436098-b02447d25e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBpbnRlcmlvcnxlbnwxfHwxfHwxNzcwMDU3Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    history: 'A relatively smaller but highly respected shrine dedicated to Syed Rajan Shah, a local saint known for his piety and service to the poor.',
    significance: 'A place of solace for city dwellers. Locals visit daily to offer prayers and seek blessings for their families.',
    ursInfo: 'A modest Urs is celebrated with local community members gathering for Quran Khwani and distribution of sweets.',
    coordinates: { lat: 30.9720, lng: 70.9410 },
    etiquette: [
      'Maintain silence',
      'Modest dress code required',
      'Shoes must be removed',
      'Respect the privacy of worshippers'
    ]
  },
  {
    id: 'shr-5',
    name: 'Other Local Mazars',
    location: 'Various Locations',
    description: 'The landscape of Layyah is dotted with numerous smaller shrines, each telling a story of faith.',
    image: 'https://images.unsplash.com/photo-1541362086580-c08122a27547?auto=format&fit=crop&q=80&w=1080',
    history: 'These smaller shrines often belong to local pious figures who served their specific villages.',
    significance: 'They serve as local points of community gathering and spiritual connection for villagers.',
    ursInfo: 'Dates vary by location, often coinciding with local harvest times.',
    coordinates: { lat: 30.9800, lng: 71.0000 },
    etiquette: [
      'General respectful behavior',
      'Follow local customs'
    ]
  }
];

// --- HERITAGE WALK ROUTES (Section 4) ---
export const heritageRoutes = [
  {
    id: 'route-1',
    name: 'Karor Lal Esan Spiritual Walk',
    location: 'Karor Lal Esan',
    duration: '2.5 Hours',
    bestTime: 'Morning (8 AM - 11 AM)',
    distance: '2.5 km',
    description: 'Walk in the footsteps of saints. This spiritual route connects the major shrines and khanqahs of Karor Lal Esan, offering a deep dive into the mystical traditions of the region.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YajJtYWhhbCUyMGFyY2glMjBwYWtpc3RhbnxlbnwxfHwxfHwxNzcwMDU4NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    relatedExperienceId: 'exp-2',
    path: [
       { lat: 31.2180, lng: 70.9510 }, 
       { lat: 31.2185, lng: 70.9520 }, 
       { lat: 31.2190, lng: 70.9530 }, 
       { lat: 31.2200, lng: 70.9540 }
    ],
    stops: [
      { name: 'Shrine Entrance', type: 'Shrine', description: 'Majestic tiled gateway.', coordinates: { lat: 31.2180, lng: 70.9510 } },
      { name: 'Old Graveyard', type: 'History', description: 'Resting place of disciples.', coordinates: { lat: 31.2185, lng: 70.9520 } },
      { name: 'Old Town Bazaars', type: 'Culture', description: 'Historic market lanes.', coordinates: { lat: 31.2190, lng: 70.9530 } },
      { name: 'Dharmasal', type: 'History', description: 'Multi-faith historic site.', coordinates: { lat: 31.2195, lng: 70.9535 } },
      { name: 'River Bank', type: 'Nature', description: 'Meditation spot by the Indus.', coordinates: { lat: 31.2200, lng: 70.9540 } }
    ]
  },
  {
    id: 'route-2',
    name: 'Fatehpur Sufi & Desert Walk',
    location: 'Fatehpur',
    duration: '3 Hours',
    bestTime: 'Late Afternoon',
    distance: '4.0 km',
    description: 'A unique blend of Sufi spirituality and desert landscape. Visit the center of learning at Bero Sharif and walk to the edge of the Thal desert.',
    image: imgFatehpurWalk,
    relatedExperienceId: null,
    path: [
      { lat: 31.0200, lng: 71.2000 },
      { lat: 31.0250, lng: 71.2100 },
      { lat: 31.0300, lng: 71.2200 }
    ],
    stops: [
      { name: 'Darbar Bero Sharif', type: 'Shrine', description: 'Sufi seminary and shrine.', coordinates: { lat: 31.0200, lng: 71.2000 } },
      { name: 'Date Farms', type: 'Nature', description: 'Lush date palm orchards.', coordinates: { lat: 31.0220, lng: 71.2050 } },
      { name: 'Desert Edge', type: 'Nature', description: 'Where the green meets the sand.', coordinates: { lat: 31.0250, lng: 71.2100 } },
      { name: 'Sunset Point', type: 'Scenic', description: 'Panoramic desert views.', coordinates: { lat: 31.0300, lng: 71.2200 } }
    ]
  },
  {
    id: 'route-3',
    name: 'Layyah City Heritage Walk',
    location: 'Layyah City',
    duration: '2 Hours',
    bestTime: 'Morning',
    distance: '3.0 km',
    description: 'A journey through time in the heart of Layyah. Explore colonial architecture, ancient gates, and the vibrant life of traditional bazaars.',
    image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=1080',
    relatedExperienceId: 'exp-3',
    path: [
       { lat: 30.9680, lng: 70.9430 },
       { lat: 30.9690, lng: 70.9440 },
       { lat: 30.9700, lng: 70.9450 },
       { lat: 30.9720, lng: 70.9410 }
    ],
    stops: [
      { name: 'Bail Chowk', type: 'Landmark', description: 'Historic central square.', coordinates: { lat: 30.9680, lng: 70.9430 } },
      { name: 'Lohari Gate', type: 'Landmark', description: 'Old city entrance.', coordinates: { lat: 30.9685, lng: 70.9435 } },
      { name: 'Sarafa Bazaar', type: 'Market', description: 'Goldsmiths market.', coordinates: { lat: 30.9690, lng: 70.9440 } },
      { name: 'Gol Bagh', type: 'Park', description: 'Community heart.', coordinates: { lat: 30.9700, lng: 70.9450 } },
      { name: 'Jamia Mosque', type: 'Religious', description: 'Spiritual center.', coordinates: { lat: 30.9720, lng: 70.9410 } }
    ]
  },
  {
    id: 'route-4',
    name: 'Thal Desert Cultural Route',
    location: 'Thal Desert',
    duration: '4 Hours',
    bestTime: 'Evening',
    distance: 'Varies',
    description: 'An adventurous route through the dunes, exploring the nomadic traditions and natural beauty of the Thal desert.',
    image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&q=80&w=1080',
    relatedExperienceId: 'exp-1',
    path: [
       { lat: 31.0500, lng: 71.4000 },
       { lat: 31.0700, lng: 71.4500 },
       { lat: 31.1000, lng: 71.5000 }
    ],
    stops: [
      { name: 'Jeep Trails', type: 'Adventure', description: 'Off-road dune tracks.', coordinates: { lat: 31.0500, lng: 71.4000 } },
      { name: 'Nomad Camps', type: 'Culture', description: 'Traditional dwelling spots.', coordinates: { lat: 31.0700, lng: 71.4500 } },
      { name: 'Chickpea Fields', type: 'Agriculture', description: 'Local crop cultivation.', coordinates: { lat: 31.0800, lng: 71.4800 } },
      { name: 'Star Gazing Point', type: 'Scenic', description: 'Clear desert skies.', coordinates: { lat: 31.1000, lng: 71.5000 } }
    ]
  }
];

// --- CULTURAL IDENTITY (Section 5) ---
export const culture = {
  traditions: [
    {
      title: 'Desert Lifestyle',
      description: 'The nomadic way of life in Thal is characterized by resilience and hospitality. The "Thalochis" have a deep bond with their camels and the sandy terrain.',
      image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&q=80&w=1080'
    },
    {
      title: 'Folk Crafts',
      description: 'Layyah is famous for its intricate embroidery, traditional "Khussa" (shoes), and basket weaving using local desert plants.',
      image: 'https://images.unsplash.com/photo-1606673401341-4970722e6298?auto=format&fit=crop&q=80&w=1080'
    }
  ],
  food: [
    { name: 'Sarson da Saag', desc: 'Mustard greens cooked with spices.' },
    { name: 'Makki di Roti', desc: 'Cornmeal flatbread, a winter staple.' },
    { name: 'Lassi', desc: 'Traditional yogurt drink, sweet or salty.' },
    { name: 'Sohan Halwa', desc: 'A rich, sweet confection famous in the region.' }
  ],
  stories: 'The folklore of South Punjab is rich with tales of love, bravery, and mysticism. The desert winds of Thal carry the echoes of Sufi poetry and the songs of camel herders.'
};

export const userProfile = {
  name: 'Ahmed Khan',
  email: 'ahmed.khan@example.com',
  avatar: null
};

export const userBookings = [
  {
    id: 'b-1',
    status: 'Pending',
    date: 'April 02, 2026',
    guests: 2,
    price: 'PKR 10,000',
    experienceId: 'exp-1'
  },
  {
    id: 'b-2',
    status: 'Confirmed',
    date: 'March 20, 2026',
    guests: 4,
    price: 'PKR 6,000',
    experienceId: 'exp-2'
  }
];
