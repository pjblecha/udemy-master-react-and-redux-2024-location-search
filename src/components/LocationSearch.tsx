import type { Place } from "../api/Place";
import { useState } from "react";

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }) {
    const [places, setPlaces] = useState<Place[]>([]);

    return (
        <div>Search for location</div>
    )
}