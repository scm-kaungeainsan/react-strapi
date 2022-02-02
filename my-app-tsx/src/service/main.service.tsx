import { JsonFormHttp, MultiFormHttp } from "../components/http/http";

import axios  from 'axios';
// import post from "axios";

class MainService {


    async login(data: any) {
        return await JsonFormHttp.post("/login", data);
    }

    async logout() {
        return await JsonFormHttp.post("/logout");
    }

    async getAll() {
        console.log('Get -------------------')
        const res = await axios.get('http://localhost:1337/members');
        return res


        // let requestBody = {
        //     "email": 'admin@gmail.com',
        //     "password": 'password'
        // }
        // const res = await axios.post('http://150.95.80.181:8000/api/v1/login', requestBody);
        // console.log(res)
        // return res
    }

    async getImage(url: any) {
        const imgHttp = axios.create({
            withCredentials: true, // for cookies and authentication 
            headers: {
                "Content-type": "application/json"
            }
        });
        return await imgHttp.get(url);
    }

    async get() {
        console.log('Get -------------------')
        const url = 'http://localhost:1337/members';
        const config = {
            withCredentials: true,
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        let data = {}
        // return await post(url, data, config)
    }

    update(id: any, data: any) {
        return MultiFormHttp.put(`/update-user/${id}`, data);
    }

    delete(id: any) {
        return JsonFormHttp.delete(`/delete-user/${id}`);
    }

    updatePassword(id: any, data: any) {
        return JsonFormHttp.post(`/update-password/${id}`, data);
    }

    findByTitle(title: any) {
        return JsonFormHttp.get(`/tutorials?title=${title}`);
    }
}

export default new MainService();