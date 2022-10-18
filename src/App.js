import Header from "./components/Header";
import Map from './components/Map';
import RealEstate from "./components/RealEstate";
import Search from "./components/Search";

const App = () => {
  return (
    <app className="main">
      <Header />
      <Search />
      <div className="hero">
        <Map />
        <RealEstate />
      </div>
    </app>
  )
}

export default App;