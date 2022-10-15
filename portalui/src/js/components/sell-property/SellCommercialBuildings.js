
import React from 'react';
import { injectIntl } from 'react-intl';

const SellCommercialBuildings = (props) => {

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
        {props.commercialBuilding && Object.keys(props.commercialBuilding).map((v) => {
          return (
            <div className={props.commercialBuilding[v].type == "title" ? "col-sm-12" : "col-sm-6"}>
              <div className="form-group">
                <label className="control-label">{formatMessage({ id: props.commercialBuilding[v].titleId })}</label>
                {props.commercialBuilding[v].type == "primary" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.commercialBuilding[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.commercialBuilding[v].value} onChange={(e) => onFieldSet(e.target.value, "commercialBuilding", v)} placeholder="" />
                  <span style={{ display: props.commercialBuilding[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.commercialBuilding[v].errorMessage })}</span>
                </span>)}
                {props.commercialBuilding[v].type == "addon" && (
                  <div className="input-group" style={{ display: "flex" }}>
                    <span className="rmp-tooltip" style={{ width: "100%" }}>
                      <input type="text" className={props.commercialBuilding[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.commercialBuilding[v].value} onChange={(e) => onFieldSet(e.target.value, "commercialBuilding", v)} placeholder="" />
                      <span style={{ display: props.commercialBuilding[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.commercialBuilding[v].errorMessage })}</span>
                    </span>
                    <div className="input-group-addon" style={{ width: props.commercialBuilding[v].width, padding: "6px" }}>{formatMessage({ id: props.commercialBuilding[v].addOn })}</div>
                  </div>
                )}
                {props.commercialBuilding[v].type == "title" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.commercialBuilding[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.commercialBuilding[v].value} onChange={(e) => onFieldSet(e.target.value, "commercialBuilding", v)} placeholder="" />
                  <span style={{ display: props.commercialBuilding[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.commercialBuilding[v].errorMessage })}</span>
                </span>)}
                {props.commercialBuilding[v].type == "dropdown" && props.commercialBuilding[v].options && (
                  <select value={props.commercialBuilding[v].value} onChange={(e) => onFieldSet(e.target.value, "commercialBuilding", v)} className="form-control ">
                    <option selected disabled hidden>{""}</option>
                    {props.commercialBuilding[v].options.map((option) => {
                      return (
                        <option selected="">{formatMessage({ id: option })}</option>)
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

export default injectIntl(SellCommercialBuildings);