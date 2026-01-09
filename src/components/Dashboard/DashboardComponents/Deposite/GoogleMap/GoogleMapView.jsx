

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '400px',
};

const MINSK_CENTER = {
    lat: 53.9006,
    lng: 27.5590,
};

let GoogleMapView = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,

    });
    console.log(process.env.REACT_APP_GOOGLE_API_KEY)
    if (!isLoaded) return <div>Загрузка карты...</div>;

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={MINSK_CENTER}
            zoom={11}
            options={{
                mapTypeControl: true,
            }}
        />
    );
}

export default GoogleMapView