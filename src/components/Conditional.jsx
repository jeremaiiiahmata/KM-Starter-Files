import Welcome from "./Welcome";
import Logout from "./Logout";
const Conditional = () => {

    // -- Using Ternary Operator

    const isLoggedIn = true;

    return isLoggedIn? <Welcome/> : <Logout/>

    

    // -- Ternary Operator 

    // syntax : let message = isTrue ? "I will execute if true!" : "I will execute if false!"
    // Example : 
    //          let message = isLoggedIn? <Welcome/> : <Logout/>

    
    // -- Using Element Variable

    // let message;
    // const isLoggedIn = true;

    // if (isLoggedIn) {
    //     message = <Welcome/>
    // } else {
    //     message = <Logout/>
    // }




    // -- Traditional 
    // if(login) { // this is a bad practice, because functions should only have one return value (this function has 2).
    //             // the best way to do it is to use ternary operator or using element variable
    //     return(
    //         <div>
    //             <Welcome/>
    //         </div>
    //     );
    // } else {
    //     return(
    //         <div>
    //             <Logout/>
    //         </div>
    //     );
    // }
}

export default Conditional