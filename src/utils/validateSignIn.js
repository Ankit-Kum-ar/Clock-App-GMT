export const validateSignIn = (email, password) => {

    // Write regex for the email and password validation.
    const isEmailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);
 
    // Return the result of the email and password validation.
    if(!isEmailValidate) return "Email is not valid";
    if(!isPasswordValidate) return "Password is not valid";

    return null;

}