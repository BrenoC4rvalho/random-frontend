import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/'
})

const api = {
    async get() {
        let res  = await instance.get('');
        return res.data; 
    },

    async create(photo: File, phrase: string) {
        let formData = new FormData();
        formData.append('file', photo);
        formData.append('phrase', phrase);
        let res = await instance.post('', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return res.data;
    }
}

export default api;

