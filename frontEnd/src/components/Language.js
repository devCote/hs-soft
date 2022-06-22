import ColumnDots from './ColumnDots'
import RowDots from './RowDots'
import { useShow } from "../context/showContext"

const Language = ({ data, isLastChildGeneral, isLastChild }) => {

  const { show, setShow } = useShow()

  const titleStyle = {
    padding: '0px 4px',
    marginRight: `10px`,
    border: 'solid 1px black',
    background: 'white',
    flex: 'auto'
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ alignSelf: 'flex-start' }}>
          <ColumnDots height={5} />
          {isLastChildGeneral ? <ColumnDots isHidden height={5} /> : <ColumnDots height={5} />}
        </div>
        <RowDots width={16} />
        <p onClick={
          () => isLastChild && setShow(!show)
        } style={titleStyle}> {data.name} </p>
      </div>
    </div >
  )
}

export default Language
