
import React from 'react';
import { injectIntl } from 'react-intl';



const SellResidentialOpenPlotsComponent = (props) => {

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

        {props.residentialPlot && Object.keys(props.residentialPlot).map((v) => {
          return (
            <div className={props.residentialPlot[v].type == "title" ? "col-sm-12" : "col-sm-6"}>
              <div className="form-group">
                <label className="control-label">
                  {props.residentialPlot[v].titleId != null && (formatMessage({ id: props.residentialPlot[v].titleId }))}
                  {props.residentialPlot[v].titleId == null && props.residentialPlot[v].type == "addon" && (<div style={{ opacity: 0 }}>{formatMessage({ id: props.residentialPlot[v].addOn })}</div>)}
                </label>
                {props.residentialPlot[v].type == "primary" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.residentialPlot[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.residentialPlot[v].value} onChange={(e) => onFieldSet(e.target.value, "residentialPlot", v)} placeholder="" />
                  <span style={{ display: props.residentialPlot[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.residentialPlot[v].errorMessage })}</span>
                </span>)}
                {props.residentialPlot[v].type == "addon" && (
                  <div className="input-group" style={{ display: "flex" }}>
                    <span className="rmp-tooltip" style={{ width: "100%" }}>
                      <input type="text" className={props.residentialPlot[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.residentialPlot[v].value} onChange={(e) => onFieldSet(e.target.value, "residentialPlot", v)} placeholder="" />
                      <span style={{ display: props.residentialPlot[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.residentialPlot[v].errorMessage })}</span>
                    </span>
                    <div className="input-group-addon" style={{ width: props.residentialPlot[v].width, padding: "6px" }}>{formatMessage({ id: props.residentialPlot[v].addOn })}</div>
                  </div>
                )}
                 {props.residentialPlot[v].type == "title" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.residentialPlot[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.residentialPlot[v].value} onChange={(e) => onFieldSet(e.target.value, "residentialPlot", v)} placeholder="" />
                  <span style={{ display: props.residentialPlot[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.residentialPlot[v].errorMessage })}</span>
                </span>)}
                {props.residentialPlot[v].type == "dropdown" && (
                  <select value={props.residentialPlot[v].value} onChange={(e) => onFieldSet(e.target.value, "residentialPlot", v)} className="form-control ">
                    <option selected disabled hidden>{""}</option>
                    {props.residentialPlot[v].options && props.residentialPlot[v].options.map((option) => {
                      return (
                        <option selected="" value={option.id}>{formatMessage({ id: option.value })}</option>)
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

export default injectIntl(SellResidentialOpenPlotsComponent);