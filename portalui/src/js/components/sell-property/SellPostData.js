
import React, { useRef, useEffect } from 'react';
import ImgEmpty from "../../assets/images/img-empty.jpg";
import ImgFailed from "../../assets/images/uploadfailed.jpg";
import { ThreeDots } from 'react-loader-spinner';

const SellPostData = (props) => {

  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, props.media.length);
  }, [props.media]);

  const hiddenFileInput = useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event, i) => {
    const fileUploaded = event.target.files[0];
    let req = {};
    req.currentIndex = i;
    req.media = props.media;
    req.fileName = event.target.files[0].name;
    var formData = new FormData();
    formData.append("image", event.target.files[0]);
    props.setUploadFile(`/api/property/uploadFile?id=${props.id}`, req, formData);
  };

  const handleClickList = i => {
    itemsRef.current[i].click();
  };

  const handleDelete = i => {
    let payload = {};
    payload.index = i;
    props.setMediaDelete(payload);
  };


  return (
    <div>
      <section className="bg-color-0 padding-sm no-padding-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default no-margin-bottom">
                <div className="panel-heading ">
                  <h3 className="panel-title">Post Pictures and Videos</h3>
                </div>
                <div className="panel-body">
                  <div className="row">
                    {props.media && props.media.map((v, i) => {
                      console.log(v);
                      console.log(i);
                      return (
                        <div key={"media" + i} className="col-xs-6 col-sm-2">
                          <div className="uploadImgCon active" style={{ position: "relative" }}>
                            {v.imgUrl != null && (<a role="button" className="delImg"><i onClick={() => handleDelete(i)} className="zmdi zmdi-delete"></i></a>)}
                            <a role="button" className="uploadImg" >
                              <h5 style={{ background: "white" }}>{v.title}</h5>
                              <img src={v.uploadFailed ? ImgFailed : (v.imgUrl != null ? v.imgUrl : ImgEmpty)} onClick={() => handleClickList(i)} />
                              <input type="file"
                                ref={el => itemsRef.current[i] = el}
                                onChange={(e) => handleChange(e, i)}
                                style={{ display: 'none' }}
                              />
                              {v.loading && (<div
                                style={{
                                  width: "100%",
                                  height: "100",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  position: "absolute",
                                  marginTop: "-68px"
                                }}
                              > <ThreeDots color="#004274" height="40" width="40" />
                              </div>)}
                            </a>
                          </div>
                        </div>)
                    })}
                    <div className="col-xs-6 col-sm-2">
                      <div className="uploadImgCon active"><a className="delImg hidden"><i className="zmdi zmdi-delete"></i></a><a role="button" className="uploadImg">
                        <h5 className="hidden">Other</h5>
                        <img src={ImgEmpty} onClick={handleClick} />
                        <input type="file"
                          ref={hiddenFileInput}
                          onChange={handleChange}
                          style={{ display: 'none' }}
                        />
                        {props.newFileLoader && (<div 
                          style={{
                            width: "100%",
                            height: "100",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            marginTop: "-68px"
                          }}
                        > <ThreeDots color="#004274" height="40" width="40" />
                        </div>)}
                      </a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
};

export default SellPostData;