import axios from "axios"
import { Message } from "element-ui"

axios.defaults.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseUrl = '//blog-server.hunger-valley.com'
export default function request(url,type="GET",data={}) {
    let option = {
        url,
        method:type,
    }
    if(type.toLowerCase() == 'get') {
        option.params = data
    }else {
        option.data = data
    }

    if(localStorage.token) {
        axios.defaults.headers.common['Authorization'] = localStorage.token
    }
    axios(option).then(res=>{
        console.log("data",res.data)
        if(res.data.status == 'ok') {
            if(res.data.token) {
                localStorage.token = res.data.token
            }
            resolve(res.data)
        }else {
            Message.error(res.data.msg)
            reject(res.data)
        }
    }).catch(err=>{
        Message.error('网络异常')
        reject({msg:'网络异常'}) 
    })
}