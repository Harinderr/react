function Border({children}){
     return (
        <span style= {{ border :'3px solid black', display: 'block'}}> {children} </span>
     )
}
export default Border;