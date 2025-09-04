import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function ArtistCard({ name, age, favorite, image, className }) {
    return (
        <div className={`bg-white rounded-xl shadow-md mt-6 p-4 ${className}`}>
            <img src={image} alt={name} className="rounded-lg w-full h-48 object-cover mb-4" />
            <h2 className="text-lg raleway font-bold">{name}</h2>
            <div className="flex justify-between">
                <p className="text-gray-700 font-bold">{age} y.o</p>
                <div className="flex justify-end mt-2">
                    <Link to={`/ArtistProfile/${name}`}>
                        <ArrowRight className="text-gray-600 hover:text-amber-500 cursor-pointer" />
                    </Link>
                </div>
            </div>
            <p className="text-sm text-gray-600">Favorite TV Series: {favorite}</p>
            
        </div>
    );
}

export default ArtistCard;


