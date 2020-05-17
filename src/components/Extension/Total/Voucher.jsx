import React from "react";

const Voucher = (props) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title"><a href="#collapse-voucher" data-toggle="collapse" data-parent="#accordion" className="accordion-toggle">{props.state.heading_title} <i className="fa fa-caret-down"></i></a></h4>
            </div>
            <div id="collapse-voucher" className="panel-collapse collapse">
                <div className="panel-body">
                    <label className="col-sm-2 control-label" htmlFor="input-voucher">{props.state.entry_voucher}</label>
                    <div className="input-group">
                        <input type="text" name="voucher" value={props.state.voucher} placeholder={props.state.entry_voucher} id="input-voucher" className="form-control"/>
                        <span className="input-group-btn">
                            <input type="submit" value={props.state.button_voucher} id="button-voucher" data-loading-text={props.state.text_loading} className="btn btn-primary"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Voucher;