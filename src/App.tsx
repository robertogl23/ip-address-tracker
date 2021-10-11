import Details from "./components/Details";
import IpSearch from "./components/IpSearch";
import Map from "./components/Map";
import useIpSearch from "./hooks/useIpSearch";

const App = () => {

  const {
    geoData,
    position,
    handleChangeText,
    handleFormSubmit,
  } = useIpSearch()

  return (
    <div className="grid-layout">

      <IpSearch 
        handleChangeText={handleChangeText}
        handleFormSubmit={handleFormSubmit} />

      <Details geoData={geoData} />

      <Map center={position} />
      
    </div>
  )

}

export default App
