import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

const services = [
  
  {
    value: "electrician",
    label: "Electrician",
    subServices: [
      "Wiring",
      "Switch Replacement",
      "Appliance Repair",
      "Lighting Installation",
      "Circuit Breaker Repair",
      "Fan Installation",
    ],
  },
  {
    value: "carpenter",
    label: "Carpenter",
    subServices: [
      "Furniture Repair",
      "Custom Woodwork",
      "Cabinet Installation",
      "Door & Window Repair",
      "Deck & Fence Repair",
    ],
  },
  {
    value: "plumber",
    label: "Plumber",
    subServices: [
      "Leak Repair",
      "Pipe Installation",
      "Clogged Drain Cleaning",
      "Water Heater Repair",
      "Toilet Repair",
      "Sewer Line Repair",
    ],
  },
  {
    value: "painter",
    label: "Painter",
    subServices: [
      "Interior Painting",
      "Exterior Painting",
      "Wallpaper Installation",
      "Spray Painting",
      "Wall Texturing",
    ],
  },
  {
    value: "gardener",
    label: "Gardener",
    subServices: [
      "Lawn Mowing",
      "Weed Removal",
      "Hedge Trimming",
      "Garden Maintenance",
      "Tree Pruning",
      "Flower Bed Installation",
    ],
  },
  {
    value: "mechanic",
    label: "Mechanic",
    subServices: [
      "Car Repair",
      "Oil Change",
      "Brake Service",
      "Engine Diagnostics",
      "Battery Replacement",
      "Wheel Alignment",
    ],
  },
  {
    value: "locksmith",
    label: "Locksmith",
    subServices: [
      "Key Duplication",
      "Lock Installation",
      "Emergency Lockout Services",
      "Smart Lock Setup",
      "Rekeying",
    ],
  },
  {
    value: "handyman",
    label: "Handyman",
    subServices: [
      "Furniture Assembly",
      "TV Mounting",
      "Picture Hanging",
      "Gutter Cleaning",
      "Door Repairs",
      "Minor Home Repairs",
    ],
  },
  {
    value: "welder",
    label: "Welder",
    subServices: [
      "Gate Welding",
      "Metal Fabrication",
      "Fence Welding",
      "Grill & Railing Welding",
      "Custom Metal Work",
    ],
  },
  {
    value: "pest_control",
    label: "Pest Control",
    subServices: [
      "Termite Control",
      "Rodent Removal",
      "Bed Bug Treatment",
      "Mosquito Control",
      "Cockroach Treatment",
    ],
  },
  {
    value: "roofer",
    label: "Roofer",
    subServices: [
      "Roof Leak Repair",
      "Shingle Replacement",
      "Flat Roof Repair",
      "Metal Roofing",
      "Gutter Installation",
    ],
  },
  {
    value: "tiler",
    label: "Tiler",
    subServices: [
      "Floor Tiling",
      "Wall Tiling",
      "Bathroom Tiling",
      "Kitchen Backsplash Installation",
      "Tile Grouting & Repair",
    ],
  },
  {
    value: "appliance_repair",
    label: "Appliance Repair",
    subServices: [
      "Refrigerator Repair",
      "Washing Machine Repair",
      "Microwave Repair",
      "Dishwasher Repair",
      "AC Repair",
      "Oven Repair",
    ],
  },
  {
    value: "flooring_specialist",
    label: "Flooring Specialist",
    subServices: [
      "Hardwood Floor Installation",
      "Laminate Flooring",
      "Tile Flooring",
      "Vinyl Flooring",
      "Floor Polishing",
      "Carpet Installation",
    ],
  },
];


//form steps

const steps = [
  "Select service and description",
  "Upload photo (optional)",
  "Select location and time",
];

// mui style for modal

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const labels = {
  1: "Very Poor 😭",

  2: "Poor 🥲",

  3: "Ok 🥱",

  4: "Good👍",

  5: "Excellent 😍",
};

function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;

  const R = 6371; // Radius of the Earth in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers
  return distance.toFixed(2);
}

const marks = [
  {
    value: 0,
    label: "0 km",
  },
  {
    value: 5,
    label: "5 km",
  },
  {
    value: 10,
    label: "10 km ",
  },
  {
    value: 15,
    label: "15 km",
  },
  {
    value: 20,
    label: "20 km",
  },
];


export {
  services,
  steps,
  style,
  StyledTableCell,
  StyledTableRow,
  labels,
  calculateDistance,
  marks,
};
