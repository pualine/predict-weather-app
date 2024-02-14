import React, {useState} from 'react';

// Functional components
const LocationInput = () => {
    const [location, setLocation] = useState('');

    const handleChange = (e) => {
         setLocation(e.target.value);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., fetch weather data)
        console.log('Location submitted:', location);
      };

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter location..."
            value={location}
            onChange={handleChange}
          />
          <button type="submit">Get Weather</button>
        </form>
      );

};
export default LocationInput;
