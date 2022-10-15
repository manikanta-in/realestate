
import React, { useEffect, useState } from 'react';
import _ from "lodash";
import { injectIntl } from 'react-intl';

const SellAgricultureLandsComponent = (props) => {

  const { formatMessage } = props.intl;

  const onFieldSet = (value, objName, objField) => {
    let req = {};
    req.value = value;
    req.objName = objName;
    req.objField = objField;
    props.setSellFieldValue(req);
  }
  console.log(props.agricultureLand,"agl c props")

  return (
    <div className="col-md-5 col-md-offset-1">

      <div className="row">
        {props.agricultureLand && Object.keys(props.agricultureLand).map((v) => {
          return (
            <div className={props.agricultureLand[v].type == "title" ? "col-sm-12" : "col-sm-6"}>
              <div className="form-group">
                <label className="control-label">
                  {props.agricultureLand[v].titleId != null && (formatMessage({ id: props.agricultureLand[v].titleId }))}
                  {props.agricultureLand[v].titleId == null && props.agricultureLand[v].type == "addon" && (<div style={{ opacity: 0 }}>{formatMessage({ id: props.agricultureLand[v].addOn })}</div>)}
                </label>
                {props.agricultureLand[v].type == "primary" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.agricultureLand[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.agricultureLand[v].value} onChange={(e) => onFieldSet(e.target.value, "agricultureLand", v)} placeholder="" />
                  <span style={{ display: props.agricultureLand[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.agricultureLand[v].errorMessage })}</span>
                </span>)}
                {props.agricultureLand[v].type == "addon" && (
                  <div className="input-group" style={{ display: "flex" }}>
                    <span className="rmp-tooltip" style={{ width: "100%" }}>
                      <input type="text" className={props.agricultureLand[v].isValid ? "form-control" : "form-control rmp-bordor-red"}
                        value={props.agricultureLand[v].value} onChange={(e) => onFieldSet(e.target.value, "agricultureLand", v)} placeholder="" />
                      <span style={{ display: props.agricultureLand[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.agricultureLand[v].errorMessage })}</span>
                    </span>
                    <div className="input-group-addon" style={{ width: props.agricultureLand[v].width, padding: "6px" }}>{formatMessage({ id: props.agricultureLand[v].addOn })}</div>
                  </div>
                )}
                {props.agricultureLand[v].type == "title" && (<span className="rmp-tooltip" style={{ width: "100%" }}>
                  <input type="text" className={props.agricultureLand[v].isValid ? "form-control" : "form-control rmp-bordor-red"} value={props.agricultureLand[v].value} onChange={(e) => onFieldSet(e.target.value, "agricultureLand", v)} placeholder="" />
                  <span style={{ display: props.agricultureLand[v].isValid ? "none" : "block" }} className="rmp-tooltiptext">{formatMessage({ id: props.agricultureLand[v].errorMessage })}</span>
                </span>)}
                {props.agricultureLand[v].type == "dropdown" && props.agricultureLand[v].options && (
                  <select value={props.agricultureLand[v].displayValue} onChange={(e) => onFieldSet(e.target.value, "agricultureLand", v)} className="form-control ">
                    <option selected disabled hidden>{""}</option>
                    {props.agricultureLand[v].options.map((option) => {
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

export default injectIntl(SellAgricultureLandsComponent);