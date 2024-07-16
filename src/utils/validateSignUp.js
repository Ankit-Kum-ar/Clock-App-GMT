export const validateSignUp = (email, password, username) => {

    // Write regex for the email and password validation.
    const isEmailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);
    const isUserName = /^(?!.*--)[a-zA-Z0-9-]{3,16}(?<!-)$/.test(username);
 
    // Return the result of the email and password validation.
    if(!isUserName) return "Username is not valid";
    if(!isEmailValidate) return "Email is not valid";
    if(!isPasswordValidate) return "Password is not valid";

    return null;

}