import axios from "axios";
import { getSession } from "next-auth/react";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, 
  });
  
  api.interceptors.request.use(
    async (config) => {
            const session:any = await getSession(); 
            if(session){
                config.headers.Authorization = session.user?.account?.userdetail?.Token;
            }else{
                config.headers.Authorization = `${process.env.NEXT_PUBILC_GLOBAL_AUTH_TOKEN}`;
            }
            return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
    
  export const getMenuRoutes = () => {
    return api.get(`/api/v1/categorymenu`);
  };

  export const getHomePageData = () => {
    return api.get(`/api/v1/get-homepage-data`);
  }
  export const getPageList = () => {
    return api.get(`/api/v1/pagelist`);
  }
  export const getBannerData = () => {
    return api.get(`/api/v1/banner`);
  }

  export const getPackageDetails = (packageslug:string) => {
    return api.get(`/api/v1/package-data/${encodeURIComponent(decodeURIComponent(packageslug))}`)
  }

  export const getPackageRelated = (packageid:string,packagecategory:string) => {
    return api.get(`/api/v1/package-related-data?id=${packageid}&category=${packagecategory}`)
  }
  export const getCategoryDetails = (slug:string) => {
    return api.get(`/api/v1/category-data/${encodeURIComponent(decodeURIComponent(slug))}`)
  }

  export const getCategoryPackage = (slug:string) => {
    return api.get(`/api/v1/packages?filterby=category&query=${encodeURIComponent(decodeURIComponent(slug))}`)
  }
  export const getCategoryReviews = (slug:string) => {
    return api.get(`/api/v1/reviews/public?filterby=category&query=${encodeURIComponent(decodeURIComponent(slug))}`)
  }
  export const getHomeReviewsData = () => {
    return api.get(`/api/v1/reviews/public?filterby=ishome&query=true`)
  }
  

  export const getWeatherInfo = (packageid:string,requireddate:string) => {
    return api.get(`/api/v1/package/weather-list-site?filterby=package_id&query=${packageid}&givenDate=${requireddate}`)
  }

  export const getWeatherDateInfo = (date:string) => {
    return api.get(`/api/v1/package/weather-list-site?filterby=package_id&query=65ef6b7eb5657b5bcf2f7d23&givenDate=${date}`)
  }

  export const getWeatherDate = (date:string) => {
    return api.get(`/api/v1/weather?givenDate=${date}`)
  }

  export const getWishList = (type:string) => {
    return api.get(`/api/v1/package/get-wishlistids?wishlisttype=${type}`)
  }

  
  export const addWishList = (packageid:string,type:string) => {
    const addPayload = {
      "wishlisttype": type,
      "wishlisttypeid": packageid,
      "source": "T2T"
    }
    return api.post(`/api/v1/package/add-wishlist`,addPayload)
  }


  export const removeWishList = (packageid:string,type:string) => {
    const deleteItemPayload = {
      "wishlisttype": "package",
      "wishlisttypeid": packageid,
      "source": "T2T"
    }
    return api.delete(`/api/v1/package/delete-wishlist/${packageid}?wishlisttype=${type}`,{data:deleteItemPayload})
  }

  export const getRecentlyVisited = (recentlyVisitedPackages:any[]) => {
    const recentlyVisitePayload = {
      "packagesids": recentlyVisitedPackages,
      "source": "T2T"
    }
    return api.post(`/api/v1/package/recently-visit?page=1&limit=8`,recentlyVisitePayload)
  }
    export const getProfileRoutes = () => {
      return api.get('/api/v1/user');
    };

    export const UserProfileUpdate = (payload:any) => {  
      return api.put(`/api/v1/user/profile-update`,payload);
    };

    export const getUserProfilePicRoutes = (fileData:any,type:any) => {  
      return api.put(`/api/v1/user/image/${type}/-1`,fileData);
    };


    export const getUserOrderCount = () => {  
      return api.get(`/api/v1/get-orders-count?status=PROCESSING&status=COMPLETED&status=CANCELLED`);
    };

    
    export const getWishlistRoutes = () => {
      return api.get('/api/v1/package/get-wishlist?wishlisttype=package');
    };
    export const getTravellerRoutes = () => {
      return api.get('/api/v1/passenger/list');
    };
    export const getProfileRevews = () => {
      return api.get('/api/v1/reviews');
    };
    export const getTravellerOneRoutes = (id:any) => {
      return api.get(`/api/v1/passenger/${id}`);
    };

    export const changePassword = (password:any,newpassword:any,confirmpassword:any) => {
      const changePasswordPayload = {
        "password":password,
        "newpassword":newpassword,
        "confirmpassword":confirmpassword,
        "source":"T2T",
      }
      return api.put('/api/v1/user/change-password',changePasswordPayload);
    }

    
    export const KmyRegister = (kmyPayload:any,id:string,type:string) => {
      return api.post(`/api/v1/registration/addupdate?id=${id!=undefined?id:""}&informationtype=${type}`,kmyPayload);
    }

    export const KmyRegisterGetPackageYatra  = (pkgSlug:any) => {
      return api.get(`/api/v1/package-data/${encodeURIComponent(decodeURIComponent(pkgSlug))}`);
    }

    export const KmyRegisterFileUpload  = (payload:any,registerId:any,phototype:any) => {
      return api.put(`/api/v1/registration/image/${registerId}/${phototype}/-1`,payload);
    }

    export const KmyFinalRegister = (registerId:any) => {
      return api.put(`/api/v1/registration/email/${registerId}`);
    }

    export const getKmyRegister = (rId:any) => {
      return api.get(`/api/v1/registration/${rId}`);
    }

    export const addTravellers = (addTravellerPayload:any) => {
      return api.post('/api/v1/passenger/add',addTravellerPayload);
    }

    export const UpdateTravellers = (id:any,addTravellerPayload:any) => {
      return api.put(`/api/v1/passenger/update/${id}`,addTravellerPayload);
    }

    export const deleteTraveller = (tid:string) => {
      return api.delete(`/api/v1/passenger/delete/${tid}`)
    }
    export const getOrder = (activeOrderTab:any) => {
      return api.get(`/api/v1/get-orders?status=${activeOrderTab}`);
    };
    
  export const getEnquiryOtp = (mobileno:string,countrycode:string,) => {
    const enquiryPayload = {
      "source": "T2T",
      "mobile": Number(mobileno),
      "countrycode":countrycode,
      "otpverified": ""
    }
    return api.post(`/api/v1/enquiry/call`,enquiryPayload)
  }
  export const submitRequestForPrice = (name:string,email:string,phone:string,packageName:string,packageId:string,pslug:string) => {
    const enquiryPayload = {
      "source": "T2T",
      "NoOfPerson":"",
      "name":name,
      "email":email,
      "phone": Number(phone),
      "comment":packageName,
      "packageid":packageId,
      "pagessourcelink":pslug,
      "pckagename":packageName
    }
    return api.post(`/api/v1/enquiry/create`,enquiryPayload)
  }
  
  export const submitQuickEnquiry = (name:string,email:string,mobileno:string,countrycode:string,person:string,packagename:string,comments:string) => {
    const enquiryPayload = {
      "source": "T2T",
      "name": name,
      "email": email,
      "phone": Number(mobileno),
      "countrycode":countrycode,
      "NoOfPerson": Number(person),
      "pckagename": packagename,
      "packageid": "",
      "pagessourcelink": "https://www.triptotemples.com/",
      "comment": comments
  }
    return api.post(`/api/v1/enquiry/create`,enquiryPayload)
  }

  export const submitEnquiryOtp = (mobileno:string,otpString:string) => {
    const enquiryPayload = {
      "source": "T2T",
      "mobile": Number(mobileno),
      "otpverified": otpString
    }
    return api.post(`/api/v1/enquiry/call`,enquiryPayload)
  }
  export const submitEnquiryFormOtp = (mobileno:string,otpString:string,getEnquiryId:string) => {
    const enquiryPayload = {
      "source": "T2T",
      "id":getEnquiryId,
      "phone": Number(mobileno),
      "otpVerified": otpString
    }
    return api.post(`/api/v1/enquiry/verify`,enquiryPayload)
  }

  export const getLoginOtp = (email:string) => {
    const loginOtpPayload = {
      "source": "T2T",
      "mobile": Number(email)
   }
    return api.post(`/api/v1/user/send-opt`,loginOtpPayload)
  }
  

  export const loginuser = (payload:any) => {
    let requestUrl = ``
    if(payload.otp && payload.mobile){
      requestUrl = '/api/v1/user/login-with-otp';
      return api.post(requestUrl,payload);
    }else{
      requestUrl = '/api/v1/user/login';
      // console.log("payload.....???????...",payload)
      return api.post(requestUrl,payload);
    }
  }
   
  
  export const GetCommonFaqs = (slug:string) => {
    return api.get(`/api/v1/package-data/${slug}`);
  }
  export const FilterFaqs = (type:any,id:string,group:any) => {
    return api.get(`/api/v1/common/faqs-list/${type}/${id}?${group}`);
  }

  export const addFaqs = (faqtype:string,faqtypeid:string,faqtypetitle:string,faqtitle:string) => {
    const addFaqPayload = {
      "source":"T2T",
      "faqsType":faqtype,
      "faqsTypeID":faqtypeid,
      "faqsTypeTitle":faqtypetitle,
      "title":faqtitle,
      "description":"Walking regularly and eat healthy food."
    }
    return api.post(`/api/v1/common/faqs/add-faq`,addFaqPayload);
  }

  export const addComment = (faqtype:string,faqtypeid:string,faqid:string,faqCid:string,comment:string) => {
    const addCommentPayload = {
      "source":"T2T",
      "faqsType":faqtype,
      "faqsTypeID":faqtypeid,
      "faqsID":faqid,
      "comment":comment,
      "commentID":faqCid
    }
    return api.post('/api/v1/common/faqs/comment/add',addCommentPayload);
  }

  export const updateFaqStat = (faqtype:string,faqtypeid:string,faqid:string,faqCommentid:string,upvote:number,downvote:number) => {
    const statUpdatePayload = {
      "source":"T2T",
      "faqsType":faqtype,
      "faqsTypeID":faqtypeid,
      "faqsID":faqid,
      "commentID":faqCommentid,
      "upVote":upvote,
      "downVote":downvote
  }
    return api.post('/api/v1/common/faqs/faqsstatdetails/add',statUpdatePayload);
  }

  export const enquirySubmit = (name:string,email:string,mobileno:string,countrycode:string,person:string,packagename:string,comments:string) => {
    const enquiryPayload = {
      "source": "T2T",
      "name": name,
      "email": email,
      "countrycode":countrycode,
      "phone": Number(mobileno),
      "NoOfPerson": Number(person),
      "pckagename": packagename,
      "packageid": "",
      "pagessourcelink": "https://www.triptotemples.com/",
      "comment": comments
  }
    return api.post(`/api/v1/enquiry/create`,enquiryPayload)
  }
 

  export const AddUser = (payload:any) => {
      let requestUrl = '/api/v1/user/add-user';
      return api.post(requestUrl,payload);
  }

  export const VerifyUser = (payload:any) => {
    let requestUrl = '/api/v1/user/user-verify';
    return api.post(requestUrl,payload);
}
  

export const AddToCart = (packageid:string,yatraDate:string,) => {
  const addPayload = {
    "packageID":packageid,
    "yatraDate":yatraDate,
    "PassengerList":[],
    "source":"T2T",
    "CouponCode":""
  }
  return api.post(`/api/v1/cart/add`,addPayload)
}

export const getCartDetails = () => {
  return api.get('/api/v1/cart');
};

export const appyCoupon = (couponcode:string) => {
  const applyCoupon_obj = {
    "couponcode":couponcode,
    "source":"T2T",
  }
  return api.post(`/api/v1/cart/applyCoupon`,applyCoupon_obj)
}
export const removeCoupon = (couponcode:string) => {
  const removeCoupon_obj = {
    "couponcode":couponcode,
    "source":"T2T",
  }
  return api.post(`/api/v1/cart/removeCoupon`,removeCoupon_obj)
}
export const addTravellerInCart = (addPayload:any) => {
  
  return api.post(`/api/v1/cart/add`,addPayload)
}

export const updateTravellerIncart = (ID:string,yatraDate:any,packageId:string,addTraveller_obj:any,passengerList:any) => {
  const addPayload = {
    "packageID":packageId,
    "yatraDate":yatraDate,
    "PassengerList":passengerList,
    "source":"T2T",
    "CouponCode":""
  }
  addPayload.PassengerList.push(addTraveller_obj)
  return api.post(`/api/v1/cart/add`,addPayload)
}

export const getTravellerByID = (ID:string) => {
  return api.get(`/api/v1/passenger/${ID}`)
}

export const finalPayment = (payload:any) => {
  
  return api.put(`/api/v1/payment/initiate`,payload)
}

export const getCountry = () => {
  return api.get(`/api/v1/countries`)
}

export const getEwallet = (activeWalletTab:any) => {
  return api.get(`/api/v1/wallet?wallettype=${activeWalletTab}`);
};

export const getBlogsData = () => {
  return api.get(`/api/v1/get-blogshome-data`)
}

export const getAllBlogSlugs = () => {
  return api.get(`/api/v1/blogslugforssg`)
}


export const getWebStory = () => {
  return api.get(`/api/v1/webstory-list`)
}
export const getMeetingsList = () => {
  return api.get(`/api/v1/meetings-list`)
}

export const getBlogCategoryData = (cat:string) => {
  return api.get(`/api/v1/cate-bloglist?filterby=category&query=${cat}`)
}
export const getCategoryMetaData = (cat:string,type:any) => {
  return api.get(`/api/v1/category-meta/${cat}?query=${type}`)
}

export const getBlogData = (querystring:string) => {
  return api.get(`/api/v1/blog?filterby=slug&query=${encodeURIComponent(decodeURIComponent(querystring))}`)
}
export const getBlogRelatedData = (id:string) => {
  return api.get(`/api/v1/blog-related-data?id=${id}`)
}
export const getPopularBlogs = () => {
  return api.get(`/api/v1/popular-blogs`)
}

export const getNewsData = () => {
  return api.get(`/api/v1/news`)
}

export const getNewsCatData = (cat:string) => {
  return api.get(`/api/v1/news?filterby=category&query=${cat}`)
}

export const getNewsSlugData = (slug:string) => {
  //console.log(`/news/adi-kailash/${encodeURIComponent(slug)}`)
  return api.get(`/api/v1/news?filterby=slug&query=${encodeURIComponent(decodeURIComponent(slug))}`)
}

export const getCollectionsData = () => {
   return api.get(`/api/v1/collection`)
}

export const getCollectionsBySlug = (slug:string) => {
  return api.get(`/api/v1/collection?filterby=slug&query=${encodeURIComponent(decodeURIComponent(slug))}`)
}

export const getDownloadsData = () => {
   return api.get(`/api/v1/package/downloads`)
}

export const getFaqsDataByCat = (catslug:string) => {
  return api.get(`/api/v1/faqs-data/${catslug}?questioncategory=${catslug}`)
}

export const getFaqsDataByQuestionCat = (catslug:string,questionslug:string) => {
  return api.get(`/api/v1/faqs-data/${catslug}?questioncategory=${questionslug}`)
}

export const getFaqsGroupData = (catslug:string) => {
  return api.get(`/api/v1/faqs-groups/${catslug}`)
}

export const getVideosData = (type:any) => {
  return api.get(`/api/v1/videogallery?gtype=${type}`)
}

export const getVideosBySlug = (slug:string) => {
  return api.get(`/api/v1/videogallery?filterby=slug&query=${encodeURIComponent(decodeURIComponent(slug))}`)
}

export const getWeatherDataBySlug = (slug:string) => {
  return api.get(`/api/v1/weather?filterby=slug&query=${encodeURIComponent(decodeURIComponent(slug))}`)
}

export const getReviews = () => {
  return api.get(`/api/v1/reviews/list`)
}
export const getNoticeData = () => {
  return api.get(`/api/v1/noticeboard-site`)
}

export default api;