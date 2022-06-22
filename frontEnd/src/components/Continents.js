import Continent from "./Continent"
import { ShowProvider } from "../context/showContext"


const Continents = ({ data }) => {

  return <div style={{ marginTop: '10px' }}>
    {
      data.map((dataItem, indx, arr) =>
        <ShowProvider>
          <Continent
            key={dataItem.name}
            data={dataItem}
            margin={10}
            isLastChild={indx === arr.length - 1 ? true : false} />
        </ShowProvider>
      )
    }
  </div>

}

export default Continents
