export const tours = [
  {
    id: 'kathmandu-valley',
    title: 'Kathmandu Valley Cultural Heritage Tour',
    location: 'Kathmandu Valley',
    duration: '3 Days / 2 Nights',
    price: 12500,
    rating: 4.8,
    reviewsCount: 124,
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80',
    description: 'Explore UNESCO World Heritage sites including Pashupatinath, Boudhanath, Swayambhunath, and Patan Durbar Square with local heritage guides.',
    overview: 'Journey through medieval royal palaces, ancient pagoda temples, and bustling traditional stupas across Kathmandu, Patan, and Bhaktapur.',
    highlights: [
      'Guided tour of UNESCO Heritage Sites',
      'Sunset view over Kathmandu Valley from Nagarkot hill top',
      'Authentic Newari cultural dinner with classical dance show',
      'Private air-conditioned vehicle throughout the tour'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Kathmandu Durbar Square', details: 'Welcome at Tribhuvan International Airport, transfer to hotel. Afternoon tour of Kathmandu Durbar Square and Swayambhunath Stupa.' },
      { day: 'Day 2', title: 'Pashupatinath, Boudhanath & Bhaktapur', details: 'Morning spiritual visit to Pashupatinath and Boudhanath Stupa. Drive to Bhaktapur Durbar Square to admire ancient pottery and wood carvings.' },
      { day: 'Day 3', title: 'Patan City Tour & Departure', details: 'Explore Patan Golden Temple and Krishna Mandir. Souvenir shopping before airport transfer for final departure.' }
    ],
    included: ['2 Nights Hotel Stay with Breakfast', 'Private Transport', 'Licensed Tour Guide', 'All Entrance Fees'],
    excluded: ['Lunch & Dinner', 'Personal Expenses', 'Tipping for Guide/Driver', 'Travel Insurance']
  },
  {
    id: 'pokhara-lakeside',
    title: 'Pokhara Scenic Paradise Tour',
    location: 'Pokhara Valley',
    duration: '4 Days / 3 Nights',
    price: 18500,
    rating: 4.9,
    reviewsCount: 210,
    category: 'Nature & Sightseeing',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&auto=format&fit=crop&q=80',
    description: 'Relax by Phewa Lake, witness stunning Annapurna sunrise views from Sarangkot, and explore mysterious waterfalls and caves.',
    overview: 'Pokhara is Nepal’s tourism capital. Experience serene lake boating, breathtaking Himalayan reflections, and thrilling sunrise viewpoints.',
    highlights: [
      'Sarangkot Himalayan Sunrise View over Annapurna & Machhapuchhre',
      'Private boat cruise on Fewa Lake to Tal Barahi Temple',
      'Visit Davis Falls, Gupteshwor Cave, and World Peace Pagoda',
      'Optional Ultra-light flight or Paragliding add-on'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Kathmandu to Pokhara Scenic Drive', details: 'Scenic 6-hour highway drive or optional 25-min flight to Pokhara. Hotel check-in and evening stroll on Lakeside.' },
      { day: 'Day 2', title: 'Sarangkot Sunrise & City Sightseeing', details: 'Early morning drive to Sarangkot for Himalayan sunrise. Afternoon visit to Davis Falls, Gupteshwor Cave, and Seti Gorge.' },
      { day: 'Day 3', title: 'World Peace Pagoda & Lake Boating', details: 'Hike or drive to World Peace Pagoda. Afternoon boat ride on Fewa Lake witnessing reflection of Mt. Fishtail.' },
      { day: 'Day 4', title: 'Return Journey to Kathmandu', details: 'Morning breakfast by the lake and drive back to Kathmandu with memorable photographs.' }
    ],
    included: ['3 Nights Deluxe Hotel', 'Breakfast Daily', 'Private Tourist Vehicle', 'Sarangkot Tour'],
    excluded: ['Adventure Activities Fees', 'Lunch & Dinner', 'Personal Shopping', 'Gratuities']
  },
  {
    id: 'chitwan-safari',
    title: 'Chitwan National Park Jungle Safari',
    location: 'Chitwan',
    duration: '3 Days / 2 Nights',
    price: 15500,
    rating: 4.7,
    reviewsCount: 98,
    category: 'Wildlife & Nature',
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=80',
    description: 'Encounter rare one-horned rhinos, Bengal tigers, and exotic bird species in Nepal’s prime national park.',
    overview: 'Immersion in sub-tropical inner Terai jungles with jungle walks, jeep safaris, canoe rides, and authentic Tharu cultural programs.',
    highlights: [
      'Jeep Safari through dense sal forests searching for Royal Bengal Tigers',
      'Traditional dugout canoe ride on Rapti River spotting crocodiles',
      'Tharu cultural stick dance performance',
      'Full board meals (Breakfast, Lunch, Dinner) included'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Tharu Village Walk', details: 'Drive from Kathmandu/Pokhara to Chitwan resort. Welcome drink, briefing, and village tour. Cultural evening program.' },
      { day: 'Day 2', title: 'Canoe Ride & Deep Jungle Jeep Safari', details: 'Morning canoe trip on Rapti River & Elephant Breeding Center visit. Afternoon deep jungle jeep safari.' },
      { day: 'Day 3', title: 'Bird Watching & Departure', details: 'Early morning bird watching walk with expert naturalist guide. Breakfast and return transfer.' }
    ],
    included: ['2 Nights Resort Stay', 'All Meals (Breakfast, Lunch, Dinner)', 'National Park Permit', 'Jungle Guide'],
    excluded: ['Bar Bills', 'Personal Laundry', 'Travel Insurance', 'Tips']
  },
  {
    id: 'lumbini-peace',
    title: 'Lumbini Sacred Birthplace Tour',
    location: 'Lumbini',
    duration: '3 Days / 2 Nights',
    price: 14500,
    rating: 4.6,
    reviewsCount: 76,
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&auto=format&fit=crop&q=80',
    description: 'Visit the sacred birthplace of Lord Buddha, historic Ashoka Pillar, and international Buddhist monasteries.',
    overview: 'A tranquil spiritual pilgrimage to the UNESCO site where Siddhartha Gautama was born in 623 BC.',
    highlights: [
      'Mayadevi Temple & Sacred Pushkarini Pond',
      'Historic Ashoka Pillar erected in 249 BC',
      'Explore Monastic Zone with architecture from 20+ countries',
      'Peaceful rickshaw tour across the sprawling masterplan'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Drive to Lumbini', details: 'Travel from Kathmandu/Pokhara down into southern plains. Hotel check-in and evening rest.' },
      { day: 'Day 2', title: 'Full Day Sacred Garden & Monastic Zone', details: 'Guided tour of Maya Devi Temple, Ashoka Pillar, Eternal Peace Flame, and various global monasteries.' },
      { day: 'Day 3', title: 'Tilaurakot Visit & Departure', details: 'Visit ancient Kapilvastu palace ruins in Tilaurakot before return journey.' }
    ],
    included: ['2 Nights Hotel Stay', 'Breakfast Daily', 'Local Monastery Guide', 'Private Transport'],
    excluded: ['Lunch & Dinner', 'Monastery donations', 'Personal expenses']
  },
  {
    id: 'everest-view-trek',
    title: 'Everest View Panorama Trek',
    location: 'Everest Region',
    duration: '7 Days / 6 Nights',
    price: 45000,
    rating: 4.9,
    reviewsCount: 180,
    category: 'Trekking',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80',
    description: 'Trek through iconic Sherpa capital Namche Bazaar to Everest View Hotel for panoramic vistas of Mt. Everest and Ama Dablam.',
    overview: 'Ideal for travelers with limited time who wish to experience Khumbu mountains, suspension bridges, and Sherpa culture without extreme altitude.',
    highlights: [
      'Thrilling flight into mountain airstrip of Lukla',
      'Explore famous Namche Bazaar mountain town',
      'Breathtaking sunrise over Mt. Everest (8,848m), Lhotse, and Ama Dablam',
      'Visit Tengboche Monastery surrounded by icy peaks'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Flight to Lukla & Trek to Phakding', details: 'Scenic 35-min mountain flight to Lukla (2,800m). Easy 3-hour downhill trek along Dudh Koshi river to Phakding.' },
      { day: 'Day 2', title: 'Trek to Namche Bazaar (3,440m)', details: 'Cross famous Hillary suspension bridges and climb up through pine forest into Sherpa hub Namche.' },
      { day: 'Day 3', title: 'Acclimatization & Everest View Hotel', details: 'Day hike up to Everest View Hotel (3,880m) for panoramic views. Visit Sherpa Museum.' },
      { day: 'Day 4', title: 'Trek to Tengboche Monastery', details: 'Trek with close-up vistas of Ama Dablam to historic Tengboche Monastery (3,860m).' },
      { day: 'Day 5', title: 'Return Trek to Monjo', details: 'Retrace footsteps down along river valley to Monjo village.' },
      { day: 'Day 6', title: 'Trek back to Lukla', details: 'Final day on trail returning to Lukla for celebratory evening with trekking team.' },
      { day: 'Day 7', title: 'Flight back to Kathmandu', details: 'Early flight back to Kathmandu and hotel transfer.' }
    ],
    included: ['Roundtrip Flights Kathmandu-Lukla', 'Sagarmatha Park Permit & TIMS', 'Licensed Sherpa Guide & Porter', 'Tea House Lodging'],
    excluded: ['Trek Meals (Pay directly)', 'Hot Showers & Wifi in Lodge', 'Travel & Rescue Insurance']
  },
  {
    id: 'annapurna-circuit',
    title: 'Annapurna Base Camp Sanctuary Trek',
    location: 'Annapurna Region',
    duration: '8 Days / 7 Nights',
    price: 55000,
    rating: 4.9,
    reviewsCount: 230,
    category: 'Trekking',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
    description: 'Stand inside the 360-degree natural amphitheater of giant Annapurna peaks at 4,130m altitude.',
    overview: 'Walk through rhododendron forests, Gurung villages, and narrow river canyons opening into the dramatic high-altitude Annapurna Sanctuary.',
    highlights: [
      'Reach Annapurna Base Camp (4,130m) directly beneath South Annapurna face',
      'Soak in natural hot springs at Jhinu Danda',
      'Explore ethnic Gurung culture in Ghandruk village',
      'Panoramic 360-degree views of Machhapuchhre & Hiunchuli'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Pokhara to Nayapul & Trek to Jhinu Danda', details: 'Drive from Pokhara to trail head and trek to Jhinu. Relax in riverside natural hot springs.' },
      { day: 'Day 2', title: 'Trek to Bamboo / Dovan', details: 'Climb steep stairs through Chhomrong and descent into Modi Khola river valley.' },
      { day: 'Day 3', title: 'Trek to Deurali', details: 'Ascend through bamboo and oak forests past Hinku Cave to Deurali at 3,200m.' },
      { day: 'Day 4', title: 'Reach Machhapuchhre & Annapurna Base Camp', details: 'Trek past Machhapuchhre Base Camp into the broad mountain bowl of ABC (4,130m).' },
      { day: 'Day 5', title: 'Sunrise at ABC & Trek to Bamboo', details: 'Spectacular golden sunrise over Annapurna I. Descend back down valley.' },
      { day: 'Day 6', title: 'Trek to Chhomrong / Ghandruk', details: 'Trek across terraced fields to traditional stone village of Ghandruk.' },
      { day: 'Day 7', title: 'Trek to Nayapul & Drive to Pokhara', details: 'Final descent to highway, drive back to Pokhara for lakeside celebration.' },
      { day: 'Day 8', title: 'Return to Kathmandu', details: 'Drive or fly back to Kathmandu.' }
    ],
    included: ['ACAP & TIMS Permits', 'Experienced Guide & Porters', 'Lodge Accommodation', 'Pokhara Private Transfers'],
    excluded: ['Food on Trek', 'Personal Gear & Sleeping Bag', 'Emergency Helicopter Cover']
  },
  {
    id: 'mustang-expedition',
    title: 'Forbidden Kingdom of Mustang Overland',
    location: 'Upper Mustang',
    duration: '7 Days / 6 Nights',
    price: 65000,
    rating: 4.8,
    reviewsCount: 88,
    category: 'Adventure Drive',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&auto=format&fit=crop&q=80',
    description: 'Explore trans-Himalayan rain-shadow landscapes, walled city of Lo Manthang, and ancient cliff cave dwellings.',
    overview: 'A high-altitude 4x4 Jeep adventure into the ancient Tibetan-influenced Buddhist kingdom north of the main Himalayan wall.',
    highlights: [
      'Explore 15th-century walled city of Lo Manthang',
      'Visit mysterious sky caves and Muktinath sacred Temple (3,800m)',
      'Drive through deepest gorge in the world (Kali Gandaki)',
      'Dry desert canyon landscape with red clay cliffs'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Pokhara to Jomsom & Kagbeni', details: 'Jeep ride along Kali Gandaki riverbed past Tatopani to Kagbeni Gateway.' },
      { day: 'Day 2', title: 'Kagbeni to Ghami village', details: 'Cross high Himalayan passes with dramatic views into Mustang canyon.' },
      { day: 'Day 3', title: 'Ghami to Walled City Lo Manthang', details: 'Drive past Nepal’s longest mani wall to the capital city Lo Manthang.' },
      { day: 'Day 4', title: 'Lo Manthang & Chhoser Sky Caves', details: 'Excursion to Chhoser sky caves and ancient Buddhist monasteries.' },
      { day: 'Day 5', title: 'Lo Manthang to Muktinath Sacred Temple', details: 'Drive back south to Muktinath, famed for 108 holy water spouts.' },
      { day: 'Day 6', title: 'Muktinath to Tatopani Hot Springs', details: 'Descent down to lush subtropical Tatopani for warm evening bath.' },
      { day: 'Day 7', title: 'Tatopani to Pokhara / Kathmandu', details: 'Final leg drive back to Pokhara concluding Mustang adventure.' }
    ],
    included: ['4WD Land Cruiser / Scorpio Jeep', 'Restricted Area Permit', 'Expert Mustang Guide', 'Guesthouse Accommodation'],
    excluded: ['Meals', 'Tips', 'Personal Expenses']
  },
  {
    id: 'nepal-grand-tour',
    title: 'Grand Nepal Highlights Multi-Destination',
    location: 'Kathmandu, Pokhara, Chitwan & Nagarkot',
    duration: '10 Days / 9 Nights',
    price: 85000,
    rating: 5.0,
    reviewsCount: 310,
    category: 'Full Nepal Experience',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
    description: 'The ultimate complete Nepal vacation covering culture in Kathmandu, wildlife in Chitwan, mountains in Pokhara, and Himalayan sunrise in Nagarkot.',
    overview: 'Designed for travelers who want to sample every facet of Nepal—heritages, jungles, mountain lakes, and luxury resorts.',
    highlights: [
      'Comprehensive UNESCO World Heritage Tour in Kathmandu Valley',
      '2 Nights Luxury Jungle Resort with full safari package in Chitwan',
      '3 Nights in Pokhara with Fewa Boating & Sarangkot Sunrise',
      'Overnight stay at Nagarkot hill resort overlooking Everest range'
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'Kathmandu Cultural Heritage', details: 'Pashupatinath, Boudhanath, Patan & Kathmandu Durbar Square.' },
      { day: 'Day 3-4', title: 'Chitwan Wildlife Jungle Safari', details: 'Drive to Chitwan. Canoe ride, jeep safari, Tharu dance show.' },
      { day: 'Day 5-7', title: 'Pokhara Lakeside & Annapurna Panoramas', details: 'Drive to Pokhara. Sarangkot sunrise, Fewa boat ride, Peace Pagoda.' },
      { day: 'Day 8', title: 'Drive back to Nagarkot Hill Station', details: 'Scenic drive to Nagarkot for panoramic Himalayan sunset view.' },
      { day: 'Day 9', title: 'Bhaktapur City Tour', details: 'Explore ancient Bhaktapur city and return to Kathmandu luxury hotel.' },
      { day: 'Day 10', title: 'Final Souvenir Shopping & Departure', details: 'Airport transfer with traditional Nepalese farewell Khada.' }
    ],
    included: ['9 Nights 4-Star Accommodations', 'All Transfers in AC Vehicle', 'All Permits & Entrance Fees', 'Full Board in Chitwan, Breakfast elsewhere'],
    excluded: ['International Flights', 'Personal Expenses', 'Tipping']
  }
];