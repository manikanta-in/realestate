
import React from 'react';
import { injectIntl } from 'react-intl';


const SellAgricultureFarmHouseComponent = (props) => {

  const { formatMessage } = props.intl;

  const onFieldSet = (value, objName, objField) => {
    let req = {};
    req.value = value;
    req.objName = objName;
    req.objField = objField;
    props.setSellFieldValue(req);
  }

  return (
    <div className="col-md-5 col-md-offset-1">
      <div className="row">

        {props.agricultureFormHouse && Object.keys(props.agricultureFormHouse).map((v) => {
          return (
            <div className={props.agricultureFormHouse[v].type == "title" ? "col-sm-12" : "col-sm-6"}>
              <div className="form-group">
                <label className="control-label">{formatMessage({ id: props.agricultureFormHouse[v].titleId })}</label>
                {props.agricultureFormHouse[v].type == "primary" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.agricultureFormHouse[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.agricultureFormHouse[v].value} onChange={(e) => onFieldSet(e.target.value, "agricultureFormHouse", v)} placeholder="" />
                  <span style={{ display: props.agricultureFormHouse[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.agricultureFormHouse[v].errorMessage })}</span>
                </span>)}
                {props.agricultureFormHouse[v].type == "addon" && (
                  <div className="input-group" style={{ display: "flex" }}>
                    <span className="rmp-tooltip" style={{ width: "100%" }}>
                      <input type="text" className={props.agricultureFormHouse[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.agricultureFormHouse[v].value} onChange={(e) => onFieldSet(e.target.value, "agricultureFormHouse", v)} placeholder="" />
                      <span style={{ display: props.agricultureFormHouse[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.agricultureFormHouse[v].errorMessage })}</span>
                    </span>
                    <div className="input-group-addon" style={{ width: props.agricultureFormHouse[v].width, padding: "6px" }}>{formatMessage({ id: props.agricultureFormHouse[v].addOn })}</div>
                  </div>
                )}
                {props.agricultureFormHouse[v].type == "title" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.agricultureFormHouse[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.agricultureFormHouse[v].value} onChange={(e) => onFieldSet(e.target.value, "agricultureFormHouse", v)} placeholder="" />
                  <span style={{ display: props.agricultureFormHouse[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.agricultureFormHouse[v].errorMessage })}</span>
                </span>)}
                {props.agricultureFormHouse[v].type == "dropdown" && (
                  <select value={props.agricultureFormHouse[v].value} onChange={(e) => onFieldSet(e.target.value, "agricultureFormHouse", v)} className="form-control ">
                    <option selected disabled hidden>{""}</option>
                    {props.agricultureFormHouse[v].options && props.agricultureFormHouse[v].options.map((option) => {
                      return (
                        <option selected="" value={option.id}>{formatMessage({ id: option })}</option>)
                    })}
                  </select>
                )}
              </div>
            </div>
          )
        })}




      </div>
    </div>

  )
};

export default injectIntl(SellAgricultureFarmHouseComponent);