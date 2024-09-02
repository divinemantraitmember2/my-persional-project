import Image from 'next/image'

const Banner=()=>{
    return(
        <>
        <div className="container-fluid p-0 m-0 banner_main" style={{minHeight:"200px"}}>
            <div className="row p-0 m-0">
              <div className="col-md-5 p-0 m-0 d-none d-lg-block ">
                <div className="position-relative overflow-hidden banner_right">
                    <a href="kailash-mansarovar-helicopter">
                        <div className="hover_effect_css">
                            <div className="banner-img" style={{backgroundImage:"url('/images/nandi-parvat-with-mount-kailash-south-face.jpg')"}} alt="Mount Kailash South Face with Nandi Parvat " title="Mount Kailash South Face with Nandi Parvat">
                            
                            </div>
                            <div className="banner-details">
                                <small className="best_seller_tag">BEST SELLER</small>
                                <div className='flite_flying_icon'>
                                <Image src="/images/flite_flying.png" height={90} width={170} className='img-fluid'/>
                                </div>
                                <h2>Kailash Mansarovar Yatra<br/>by Helicopter From Kathmandu</h2>
                                {/* <p>11 Days All Inclusive Package | From <i><del> ₹255,000/-</del></i> <b>
                                        ₹235,000/-</b> </p> */}

                            </div>
                        </div>
                    </a>
                </div>
            </div>
                <div className="col-md-7 p-0 m-0 banner_left">
                 <div className="row p-0 m-0">
                 {/* <div className="col-md-12">
                 <h5 className="py-2 text-center text-uppercase " style={{fontWeight:"500"}}>Popular Package</h5>
                 </div> */}
                 <div className="col-md-12">
<div className="row mt-2">
    <div className="col-md-4">
     <div className="d-flex text-center flex-column bg-white shadow-sm p-2 rounded">
    <Image  height={160} width={160} src="/images/mount-kailash-north-face-close-view.jpg" className="w-100 rounded" alt="kailash Mansarovar"/>
    <small className="best_seller_tag_three">BEST SELLER</small>
    <h3 className='py-2'>Kailash Mansarovar Yatra <br className='d-none d-md-block'/> by Helicopter from Lucknow</h3>
    <a href="https://wa.me/8868803285" target="_blank"><button className="primary-button">Enquiry <i className="ti ti-arrow-right"></i></button></a>
    </div>
    </div>
    <div className="col-md-4">
    <div className="d-flex text-center flex-column bg-white shadow-sm p-2 rounded">
    <Image  height={160} width={160} src="/images/kailash-yatra-jeep-tour.jpg" className="w-100 rounded" alt="Adi Kailash"/>
    <small className="best_seller_tag_three">BEST SELLER</small>
    <h3 className='py-2'>Kailash Mansarovar Yatra <br className='d-none d-md-block'/> by Road From Kathmandu</h3>
    <a href="https://wa.me/8868803285" target="_blank"><button className="primary-button">Enquiry <i className="ti ti-arrow-right"></i></button></a>
    </div>
    </div>
    <div className="col-md-4">
    <div className="d-flex text-center flex-column bg-white shadow-sm p-2 rounded">
    <Image  height={160} width={160} src="/images/arial-darshan.jpeg" className="w-100 rounded" alt="Uttarakhand Kailash"/>
    <small className="best_seller_tag_three">Trending</small>
    <h3 className="py-2">Kailash Mansarovar Aerial <br className='d-none d-md-block'/> Darshan </h3>
    <a href="https://wa.me/8868803285" target="_blank"><button className="primary-button">Enquiry <i className="ti ti-arrow-right"></i></button></a>
    </div>
    </div>
</div>
 </div>
</div>
</div>
</div>
</div>
        
        </>
    )

}
export default Banner