import React from 'react';
import Footer from "../component/footer";
import Header from "../component/header";
import Image from '../../static/img/neta.jpeg';

const Plans = ()=>{
    return(
        <>
        <Header/>
        <Plans_page/>
        <Footer/>
        </>
    )
}

const Plans_page = ({embedId})=>{
    return(
        <section className='container-fluid p-0'>
            <div className="position-relative w-100 my-image1 no-display">
                <img src={Image} className="w-100" height="650px" alt="container"/>
            </div>
            <div className='container p-0 mt-lg-0 mt-3 res-padding'>
                <div>
                    <div className="">
                        <h1 className="fs-3 text-color text-start mb-4">फोटो</h1>
                    </div>
                    <div className="bg-light shadow-sm text-start p-4 rounded">
                        <div className='row m-0'>
                            <div className='col-lg p-0'>
                                <img src={Image} className="w-100" alt="my-images"/>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                <img src={Image} className="w-100" alt="my-images"/>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                <img src={Image} className="w-100" alt="my-images"/>
                            </div>
                            <div className='col p-0 ms-3 mt-lg-0 mt-3'>
                                <img src={Image} className="w-100" alt="my-images"/>
                            </div>
                        </div>
                        <div className='row m-0 mt-3'>
                            <div className='col-lg p-0'>
                                <img src={Image} className="w-100" alt="my-images"/>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                <img src={Image} className="w-100" alt="my-images"/>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                <img src={Image} className="w-100" alt="my-images"/>
                            </div>
                            <div className='col-lg p-0 ms-lg-3'>
                                <img src={Image} className="w-100" alt="my-images"/>
                            </div>
                        </div>
                        <div className='row m-0 mt-3'>
                            <div className='col-lg p-0'>
                                <img src={Image} className="w-100" alt="my-images"/>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                <img src={Image} className="w-100" alt="my-images"/>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                <img src={Image} className="w-100" alt="my-images"/>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                <img src={Image} className="w-100" alt="my-images"/>
                            </div>
                        </div>
                    </div>
               </div>
               <div className='mt-5'>
                    <div className="">
                        <h1 className="fs-3 text-color text-start mb-4">भिडियो</h1>
                    </div>
                    <div className="bg-light shadow-sm text-start p-4 rounded">
                        <div className='row m-0'>
                            <div className='col-lg p-0'>
                                 <div className="video-responsive">
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                 <div className="video-responsive">
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                 <div className="video-responsive">
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                 <div className="video-responsive">
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
                            </div>
                        </div>
                        <div className='row m-0 mt-3'>
                            <div className='col-lg p-0'>
                                 <div className="video-responsive">
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                 <div className="video-responsive">
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                 <div className="video-responsive">
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                 <div className="video-responsive">
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
                            </div>
                        </div>
                        <div className='row m-0 mt-3'>
                            <div className='col-lg p-0'>
                                 <div className="video-responsive">
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                 <div className="video-responsive">
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
                            </div>
                            <div className='col-lg p-0 ms-lg-3 mt-lg-0 mt-3'>
                                 <div className="video-responsive">
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
                            </div>
                            <div className='col-lg p-0 ms-lg-3'>
                                 <div className="video-responsive">
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </section>
    )
}
export default Plans;