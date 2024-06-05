"use client"

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps"
import { useState } from "react"

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function PainelMap() {

    // const defaultProps = {
    //     center: {
    //         lat: 10.99835602,
    //         lng: 77.01502627
    //     },
    //     zoom: 11
    // };

    const position = {lat: -22.914124605604947, lng: -47.068326004158656}

    return (
        <>
            <div className='h-[32rem] w-full'>
                {/* <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact> */}

                <APIProvider apiKey="AIzaSyC9IOLAvHYrb_7Fll1mEhGpD3aL2PmR29Y">
                    <div className="h-[32rem]">
                        <Map mapId="9ca6d66d633cf32a" styles="StyledMap" defaultZoom={20} defaultCenter={position} mapTypeControl={false} zoomControl={false}>
                            <AdvancedMarker position={position}>
                                <Pin />
                            </AdvancedMarker>
                        </Map>
                    </div>
                </APIProvider>

            </div>

        </>
    )
}