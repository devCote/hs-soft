const ColumnDots = ({ width }) => {

  const dots = []

  for (let i = 0; i < width; i++) {
    dots.push(<div style={{ background: 'black', borderRadius: '50%', width: '1px', height: '1px', margin: '0px 1px 0px 1px' }}></div>)
  }

  return (<div style={{ display: 'flex' }}>{dots}</div>)

}



export default ColumnDots
