import RealEstates from "./RealEstates";

const RealEstate = () => {
    return (
        <div className="realEstate">
            <h2 className="realEstate__title">Immobilier et maisons a vendre partout au Maroc</h2>
            <div className="realEstate__details">
                <span className="realEstate__agents"><b>500</b> agent listings</span>
                <div className="realEstate__select-box">
                    <label htmlFor="filter">Filtrer par</label>
                    <select name="filter" id="filter" className="realEstate__select">
                        <option value="">Date - Du plus recent au plus ancien</option>
                    </select>
                </div>
            </div>
            <RealEstates />
        </div>
    )
}

export default RealEstate;