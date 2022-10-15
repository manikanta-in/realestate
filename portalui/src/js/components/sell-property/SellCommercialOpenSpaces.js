
import React from 'react';
import { injectIntl } from 'react-intl';

const SellCommercialOpenSpaces = (props) => {


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
        {props.commercialSpace && Object.keys(props.commercialSpace).map((v) => {
          return (
            <div className={props.commercialSpace[v].type == "title" ? "col-sm-12" : "col-sm-6"}>
              <div className="form-group">
                <label className="control-label">{formatMessage({ id: props.commercialSpace[v].titleId })}</label>
                {props.commercialSpace[v].type == "primary" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.commercialSpace[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.commercialSpace[v].value} onChange={(e) => onFieldSet(e.target.value, "commercialSpace", v)} placeholder="" />
                  <span style={{ display: props.commercialSpace[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.commercialSpace[v].errorMessage })}</span>
                </span>)}
                {props.commercialSpace[v].type == "addon" && (
                  <div className="input-group" style={{ display: "flex" }}>
                    <span className="rmp-tooltip" style={{ width: "100%" }}>
                      <input type="text" className={props.commercialSpace[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.commercialSpace[v].value} onChange={(e) => onFieldSet(e.target.value, "commercialSpace", v)} placeholder="" />
                      <span style={{ display: props.commercialSpace[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.commercialSpace[v].errorMessage })}</span>
                    </span>
                    <div className="input-group-addon" style={{ width: props.commercialSpace[v].width, padding: "6px" }}>{formatMessage({ id: props.commercialSpace[v].addOn })}</div>
                  </div>
                )}
                {props.commercialSpace[v].type == "title" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.commercialSpace[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.commercialSpace[v].value} onChange={(e) => onFieldSet(e.target.value, "commercialSpace", v)} placeholder="" />
                  <span style={{ display: props.commercialSpace[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.commercialSpace[v].errorMessage })}</span>
                </span>)}
                {props.commercialSpace[v].type == "dropdown" && props.commercialSpace[v].options && (
                  <select value={props.commercialSpace[v].value} onChange={(e) => onFieldSet(e.target.value, "commercialSpace", v)} className="form-control ">
                    <option selected disabled hidden>{""}</option>
                    {props.commercialSpace[v].options.map((option) => {
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

export default injectIntl(SellCommercialOpenSpaces);