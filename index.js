const Box = props => {
  //  Write your code here.
  const {box, text, children} = props
  return (
    <div className={box}>
      <p className={text}>{children}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='box-container'>
      <Box box='box1' text='text' children='Small' />
      <Box box='box2' text='text' children='Medium' />
      <Box box='box3' text='text' children='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
