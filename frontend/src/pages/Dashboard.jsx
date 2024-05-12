import { Users } from "@/components/ui/Users";
import { Balance } from "@/components/ui/balance";
import axios from "axios";
import { useEffect } from "react";
export function Dashboard(){
    // useEffect(
    //        const restponse = axios.get("http://localhost:3000/api/v1/account/balance", 
    //             {
    //                 headers: {
    //                     Authorization: "Bearer" + localStorage.getItem('token')
    //                 }
    //             }
    //         )
    //         response.data.balance
    //     ,[])
    return(
        <>  
            <Balance value={1000}></Balance>
            <Users></Users>
        </>
    )
}