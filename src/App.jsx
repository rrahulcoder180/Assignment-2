import { useState } from "react";
import "./App.css";

const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Goa",
  "Jaipur",
  "Ahmedabad",
  "Pune",
  "Lucknow",
  "Chandigarh",
  "Nagpur",
  "Patna",
  "Bhubaneswar",
  "Thiruvananthapuram",
  "Kochi",
  "Visakhapatnam",
  "Indore",
  "Varanasi",
  "Mysore",
  "Guwahati",
  "Amritsar",
  "Jodhpur",
  "Ranchi",
  "Dehradun",
  "Bhopal",
  "Raipur",
  "Jabalpur",
  "Agra",
  "Udaipur",
  "Gwalior",
  "Ajmer",
  "Jammu",
  "Shimla",
  "Rajkot",
  "Surat",
  "Vadodara",
  "Jamnagar",
  "Jaisalmer",
  "Kota",
  "Aligarh",
  "Allahabad",
  "Bareilly",
  "Bikaner",
  "Nashik",
  "Aurangabad",
  "Kolhapur",
  "Srinagar",
  "Durgapur",
  "Tirupati",
  "Salem",
  "Warangal",
  "Jalandhar",
  "Mangalore",
  "Belgaum",
  "Hubli",
  "Tiruchirappalli",
  "Vijayawada",
  "Coimbatore",
  "Madurai",
  "Gorakhpur",
  "Jamshedpur",
  "Rourkela",
  "Dhanbad",
  "Asansol",
  "Bhilai",
  "Dharamshala",
  "Kozhikode",
  "Thrissur",
];

const airportCodes = {
  Mumbai: "BOM",
  Delhi: "DEL",
  Bangalore: "BLR",
  Hyderabad: "HYD",
  Chennai: "MAA",
  Kolkata: "CCU",
  Goa: "GOI",
  Jaipur: "JAI",
  Ahmedabad: "AMD",
  Pune: "PNQ",
  Lucknow: "LKO",
  Chandigarh: "IXC",
  Nagpur: "NAG",
  Patna: "PAT",
  Bhubaneswar: "BBI",
  Thiruvananthapuram: "TRV",
  Kochi: "COK",
  Visakhapatnam: "VTZ",
  Indore: "IDR",
  Varanasi: "VNS",
  Mysore: "MYQ",
  Guwahati: "GAU",
  Amritsar: "ATQ",
  Jodhpur: "JDH",
  Ranchi: "IXR",
  Dehradun: "DED",
  Bhopal: "BHO",
  Raipur: "RPR",
  Jabalpur: "JLR",
  Agra: "AGR",
  Udaipur: "UDR",
  Gwalior: "GWL",
  Ajmer: "KQH",
  Jammu: "IXJ",
  Shimla: "SLV",
  Rajkot: "RAJ",
  Surat: "STV",
  Vadodara: "BDQ",
  Jamnagar: "JGA",
  Jaisalmer: "JSA",
  Kota: "KTU",
  Aligarh: "HRH",
  Allahabad: "IXD",
  Bareilly: "BEK",
  Bikaner: "BKB",
  Nashik: "ISK",
  Aurangabad: "IXU",
  Kolhapur: "KLH",
  Srinagar: "SXR",
  Durgapur: "RDP",
  Tirupati: "TIR",
  Salem: "SXV",
  Warangal: "WGC",
  Jalandhar: "AIP",
  Mangalore: "IXE",
  Belgaum: "IXG",
  Hubli: "HBX",
  Tiruchirappalli: "TRZ",
  Vijayawada: "VGA",
  Coimbatore: "CJB",
  Madurai: "IXM",
  Gorakhpur: "GOP",
  Jamshedpur: "IXW",
  Rourkela: "RRK",
  Dhanbad: "DBD",
  Asansol: "RDP",
  Bhilai: "BIA",
  Dharamshala: "DHM",
  Kozhikode: "CCJ",
  Thrissur: "TCR",
};

const airlines = [
  { name: "SkyAir", logo: "✈️" },
  { name: "IndiGo", logo: "🔵" },
  { name: "AirVista", logo: "🔴" },
];

const basePrices = {
  "Mumbai-Delhi": 3899,
  "Mumbai-Bangalore": 3199,
  "Mumbai-Hyderabad": 2999,
  "Mumbai-Chennai": 3499,
  "Mumbai-Kolkata": 4299,
  "Mumbai-Goa": 2499,
  "Mumbai-Jaipur": 3299,
  "Mumbai-Ahmedabad": 2799,
  "Mumbai-Pune": 1999,
};

function createFlights(from, to) {
  const key = `${from}-${to}`;
  const reverseKey = `${to}-${from}`;

  const basePrice =
    basePrices[key] ||
    basePrices[reverseKey] ||
    3499;

  const fromCode =
    airportCodes[from] ||
    from.substring(0, 3).toUpperCase();

  const toCode =
    airportCodes[to] ||
    to.substring(0, 3).toUpperCase();

  return [
    {
      id: 1,
      airline: airlines[0].name,
      logo: airlines[0].logo,
      flight: "SA 204",
      from: fromCode,
      to: toCode,
      departure: "06:30",
      arrival: "08:45",
      duration: "2h 15m",
      stops: "Non-stop",
      price: basePrice + 400,
      score: 94,
    },
    {
      id: 2,
      airline: airlines[1].name,
      logo: airlines[1].logo,
      flight: "6E 531",
      from: fromCode,
      to: toCode,
      departure: "09:15",
      arrival: "11:35",
      duration: "2h 20m",
      stops: "Non-stop",
      price: basePrice,
      score: 91,
    },
    {
      id: 3,
      airline: airlines[2].name,
      logo: airlines[2].logo,
      flight: "AV 718",
      from: fromCode,
      to: toCode,
      departure: "12:40",
      arrival: "15:15",
      duration: "2h 35m",
      stops: "Non-stop",
      price: basePrice - 300,
      score: 88,
    },
    {
      id: 4,
      airline: airlines[0].name,
      logo: airlines[0].logo,
      flight: "SA 410",
      from: fromCode,
      to: toCode,
      departure: "17:20",
      arrival: "19:40",
      duration: "2h 20m",
      stops: "Non-stop",
      price: basePrice + 500,
      score: 86,
    },
  ];
}

function App() {
  /* =========================
     FLIGHT STATES
  ========================= */

  const [from, setFrom] = useState("Mumbai");
  const [to, setTo] = useState("Delhi");
  const [departureDate, setDepartureDate] = useState("");

  const [passengers, setPassengers] = useState(1);
  const [showPassengers, setShowPassengers] = useState(false);

  const [searched, setSearched] = useState(false);

  /* =========================
     OFFERS
  ========================= */

  const [activeOffer, setActiveOffer] = useState(null);
  const [showOffers, setShowOffers] = useState(false);

  const offerDiscounts = {
    "Student Special": 500,
    "Weekend Escape": 700,
    "First Booking": 800,
    "Smart Saver": 1000,
  };

  /* =========================
     HOTEL STATES
  ========================= */

  const [showHotels, setShowHotels] = useState(false);
  const [hotelSearched, setHotelSearched] = useState(false);
  const [hotelCity, setHotelCity] = useState("Mumbai");
  const [hotelCheckIn, setHotelCheckIn] = useState("");
  const [hotelCheckOut, setHotelCheckOut] = useState("");
  const [hotelGuests, setHotelGuests] = useState(2);

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [hotelBooked, setHotelBooked] = useState(false);

  const hotels = [
    {
      id: 1,
      name: "SkyNova Grand Mumbai",
      location: "Andheri, Mumbai",
      rating: 4.7,
      reviews: 1248,
      room: "Deluxe Room",
      amenities: ["Wi-Fi", "Breakfast", "Pool"],
      price: 3499,
      oldPrice: 4299,
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      rooms: [
        {
          name: "Deluxe Room",
          price: 3499,
          guests: 2,
          features: ["King Bed", "Breakfast", "Free Wi-Fi"],
        },
        {
          name: "Premium Suite",
          price: 4999,
          guests: 3,
          features: ["King Bed", "Breakfast", "Pool Access"],
        },
      ],
    },
    {
      id: 2,
      name: "Azure Palace",
      location: "Bandra West, Mumbai",
      rating: 4.5,
      reviews: 892,
      room: "Premium Room",
      amenities: ["Wi-Fi", "Breakfast", "Gym"],
      price: 4299,
      oldPrice: 5199,
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      rooms: [
        {
          name: "Premium Room",
          price: 4299,
          guests: 2,
          features: ["Queen Bed", "Breakfast", "Gym Access"],
        },
        {
          name: "Executive Suite",
          price: 5799,
          guests: 3,
          features: ["King Bed", "Breakfast", "City View"],
        },
      ],
    },
    {
      id: 3,
      name: "Urban Nest Hotel",
      location: "Powai, Mumbai",
      rating: 4.3,
      reviews: 641,
      room: "Executive Room",
      amenities: ["Wi-Fi", "Parking", "Breakfast"],
      price: 2899,
      oldPrice: 3599,
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      rooms: [
        {
          name: "Executive Room",
          price: 2899,
          guests: 2,
          features: ["Queen Bed", "Parking", "Breakfast"],
        },
        {
          name: "Family Room",
          price: 4199,
          guests: 4,
          features: ["Twin Beds", "Breakfast", "Parking"],
        },
      ],
    },
    {
      id: 4,
      name: "The Royal Horizon",
      location: "Juhu, Mumbai",
      rating: 4.8,
      reviews: 1567,
      room: "Luxury Room",
      amenities: ["Wi-Fi", "Pool", "Spa"],
      price: 5999,
      oldPrice: 7499,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      rooms: [
        {
          name: "Luxury Room",
          price: 5999,
          guests: 2,
          features: ["King Bed", "Pool", "Spa Access"],
        },
        {
          name: "Royal Suite",
          price: 8499,
          guests: 4,
          features: ["King Bed", "Private Lounge", "Spa Access"],
        },
      ],
    },
  ];

  /* =========================
     FLIGHT BOOKING STATES
  ========================= */

  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookingStep, setBookingStep] = useState(null);
  const [selectedFare, setSelectedFare] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const [myTrips, setMyTrips] = useState(() => {
    const savedTrips = localStorage.getItem("skynovaTrips");

    return savedTrips
      ? JSON.parse(savedTrips)
      : [];
  });

  const [passengerName, setPassengerName] = useState("");

  const [sortBy, setSortBy] = useState("recommended");

  const [selectedStops, setSelectedStops] = useState([
    "Non-stop",
  ]);

  const [selectedAirlines, setSelectedAirlines] =
    useState([
      "SkyAir",
      "IndiGo",
      "AirVista",
    ]);

  /* =========================
     LOGIN
  ========================= */

  const [loginOpen, setLoginOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("skynovaUser") === "true"
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  /* =========================
     PRICE CALCULATIONS
  ========================= */

  const offerDiscount = activeOffer
    ? offerDiscounts[activeOffer] || 0
    : 0;

  const fareUpgrade =
    selectedFare === "Saver"
      ? 0
      : selectedFare === "Smart"
      ? 900
      : selectedFare === "Flex"
      ? 1800
      : 0;

  const finalBookingPrice = selectedFlight
    ? Math.max(
        0,
        selectedFlight.price +
          fareUpgrade +
          499 -
          offerDiscount
      )
    : 0;

  /* =========================
     FUNCTIONS
  ========================= */

  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };

  const goHome = () => {
    setSearched(false);
    setSelectedFlight(null);
    setBookingStep(null);
    setShowOffers(false);
    setShowHotels(false);
    setHotelSearched(false);
    setSelectedHotel(null);
    setSelectedRoom(null);

    window.scrollTo(0, 0);
  };

  const handleSearch = () => {
    setError("");

    if (!from || !to) {
      setError(
        "Please select your departure and arrival cities."
      );
      return;
    }

    if (from === to) {
      setError(
        "From and To cities cannot be the same."
      );
      return;
    }

    if (!departureDate) {
      setError(
        "Please select your departure date."
      );
      return;
    }

    if (passengers < 1) {
      setError(
        "Please select at least one traveller."
      );
      return;
    }

    setSearched(true);
    setSelectedFlight(null);
    setShowOffers(false);
    setShowHotels(false);

    window.scrollTo(0, 0);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert(
        "Please enter email and password."
      );
      return;
    }

    localStorage.setItem(
      "skynovaUser",
      "true"
    );

    setLoggedIn(true);
    setLoginOpen(false);

    alert(
      "Login successful! Welcome to SkyNova."
    );
  };

  const handleBooking = () => {
    if (!selectedFlight) return;

    if (!loggedIn) {
      setLoginOpen(true);
      return;
    }

    setBookingStep("fare");
    window.scrollTo(0, 0);
  };

  /* =========================
     FLIGHT FILTERING
  ========================= */

  let flights = createFlights(
    from,
    to
  );

  flights = flights.filter((flight) => {
    const stopMatch =
      selectedStops.includes(
        flight.stops
      );

    const airlineMatch =
      selectedAirlines.includes(
        flight.airline
      );

    return stopMatch && airlineMatch;
  });

  if (sortBy === "price") {
    flights = [...flights].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortBy === "score") {
    flights = [...flights].sort(
      (a, b) => b.score - a.score
    );
  }

  /* =========================
     RENDER
  ========================= */

  return (
    <div className="app">

      {/* GLOBAL NIGHT SKY */}

      <div
        className="global-sky-bg"
        aria-hidden="true"
      >
        <div className="sky-moon"></div>

        <div className="sky-stars">
          <span>✦</span>
          <span>·</span>
          <span>✧</span>
          <span>·</span>
          <span>✦</span>
          <span>·</span>
          <span>✧</span>
          <span>✦</span>
          <span>·</span>
          <span>✧</span>
          <span>·</span>
          <span>✦</span>
        </div>

        <div className="flying-plane-global">
          ✈
        </div>

        <div className="plane-trail"></div>
      </div>

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <div
          className="logo"
          onClick={goHome}
          style={{ cursor: "pointer" }}
        >
          ✈️ <span>Sky</span>Nova
        </div>

        <div className="nav-links">

          <button
            onClick={goHome}
          >
            Flights
          </button>

          <button
            onClick={() => {
              setShowHotels(true);
              setShowOffers(false);
              setSearched(false);
              setSelectedFlight(null);
              setBookingStep(null);
              setHotelSearched(false);
              setSelectedHotel(null);
              setSelectedRoom(null);

              window.scrollTo(0, 0);
            }}
          >
            Hotels
          </button>

          <button
            onClick={() => {
              setSearched(false);
              setSelectedFlight(null);
              setBookingStep("trips");
              setShowHotels(false);
              setShowOffers(false);

              window.scrollTo(0, 0);
            }}
          >
            My Trips
          </button>

          <button
            onClick={() => {
              setSearched(false);
              setSelectedFlight(null);
              setBookingStep(null);
              setShowOffers(true);
              setShowHotels(false);

              window.scrollTo(0, 0);
            }}
          >
            Offers
          </button>

        </div>

        <button
          className="login-btn"
          onClick={() =>
            loggedIn
              ? alert(
                  "You are already logged in."
                )
              : setLoginOpen(true)
          }
        >
          {loggedIn
            ? "✓ Logged In"
            : "Login"}
        </button>

      </nav>

      {/* =========================
          HOME
      ========================= */}

      {!searched &&
        !bookingStep &&
        !showOffers &&
        !showHotels && (
          <>
            <section className="hero">

              <div className="hero-content">

                <p className="welcome">
                  SMART TRAVEL STARTS HERE
                </p>

                <h1>
                  Explore the world.
                  <br />
                  <span>Fly smarter.</span>
                </h1>

                <p className="hero-text">
                  Search, compare and book
                  flights with intelligent
                  travel tools.
                </p>

              </div>

              {/* SEARCH CARD */}

              <div className="search-card">

                <div className="search-fields">

                  {/* FROM */}

                  <div className="field">

                    <label>
                      FROM
                    </label>

                    <select
                      value={from}
                      onChange={(e) =>
                        setFrom(
                          e.target.value
                        )
                      }
                    >
                      <option value="">
                        Select city
                      </option>

                      {cities.map(
                        (city) => (
                          <option
                            key={city}
                            value={city}
                          >
                            {city}
                          </option>
                        )
                      )}
                    </select>

                    <small>
                      Departure city
                    </small>

                  </div>

                  {/* SWAP */}

                  <button
                    className="swap-btn"
                    onClick={swapCities}
                  >
                    ⇄
                  </button>

                  {/* TO */}

                  <div className="field">

                    <label>
                      TO
                    </label>

                    <select
                      value={to}
                      onChange={(e) =>
                        setTo(
                          e.target.value
                        )
                      }
                    >
                      <option value="">
                        Select city
                      </option>

                      {cities.map(
                        (city) => (
                          <option
                            key={city}
                            value={city}
                          >
                            {city}
                          </option>
                        )
                      )}
                    </select>

                    <small>
                      Arrival city
                    </small>

                  </div>

                  {/* DATE */}

                  <div className="field">

                    <label>
                      DEPARTURE
                    </label>

                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) =>
                        setDepartureDate(
                          e.target.value
                        )
                      }
                    />

                    <small>
                      Select travel date
                    </small>

                  </div>

                  {/* PASSENGERS */}

                  <div className="field passenger-field">

                    <label>
                      TRAVELLERS
                    </label>

                    <button
                      className="passenger-btn"
                      onClick={() =>
                        setShowPassengers(
                          !showPassengers
                        )
                      }
                    >
                      👤 {passengers} Traveller
                      {passengers > 1
                        ? "s"
                        : ""}
                    </button>

                    {showPassengers && (
                      <div className="passenger-menu">

                        <p>
                          Select travellers
                        </p>

                        <div className="counter">

                          <button
                            onClick={() =>
                              setPassengers(
                                Math.max(
                                  1,
                                  passengers -
                                    1
                                )
                              )
                            }
                          >
                            −
                          </button>

                          <strong>
                            {passengers}
                          </strong>

                          <button
                            onClick={() =>
                              setPassengers(
                                Math.min(
                                  9,
                                  passengers +
                                    1
                                )
                              )
                            }
                          >
                            +
                          </button>

                        </div>

                      </div>
                    )}

                  </div>

                  {/* SEARCH */}

                  <button
                    className="search-btn"
                    onClick={handleSearch}
                  >
                    🔎 Search Flights
                  </button>

                  {activeOffer && (
                    <div className="active-offer">
                      🎁{" "}
                      <strong>
                        {activeOffer}
                      </strong>{" "}
                      applied — save ₹
                      {
                        offerDiscounts[
                          activeOffer
                        ]
                      }
                    </div>
                  )}

                </div>

                {error && (
                  <div className="search-error">
                    ⚠️ {error}
                  </div>
                )}

              </div>

            </section>

            {/* FEATURES */}

            <section className="features">

              <div className="section-heading">

                <p>
                  WHY SKYNOVA?
                </p>

                <h2>
                  smooth, smart and simple
                  flight booking
                </h2>

              </div>

              <div className="feature-grid">

                <div className="feature-card">
                  <div className="feature-icon">
                    ⭐
                  </div>

                  <h3>
                    Smart Flight Score
                  </h3>

                  <p>
                    Compare flights using
                    price, duration, stops
                    and convenience.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    💰
                  </div>

                  <h3>
                    Smart Alternatives
                  </h3>

                  <p>
                    Discover alternative
                    flights that can save
                    you money.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    💺
                  </div>

                  <h3>
                    Easy Seat Selection
                  </h3>

                  <p>
                    Choose your preferred
                    seat through an
                    interactive seat map.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    🎫
                  </div>

                  <h3>
                    Digital Boarding Pass
                  </h3>

                  <p>
                    Keep your complete
                    booking information in
                    one place.
                  </p>
                </div>

              </div>

            </section>
          </>
        )}

      {/* =========================
          HOTELS HOME
      ========================= */}

      {showHotels &&
        !hotelSearched && (
          <section className="hotels-page">

            <div className="hotels-header">

              <button
                className="back-btn"
                onClick={goHome}
              >
                ← Back Home
              </button>

              <p className="welcome">
                SKYNOVA HOTELS
              </p>

              <h1>
                Stay somewhere
                <br />
                <span>
                  worth remembering.
                </span>
              </h1>

              <p>
                Find comfortable stays at
                destinations you love.
              </p>

            </div>

            <div className="hotel-search-card">

              <div className="hotel-field">

                <label>
                  DESTINATION
                </label>

                <select
                  value={hotelCity}
                  onChange={(e) =>
                    setHotelCity(
                      e.target.value
                    )
                  }
                >
                  {cities.map(
                    (city) => (
                      <option
                        key={city}
                        value={city}
                      >
                        {city}
                      </option>
                    )
                  )}
                </select>

              </div>

              <div className="hotel-field">

                <label>
                  CHECK-IN
                </label>

                <input
                  type="date"
                  value={hotelCheckIn}
                  onChange={(e) =>
                    setHotelCheckIn(
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="hotel-field">

                <label>
                  CHECK-OUT
                </label>

                <input
                  type="date"
                  value={hotelCheckOut}
                  onChange={(e) =>
                    setHotelCheckOut(
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="hotel-field">

                <label>
                  GUESTS
                </label>

                <select
                  value={hotelGuests}
                  onChange={(e) =>
                    setHotelGuests(
                      Number(
                        e.target.value
                      )
                    )
                  }
                >
                  <option value={1}>
                    1 Guest
                  </option>

                  <option value={2}>
                    2 Guests
                  </option>

                  <option value={3}>
                    3 Guests
                  </option>

                  <option value={4}>
                    4 Guests
                  </option>

                  <option value={5}>
                    5 Guests
                  </option>

                  <option value={6}>
                    6 Guests
                  </option>
                </select>

              </div>

              <button
                className="hotel-search-btn"
                onClick={() => {

                  if (
                    !hotelCity ||
                    !hotelCheckIn ||
                    !hotelCheckOut
                  ) {
                    alert(
                      "Please select destination and dates."
                    );
                    return;
                  }

                  if (
                    hotelCheckIn >=
                    hotelCheckOut
                  ) {
                    alert(
                      "Check-out date must be after check-in date."
                    );
                    return;
                  }

                  setHotelSearched(
                    true
                  );

                  window.scrollTo(
                    0,
                    0
                  );
                }}
              >
                🔍 Search Hotels
              </button>

            </div>

          </section>
        )}

      {/* =========================
          HOTEL RESULTS
      ========================= */}

      {showHotels &&
        hotelSearched &&
        !selectedHotel && (
          <section className="hotel-results-page">

            <div className="hotel-results-header">

              <button
                className="back-btn"
                onClick={() =>
                  setHotelSearched(
                    false
                  )
                }
              >
                ← Modify Search
              </button>

              <div>

                <p className="welcome">
                  SKYNOVA HOTELS
                </p>

                <h1>
                  Hotels in{" "}
                  <span>
                    {hotelCity}
                  </span>
                </h1>

                <p>
                  {hotelCheckIn} →{" "}
                  {hotelCheckOut} ·{" "}
                  {hotelGuests} Guests
                </p>

              </div>

            </div>

            <div className="hotel-results-list">

              {hotels.map(
                (hotel) => (

                  <div
                    className="hotel-result-card"
                    key={hotel.id}
                  >

                    <div className="hotel-image">

                      <img
                        src={hotel.image}
                        alt={hotel.name}
                      />

                    </div>

                    <div className="hotel-result-info">

                      <div className="hotel-title-row">

                        <div>

                          <h2>
                            {hotel.name}
                          </h2>

                          <p className="hotel-location">
                            📍{" "}
                            {hotel.location}
                          </p>

                        </div>

                        <div className="hotel-rating">
                          ⭐{" "}
                          {hotel.rating}

                          <small>
                            {
                              hotel.reviews
                            }{" "}
                            reviews
                          </small>
                        </div>

                      </div>

                      <p className="hotel-room">
                        🛏️{" "}
                        {hotel.room}
                      </p>

                      <div className="hotel-amenities">

                        {hotel.amenities.map(
                          (
                            amenity
                          ) => (
                            <span
                              key={
                                amenity
                              }
                            >
                              ✓{" "}
                              {
                                amenity
                              }
                            </span>
                          )
                        )}

                      </div>

                    </div>

                    <div className="hotel-price">

                      <span className="old-price">
                        ₹
                        {
                          hotel.oldPrice
                        }
                      </span>

                      <strong>
                        ₹{hotel.price}
                      </strong>

                      <small>
                        per night
                      </small>

                      <button
                        onClick={() => {
                          setSelectedHotel(
                            hotel
                          );
                          setSelectedRoom(
                            null
                          );

                          window.scrollTo(
                            0,
                            0
                          );
                        }}
                      >
                        View Rooms →
                      </button>

                    </div>

                  </div>
                )
              )}

            </div>

          </section>
        )}

      {/* =========================
          HOTEL DETAILS / ROOMS
      ========================= */}

      {showHotels &&
        selectedHotel &&
        !hotelBooked && (
          <section className="booking-page">

            <div className="booking-header">

              <button
                className="back-btn"
                onClick={() =>
                  setSelectedHotel(
                    null
                  )
                }
              >
                ← Back to Hotels
              </button>

              <div>
                <h1>
                  {selectedHotel.name}
                </h1>

                <p>
                  📍{" "}
                  {
                    selectedHotel.location
                  }
                  {" • "}
                  ⭐{" "}
                  {
                    selectedHotel.rating
                  }
                </p>
              </div>

            </div>

            <div className="hotel-detail-card">

              <div className="hotel-detail-image">

                <img
                  src={
                    selectedHotel.image
                  }
                  alt={
                    selectedHotel.name
                  }
                />

              </div>

              <div className="hotel-detail-content">

                <h2>
                  Choose your room
                </h2>

                <p>
                  {hotelCheckIn} →{" "}
                  {hotelCheckOut}
                  {" • "}
                  {hotelGuests} Guests
                </p>

                <div className="hotel-room-list">

                  {selectedHotel.rooms.map(
                    (room) => (

                      <div
                        key={
                          room.name
                        }
                        className={
                          selectedRoom?.name ===
                          room.name
                            ? "hotel-room-card selected-room"
                            : "hotel-room-card"
                        }
                        onClick={() =>
                          setSelectedRoom(
                            room
                          )
                        }
                      >

                        <div>
                          <h3>
                            {room.name}
                          </h3>

                          <p>
                            👥 Up to{" "}
                            {
                              room.guests
                            }{" "}
                            guests
                          </p>

                          <div className="hotel-room-features">

                            {room.features.map(
                              (
                                feature
                              ) => (
                                <span
                                  key={
                                    feature
                                  }
                                >
                                  ✓{" "}
                                  {
                                    feature
                                  }
                                </span>
                              )
                            )}

                          </div>
                        </div>

                        <div className="hotel-room-price">

                          <strong>
                            ₹
                            {
                              room.price
                            }
                          </strong>

                          <small>
                            per night
                          </small>

                          <button
                            onClick={(
                              e
                            ) => {
                              e.stopPropagation();

                              setSelectedRoom(
                                room
                              );
                            }}
                          >
                            {selectedRoom?.name ===
                            room.name
                              ? "✓ Selected"
                              : "Select Room"}
                          </button>

                        </div>

                      </div>
                    )
                  )}

                </div>

                {selectedRoom && (
                  <div className="fare-continue">

                    <div>
                      <span>
                        Selected Room
                      </span>

                      <h2>
                        {
                          selectedRoom.name
                        }
                      </h2>

                      <p>
                        ₹
                        {
                          selectedRoom.price
                        }{" "}
                        per night
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setHotelBooked(
                          true
                        )
                      }
                    >
                      Continue →
                    </button>

                  </div>
                )}

              </div>

            </div>

          </section>
        )}

      {/* =========================
          HOTEL CONFIRMATION
      ========================= */}

      {showHotels &&
        selectedHotel &&
        hotelBooked && (
          <section className="booking-page">

            <div className="confirmation-card">

              <div className="success-icon">
                ✓
              </div>

              <h1>
                Hotel Booking Confirmed!
              </h1>

              <p>
                Your SkyNova hotel stay
                has been successfully
                booked.
              </p>

              <div className="booking-id">
                Booking ID:{" "}
                <strong>
                  SKYHOT
                  {Math.floor(
                    Math.random() *
                      900000 +
                      100000
                  )}
                </strong>
              </div>

              <div className="boarding-pass">

                <div className="boarding-header">

                  <div className="logo">
                    ✈️{" "}
                    <span>
                      Sky
                    </span>
                    Nova
                  </div>

                  <span>
                    HOTEL BOOKING
                  </span>

                </div>

                <div className="boarding-route">

                  <div>

                    <small>
                      HOTEL
                    </small>

                    <strong>
                      {
                        selectedHotel.name
                      }
                    </strong>

                    <span>
                      {
                        selectedHotel.location
                      }
                    </span>

                  </div>

                  <div className="plane-line">
                    🏨
                  </div>

                  <div>

                    <small>
                      ROOM
                    </small>

                    <strong>
                      {
                        selectedRoom?.name
                      }
                    </strong>

                    <span>
                      {
                        selectedHotel.rating
                      } ⭐
                    </span>

                  </div>

                </div>

                <div className="boarding-details">

                  <div>
                    <small>
                      CHECK-IN
                    </small>

                    <strong>
                      {
                        hotelCheckIn
                      }
                    </strong>
                  </div>

                  <div>
                    <small>
                      CHECK-OUT
                    </small>

                    <strong>
                      {
                        hotelCheckOut
                      }
                    </strong>
                  </div>

                  <div>
                    <small>
                      GUESTS
                    </small>

                    <strong>
                      {
                        hotelGuests
                      }
                    </strong>
                  </div>

                  <div>
                    <small>
                      ROOM
                    </small>

                    <strong>
                      {
                        selectedRoom?.name
                      }
                    </strong>
                  </div>

                </div>

              </div>

              <div className="confirmation-actions">

                <button
                  onClick={() => {
                    setSelectedHotel(
                      null
                    );
                    setSelectedRoom(
                      null
                    );
                    setHotelBooked(
                      false
                    );
                    setHotelSearched(
                      false
                    );

                    window.scrollTo(
                      0,
                      0
                    );
                  }}
                >
                  ← Search More Hotels
                </button>

                <button
                  onClick={() =>
                    alert(
                      "Your hotel booking confirmation is ready!"
                    )
                  }
                >
                  📄 View Booking
                </button>

              </div>

            </div>

          </section>
        )}

      {/* =========================
          OFFERS
      ========================= */}

      {showOffers &&
        !searched &&
        !bookingStep && (
          <section className="offers-page">

            <div className="offers-header">

              <button
                className="back-btn"
                onClick={goHome}
              >
                ← Back Home
              </button>

              <div>

                <p className="welcome">
                  SKYNOVA SPECIAL OFFERS
                </p>

                <h1>
                  Travel more.
                  <br />
                  <span>
                    Save more.
                  </span>
                </h1>

                <p>
                  Unlock exclusive deals
                  and make your next journey
                  more affordable.
                </p>

              </div>

            </div>

            <div className="offers-grid">

              {/* STUDENT */}

              <div className="offer-card">

                <div className="offer-icon">
                  🎓
                </div>

                <span className="offer-tag">
                  STUDENT SPECIAL
                </span>

                <h2>
                  Student Travel Offer
                </h2>

                <p>
                  Get special savings
                  when booking your next
                  flight as a student.
                </p>

                <strong>
                  Save up to ₹500
                </strong>

                <button
                  onClick={() => {
                    setActiveOffer(
                      "Student Special"
                    );
                    setShowOffers(
                      false
                    );
                    setSearched(
                      false
                    );
                    setBookingStep(
                      null
                    );

                    window.scrollTo(
                      0,
                      0
                    );
                  }}
                >
                  Use Offer →
                </button>

              </div>

              {/* WEEKEND */}

              <div className="offer-card">

                <div className="offer-icon">
                  🌴
                </div>

                <span className="offer-tag">
                  WEEKEND
                </span>

                <h2>
                  Weekend Escape
                </h2>

                <p>
                  Plan a quick weekend
                  getaway and discover
                  better-value flights.
                </p>

                <strong>
                  Save up to ₹700
                </strong>

                <button
                  onClick={() => {
                    setActiveOffer(
                      "Weekend Escape"
                    );
                    setShowOffers(
                      false
                    );
                    setSearched(
                      false
                    );
                    setBookingStep(
                      null
                    );

                    window.scrollTo(
                      0,
                      0
                    );
                  }}
                >
                  Use Offer →
                </button>

              </div>

              {/* FIRST BOOKING */}

              <div className="offer-card">

                <div className="offer-icon">
                  💳
                </div>

                <span className="offer-tag">
                  NEW USER
                </span>

                <h2>
                  First Booking
                </h2>

                <p>
                  Make your first SkyNova
                  booking and unlock an
                  introductory discount.
                </p>

                <strong>
                  Save ₹800
                </strong>

                <button
                  onClick={() => {
                    setActiveOffer(
                      "First Booking"
                    );
                    setShowOffers(
                      false
                    );
                    setSearched(
                      false
                    );
                    setBookingStep(
                      null
                    );

                    window.scrollTo(
                      0,
                      0
                    );
                  }}
                >
                  Use Offer →
                </button>

              </div>

              {/* SMART SAVER */}

              <div className="offer-card">

                <div className="offer-icon">
                  ⭐
                </div>

                <span className="offer-tag">
                  SMART TRAVEL
                </span>

                <h2>
                  Smart Saver
                </h2>

                <p>
                  Let SkyNova compare
                  flight options and
                  discover lower fares.
                </p>

                <strong>
                  Save up to ₹1,000
                </strong>

                <button
                  onClick={() => {
                    setActiveOffer(
                      "Smart Saver"
                    );
                    setShowOffers(
                      false
                    );
                    setSearched(
                      false
                    );
                    setBookingStep(
                      null
                    );

                    window.scrollTo(
                      0,
                      0
                    );
                  }}
                >
                  Use Offer →
                </button>

              </div>

            </div>

          </section>
        )}

      {/* =========================
          FLIGHT RESULTS
      ========================= */}

      {searched &&
        !bookingStep && (
          <section className="results-page">

            <div className="results-header">

              <button
                className="back-btn"
                onClick={() => {
                  setSearched(
                    false
                  );
                  setError("");
                }}
              >
                ← Modify Search
              </button>

              <div>

                <h1>
                  {airportCodes[
                    from
                  ] ||
                    from
                      .substring(
                        0,
                        3
                      )
                      .toUpperCase()}
                  {" → "}
                  {airportCodes[
                    to
                  ] ||
                    to
                      .substring(
                        0,
                        3
                      )
                      .toUpperCase()}
                </h1>

                <p>
                  {departureDate}
                  {" • "}
                  {passengers}{" "}
                  Traveller
                  {passengers > 1
                    ? "s"
                    : ""}
                </p>

              </div>

            </div>

            <div className="smart-alternative">

              <div>

                <span>
                  💡 Smart Alternative
                </span>

                <h3>
                  Save up to ₹700 with
                  an alternate flight
                </h3>

                <p>
                  SkyNova compares
                  available options to
                  help you find better
                  value.
                </p>

              </div>

              <button
                onClick={() =>
                  setSortBy(
                    "price"
                  )
                }
              >
                Show cheapest
              </button>

            </div>

            <div className="results-layout">

              {/* FILTERS */}

              <aside className="filters">

                <h3>
                  Filters
                </h3>

                <div className="filter-group">

                  <strong>
                    Stops
                  </strong>

                  <label>
                    <input
                      type="checkbox"
                      checked={selectedStops.includes(
                        "Non-stop"
                      )}
                      onChange={(e) => {

                        if (
                          e.target
                            .checked
                        ) {
                          setSelectedStops(
                            [
                              ...selectedStops,
                              "Non-stop",
                            ]
                          );
                        } else {
                          setSelectedStops(
                            selectedStops.filter(
                              (
                                stop
                              ) =>
                                stop !==
                                "Non-stop"
                            )
                          );
                        }

                      }}
                    />

                    Non-stop
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      checked={selectedStops.includes(
                        "1 Stop"
                      )}
                      onChange={(e) => {

                        if (
                          e.target
                            .checked
                        ) {
                          setSelectedStops(
                            [
                              ...selectedStops,
                              "1 Stop",
                            ]
                          );
                        } else {
                          setSelectedStops(
                            selectedStops.filter(
                              (
                                stop
                              ) =>
                                stop !==
                                "1 Stop"
                            )
                          );
                        }

                      }}
                    />

                    1 Stop
                  </label>

                </div>

                <div className="filter-group">

                  <strong>
                    Airlines
                  </strong>

                  {[
                    "SkyAir",
                    "IndiGo",
                    "AirVista",
                  ].map(
                    (airline) => (
                      <label
                        key={
                          airline
                        }
                      >
                        <input
                          type="checkbox"
                          checked={selectedAirlines.includes(
                            airline
                          )}
                          onChange={(
                            e
                          ) => {

                            if (
                              e
                                .target
                                .checked
                            ) {
                              setSelectedAirlines(
                                [
                                  ...selectedAirlines,
                                  airline,
                                ]
                              );
                            } else {
                              setSelectedAirlines(
                                selectedAirlines.filter(
                                  (
                                    item
                                  ) =>
                                    item !==
                                    airline
                                )
                              );
                            }

                          }}
                        />

                        {
                          airline
                        }
                      </label>
                    )
                  )}

                </div>

              </aside>

              {/* RESULTS */}

              <main className="flight-results">

                <div className="sort-bar">

                  <div>

                    <strong>
                      {
                        flights.length
                      }{" "}
                      flights
                    </strong>

                    <span>
                      {" "}
                      available for
                      your journey
                    </span>

                  </div>

                  <select
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(
                        e.target.value
                      )
                    }
                  >
                    <option value="recommended">
                      Recommended
                    </option>

                    <option value="price">
                      Cheapest
                    </option>

                    <option value="score">
                      Smart Score
                    </option>
                  </select>

                </div>

                {flights.length ===
                0 ? (
                  <div className="empty-trips">
                    <div className="empty-icon">
                      ✈️
                    </div>

                    <h2>
                      No flights found
                    </h2>

                    <p>
                      Try changing
                      your filters.
                    </p>
                  </div>
                ) : (
                  flights.map(
                    (flight) => (

                      <div
                        className="flight-card"
                        key={
                          flight.id
                        }
                      >

                        <div className="airline">

                          <div className="airline-logo">
                            {
                              flight.logo
                            }
                          </div>

                          <div>

                            <strong>
                              {
                                flight.airline
                              }
                            </strong>

                            <small>
                              {
                                flight.flight
                              }
                            </small>

                          </div>

                        </div>

                        <div className="flight-time">

                          <strong>
                            {
                              flight.departure
                            }
                          </strong>

                          <small>
                            {
                              flight.from
                            }
                          </small>

                        </div>

                        <div className="flight-duration">

                          <span>
                            {
                              flight.duration
                            }
                          </span>

                          <div className="flight-line">
                            ─────────
                          </div>

                          <small>
                            {
                              flight.stops
                            }
                          </small>

                        </div>

                        <div className="flight-time">

                          <strong>
                            {
                              flight.arrival
                            }
                          </strong>

                          <small>
                            {
                              flight.to
                            }
                          </small>

                        </div>

                        <div className="flight-price">

                          <small>
                            Starting
                            from
                          </small>

                          <strong>
                            ₹
                            {
                              flight.price
                            }
                          </strong>

                          <div className="score">
                            ⭐{" "}
                            {
                              flight.score
                            }
                            /100
                          </div>

                          <button
                            onClick={() =>
                              setSelectedFlight(
                                flight
                              )
                            }
                          >
                            Select
                          </button>

                        </div>

                      </div>
                    )
                  )
                )}

              </main>

            </div>

            {selectedFlight && (
              <div className="selected-panel">

                <div>

                  <span>
                    Selected Flight
                  </span>

                  <h2>
                    {
                      selectedFlight.airline
                    }{" "}
                    {
                      selectedFlight.flight
                    }
                  </h2>

                  <p>
                    {
                      selectedFlight.departure
                    }{" "}
                    {
                      selectedFlight.from
                    }
                    {" → "}
                    {
                      selectedFlight.arrival
                    }{" "}
                    {
                      selectedFlight.to
                    }
                  </p>

                </div>

                <div className="selected-price">

                  <strong>
                    ₹
                    {
                      selectedFlight.price
                    }
                  </strong>

                  <button
                    onClick={
                      handleBooking
                    }
                  >
                    Continue →
                  </button>

                </div>

              </div>
            )}

          </section>
        )}

      {/* =========================
          FARE SELECTION
      ========================= */}

      {bookingStep ===
        "fare" &&
        selectedFlight && (
          <section className="booking-page">

            <div className="booking-header">

              <button
                className="back-btn"
                onClick={() =>
                  setBookingStep(
                    null
                  )
                }
              >
                ← Back
              </button>

              <div>

                <h1>
                  Choose Your Fare
                </h1>

                <p>
                  {
                    selectedFlight.airline
                  }{" "}
                  {
                    selectedFlight.flight
                  }{" "}
                  •{" "}
                  {
                    selectedFlight.from
                  }{" "}
                  →{" "}
                  {
                    selectedFlight.to
                  }
                </p>

              </div>

            </div>

            <div className="fare-container">

              {/* SAVER */}

              <div
                className={
                  selectedFare ===
                  "Saver"
                    ? "fare-card selected-fare"
                    : "fare-card"
                }
                onClick={() =>
                  setSelectedFare(
                    "Saver"
                  )
                }
              >

                <span className="fare-badge saver">
                  BASIC
                </span>

                <h2>
                  Saver
                </h2>

                <h3>
                  ₹
                  {
                    selectedFlight.price
                  }
                </h3>

                <p>
                  Best for travellers
                  looking for the
                  lowest price.
                </p>

                <hr />

                <p>
                  ✓ 7 kg cabin baggage
                </p>

                <p>
                  ✓ Standard seat
                </p>

                <p>
                  ✓ In-flight
                  entertainment
                </p>

                <p>
                  ✕ Free cancellation
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFare(
                      "Saver"
                    );
                  }}
                >
                  {selectedFare ===
                  "Saver"
                    ? "✓ Selected"
                    : "Select Saver"}
                </button>

              </div>

              {/* SMART */}

              <div
                className={
                  selectedFare ===
                  "Smart"
                    ? "fare-card selected-fare"
                    : "fare-card"
                }
                onClick={() =>
                  setSelectedFare(
                    "Smart"
                  )
                }
              >

                <span className="fare-badge smart">
                  POPULAR
                </span>

                <h2>
                  Smart
                </h2>

                <h3>
                  ₹
                  {
                    selectedFlight.price +
                    900
                  }
                </h3>

                <p>
                  Extra flexibility
                  and better travel
                  benefits.
                </p>

                <hr />

                <p>
                  ✓ 7 kg cabin baggage
                </p>

                <p>
                  ✓ 15 kg check-in
                  baggage
                </p>

                <p>
                  ✓ Standard seat
                  selection
                </p>

                <p>
                  ✓ Free date change
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFare(
                      "Smart"
                    );
                  }}
                >
                  {selectedFare ===
                  "Smart"
                    ? "✓ Selected"
                    : "Select Smart"}
                </button>

              </div>

              {/* FLEX */}

              <div
                className={
                  selectedFare ===
                  "Flex"
                    ? "fare-card selected-fare"
                    : "fare-card"
                }
                onClick={() =>
                  setSelectedFare(
                    "Flex"
                  )
                }
              >

                <span className="fare-badge flex">
                  PREMIUM
                </span>

                <h2>
                  Flex
                </h2>

                <h3>
                  ₹
                  {
                    selectedFlight.price +
                    1800
                  }
                </h3>

                <p>
                  Maximum flexibility
                  for changing your
                  plans.
                </p>

                <hr />

                <p>
                  ✓ 7 kg cabin baggage
                </p>

                <p>
                  ✓ 20 kg check-in
                  baggage
                </p>

                <p>
                  ✓ Free seat selection
                </p>

                <p>
                  ✓ Free cancellation
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFare(
                      "Flex"
                    );
                  }}
                >
                  {selectedFare ===
                  "Flex"
                    ? "✓ Selected"
                    : "Select Flex"}
                </button>

              </div>

            </div>

            {selectedFare && (
              <div className="fare-continue">

                <div>

                  <span>
                    Selected Fare
                  </span>

                  <h2>
                    {
                      selectedFare
                    }
                  </h2>

                </div>

                <button
                  onClick={() =>
                    setBookingStep(
                      "seat"
                    )
                  }
                >
                  Continue to Seat
                  Selection →
                </button>

              </div>
            )}

          </section>
        )}

      {/* =========================
          SEAT SELECTION
      ========================= */}

      {bookingStep ===
        "seat" &&
        selectedFlight && (
          <section className="booking-page">

            <div className="booking-header">

              <button
                className="back-btn"
                onClick={() =>
                  setBookingStep(
                    "fare"
                  )
                }
              >
                ← Back to Fare
              </button>

              <div>

                <h1>
                  Select Your Seat
                </h1>

                <p>
                  {
                    selectedFlight.airline
                  }{" "}
                  {
                    selectedFlight.flight
                  }{" "}
                  •{" "}
                  {
                    selectedFlight.from
                  }{" "}
                  →{" "}
                  {
                    selectedFlight.to
                  }
                </p>

              </div>

            </div>

            <div className="seat-layout">

              <div className="seat-aircraft">

                <div className="cockpit">
                  ✈️
                  <span>
                    COCKPIT
                  </span>
                </div>

                <div className="seat-grid">

                  {Array.from(
                    {
                      length: 30,
                    },
                    (_, index) => {

                      const row =
                        Math.floor(
                          index /
                            6
                        ) + 1;

                      const seatLetters =
                        [
                          "A",
                          "B",
                          "C",
                          "D",
                          "E",
                          "F",
                        ];

                      const seat =
                        `${row}${seatLetters[
                          index % 6
                        ]}`;

                      const occupied =
                        [
                          "1A",
                          "2C",
                          "3F",
                          "5B",
                          "7D",
                          "9A",
                          "10F",
                        ].includes(
                          seat
                        );

                      const selected =
                        selectedSeats.includes(
                          seat
                        );

                      return (
                        <button
                          key={
                            seat
                          }
                          className={
                            occupied
                              ? "seat occupied"
                              : selected
                              ? "seat selected-seat"
                              : "seat"
                          }
                          disabled={
                            occupied
                          }
                          onClick={() => {

                            if (
                              selected
                            ) {
                              setSelectedSeats(
                                selectedSeats.filter(
                                  (
                                    item
                                  ) =>
                                    item !==
                                    seat
                                )
                              );
                            } else {
                              setSelectedSeats(
                                [
                                  ...selectedSeats,
                                  seat,
                                ]
                              );
                            }

                          }}
                        >
                          {seat}
                        </button>
                      );
                    }
                  )}

                </div>

                <div className="seat-legend">

                  <span>
                    <i className="legend available"></i>
                    Available
                  </span>

                  <span>
                    <i className="legend selected"></i>
                    Selected
                  </span>

                  <span>
                    <i className="legend occupied"></i>
                    Occupied
                  </span>

                </div>

              </div>

              <div className="seat-summary">

                <h2>
                  Your Selection
                </h2>

                <p className="summary-route">
                  {
                    selectedFlight.from
                  }{" "}
                  →{" "}
                  {
                    selectedFlight.to
                  }
                </p>

                <div className="summary-box">

                  <span>
                    Flight
                  </span>

                  <strong>
                    {
                      selectedFlight.airline
                    }{" "}
                    {
                      selectedFlight.flight
                    }
                  </strong>

                </div>

                <div className="summary-box">

                  <span>
                    Fare
                  </span>

                  <strong>
                    {
                      selectedFare
                    }
                  </strong>

                </div>

                <div className="summary-box">

                  <span>
                    Selected Seats
                  </span>

                  <strong>
                    {selectedSeats.length >
                    0
                      ? selectedSeats.join(
                          ", "
                        )
                      : "No seat selected"}
                  </strong>

                </div>

                <div className="passenger-box">

                  <h3>
                    Passenger Details
                  </h3>

                  <input
                    type="text"
                    placeholder="Enter passenger full name"
                    value={
                      passengerName
                    }
                    onChange={(e) =>
                      setPassengerName(
                        e.target.value
                      )
                    }
                  />

                </div>

                <button
                  className="continue-booking-btn"
                  onClick={() => {

                    if (
                      selectedSeats.length ===
                      0
                    ) {
                      alert(
                        "Please select at least one seat."
                      );
                      return;
                    }

                    if (
                      !passengerName.trim()
                    ) {
                      alert(
                        "Please enter passenger name."
                      );
                      return;
                    }

                    setBookingStep(
                      "summary"
                    );

                  }}
                >
                  Continue →
                </button>

              </div>

            </div>

          </section>
        )}

      {/* =========================
          BOOKING SUMMARY
      ========================= */}

      {bookingStep ===
        "summary" &&
        selectedFlight && (
          <section className="booking-page">

            <div className="booking-header">

              <button
                className="back-btn"
                onClick={() =>
                  setBookingStep(
                    "seat"
                  )
                }
              >
                ← Back
              </button>

              <div>

                <h1>
                  Review Your Booking
                </h1>

                <p>
                  Check your details
                  before confirming.
                </p>

              </div>

            </div>

            <div className="summary-page">

              <div className="booking-summary-card">

                <h2>
                  ✈️ Flight Details
                </h2>

                <div className="booking-flight">

                  <div>

                    <small>
                      DEPARTURE
                    </small>

                    <strong>
                      {
                        selectedFlight.departure
                      }
                    </strong>

                    <span>
                      {
                        selectedFlight.from
                      }
                    </span>

                  </div>

                  <div className="summary-arrow">
                    ───── ✈️ ─────
                  </div>

                  <div>

                    <small>
                      ARRIVAL
                    </small>

                    <strong>
                      {
                        selectedFlight.arrival
                      }
                    </strong>

                    <span>
                      {
                        selectedFlight.to
                      }
                    </span>

                  </div>

                </div>

                <hr />

                <div className="detail-row">
                  <span>
                    Airline
                  </span>

                  <strong>
                    {
                      selectedFlight.airline
                    }{" "}
                    {
                      selectedFlight.flight
                    }
                  </strong>
                </div>

                <div className="detail-row">
                  <span>
                    Travel Date
                  </span>

                  <strong>
                    {
                      departureDate
                    }
                  </strong>
                </div>

                <div className="detail-row">
                  <span>
                    Traveller
                  </span>

                  <strong>
                    {
                      passengerName
                    }
                  </strong>
                </div>

                <div className="detail-row">
                  <span>
                    Selected Seat
                  </span>

                  <strong>
                    {
                      selectedSeats.join(
                        ", "
                      )
                    }
                  </strong>
                </div>

                <div className="detail-row">
                  <span>
                    Fare Type
                  </span>

                  <strong>
                    {
                      selectedFare
                    }
                  </strong>
                </div>

              </div>

              <div className="price-summary-card">

                <h2>
                  Price Summary
                </h2>

                <div className="price-row">
                  <span>
                    Base Fare
                  </span>

                  <span>
                    ₹
                    {
                      selectedFlight.price
                    }
                  </span>
                </div>

                <div className="price-row">
                  <span>
                    Fare Upgrade
                  </span>

                  <span>
                    ₹
                    {
                      fareUpgrade
                    }
                  </span>
                </div>

                <div className="price-row">
                  <span>
                    Taxes & Fees
                  </span>

                  <span>
                    ₹499
                  </span>
                </div>

                {activeOffer && (
                  <div className="price-row offer-discount">

                    <span>
                      🎁{" "}
                      {
                        activeOffer
                      }
                    </span>

                    <span>
                      -₹
                      {
                        offerDiscount
                      }
                    </span>

                  </div>
                )}

                <hr />

                <div className="total-row">

                  <strong>
                    Total
                  </strong>

                  <strong>
                    ₹
                    {
                      finalBookingPrice
                    }
                  </strong>

                </div>

                <button
                  className="confirm-btn"
                  onClick={() => {

                    const newBooking =
                      {
                        id: `SKY${Math.floor(
                          Math.random() *
                            900000 +
                            100000
                        )}`,
                        airline:
                          selectedFlight.airline,
                        flight:
                          selectedFlight.flight,
                        from:
                          selectedFlight.from,
                        to:
                          selectedFlight.to,
                        departure:
                          selectedFlight.departure,
                        arrival:
                          selectedFlight.arrival,
                        date:
                          departureDate,
                        passenger:
                          passengerName,
                        seats:
                          selectedSeats,
                        fare:
                          selectedFare,
                        price:
                          finalBookingPrice,
                      };

                    const updatedTrips =
                      [
                        ...myTrips,
                        newBooking,
                      ];

                    setMyTrips(
                      updatedTrips
                    );

                    localStorage.setItem(
                      "skynovaTrips",
                      JSON.stringify(
                        updatedTrips
                      )
                    );

                    setBookingConfirmed(
                      true
                    );

                    setBookingStep(
                      "confirmed"
                    );

                    window.scrollTo(
                      0,
                      0
                    );
                  }}
                >
                  💳 Confirm Booking
                </button>

              </div>

            </div>

          </section>
        )}

      {/* =========================
          BOOKING CONFIRMATION
      ========================= */}

      {bookingStep ===
        "confirmed" &&
        selectedFlight && (
          <section className="booking-page">

            <div className="confirmation-card">

              <div className="success-icon">
                ✓
              </div>

              <h1>
                Booking Confirmed!
              </h1>

              <p>
                Your SkyNova flight has
                been successfully booked.
              </p>

              <div className="booking-id">
                Booking ID:{" "}
                <strong>
                  {myTrips.length > 0
                    ? myTrips[
                        myTrips.length -
                          1
                      ].id
                    : "SKY000000"}
                </strong>
              </div>

              <div className="boarding-pass">

                <div className="boarding-header">

                  <div className="logo">
                    ✈️{" "}
                    <span>
                      Sky
                    </span>
                    Nova
                  </div>

                  <span>
                    BOARDING PASS
                  </span>

                </div>

                <div className="boarding-route">

                  <div>

                    <small>
                      FROM
                    </small>

                    <strong>
                      {
                        selectedFlight.from
                      }
                    </strong>

                    <span>
                      {
                        selectedFlight.departure
                      }
                    </span>

                  </div>

                  <div className="plane-line">
                    ✈️
                  </div>

                  <div>

                    <small>
                      TO
                    </small>

                    <strong>
                      {
                        selectedFlight.to
                      }
                    </strong>

                    <span>
                      {
                        selectedFlight.arrival
                      }
                    </span>

                  </div>

                </div>

                <div className="boarding-details">

                  <div>
                    <small>
                      PASSENGER
                    </small>

                    <strong>
                      {
                        passengerName
                      }
                    </strong>
                  </div>

                  <div>
                    <small>
                      SEAT
                    </small>

                    <strong>
                      {
                        selectedSeats.join(
                          ", "
                        )
                      }
                    </strong>
                  </div>

                  <div>
                    <small>
                      FLIGHT
                    </small>

                    <strong>
                      {
                        selectedFlight.flight
                      }
                    </strong>
                  </div>

                  <div>
                    <small>
                      DATE
                    </small>

                    <strong>
                      {
                        departureDate
                      }
                    </strong>
                  </div>

                  <div>
                    <small>
                      FARE
                    </small>

                    <strong>
                      {
                        selectedFare
                      }
                    </strong>
                  </div>

                  <div>
                    <small>
                      STATUS
                    </small>

                    <strong className="confirmed-text">
                      CONFIRMED
                    </strong>
                  </div>

                </div>

                <div className="barcode">
                  ▌▌▌▌ ▌▌ ▌▌▌ ▌▌▌▌ ▌▌ ▌▌▌▌ ▌▌
                </div>

              </div>

              <div className="confirmation-actions">

                <button
                  onClick={() => {
                    setBookingStep(
                      null
                    );
                    setSearched(
                      false
                    );
                    setSelectedFlight(
                      null
                    );
                    setSelectedFare(
                      null
                    );
                    setSelectedSeats(
                      []
                    );
                    setPassengerName(
                      ""
                    );

                    window.scrollTo(
                      0,
                      0
                    );
                  }}
                >
                  ← Book Another
                  Flight
                </button>

                <button
                  onClick={() =>
                    alert(
                      "Your boarding pass is ready!"
                    )
                  }
                >
                  📄 View Boarding
                  Pass
                </button>

              </div>

            </div>

          </section>
        )}

      {/* =========================
          MY TRIPS
      ========================= */}

      {bookingStep ===
        "trips" && (
          <section className="booking-page">

            <div className="booking-header">

              <button
                className="back-btn"
                onClick={() =>
                  setBookingStep(
                    null
                  )
                }
              >
                ← Home
              </button>

              <div>

                <h1>
                  My Trips
                </h1>

                <p>
                  View your SkyNova
                  bookings.
                </p>

              </div>

            </div>

            {myTrips.length ===
            0 ? (
              <div className="empty-trips">

                <div className="empty-icon">
                  ✈️
                </div>

                <h2>
                  No trips yet
                </h2>

                <p>
                  Your confirmed bookings
                  will appear here.
                </p>

                <button
                  onClick={() =>
                    setBookingStep(
                      null
                    )
                  }
                >
                  Search Flights
                </button>

              </div>
            ) : (
              <div className="trips-list">

                {myTrips.map(
                  (trip) => (

                    <div
                      className="trip-card"
                      key={
                        trip.id
                      }
                    >

                      <div className="trip-card-header">

                        <div>

                          <span className="trip-status">
                            ✓ CONFIRMED
                          </span>

                          <h2>
                            {
                              trip.from
                            }{" "}
                            →{" "}
                            {
                              trip.to
                            }
                          </h2>

                          <p>
                            {
                              trip.date
                            }{" "}
                            •{" "}
                            {
                              trip.passenger
                            }
                          </p>

                        </div>

                        <strong>
                          {
                            trip.id
                          }
                        </strong>

                      </div>

                      <div className="trip-details">

                        <div>
                          <small>
                            FLIGHT
                          </small>

                          <strong>
                            {
                              trip.airline
                            }{" "}
                            {
                              trip.flight
                            }
                          </strong>
                        </div>

                        <div>
                          <small>
                            DEPARTURE
                          </small>

                          <strong>
                            {
                              trip.departure
                            }
                          </strong>
                        </div>

                        <div>
                          <small>
                            ARRIVAL
                          </small>

                          <strong>
                            {
                              trip.arrival
                            }
                          </strong>
                        </div>

                        <div>
                          <small>
                            SEAT
                          </small>

                          <strong>
                            {
                              trip.seats.join(
                                ", "
                              )
                            }
                          </strong>
                        </div>

                        <div>
                          <small>
                            FARE
                          </small>

                          <strong>
                            {
                              trip.fare
                            }
                          </strong>
                        </div>

                        <div>
                          <small>
                            TOTAL
                          </small>

                          <strong className="trip-price">
                            ₹
                            {
                              trip.price
                            }
                          </strong>
                        </div>

                      </div>

                      <button
                        className="boarding-btn"
                        onClick={() => {

                          setSelectedFlight(
                            {
                              airline:
                                trip.airline,
                              flight:
                                trip.flight,
                              from:
                                trip.from,
                              to:
                                trip.to,
                              departure:
                                trip.departure,
                              arrival:
                                trip.arrival,
                            }
                          );

                          setDepartureDate(
                            trip.date
                          );

                          setPassengerName(
                            trip.passenger
                          );

                          setSelectedSeats(
                            trip.seats
                          );

                          setSelectedFare(
                            trip.fare
                          );

                          setBookingStep(
                            "confirmed"
                          );

                          window.scrollTo(
                            0,
                            0
                          );
                        }}
                      >
                        🎫 View Boarding
                        Pass
                      </button>

                    </div>
                  )
                )}

              </div>
            )}

          </section>
        )}

      {/* =========================
          LOGIN MODAL
      ========================= */}

      {loginOpen && (
        <div className="modal-overlay">

          <div className="login-modal">

            <button
              className="close-modal"
              onClick={() =>
                setLoginOpen(
                  false
                )
              }
            >
              ×
            </button>

            <div className="modal-logo">
              ✈️
            </div>

            <h2>
              Welcome to SkyNova
            </h2>

            <p>
              Login to continue your
              booking.
            </p>

            <form
              onSubmit={handleLogin}
            >

              <label>
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
              />

              <label>
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
              />

              <button
                type="submit"
                className="modal-login-btn"
              >
                Login & Continue
              </button>

            </form>

          </div>

        </div>
      )}

      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <div className="logo">
          ✈️{" "}
          <span>
            Sky
          </span>
          Nova
        </div>

        <p>
          Smart travel. Better
          journeys.
        </p>

      </footer>

    </div>
  );
}

export default App;