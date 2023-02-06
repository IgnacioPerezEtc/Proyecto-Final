export const validate = (input) => {
    let err = {};

    if(!input.name) {
        err.name = "Name is required"
    }
    if(input.name.length < 3 || input.name.length > 150) {
        err.name = "Enter a valid name"
    }
    if(!input.rooms) {
        err.rooms = "Rooms is required"
    }
    if(input.rooms < 0){
        err.rooms = "Enter a valid number"
    }
    if(!input.location) {
        err.location = "Location is required"
    }
    if(!input.description) {
        err.description = "Description is required"
    }
    if(input.description.length < 10) {
        err.description= "Description must have more 10 characters"
    }
    if(input.description.length > 5000) {
        err.description = "The description must have less than 5000 characters"
    };
    if(!input.pictureHome) {
        err.pictureHome = "Picture Home is required"
    };
    if (!/.*(png|jpg|jpeg|gif)$/.test(input.pictureHome)) {
        err.pictureHome = "Enter a URL image .png, .jpg, .jpeg, .gif";
    };
    if(!input.phone) {
        err.phone = "Phone is required"
    }
    if(input.phone.length < 8 || input.phone.length > 16) {
        err.phone = "Invalid phone number"
    }
    if(!/^([0-9])*$/.test(input.phone)) {
        err.phone = "Invalid phone number"
    }

    return err
};

export function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}