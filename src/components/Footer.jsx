import Link from 'next/link';
import EnquiryForm from "./EnquiryFrom"
const Footer = () => {
  return (
    <>

    <div className="container-fluid py-2 m-0 footer_main">
        <div className="row p-0 m-0">
            <div className="col-md-4 col-lg-4">
               <div className="row">
                <div className="col-md-12">
                    <div className="">
                        <p className="text-white">LOGO</p>
                    </div>
                </div>
                <EnquiryForm/>
                
               </div>
            </div>
            <div className="col-md-8 col-lg-7 p-0 offset-lg-1">
                <div className="row">
                    <div className="col-md-4 col-12">
                      <div className="footer-text hot_menu_links">
                           <h5 className="">Most Popular Package</h5> 
                           <ul className="p-0 m-lg-0 d-none d-md-block">
                                        <li><Link href="about-mount-kailash">Mount Kailash</Link></li>
                                        <li><Link href="about-mansarovar-lake">Lake Mansarovar</Link></li>
                                        <li><Link href="about-gauri-kund">Gauri Kund</Link></li>
                                        <li><Link href="about-yam-dwar">Yam Dwar</Link></li>
                                        <li><Link href="rakshastal-lake">Rakshas Tal</Link></li>
                                        <li><Link href="muktinath-temple">Muktinath Temple</Link></li>
                                        <li><Link href="about-pashupatinath-temple">Pashupatinath Temple</Link></li>
                                        <li><Link href="about-jal-narayan-vishnu-temple">Jal Narayan Temple</Link></li>
                                        <li><Link href="nandi-parvat">Nandi Parvat</Link></li>
                                        <li><Link href="about-ashtpad">Ashtapad Tirtha</Link></li>
                                        <li><Link href="about-damodar-kund">Damodar Kund</Link></li>
                                        <li><Link href="adi-kailash">Adi Kailash</Link></li>
                                        <li><Link href="about-om-parvat">Om Parvat</Link></li>
                                    </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                    <div className="footer-text">
                           <div className="hot_menu_links">
                                    <h5 className="">TOP INTERESTS</h5>
                                    <ul className="p-0 m-lg-0 d-none d-md-block">
                                        <li><Link href="kailash-mansarovar-landcruiser">Kailash Yatra by Road</Link></li>
                                        <li><Link href="kailash-mansarovar-helicopter">Kailash Yatra by Helicopter</Link></li>
                                        <li><Link href="kailash-yatra-helicopter">Kailash Yatra from Lucknow</Link></li>
                                        <li><Link href="vip-kailash-mansarovar-yatra">Luxury Kailash Yatra</Link></li>
                                        <li><Link href="kailash-inner-kora-package">Kailash Yatra Inner Kora</Link></li>
                                        <li><Link href="kailash-mansarovar-via-lhasa">Kailash Yatra from Lhasa</Link> </li>
                                        <li><Link href="vip-kailash-mansarovar-yatra">Kailash Yatra for VIPs</Link></li>
                                        <li><Link href="mount-kailash-trekking-tour-with-everest-base-camp">Kailash Yatra with EBC</Link></li>
                                        <li><Link href="adi-kailash-om-parvat-tour-from-kathgodam">Adi Kailash Yatra</Link></li>
                                        <li><Link href="char-dham-yatra-by-road-from-delhi">Char Dham Yatra by Drive</Link></li>
                                        <li><Link href="luxury-char-dham-yatra-by-helicopter">Luxury Char Dham Yatra</Link></li>
                                        <li><Link href="muktinath-tour-packages">Muktinath Yatra</Link></li>
                                        <li><Link href="triveni-sangam-tour-package-with-kashi">Triveni Sangam Kashi</Link></li>
                                    </ul>
                                </div> 
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                    <div className="footer-text">
                    <div className="hot_menu_links">
                                    <h5 className="">USEFUL LINKS</h5>
                                    <ul className="p-0 m-lg-0 d-none d-md-block">
                                        <li><Link href="reviews">Travellers Reviews</Link></li>
                                        <li><Link href="yatra-map">Kailash Yatra Maps</Link></li>
                                        <li><Link href="photo-gallery">Photo Gallery</Link></li>
                                        <li><Link href="faqs">FAQ</Link></li>
                                        <li><Link href="how-to-pay">How to Pay</Link></li>
                                    </ul>

                                    <div className="d-none d-md-block">
                                        <h5 className="pt-lg-4">ABOUT</h5>
                                        <ul className="p-0 m-lg-0 d-none d-md-block">
                                            <li><Link href="about-us">About Us</Link></li>
                                            <li><Link href="blog">Blog</Link></li>
                                            <li><Link href="contact-us">Contact Us</Link></li>
                                            <li><Link href="booking-policy">Booking Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
};

export default Footer