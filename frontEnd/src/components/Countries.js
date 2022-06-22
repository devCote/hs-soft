import Country from './Country'
import ColumnDots from './ColumnDots'

const Countries = ({ data, isLastChild }) => {

  return (
    <div>
      <ColumnDots height={2} />
      {
        data.map((dataItem, indx, arr) =>
          <Country
            key={dataItem.name}
            data={dataItem}
            isLastChild={isLastChild && indx === arr.length - 1}
          />)
      }
      {!isLastChild && <ColumnDots height={2} />}
    </div>
  )
}

export default Countries 
