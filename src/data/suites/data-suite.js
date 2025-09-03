import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const suites = [
  {
    name: "Imperial Suite A",
    maxCapacity: 2,
    price: 550,
    discount: 0,
    image: imageUrl + "suite-001.jpg",
    description:
      "Experience ultimate luxury in Imperial Suite A. Featuring a king-size bed, elegant living area, marble bathroom, and private balcony with stunning city views.",
  },
  {
    name: "Imperial Suite B",
    maxCapacity: 2,
    price: 560,
    discount: 0,
    image: imageUrl + "suite-002.jpg",
    description:
      "Imperial Suite B offers refined elegance with a spacious lounge, king-size bed, marble bathroom, and breathtaking cityscape views.",
  },
  {
    name: "Grand Horizon Suite A",
    maxCapacity: 4,
    price: 750,
    discount: 100,
    image: imageUrl + "suite-003.jpg",
    description:
      "Grand Horizon Suite A provides a luxurious family experience. Two bedrooms, large lounge, kitchenette, and panoramic city views.",
  },
  {
    name: "Grand Horizon Suite B",
    maxCapacity: 4,
    price: 760,
    discount: 100,
    image: imageUrl + "suite-004.jpg",
    description:
      "Grand Horizon Suite B combines spacious luxury with elegant interiors. Includes two bedrooms, modern amenities, and stunning skyline views.",
  },
  {
    name: "Regal Ocean Suite A",
    maxCapacity: 2,
    price: 680,
    discount: 50,
    image: imageUrl + "suite-005.jpg",
    description:
      "Relax in Regal Ocean Suite A with king-size bed, private terrace, jacuzzi, and contemporary design overlooking the ocean.",
  },
  {
    name: "Regal Ocean Suite B",
    maxCapacity: 2,
    price: 690,
    discount: 50,
    image: imageUrl + "suite-006.jpg",
    description:
      "Regal Ocean Suite B offers sophisticated interiors, ocean-facing terrace, king-size bed, and luxurious lounge space.",
  },
  {
    name: "Prestige Skyline Suite A",
    maxCapacity: 3,
    price: 720,
    discount: 0,
    image: imageUrl + "suite-007.jpg",
    description:
      "Prestige Skyline Suite A blends elegance and comfort. Spacious lounge, marble bathroom, modern amenities, and skyline views.",
  },
  {
    name: "Prestige Skyline Suite B",
    maxCapacity: 3,
    price: 730,
    discount: 0,
    image: imageUrl + "suite-008.jpg",
    description:
      "Prestige Skyline Suite B provides a refined stay with luxurious furnishings, modern bathroom, and breathtaking city vistas.",
  },
  {
    name: "Majestic Garden Suite A",
    maxCapacity: 4,
    price: 650,
    discount: 0,
    image: imageUrl + "suite-009.jpg",
    description:
      "Majestic Garden Suite A offers two bedrooms, elegant living area, private terrace, and serene garden views for a perfect family stay.",
  },
  {
    name: "Majestic Garden Suite B",
    maxCapacity: 4,
    price: 660,
    discount: 0,
    image: imageUrl + "suite-010.jpg",
    description:
      "Majestic Garden Suite B features luxurious interiors, spacious lounge, two bedrooms, and a private balcony overlooking the lush garden.",
  },
];
