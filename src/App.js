import Map from './components/Map';
import {useState, useEffect} from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Geocode from 'react-geocode';

function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  const [currentLat, setCurrentLat] = useState('');
  const [currentLng, setCurrentLng] = useState('');

  Geocode.setApiKey("AIzaSyCnL3ZHkgb4OUj2fBRKSNoECG0ifhFvU5w");
  // Get latitude & longitude from address.
 Geocode.fromAddress("2710 W manor pl, seattle, wa").then(
  (response) => {
  const { lat, lng } = response.results[0].geometry.location;
  setCurrentLat(lat);
  setCurrentLng(lng);
  //console.log(lat, lng);
  },
  (error) => {
  console.error(error);
  }
  );


 
  

  useEffect( () => {
    const fetchEvents = async () => {
      setLoading(true);

      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
    
    

  }, [])

  return (
    <div>
      <Header /> 
      {!loading ? <Map eventData={eventData} lat={currentLat} lng={currentLng}/> : <Loader /> }
    </div>
  );
}

export default App;
