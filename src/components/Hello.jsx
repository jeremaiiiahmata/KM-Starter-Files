import Button from './Button'

const Hello = ({ data }) => { // const {name, message} = props; immutable
    return (
        <>  
            {console.log(data.name)}
            <h1> {data.message}, {data.name}</h1>
            <Button name={data.name} message={data.message} emoji="👋"/>
            
        </>
        
    )
}

export default Hello;