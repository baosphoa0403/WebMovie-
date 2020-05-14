import React from 'react'
import {Route, Redirect} from "react-router-dom";
const AdminLayout = (props) => {
   return (
       <div>
           {props.children}
       </div>

   )
}
export default function AdminTemplate({Component , ...props}) {
    return (
        <Route 
        {...props}
        render = {propsComponent => {
           if (localStorage.getItem("userAdmin")) {
            return (
                <AdminLayout>
                    <Component {...propsComponent}/>
                </AdminLayout>
            )
           }else{
               return <Redirect to="/admin"/>
           }
        }}
        />
    )
          
}
