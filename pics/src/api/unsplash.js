import axios from "axios";

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID 10aa1ebbe3bad078deb56687ae46dbd4ecf64a73c34018fc89603cca6f30788a'
    }
});