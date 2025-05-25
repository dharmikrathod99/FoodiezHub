import React from 'react'

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px"
};

const center = {
    lat: 40.7128,
    lng: -74.0060
};

function Map() {
    return (
        <>
            <div className="w-full h-[100vh]">
                <iframe
                    title="Simple Google Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13975.619854216808!2d72.53231360000001!3d23.0695871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1748182907202!5m2!1sen!2sin`}
                ></iframe>
            </div>
        </>
    )
}

export default Map
