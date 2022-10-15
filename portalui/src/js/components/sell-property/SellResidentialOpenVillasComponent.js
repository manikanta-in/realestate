
import React from 'react';
import { injectIntl } from 'react-intl';


const SellResidentialOpenVillasComponent = (props) => {

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
        {props.residentialVilla && Object.keys(props.residentialVilla).map((v) => {
          return (
            <div className={props.residentialVilla[v].type == "title" ? "col-sm-12" : "col-sm-6"}>
              <div className="form-group">
                <label className="control-label">{formatMessage({ id: props.residentialVilla[v].titleId })}</label>
                {props.residentialVilla[v].type == "primary" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.residentialVilla[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.residentialVilla[v].value} onChange={(e) => onFieldSet(e.target.value, "residentialVilla", v)} placeholder="" />
                  <span style={{ display: props.residentialVilla[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.residentialVilla[v].errorMessage })}</span>
                </span>)}
                {props.residentialVilla[v].type == "addon" && (
                  <div className="input-group" style={{ display: "flex" }}>
                    <span className="rmp-tooltip" style={{ width: "100%" }}>
                      <input type="text" className={props.residentialVilla[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.residentialVilla[v].value} onChange={(e) => onFieldSet(e.target.value, "residentialVilla", v)} placeholder="" />
                      <span style={{ display: props.residentialVilla[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.residentialVilla[v].errorMessage })}</span>
                    </span>
                    <div className="input-group-addon" style={{ width: props.residentialVilla[v].width, padding: "6px" }}>{formatMessage({ id: props.residentialVilla[v].addOn })}</div>
                  </div>
                )}
                {props.residentialVilla[v].type == "title" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.residentialVilla[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.residentialVilla[v].value} onChange={(e) => onFieldSet(e.target.value, "residentialVilla", v)} placeholder="" />
                  <span style={{ display: props.residentialVilla[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.residentialVilla[v].errorMessage })}</span>
                </span>)}
                {props.residentialVilla[v].type == "dropdown" && (
                  <select value={props.residentialVilla[v].value} onChange={(e) => onFieldSet(e.target.value, "residentialVilla", v)} className="form-control ">
                    <option selected disabled hidden>{""}</option>
                    {props.residentialVilla[v].options && props.residentialVilla[v].options.map((option) => {
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

export default injectIntl(SellResidentialOpenVillasComponent);