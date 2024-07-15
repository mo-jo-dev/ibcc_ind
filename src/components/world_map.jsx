import React, { useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation,
    ZoomableGroup
} from "react-simple-maps"
// import ReactToolTip from "react-tooltip"
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
const markers = [
    {
        markerOffset: -15,
        name: "Test",
        coordinates: [-58.3815, -34.6037] 
    },
    {
        markerOffset: -15,
        name: "Test",
        coordinates: [-59.3815, -34.6037] 
    },
    {
        markerOffset: -15,
        name: "Test",
        coordinates: [-88.3815, -34.6037] 
    }
]

const Map = () => {
    return (
        <div className="flex justify-center mb-8">
            <div className="w-[45vw] fill-[#085680]">
                <ComposableMap data-tip="">
                    <ZoomableGroup zoom = {1.3}>
                        {" "}
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => (  
                                    <Geography key={geo.rsmKey} geography={geo} />
                                ))
                            }
                        </Geographies>
                        {
                            markers.map(({name, coordinates, markerOffset}) => {
                                <Marker key={name} coordinates={coordinates}>
                                    <circle r = {10} fill="#ffffff" stroke = "#fff" strokeWidth={2}/>
                                    <text textAnchor="middle" y={markerOffset} className="text-[#5d5a6d]">
                                        {name}
                                    </text>
                                </Marker>
                            })
                        }
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        </div>
        
    )
}

export default Map;