const Btn = ({children,className,onClick}) =>{
  return(
    <button
    type="button" 
    className={className}
    onClick = {onClick}
    >
    {children}
    </button>
  )

}
 export default Btn;