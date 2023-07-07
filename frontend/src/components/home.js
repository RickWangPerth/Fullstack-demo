// Import the React JS packages
import { useEffect, useState } from "react";
import axios from "axios";

// Define the Home component
export const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/home/',
          {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          }
        );
        setMessage(response.data.message);
      } catch (error) {
        console.log('not auth');
      }
    };

    if (localStorage.getItem('access_token') === null) {
      window.location.href = '/login';
    } else {
      fetchData();
    }
  }, []);

  return (
    <div className="form-signin mt-5 text-center">
      <h3>Hi {message}</h3>
    </div>
  );
};
