import { Add, Delete, Update } from "./ActionType"

export const Add_task= (data) =>{
    return {type:Add,payload:data}
}
export const Delete_task =(id)=>{
    return {type:Delete, payload:id}
}
export const Update_task = (id, data)=>{
    return {type:Update, payload:{id,data}}
}