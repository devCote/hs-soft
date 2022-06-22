import Countries from "./Countries"
import ColumnDots from './ColumnDots'
import { useShow } from "../context/showContext"

const Continent = ({ data, isLastChild }) => {

  const { show, setShow } = useShow()

  const style = {
    padding: '0 6px',
    margin: `0px 10px 0px 10px`,
    border: 'solid 1px black',
    background: 'white'
  }

  return (
    <div>
      <p onClick={() => setShow(!show)} style={style}> {data.name} </p>
      {!isLastChild && !show && <ColumnDots height={2} />}
      {
        data && show && <Countries data={data.countries} isLastChild={isLastChild} />
      }
      {!isLastChild && !show && <ColumnDots height={2} />}
    </div>
  )
}

export default Continent
