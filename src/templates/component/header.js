import React from "react";
import { Link } from "react-router-dom";
import Flag from '../../static/img/flag.gif';
import Modal from 'react-modal';


const Header = ()=>{
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal(){
      setIsOpen(false);
    }

    return(
        <>
        <header className="container-fuild p-0 p-1 pt-4 position-absolute header-index w-100 no-display">
            <div className="container p-0">
                <div className="row m-0">
                    <div className="col-3 p-0">
                        <div className="d-flex pt-1">
                            <Link to="/" className="text-decoration-none text-dark">
                                <h1 className="fs-6 fw-bolder text-color">अनुप राज गौतम<img src={Flag} className="flag-width ms-1" alt="ala" /></h1>
                            </Link>
                        </div>
                    </div>
                    <div className="col p-0 text-start">
                        <nav>
                            <ul>
                                <li className="d-inline-block px-3"><Link to="/" className="text-decoration-none text-color fs-14 fw-bolder">गृहपृष्ठ</Link></li>
                                <li className="d-inline-block px-3"><a href="#परिचय" className="text-decoration-none text-color fs-14 fw-bolder">परिचय</a></li>
                                <li className="d-inline-block px-3"><Link to="/karya/upalapdi" className="text-decoration-none text-color fs-14 fw-bolder">कार्य र उपलब्धि</Link></li>
                                <li className="d-inline-block px-3"><Link to="/election" className="text-decoration-none text-color fs-14 fw-bolder">चुनावी घोषणापत्र</Link></li>
                                <li className="d-inline-block px-3"><Link to="/photo/video" className="text-decoration-none text-color fs-14 fw-bolder">फोटो र भिडियो</Link></li>
                                <li className="d-inline-block px-3"><a href="https://election.gov.np/uploads/content/1572014966_np.pdf" target="_blank" className="text-decoration-none text-color fs-14 fw-bolder">निर्वाचन आचारसंहिता</a></li>
                                <select className="px-4 fs-14 fw-bolder select-option border-0 header-index text-color">
                                    <option>Nepali</option>
                                    <option>English</option>
                                </select>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <header className="d-none res-display bg-white shadow p-2 px-3">
            <div className="row m-0">
                <div className="col p-0 pt-2">
                    <Link to="/" className="text-decoration-none text-dark ">
                        <h1 className="fs-6 fw-bolder text-color fam-12 text-start">अनुप राज गौतम<img src={Flag} className="flag-width ms-1" alt="ala" /></h1>
                    </Link>
                </div>
                <div className="col p-0 text-end">
                    <i className="fa fa-bars" onClick={openModal}></i>
                </div>
                <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="border-0 rounded-0 height-of-modal bg-white"
          >
  
            <h2 ref={_subtitle => (subtitle = _subtitle)}><Link to="/" className="text-decoration-none text-dark ">
                                            <h1 className="fs-6 fw-bolder text-color fam-12 text-start">अनुप राज गौतम<img src={Flag} className="flag-width ms-1" alt="ala" /></h1>
                                        </Link></h2>
            <i className="fa fa-times position-absolute text-danger close-button" onClick={closeModal}></i>
            <div className="mt-5 text-start">
                                        <nav >
                                            <ul className="p-0">
                                                <li className="d-block new-background"><Link to="/" className="text-decoration-none new-background-a fs-14 fw-bolder">गृहपृष्ठ</Link></li>
                                                <li className="d-block new-background"><a href="#परिचय" className="text-decoration-none new-background-a fs-14 fw-bolder">परिचय</a></li>
                                                <li className="d-block new-background"><Link to="/karya/upalapdi" className="text-decoration-none new-background-a fs-14 fw-bolder">कार्य र उपलब्धि</Link></li>
                                                <li className="d-block new-background"><Link to="/election" className="text-decoration-none new-background-a fs-14 fw-bolder">चुनावी घोषणापत्र</Link></li>
                                                <li className="d-block new-background"><Link to="/photo/video" className="text-decoration-none new-background-a fs-14 fw-bolder">फोटो र भिडियो</Link></li>
                                                <li className="d-block new-background"><a href="https://election.gov.np/uploads/content/1572014966_np.pdf" target="_blank" className="text-decoration-none new-background-a fs-14 fw-bolder">निर्वाचन आचारसंहिता</a></li>
                                                <select className=" fs-14 fw-bolder select-option border-0 header-index text-color res-width">
                                                    <option>Nepali</option>
                                                    <option>English</option>
                                                </select>
                                            </ul>
                                        </nav>
                                    </div>
          </Modal>

            </div>
        </header>
        </>
    )
}
export default Header;