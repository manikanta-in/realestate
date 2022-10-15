
import React from 'react';
import { injectIntl } from 'react-intl';


const SellResidentialOpenFlatsComponent = (props) => {

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
        {props.residentialFlat && Object.keys(props.residentialFlat).map((v) => {
          return (
            <div className={props.residentialFlat[v].type == "title" ? "col-sm-12" : "col-sm-6"}>
              <div className="form-group">
                <label className="control-label">{formatMessage({ id: props.residentialFlat[v].titleId })}</label>
                {props.residentialFlat[v].type == "primary" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.residentialFlat[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.residentialFlat[v].value} onChange={(e) => onFieldSet(e.target.value, "residentialFlat", v)} placeholder="" />
                  <span style={{ display: props.residentialFlat[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.residentialFlat[v].errorMessage })}</span>
                </span>)}
                {props.residentialFlat[v].type == "addon" && (
                  <div className="input-group" style={{ display: "flex" }}>
                    <span className="rmp-tooltip" style={{ width: "100%" }}>
                      <input type="text" className={props.residentialFlat[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.residentialFlat[v].value} onChange={(e) => onFieldSet(e.target.value, "residentialFlat", v)} placeholder="" />
                      <span style={{ display: props.residentialFlat[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.residentialFlat[v].errorMessage })}</span>
                    </span>
                    <div className="input-group-addon" style={{ width: props.residentialFlat[v].width, padding: "6px" }}>{formatMessage({ id: props.residentialFlat[v].addOn })}</div>
                  </div>
                )}
                {props.residentialFlat[v].type == "title" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.residentialFlat[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.residentialFlat[v].value} onChange={(e) => onFieldSet(e.target.value, "residentialFlat", v)} placeholder="" />
                  <span style={{ display: props.residentialFlat[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.residentialFlat[v].errorMessage })}</span>
                </span>)}
                {props.residentialFlat[v].type == "dropdown" && (
                  <select value={props.residentialFlat[v].value} onChange={(e) => onFieldSet(e.target.value, "residentialFlat", v)} className="form-control ">
                    <option selected disabled hidden>{""}</option>
                    {props.residentialFlat[v].options && props.residentialFlat[v].options.map((option) => {
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

export default injectIntl(SellResidentialOpenFlatsComponent);