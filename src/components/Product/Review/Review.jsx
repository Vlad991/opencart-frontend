import React from 'react';
import ReactHtmlParser from "react-html-parser";

const Review = (props) => {
    let stateReview = props.state;
    return (<>
        {stateReview.reviews && stateReview.reviews.length > 0 ?
            <>
                {stateReview.reviews.map(review => {
                    return (
                        <table className="table table-striped table-bordered">
                            <tbody>
                            <tr>
                                <td style={{width: 50 + '%'}}><strong>{review.author}</strong></td>
                                <td className="text-right">{review.date_added}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>{review.text}</p>
                                    {[1, 2, 3, 4, 5].map(i => {
                                        if (review.rating < i) {
                                            return <><span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>&nbsp;</>
                                        } else {
                                            return <><span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>&nbsp;</>
                                        }
                                    })}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    )
                })}
                <div className="text-right">{stateReview.pagination}</div>
            </> :
            <p>{ReactHtmlParser(stateReview.text_no_reviews)}</p>}
    </>);
};

export default Review;
