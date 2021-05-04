export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = 'Username required'
    }


    //Email
    if(!values.email) {
        errors.email = 'Email Required'
    }

if(!values.age) {
    errors.age = 'Age required'
}

if(!values.skills) {
    errors.skills = 'Area required'
}

if(!values.description) {
    errors.description = 'Area required'
}

return errors

}