import Image from 'next/image'

const AdminHeader=()=>{
    return(
        <>
        <header className="admin_header">
                <div className="row p-0 m-0">
                    <div className="col-md-3 p-0 m-0">
                        <div className="admin_togale_site">
                        <Image loading = 'lazy' height={50} width={200} src="/images/logo.png" className="img-fluid" alt="logo"/>
                        </div>
                    </div>
                    <div className="col-md-9"></div>
                </div>
            </header>
        
        </>
    )
}

export default AdminHeader;