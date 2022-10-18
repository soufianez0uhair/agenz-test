import { useState } from 'react';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';

const Estate = ({estate}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    function handleIsFavorite() {
        setIsFavorite(!isFavorite);
    }

    return ( 
        <div className="estate">
            <div className="estate__img-box">
                <img src={estate.image} alt={`${estate.type} a ${estate.addresse} image`} className="estate__img" />
            </div>
            {!isFavorite ? <AiOutlineHeart onClick={handleIsFavorite} className="icon icon--heart" /> : <AiFillHeart onClick={handleIsFavorite} className="icon icon--heart" />}
            <div className="estate__details">
                <h2 className="estate__prix">{estate.prix}</h2>
                <span className="estate__description">{estate.type} {estate.aVendre} | {estate.chambres} | {estate.surface + '<sup>2</sup>'} | {estate.addresse}  </span>
                <span className="estate__author">ANNONCE PAR: {estate.annonceur}</span>
            </div>
        </div>
    )
}

export default Estate;