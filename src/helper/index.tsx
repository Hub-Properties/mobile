import axios from "axios"
// const ip="192.168.43"
const ip="192.168.100.6"
export const Api=(data:any)=>new Promise((resolve,reject)=>{
    axios.post(`http://${ip}:3001`,JSON.stringify(data),{
        
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }).then((resp)=>{
        resolve(resp.data)
    }).catch((e)=>{
        reject(e)
    })
    
})