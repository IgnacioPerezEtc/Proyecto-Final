export const nameValidator = (value) => {
    if (value.length < 3 || value.length > 150) return false;
};

export const descriptionValidator = (value) => {
    if(value.length < 10 || value.length > 5000) return false
}

export const imageValidator = (value) => {
    if (!/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/.test(value)) return false
};

export const phoneValidator = (value) => {
    // if(!/^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/.test(value)) return false
    if(value.length < 8 || value.length > 16) return false
};