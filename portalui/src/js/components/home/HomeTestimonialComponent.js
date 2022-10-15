import React, { useEffect } from 'react';
import { TestimonialComponent } from '../custom-components/CustomComponents';
import { ThreeDots } from 'react-loader-spinner';
import { injectIntl } from 'react-intl';
import Carousel from "./Carousel"

const HomeTestimonialComponent = (props) => {

  const { formatMessage } = props.intl;

  useEffect(() => {
    props.getTestimonialData("http://20.197.3.174:8008/api/testimonials");
  }, []);


  return (
    <div>
      {props.testimonialLoader && (<div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      > <ThreeDots color="#004274" height="100" width="100" />
      </div>)}

      {props.testimonialList && !props.testimonialLoader && (<div>
        <section className="bg-color-1 padding-sm cust-height">
          <div className="container-fluid">
            <h2 className="text-center">{formatMessage({ id: "home.testimonials" })}</h2>
            <Carousel show={3} style={{marginTop: "80px"}} >
                {props.testimonialList.map((v, i) => {
                  return (
                    <TestimonialComponent key={"tc" + i}{...props.testimonialList[i]} />
                  )
                })}
            </Carousel>
          </div>
        </section>
      </div>)}

    </div>
  );
};

export default injectIntl(HomeTestimonialComponent);