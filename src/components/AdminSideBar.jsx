import Link from "next/link"

const AdminSideBar=()=>{
    return(
         <>
             <div className="col-md-3  p-0 sideBarMenu">
                <nav class="nav flex-column m-0 p-0">
                <Link class="nav-link" href="/admin">Dashboard</Link>
                <Link class="nav-link" href="/admin/enquiry">Enquiry</Link>
                <Link class="nav-link" href="/admin/users">Users</Link>
               </nav>  
             </div>
        </>
    )

}
export default AdminSideBar