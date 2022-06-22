import Languages from "./Languages"
import { withToggle } from '../hocs/withToggle'
import ColumnDots from './ColumnDots'
import RowDots from './RowDots'

const Contry = ({ data, ...props }) => {

  const { show, setShow, isLastChild } = props

  const title = {
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
          {isLastChild && !show ? <ColumnDots height={5} isHidden /> : <ColumnDots height={5} />}
        </div>
        <RowDots width={6} />
        <p onClick={() => setShow(!show)} style={title}> {data.name} </p>
      </div>
      {
        data && show && <Languages data={data.languages} isLastChild={isLastChild} />
      }
    </div>
  )
}

export default withToggle(Contry)
