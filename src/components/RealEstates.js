import { estatesData } from "../data/estatesData";
import Estate from "./Estate";

const RealEstates = () => {
    const estatesEl = estatesData.map(estate => (
        <Estate key={estate._id} estate={estate} />
    ))

    console.log(estatesEl);
    return (
        <div className="estates">
            {
                estatesEl
            }
        </div>
    )
}

export default RealEstates;