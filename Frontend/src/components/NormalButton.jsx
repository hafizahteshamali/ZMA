
const NormalButton = ({type, onClick, className, text}) => {
  return (
    <button type={type} onClick={onClick} className={`${className} rounded-full`}>
        {text}
    </button>
  )
}

export default NormalButton