const Icon = ({className,size,onClick,id,refs,key, cursor}) =>{
    return (
        <i className={className} ref={refs || null} key={key || Math.random()*1000} style={{fontSize:size || "normal", cursor: cursor || "pointer"}} id={id || ""} onClick={onClick}>
          
        </i>
    )
}
export default Icon