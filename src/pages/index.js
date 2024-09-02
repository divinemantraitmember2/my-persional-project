import Image from 'next/image'
import Metaseo from "../components/Metaseo"
import Banner from "../components/Banner"
import Link from 'next/link';

export default function Home() {

  return (
    <>

    <Metaseo
    title={"Kailash Mansarovar Yatra 2024 | Registration Open"}
    description={"Kailash Yatra or Kailash Mansarovar Yatra is very popular pilgrimage for the followers of Hindu, Jain & Buddhist religion. Thousands of people travel to Kailash Mansarovar every year. Find here a wide range of information and tour packages for Kailash Mansarovar Yatra with best discounted price."}
    keywords={"kailash yatra, kailash mansarovar yatra, kailash yatra packages 2024, kailash mansarovar tours, kailash trekking tours, best tour operator for kailash mansarovar yatra, mount kailash and lake mansarovar yatra tour packages, mount kailash trekking tour, hindu pilgrimage tour kailash mansarovar, jain pilgrimage tour kailash mansarovar with ashtapad, kailash mansarovar yatra by max holidays india, kailash Manasarovar yatra travel information, kailash mansarovar tour itineraries, 2024 kailash yatra tour packages, mount kailash, yatra kailash mansarovar, manasarovar yatra, manas sarovar yatra, mount kailash visits, kailash yatra from india, kailash mansarovar yatra from usa, mount kailash and lake mansarovar tours from Australia, kailash mansarovar tours from england, best tour operators for kailash yatra from uae"}
    />

<Banner/>

      <div className="container-fluid p-0 m-0">
      <section className="packages">
        <div className="container-fluid p-0 m-0">
            <div className="row p-0 m-0">
                <div className="col-md-12">
                    <div className="head_ing text-center">
                        <h2 className='' style={{fontWeight:"bold"}}>कैलाश यात्रा</h2>
                        <hr/>
                    </div>
                    <div className=''>
                        <p style={{fontSize:"20px"}}>पश्चिमी हिमालय के तिब्बती क्षेत्र में स्थित, 6638 मीटर ऊँचा हीरे के जैसे आकार का कैलाश पर्वत (हिंदू धर्म में कैलासा और तिब्बती में गंग रिनपोछे) और सबसे बड़ा मीठे पानी का मानसरोवर झील (हिंदी में मानस सरोवर और तिब्बती में मापाम युम्त्सो) मानवता के लिए महान ऊर्जा और मानसिक शांति के स्रोत हैं।  कैलाश पर्वत और मानसरोवर झील हिंदू, जैन, बौद्ध और बोन धर्मों में सबसे पवित्र स्थानों के रूप में माने जाते हैं। हर साल मई से अक्टूबर के महीनों के दौरान, बड़ी संख्या में श्रद्धालु और साहसिक प्रेमी यहां दुनिया भर से आते हैं। हिंदू धर्म में कैलाश पर्वत को भगवान शिव का निवास स्थान माना जाता है | <b> नीचे कुच्छ पवित्र स्थान दिये गये हैं |</b></p>
                    </div>
                </div>

               
                <div className="col-lg-4 col-md-6">
                    <div className="pack_box p-2 rounded">
                        <div className="pack-box-img">
                               <Link href="kailash-mansarovar-darshan-by-chartered-flight">
                              <Image loading = 'lazy' height={270} width={100} src="/images/mountain-flight-for-kailash-mansarovar-darshan.jpg" alt="Chartered Flight in Nepal for Kailash Mansarovar Darshan" title="Chartered Flight in Nepal for Kailash Mansarovar Darshan"/>
                              </Link>

                            <div className="box-day">
                                <p><span>03</span>DAYS</p>
                            </div>
                            <Link href="#" className="change_map_design" data-bs-toggle="modal" data-bs-target="#mapview10">
                                <Image loading = 'lazy' height={270} width={100} src="/images/package_map.png" className="img-fluid p-2 rounded" alt="map icon"/></Link>

                            <div className="box-name">
                                <h5>FOR INDIANS</h5>
                            </div>
                        </div>

                        <div className="box-content">
                            <h4>फ्लाइट से कैलाश मानसरोवर दर्शन</h4>
                            <hr/>
                            <p><strong>03 Days Kailash Mansarovar darshan tour routing:</strong> Lucknow, Nepalgunj, Fly
                                over Simikot and Humla, Mansarovar Lake &amp; Mount Kailash Darshan</p>
                           
                            <h5><small><b>Price From :</b></small> Rs. 48,000<small>/-</small> <small><del><strong>Rs.
                                            55,000/-</strong></del></small></h5>
                            <small>on group joining basis</small>
                            <Link href="kailash-mansarovar-darshan-by-chartered-flight" className="btn">View DetaIls <i className="fa fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>

              
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="pack_box p-2 rounded">
                        <div className="pack-box-img">
                            <Link href="kailash-mansarovar-landcruiser">
                              <Image loading = 'lazy' height={270} width={100} src="/images/mount-kailash-morning-view.jpg" alt="Mount Kailash Morning View" title="Mount Kailash Morning View"/></Link>
                            <div className="box-day">
                                <p><span>14</span>DAYS</p>
                            </div>
                            <Link href="maps/overland-kailash-yatra-map.jpg" className="change_map_design" data-bs-toggle="modal" data-bs-target="#mapview">
                               
                                <Image loading = 'lazy' height={270} width={100} src="/images/package_map.png" className="img-fluid p-2 rounded" alt="map icon"/></Link>
                        </div>
                        <div className="box-content">
                           
                            <h4>Kailash Yatra by drive from Kathmandu, Nepal</h4>
                            <hr/>
                            <p><strong>14 Days overland Kailash Mansarovar tour routing:</strong> Kathmandu, Syabrubesi,
                                Kyirong, Saga, Lake Mansarovar, Mount Kailash and back</p>
                            
                            <h5><small><b>Price From </b>: </small> INR 195,000<small>/-</small></h5>
                            <small>on group joining basis</small>
                            <Link href="kailash-mansarovar-landcruiser" className="btn">View DetaIls <i className="fa fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>

               
                <div className="col-lg-4 col-md-6">
                    <div className="pack_box p-2 rounded">
                        <div className="pack-box-img">
                            <Link href="kailash-mansarovar-helicopter">
                              <Image loading = 'lazy' height={270} width={100} src="/images/mount-kailash-south-face.jpg" alt="Snow covered Mount Kailash South Face view from Ashtapad" title="Mount Kailash South Face from Ashtapad" /></Link>
                            <div className="box-day">
                                <p><span>11</span>DAYS</p>
                            </div>
                            <Link href="maps/ktm-heli-kailash-yatra-map.jpg" className="change_map_design" data-bs-toggle="modal" data-bs-target="#mapview2">
                                <Image loading = 'lazy' height={270} width={100} src="/images/package_map.png" className="img-fluid p-2 rounded" alt="map icon" /></Link>
                        </div>
                        <div className="box-content">
                            
                            <h4>Kailash Yatra by helicopter from Kathmandu, Nepal</h4>
                            <hr/>
                            <p><strong>11 Days Helicopter Kailash Mansarovar tour routing:</strong> Kathmandu,
                                Nepalgunj, Simikot, Hilsa, Lake Mansarovar, Mount Kailash and back </p>
                            
                            <h5><small><b>Price From </b>: </small> INR 235,000<small>/-</small></h5>
                            <small>on group joining basis</small>
                            <Link href="kailash-mansarovar-helicopter" className="btn">View DetaIls <i className="fa fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>

               
                <div className="col-lg-4 col-md-6">
                    <div className="pack_box p-2 rounded">
                        <div className="pack-box-img">
                            <Link href="kailash-yatra-helicopter">
                              <Image loading = 'lazy' height={270} width={100} src="/images/mount-kailash-beautiful-view.jpg" alt="Beautiful view of Mount Kailash with trek from South side" title="Track to Mount Kailash from South Face"/></Link>
                            <div className="box-day">
                                <p><span>09</span>DAYS</p>
                            </div>
                            <Link href="maps/lko-heli-kailash-yatra-map.jpg" className="change_map_design" data-bs-toggle="modal" data-bs-target="#mapview6">
                                <Image loading = 'lazy' height={270} width={100} src="/images/package_map.png" className="img-fluid p-2 rounded" alt="map icon"/></Link>
                        </div>
                        <div className="box-content">
                            <h4>Kailash Yatra by helicopter from Lucknow, India</h4>
                            <hr/>
                            <p><strong>09 Days Helicopter Kailash Mansarovar tour routing:</strong> Lucknow, Nepalgunj,
                                Simikot, Hilsa, Lake Mansarovar, Mount Kailash and back</p>
                           
                            <h5><small><b>Price From </b>: </small> INR 215,000<small>/-</small></h5>
                            <small>on group joining basis</small>
                            <Link href="kailash-yatra-helicopter" className="btn">View DetaIls <i className="fa fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>

            
                <div className="col-lg-4 col-md-6">
                    <div className="pack_box p-2 rounded">
                        <div className="pack-box-img">
                            <Link href="kailash-mansarovar-via-lhasa">
                                <Image loading = 'lazy' height={270} width={100} src="/images/road-to-mount-kailash-from-lhasa.jpg" alt="Black top road from Lhasa to Mount Kailash" title="Road from Lhasa to Holy Mount Kailash"/></Link>
                            <div className="box-day">
                                <p><span>16</span>DAYS</p>
                            </div>
                            <Link href="maps/kmy-overland-ex-lhasa.jpg" className="change_map_design" data-bs-toggle="modal" data-bs-target="#mapview4">
                                <Image loading = 'lazy' height={270} width={100} src="/images/package_map.png" className="img-fluid p-2 rounded" alt="map icon"/></Link>
                        </div>
                        <div className="box-content">
                            <h4>Kailash Mansarovar Road Trip via Lhasa, Tibet</h4>
                            <hr/>
                            <p><strong>16 Days Overland Kailash Mansarovar tour routing:</strong> Kathmandu, Lhasa,
                                Shigatse, Saga, Mansarovar, Mt. Kailash, Lhasa, Kathmandu</p>
                            
                            <h5><small><b>Price From </b>: </small> On Request<small></small></h5>
                            <small>on group joining basis</small>
                            <Link href="kailash-mansarovar-via-lhasa" className="btn">View DetaIls <i className="fa fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>

               
                <div className="col-lg-4 col-md-6">
                    <div className="pack_box p-2 rounded">
                        <div className="pack-box-img">
                            <Link href="mount-kailash-inner-kora-package">
                              <Image loading = 'lazy' height={270} width={100} src="/images/mount-kailash-inner-kora-group-by-max-holidays.jpg" alt="Mount Kailash Inner Kora Group tour" title="Mount Kailash Inner Kora Group tour"/></Link>
                            <div className="box-day">
                                <p><span>20</span>DAYS</p>
                            </div>
                            <div className="box-name">
                                <h5>INNER KORA</h5>
                            </div>
                            <Link href="maps/kailash-yatra-parikrama-map.jpg" className="change_map_design" data-bs-toggle="modal" data-bs-target="#mapview5">
                                <Image loading = 'lazy' height={270} width={100} src="/images/package_map.png" className="img-fluid p-2 rounded" alt="map icon"/></Link>
                        </div>
                        <div className="box-content">
                            <h4>Mount Kailash Inner Kora Trekking Tour</h4>
                            <hr/>
                            <p><strong>20 Days Mt. Kailash Inner Kora tour routing:</strong> Kathmandu, Kyirong, Saga,
                                Mansarovar Lake, Mt. Kailash, Ashtapad, Nandi Kora</p>
                            
                            <h5><small><b>Price From </b>: </small> INR 315,000<small>/-</small></h5>
                            <small>on group joining basis</small>
                            <Link href="mount-kailash-inner-kora-package" className="btn">VIEW DETAILS
                               <i className="fa fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="box_all_btn">
                        <Link href="kailash-tour-packages" className="btn">View More Packages 
                          <i className="fa fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>

      
    </>
  );
}



