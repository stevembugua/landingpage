const Person = (props) => {
    return ( <>
    <div className="name" key={props.id}>
        <p >Hello from hi {props.name}</p>
        {
            console.log('the name is ' + props.name)
        }
    </div>
      
    </> );
}
 
export default Person;