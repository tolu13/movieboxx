import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetMoviesByIdQuery } from "../redux/movieApi";
import { useGetTheaterInfoQuery } from "../redux/theaterApi";
import { useGetShowtimesQuery } from "../redux/showtimeApi";
import { useGetSeatsQuery } from "../redux/seatApi";
import { useCreateBookingMutation } from "../redux/bookingApi";
import { RootState } from "../redux/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface Theater {
  id: string;
  name: string;
}

interface Showtime {
  id: string;
  time: string;
}

interface Seat {
  id: string;
  number: string;
}


const MovieDetailPage = () => {
  const { movieId } = useParams();
  const user = useSelector((state: RootState) => state.auth.user);

  const navigate = useNavigate();

  const [selectedTheaterId, setSelectedTheaterId] = useState("");
  const [selectedShowtimeId, setSelectedShowtimeId] = useState("");
  const [selectedSeatId, setSelectedSeatId] = useState("");

  const { data: movie, isLoading, isError } = useGetMoviesByIdQuery(movieId!);
  const { data: theaters = [] } = useGetTheaterInfoQuery(movieId);
  const { data: showtimes = [] } = useGetShowtimesQuery(selectedTheaterId, {
    skip: !selectedTheaterId,
  });
  const { data: seats = [] } = useGetSeatsQuery(selectedShowtimeId, {
    skip: !selectedShowtimeId,
  });

  const [createBooking, { isLoading: isBooking }] = useCreateBookingMutation();

  if (isLoading) return <p className="text-center mt-10 text-xl">Loading movie...</p>;
  if (isError || !movie) return <p className="text-center mt-10 text-red-500">Movie not found.</p>;

  const handleBooking = async () => {
    if (!selectedSeatId || !selectedShowtimeId || !user?.id) {
      toast.error("Please select a theater, showtime, and seat!");
      return;
    }
  
    try {
      const bookingResponse = await createBooking({
        userId: user.id,
        showtimeId: selectedShowtimeId,
        seatId: selectedSeatId,
      }).unwrap();
  
      // Store the actual booking data in localStorage
      localStorage.setItem("booking", JSON.stringify(bookingResponse));
  
      toast.success("Booking successful!");
  
      // Navigate to the confirmation page (booking page)
      navigate('/profile');
    } catch (err) {
      console.error("Booking failed", err);
      toast.error("Booking failed");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Link to={'/'}className="text-blue-900 text-3xl font-bold mb-6">MovieBoxx</Link>

      {/* Movie Info Card */}
      <div className="bg-gray-500 shadow-md rounded-4xl p-6 flex flex-col md:flex-row gap-12">
        <img
          src={movie?.posterUrl}
          alt={movie?.title}
          className="w-full md:w-1/3 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2 text-white">{movie?.title}</h2>
          <p className="text-white">{movie?.description}</p>
        </div>
      </div>

      {/* Theater Selection */}
      <div className="mt-8">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          🎭 Select Theater
        </label>
        <select
          value={selectedTheaterId}
          onChange={(e) => {
            setSelectedTheaterId(e.target.value);
            setSelectedShowtimeId("");
            setSelectedSeatId("");
          }}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Choose a theater --</option>
          {theaters.map((theater: Theater) => (
            <option key={theater.id} value={theater.id}>
              {theater.name}
            </option>
          ))}
        </select>
      </div>

      {/* Showtime Selection */}
      {selectedTheaterId && (
        <div className="mt-6">
          <label className="block text-lg font-medium text-gray-800 mb-2">
            🕒 Select Showtime
          </label>
          <select
            value={selectedShowtimeId}
            onChange={(e) => {
              setSelectedShowtimeId(e.target.value);
              setSelectedSeatId("");
            }}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Choose a time --</option>
            {showtimes.map((showtime: Showtime) => (
              <option key={showtime.id} value={showtime.id}>
                {new Date(showtime.time).toLocaleString()}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Seat Selection */}
      {selectedShowtimeId && (
        <div className="mt-6">
          <label className="block text-lg font-medium text-gray-800 mb-4">
            Select Seat
          </label>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
            {seats.map((seat: Seat) => (
              <button
                key={seat.id}
                onClick={() => setSelectedSeatId(seat.id)}
                className={`py-2 px-4 rounded-lg text-sm border transition ${
                  selectedSeatId === seat.id
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-gray-300 hover:bg-blue-100"
                }`}
              >
                {seat.number}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Book Now Button */}
      <div className="mt-10 text-center">
        <button
          onClick={handleBooking}
          disabled={isBooking}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isBooking ? "Booking..." : " Book Now"}
        </button>
      </div>
    </div>
  );
};

export default MovieDetailPage;
