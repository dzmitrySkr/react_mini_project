

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
        googleMapsApiKey: "AIzaSyDS8QYzciy-YBxm6EKhN70v_8pfORWgqLk",
    });

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