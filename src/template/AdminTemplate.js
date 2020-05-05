import React, { Fragment } from 'react'
import {Route} from "react-router-dom";
const AdminLayout = (props) => {
   return (
       <div>
           <div>Navbar Admin</div>
           {props.children}
       </div>

   )
}
export default function AdminTemplate({Component , ...props}) {
    return (
        <Route 
        {...props}
        render = {propsComponent => {
            return (
                <AdminLayout>
                    <Component {...propsComponent}/>
                </AdminLayout>
            )
        }}
        />
    )
          
}
