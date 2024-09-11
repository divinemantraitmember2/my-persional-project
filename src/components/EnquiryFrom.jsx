
import { Formik, Form} from "formik";
import * as Yup from "yup";

const EnquiryForm=()=>{

    let schema = Yup.object().shape({
            name: Yup.string().required('PassportNo no is required'),
            email: Yup.string().email("Please enter a valid email address").required('Email is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net)$/, 'Email must be valid'),
            mobile: Yup.string().required("Phone number is required").matches(/^[0-9]+$/, "Phone number must be numeric").min(10),
            comment: Yup.string().required('Expiry date is required'),
        
       });
     
            const initialValue={
                    name:"",
                    email:"",
                    mobile:"",
                    comment:""
                }

      function CreateEnquiry(values){
        // alert("hhh")
      console.log("values,,",values)

    }


    return(
        <>

<Formik
                initialValues={initialValue}
                validationSchema={schema}
                onSubmit={CreateEnquiry}
                enableReinitialize
            >
                {({ handleChange, values,errors,touched }) => (
                    <Form id="enquiry">
                      <div className="col-md-12">
                    <h5 className ="mb-2 py-2" style={{color:"white"}}>Contact Us For  More Information Of Yatra </h5>
                    <div className="bg-white py-2 rounded">
                        <div className='row p-0 m-0'>
                            <div className='col-md-12'>
                                <div className='mb-2'>
                                    <label className='form-label'>Name *</label>
                                    <input type="text" 
                                          name="name"
                                          value={values.name}
                                          onChange={handleChange}
                                          id="name"
                                          className={errors.name ? "form-control is-invalid" : "form-control"}
                                          placeholder="Enter your first name"
                                          maxLength={20}
                                           />
                                </div>
                            </div>
                            <div className='col-md-12'>
                              <div className='mb-2'>
                                    <label className='form-label'>Mobile *</label>
                                    <input type='text'
                                      name="mobile"
                                      value={values.mobile}
                                      onChange={handleChange}
                                      id="mobile"
                                      className={errors.mobile ? "form-control is-invalid" : "form-control"}
                                      placeholder='Enter Your Mobile'
                                      maxLength={20}
                                      />
                                </div>
                            </div>
                            <div className='col-md-12'>
                              <div className='mb-2'>
                                    <label className='form-label'>Email</label>
                                    <input type='email'
                                    className={errors.email ? "form-control is-invalid" : "form-control"}
                                     name="email"
                                     value={values.email}
                                     onChange={handleChange}
                                     id="email"
                                     placeholder='Enter Your Email'
                                     maxLength={20}
                                      />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-2">
                                <label className='form-label'>Comment</label>
                                    <textarea 
                                    value={values.comment}
                                    className={errors.comment ? "form-control is-invalid" : "form-control"}
                                     placeholder="Comment" 
                                     onChange={handleChange}
                                     name="comment"
                                     id="comment"
                                     maxLength={200}
                                     />
                            </div>
                            </div>

                            <div className="col-md-12 d-flex justify-content-center">
                                <button type="submit" form="enquiry"  className='btn btn-primary'>Enquiry</button>
                            </div>
                        </div>
                       
                    </div>
                </div>

                </Form>
                )}
            </Formik>
        </>
    )

}

export default EnquiryForm