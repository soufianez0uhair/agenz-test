import { searchData } from "../data/searchData";
import {AiOutlineSearch} from 'react-icons/ai';

const Search = () => {
    const {aVendre, type} = searchData;

    const avendreOptions = aVendre.map(avd => (
        <option value={avd} className="search__select__option">{avd}</option>
    ))

    const typeOptions = type.map(tp => (
        <option value={tp} className="search__select__option">{tp}</option>
    ))

    return (
        <form className="search">
            <div className="search__input-box">
                <input type="text" id="term" name="term" placeHolder="Entrez une ville, un quartier, une addresse" className="search__input" />
                <AiOutlineSearch className="icon icon--search" />
            </div>
            <select name="a vendre" id="a vendre" className="search__select">
                <option value="" className="search__select__option" >A vendre</option>
                {
                    avendreOptions
                }
            </select>
            <select name="prix" id="prix" className="search__select">
                <option value="" className="search__select__option">Prix</option>
            </select>
            <select name="type" id="type" className="search__select">
                <option value="" className="search__select__option" >Type</option>
                {
                    typeOptions
                }
            </select>
            <select name="surface" id="surface" className="search__select">
                <option value="" className="search__select__option">Surface</option>
            </select>
            <select name="chambres" id="chambres" className="search__select">
                <option value="" className="search__select__option">Chambres</option>
            </select>
            <button className="btn btn--search">Valider</button>
        </form>
    )
}

export default Search;