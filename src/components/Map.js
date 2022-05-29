import {useState, useEffect} from 'react';
import GoogleMap  from 'google-map-react';

import LocationMarker from './LocationMarker';
import LocationMarkerValcano from './LocationMarkerValcano';
import LocationMarkerStorm from './LocationMarkerStorm';
import LocationInfoBox from './LocationInfoBox';




const Map = ({eventData, center, zoom, lat, lng}) => {

   
   
   


    const [locationInfo, setLocationInfo] = useState(null)
   
    const markers = eventData.map(ev => {
        //console.log(eventData)
       // return <LocationMarker onClick={() => setLocationInfo({id: ev.id, title: ev.title, moreInfo: ev.sources[0].url})} lat={lat} lng={lng} />
        
        if(ev.categories[0].id === 8) {
            return <LocationMarker onClick={() => setLocationInfo({id: ev.id, title: ev.title, moreInfo: ev.sources[0].url})} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
        }
 
       
        if(ev.categories[0].id === 15) {
           // console.log(ev)
            return <LocationMarkerStorm onClick={() => setLocationInfo({id: ev.id, title: ev.title, moreInfo: ev.sources[0].url})} lat={ev.geometries[0].coordinates[0]} lng={ev.geometries[0].coordinates[1]} />
        }
        
        return null

    })

    return(
        
        <div className="map">
            <GoogleMap 
                bootstrapURLKeys={{key: 'AIzaSyCnL3ZHkgb4OUj2fBRKSNoECG0ifhFvU5w'}}
                defaultCenter={{lat: lat, lng: lng}}
                defaultZoom={ 13}
                onGoogleApiLoaded={({map, maps}) =>
                new maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.3,
                map,
                center: {lat: lat, lng: lng},
                radius: 275,
                })}
            >
               {markers} 
            </GoogleMap>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
}



export default Map;

