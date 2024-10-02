import React,{useState} from 'react';
import "../Pages/CSS/LoginSign.css"; // Import the CSS file

const LoginSign = () => {

    const [state, setState] = useState("Login");

    const [formdata, setFormdata] = useState({
        username:"",
        email:"",
        password:"",
        confirm_password:"",
        phone:"",
    });

    const changeHandler = (e) => {
        setFormdata({...formdata,[e.target.name]:e.target.value});
    }

    const login = async () => {
        console.log("Login executed",formdata);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method : 'POST',
            headers : {
                Accept : 'application/form-data',
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(formdata),

    }).then((response) => response.json()).then((data) => responseData = data);

    if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        console.log("User Login Successfully");
        window.location.replace("/");
    }
    else{
        alert (responseData.errors);
    }
    }

    const signup = async () => {
        console.log("Signup executed",formdata);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method : 'POST',
            headers : {
                Accept : 'application/form-data',
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(formdata),

    }).then((response) => response.json()).then((data) => responseData = data);

    if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        console.log("User Registered Successfully");
        window.location.replace("/");
    }
    else{
        alert (responseData.errors);
    }
    }



    return (
        <div className="login-form">
            <div className="login-sign-container">
            <h1>{state}</h1>
            <div className="login-sign-fields">
                {state==="SignUp"?<input name='username' value={formdata.username} onChange={changeHandler} type="text" placeholder='Your Name' required />:<></>}
                <input type="email" name='email' value={formdata.email} onChange={changeHandler} placeholder='Your Email' required />
                <input type="password" name='password' value={formdata.password} onChange={changeHandler} placeholder='Password' required />
                {state==="SignUp"?<input  name='confirm_password' value={formdata.confirm_password} onChange={changeHandler} type="password" placeholder='Confirm Password' required />:<></>}
                {state==="SignUp"?<input type="text" name='phone' value={formdata.phone} onChange={changeHandler} placeholder='Phone Number' required />:<></>}
            </div>
            <button onClick = {() =>{state === "Login"?login():signup()}}>Continue</button>
            {state==="SignUp"?<p className='login'>Already Have An Account?<span onClick={() => {setState("Login")}}>Login Here</span></p>:<></>}
            {state==="Login"?<p className='login'>Don't Have An Account?<span onClick = {() => {setState("SignUp")}}> Sign Up Here </span></p>:<></>}
            <div className='login-sign-agree'>
                <input type="checkbox" name = '' id = '' required />
                <p>I agree to the Terms and Conditions of use & privacy policy</p>
            </div>
            
        </div>
        </div>
    );
};

export default LoginSign;