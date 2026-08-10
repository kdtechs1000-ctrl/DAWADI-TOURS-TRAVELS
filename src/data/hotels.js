export const hotels = [
  {
    id: 'kathmandu-grand-hotel',
    name: 'Kathmandu Heritage & Spa Hotel',
    location: 'Thamel, Kathmandu',
    starRating: 5,
    guestRating: 4.8,
    reviewsCount: 340,
    pricePerNight: 8500,
    image: 'https://cdn.esewahotels.com/web/blogs/1763118844-1949600400.jpg',
    description: 'A quiet oasis in bustling Thamel featuring traditional Newari brick architecture, lush inner courtyards, and world-class spa treatment.',
    facilities: ['Wi-Fi', 'Parking', 'Restaurant', 'Swimming Pool', 'Breakfast', 'Airport Pickup'],
    rooms: [
      { type: 'Standard Room', price: 8500, capacity: '2 Adults', features: ['King Bed', 'Free Wi-Fi', 'Air Conditioning', 'City View'] },
      { type: 'Deluxe Room', price: 11500, capacity: '2 Adults, 1 Child', features: ['Balcony View', 'Breakfast Included', 'Bathtub', 'Minibar'] },
      { type: 'Royal Heritage Suite', price: 18500, capacity: '3 Adults', features: ['Living Area', 'Garden View', 'Free Spa Pass', 'Airport Shuttle'] }
    ]
  },
  {
    id: 'pokhara-lakeside-resort',
    name: 'Pokhara Mountain & Lake Resort',
    location: 'Lakeside, Pokhara',
    starRating: 4,
    guestRating: 4.9,
    reviewsCount: 420,
    pricePerNight: 6500,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8f/ce/33/mountain-glory-forest.jpg?w=900&h=500&s=1',
    description: 'Situated right on Fewa Lake with uninterrupted views of Mt. Fishtail. Features outdoor pool, waterfront dining, and kayak rentals.',
    facilities: ['Wi-Fi', 'Parking', 'Restaurant', 'Swimming Pool', 'Breakfast'],
    rooms: [
      { type: 'Standard Lake View', price: 6500, capacity: '2 Adults', features: ['Queen Bed', 'Lake View Balcony', 'Wi-Fi'] },
      { type: 'Deluxe Himalayan Suite', price: 9500, capacity: '2 Adults', features: ['Direct Panoramic Lake & Mountain View', 'Jacuzzi', 'Breakfast'] }
    ]
  },
  {
    id: 'chitwan-jungle-lodge',
    name: 'Chitwan Wildlife Luxury Lodge',
    location: 'Sauraha, Chitwan',
    starRating: 4,
    guestRating: 4.7,
    reviewsCount: 190,
    pricePerNight: 7200,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/43/f6/a9/chitwan-jungle-lodge.jpg?w=1200&h=-1&s=1',
    description: 'Eco-friendly jungle lodge on the bank of Rapti River. Enjoy dinner watching rhinos drink across the river.',
    facilities: ['Wi-Fi', 'Parking', 'Restaurant', 'Swimming Pool', 'Breakfast', 'Airport Pickup'],
    rooms: [
      { type: 'Tharu Cottage', price: 7200, capacity: '2 Adults', features: ['Tharu Design', 'Air Conditioning', 'Jungle View Terrace'] },
      { type: 'Riverside Luxury Suite', price: 10500, capacity: '3 Adults', features: ['River View', 'All Meals Included', 'Private Guide'] }
    ]
  },
  {
    id: 'lumbini-peace-hotel',
    name: 'Lumbini Heritage Buddha Hotel',
    location: 'Lumbini Garden',
    starRating: 3,
    guestRating: 4.5,
    reviewsCount: 110,
    pricePerNight: 4500,
    image: 'https://www.lumbiniheritagenepal.com.np/images/slideshow/TDCZE-photo.jpg',
    description: 'Tranquil retreat located just 5 minutes from the Sacred Garden. Peaceful gardens, meditation pavilion, and vegetarian dining.',
    facilities: ['Wi-Fi', 'Parking', 'Restaurant', 'Breakfast'],
    rooms: [
      { type: 'Standard Room', price: 4500, capacity: '2 Adults', features: ['Twin/Double Bed', 'Silent AC', 'Garden Access'] },
      { type: 'Deluxe Family Room', price: 6800, capacity: '4 Guests', features: ['2 King Beds', 'Spacious Balcony', 'Breakfast'] }
    ]
  },
  {
    id: 'nagarkot-view-resort',
    name: 'Nagarkot Panoramic Horizon Resort',
    location: 'Nagarkot Top',
    starRating: 4,
    guestRating: 4.8,
    reviewsCount: 260,
    pricePerNight: 5800,
    image: 'https://www.pelago.com/img/products/NP-Nepal/a-lavish-night-at-nagarkot-hill-station-with-sunrise-view-and-luxury-stay/c60a39be-811f-4c29-9021-9d2a89c35963_a-lavish-night-at-nagarkot-hill-station-with-sunrise-view-and-luxury-stay.jpg',
    description: 'Perched at 2,100 meters elevation. Watch sunrise over 8 Himalayan mountain ranges directly from your private bedroom glass window.',
    facilities: ['Wi-Fi', 'Parking', 'Restaurant', 'Breakfast'],
    rooms: [
      { type: 'Sunrise Room', price: 5800, capacity: '2 Adults', features: ['Full Glass Window View', 'Heater', 'Balcony'] },
      { type: 'Himalayan Panorama Suite', price: 8800, capacity: '2 Adults', features: ['Top Floor Corner View', 'Fireplace', 'Breakfast'] }
    ]
  },
  {
    id: 'mustang-mountain-lodge',
    name: 'Mustang Grand Stone Lodge',
    location: 'Jomsom / Mustang',
    starRating: 3,
    guestRating: 4.6,
    reviewsCount: 85,
    pricePerNight: 5200,
    image: 'https://accessnepaltour.com/wp-content/uploads/2026/05/Shintamani-Resort.webp',
    description: 'Warm stone mountain lodge built in classic Himalayan style with cozy wood heating, warm blankets, and organic local meals.',
    facilities: ['Wi-Fi', 'Parking', 'Restaurant', 'Breakfast'],
    rooms: [
      { type: 'Mountain View Standard', price: 5200, capacity: '2 Adults', features: ['Insulated Room', 'Hot Water Shower', 'Mountain View'] }
    ]
  }
];