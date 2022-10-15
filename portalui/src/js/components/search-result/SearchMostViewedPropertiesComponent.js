import React, { useEffect } from 'react';
import $ from 'jquery';
window.jQuery = $;
require('../../assets/plugins/owl.carousel.js');
import { OwlPropertyCard } from '../custom-components/CustomComponents';
import { ThreeDots } from 'react-loader-spinner';
import { injectIntl } from 'react-intl';

const SearchMostViewedPropertiesComponent = (props) => {
  const { formatMessage } = props.intl;

  useEffect(() => {
    if (!props.searchPropertiesLoader) {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            nav: false
          },
          1000: {
            items: 5,
            nav: true,
            loop: false,
            margin: 20
          }
        }
      })
    }

  }, [props.searchPropertiesLoader]);

  useEffect(() => {
    props.getSearchProducts("/api/mostViewedPropertiesInSearch");
  }, []);

  return (

    <div>
      <section className="bg-color-2 padding-sm">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h3>{formatMessage({ id: "search.mostViewed" })} </h3>
            </div>
          </div>

          {props.searchPropertiesLoader && (<div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          > <ThreeDots color="#004274" height="100" width="100" />
          </div>)}

          {!props.searchPropertiesLoader && (<div className="row" >
            <div className="col-md-12" >
              <div className="owl-carousel owl-theme owl-loaded owl-drag " >
                <div className="owl-stage-outer" >
                  <div className="owl-stage cardsContainer">
                    {props.searchProperties && props.searchProperties.map((v, i) => {
                      return (
                        <OwlPropertyCard key={"opc" + i}{...props.searchProperties[i]} intl={props.intl}/>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>)}

        </div>
      </section>
    </div>

  );
};

export default injectIntl(SearchMostViewedPropertiesComponent);