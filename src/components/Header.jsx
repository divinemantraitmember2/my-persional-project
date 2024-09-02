import Image from 'next/image'
import Link from 'next/link';
const Header = () =>  {

  return (
    <>
    <div className="main-header">
    <div className="top-band py-2">
        <div className="container-fluid">
        <div className="row p-0 m-0">
          <div className="col-md-3">
         </div>
         <div className="col-md-3">
         </div>
          <div className="col-md-6">

            <div className=''>
              <div className='row'>
                <div className='col-md-3 col-2'></div>
                 <div className='col-md-6  d-block d-md-none'>
                 <div className='d-flex justify-content-between w-100 '>
                 <div className='w-25'>
                  <p>toggle</p>
                  </div>
                 <div className='w-75'>
                 <div className='d-flex justify-content-around'>
                 <p style={{color:"white",font:"18px"}}>+91-8868803285</p>
                 
                   
                 <b style={{color:"white",font:"18px"}}><Image src="/images/profile.png"  loading = 'lazy' width={20} height={20} className='img-fluid' alt='mail' /></b>
                 </div>

               </div>
                 </div>
               
                 </div>
                <div className='col-md-6 col-7 d-none d-md-block'>
               <div className='d-flex  justify-content-between'>
               <div className='text-center'>
               
                  <Image src="/images/phone.png" loading = 'lazy' width={20} height={20} className='img-fluid' alt='call' />
               
                 <p style={{color:"white",font:"18px"}}>+91-8868803285</p>

               </div>
               <div className='text-center'>
                <Image src="/images/email.png"  loading = 'lazy' width={20} height={20} className='img-fluid' alt='mail' />
               <p style={{color:"white",font:"18px"}}>ravi.waviz@gmail.com</p>
               </div>
               </div>

                </div>
                <div className='col-md-3 d-none d-md-block'>
                  <div className=''>
                    <div className='text-center'>
                      <p className='m-0 p-o'> <Image src="/images/account.png"  loading = 'lazy' width={20} height={20} className='img-fluid' alt='mail' />
                      </p>
                       <p>
                     <b className='text-white'>Account</b></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
           
                        
            </div>
              
                
                                
                      </div>
                      </div>
                      </div>
                      <nav className="navbar navbar-expand-lg d-none d-md-block">
                        <div className="container-fluid " style={{display:"block !important"}}>
                          <div className="row  mx-auto">
                           
                              <div className="col-md-12">
                               
                                <div className="navbar-collapse collapse d-block" id="navbarSupportedContent">
                                  
                                    <ul className="navbar-nav mx-auto">
                                      <li className="nav-item">
                                      <Link rel="prefetch" className="nav-link" href="/">Home</Link>
                                      </li>
                                      <li className="nav-item ">
                                      <Link rel="prefetch" className="nav-link" href="/kailash-mansarovar" >Kailash Mansarovar</Link>
                                       </li>
                                      <li className="nav-item ">
                                      <Link rel="prefetch" className="nav-link" href="/Linkdi-kailash" >Adi Kailash</Link>
                                      </li>
                                      <li className="nav-item ">
                                     <Link rel="prefetch" className="nav-link" href="/uttarakhand-kailash" >Uttarakhand Kailash</Link><button className="collapsed accordion-button m-menu-arrow"></button>
                                       </li>
                                    <li className="nav-item ">
                                   <Link rel="prefetch" className="nav-link" href="/char-dham"  aria-disabled="true">Char Dham</Link>
                                  </li>
                                  <li className="nav-item ">
                                   <Link rel="prefetch" className="nav-link" href="/char-dham"  aria-disabled="true">News</Link>
                                  </li>
                                  <li className="nav-item ">
                                   <Link rel="prefetch" className="nav-link" href="/char-dham"  aria-disabled="true">Blog</Link>
                                  </li>
                                                                 
              </ul>
              </div>
              </div>
              </div>
              </div>
              </nav>


    </div>
    </>
  )
}



export default Header;


