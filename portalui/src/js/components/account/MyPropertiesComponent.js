import React, { useEffect } from 'react';
import { MyPropertyCard } from '../custom-components/CustomComponents';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";

const MyPropertiesComponent = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    props.setCurrentPage("sell");
    if (props.hasToken) {
      props.getMyPropertyProducts("/api/myProperties");
      props.getMyPropertyMessage("/api/myMessages");
    } else {
      navigate("/sell");
    }
  }, []);




  return (
    <div>
      <section className="bgColor0 no-padding-top ">
        <div className="container-fluid">

          <div className="row">
            <div className="col-md-12">
              <h2>My Properties</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              <br />

              {props.propertyLoader && (<div
                style={{
                  width: "100%",
                  height: "100",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              > <ThreeDots color="#004274" height="100" width="100" />
              </div>)}
              {!props.propertyLoader && (<div className="row">
                {props.productList && props.productList.properties && props.productList.properties.map((v, i) => {
                  return (
                    <MyPropertyCard id={i} key={"pc" + i} {...props.productList.properties[i]} />
                  )
                })}
              </div>)}

            </div>
          </div>
        </div>
      </section>

      <hr />
      <section className="bg-color-3 no-padding-top ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h3>Messages</h3>
              {props.messageLoader && (<div
                style={{
                  width: "100%",
                  height: "100",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              > <ThreeDots color="#004274" height="100" width="100" />
              </div>)}

              {!props.messageLoader && (<ul className="alerts-list">
                {props.messageList && props.messageList.map((v, i) => {
                  return (
                    <li> <a className={"alert-" + v.type}>
                      <h5>{v.day}<sup>th</sup> {v.date} </h5>
                      <p>{v.message}</p>
                    </a> </li>
                  )
                })}
              </ul>)}

            </div>
          </div>
        </div>
      </section>

    </div>

  );
};

export default MyPropertiesComponent;