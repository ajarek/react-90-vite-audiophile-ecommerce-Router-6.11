import './Button.css'

const Button = ({label, onClick ,background,color}) => {
  return (
    
      <button className='button' onClick={onClick} style={{background:background,
        color: color}} >
        {label}
      </button>
    
  )
}

export default Button