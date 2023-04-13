export function validateEmail(email){
    let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return validEmail.test(String(email).toLowerCase())
}