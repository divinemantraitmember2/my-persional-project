

import AdminSideBar from "../../../components/AdminSideBar";
import AdminHeader from "../../../components/AdminHeader1";
const AdminHome =()=>{
    return(
        <>
         <AdminHeader/>
        <div className="container-fluid main_adminHome w-100 ">
             <div className="row p-0 ">
                <AdminSideBar/>
                <div className="col-md-9" >
                    <div className="card border-0">Main</div>
                </div>
            </div>

        </div>
       
    </>
    )
}

export default AdminHome;