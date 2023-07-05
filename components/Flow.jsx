import {SignInScreen} from "./Signin";
import {SignUpScreen} from "./Signup";
import { useState, useContext } from "react";



function Flow(){
   const [bool, setBool] = useState(false)


if (bool) {
    return <SignInScreen onSignUpPress={() => setBool(false)}/>
}

 return <SignUpScreen onSignInPress={() => setBool(true)}/>

}

export default Flow