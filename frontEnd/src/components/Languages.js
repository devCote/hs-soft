import Language from './Language'

const Languages = ({ data, isLastChild }) => {

  return (
    data.map((dataItem, indx, arr) =>
      <Language
        key={dataItem.name}
        data={dataItem}
        isLastChildGeneral={isLastChild && indx === arr.length - 1 ? true : false}
        isLastChild={indx === arr.length - 1}
      />)
  )
}


export default Languages 
