import React from "react";

const Coupon = (props) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title"><a href="#collapse-coupon" className="accordion-toggle" data-toggle="collapse" data-parent="#accordion">{props.state.heading_title} <i className="fa fa-caret-down"></i></a></h4>
            </div>
            <div id="collapse-coupon" className="panel-collapse collapse">
                <div className="panel-body">
                    <label className="col-sm-2 control-label" htmlFor="input-coupon">{props.state.entry_coupon}</label>
                    <div className="input-group">
                        <input type="text" name="coupon" value={props.state.coupon} placeholder={props.state.entry_coupon} id="input-coupon" className="form-control"/>
                        <span className="input-group-btn">
                            <input type="button" value={props.state.button_coupon} id="button-coupon" data-loading-text={props.state.text_loading} className="btn btn-primary"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coupon;