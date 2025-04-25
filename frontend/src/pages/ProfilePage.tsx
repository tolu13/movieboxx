import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authslice';

type Booking = {
  user: { name: string; email: string };
  seat: { number: string };
  showtime: { time: string };
};

const BookingConfirmationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('booking');
    if (!stored) {
      navigate('/');
      return;
    }

    const parsed = JSON.parse(stored);
    if (!parsed?.user) {
      navigate('/');
    } else {
      setBooking(parsed);
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };



  if (!booking) return <div className="text-center mt-10">Loading booking details...</div>;

  return (
    <div className='shadow-md bg-gray-100'>

    <Link to='/' className='p-4 mt-7 text-3xl text-blue-700' >MovieBoxx</Link>
    <h1 className='text-center text-4xl text-blue-500 bottom-40'>welcome, {booking.user.name}</h1>
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
       
      <div className="bg-white shadow-md rounded-lg p-3 w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4"> Booking Confirmed!</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800"> {booking.user.name}</h3>
            <p className="text-gray-600"><strong>Email:</strong> {booking.user.email}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800"> Showtime</h3>
            <p className="text-gray-600">
              <strong>Time:</strong> {new Date(booking.showtime.time).toLocaleString()}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800"> Seat</h3>
            <p className="text-gray-600"><strong>Number:</strong> {booking.seat.number}</p>
          </div>

          <div className="mt-6 flex ">
            <button onClick={handleLogout} className="bg-red-600 w-full text-white py-2 px-4 rounded-md">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookingConfirmationPage;
