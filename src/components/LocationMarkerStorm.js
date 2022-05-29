import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/cup-ice';

const LocationMarkerStorm = ({ lat, lng, onClick}) => {
    return(
        <div className="location-marker-storm" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarkerStorm;