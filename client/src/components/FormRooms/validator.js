export const validate = (input) => {
    let err = {};
    
    if(!input.numRoom) {
        err.numRoom = "Name of Room is required"
    };
    if(!input.description) {
        err.description = "Description is required"
    };
    if(input.description.length < 10) {
        err.description = "The description must have more than 10 characters"
    };
    if(input.description.length > 5000) {
        err.description = "The description must have less than 5000 characters"
    };
    if(!input.pictureHome) {
        err.pictureHome = "Picture Home is required"
    };
    if (!/.*(png|jpg|jpeg|gif)$/.test(input.pictureHome)) {
        err.pictureHome = "Enter a URL image .png, .jpg, .jpeg, .gif";
    };
    if(!input.numPeople) {
        err.numPeople = "Number of Peoples is required"
    };
    if(input.numPeople < 0) {
        err.numPeople = "The number of peoples must have more than 1 person"
    };
    if(input.numPeople > 10) {
        err.numPeople = "The number of peoples must have less than 10 persons"
    };
    if(!input.maxAdult) {
        err.maxAdult = "Max of Adults is required"
    };
    if(input.maxAdult < 0 || input.maxAdult > input.numPeople) {
        err.maxAdult = "Enter number of adults within the range"
    };
    if(!input.value) {
        err.value = "Value is required"
    }
    if(input.value < 0) {
        err.value = "Value must be more than $0"
    }

    return err;
}