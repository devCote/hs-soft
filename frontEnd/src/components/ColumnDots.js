const ColumnDots = ({ height, isHidden }) => {

  const dots = []
  let color

  if (isHidden) color = '#eaeaea'
  else color = 'black'


  for (let i = 0; i < height; i++) {
    dots.push(<div style={{ background: `${color}`, borderRadius: '50%', width: '1px', height: '1px', margin: '1px 0px 1px 30px ' }}></div>)
  }

  return (<div style={{ display: 'flex', flexDirection: 'column' }}>{dots}</div>)

}



export default ColumnDots
