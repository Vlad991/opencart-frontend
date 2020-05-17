import React from "react";

const Reward = (props) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title"><a href="#collapse-reward" className="accordion-toggle" data-toggle="collapse" data-parent="#accordion">{props.state.heading_title} <i className="fa fa-caret-down"></i></a></h4>
            </div>
            <div id="collapse-reward" className="panel-collapse collapse">
                <div className="panel-body">
                    <label className="col-sm-2 control-label" htmlFor="input-reward">{props.state.entry_reward}</label>
                    <div className="input-group">
                        <input type="text" name="reward" value={props.state.reward} placeholder={props.state.entry_reward} id="input-reward" className="form-control"/>
                        <span className="input-group-btn">
                            <input type="submit" value={props.state.button_reward} id="button-reward" data-loading-text={props.state.text_loading} className="btn btn-primary"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reward;