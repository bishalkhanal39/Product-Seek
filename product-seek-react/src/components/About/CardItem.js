import React from 'react';
import Logo from '../Navigation/Navbar/logo/product-seek-logo.png';

function CardItem(props) {
    return (
        <>
            <div className="col-1-of-4">
                <div className="card">
                    <div className={props.sideback}>
                        <div className="card__cta">
                            <p className={props.pvalue}>
                                <img src={Logo} alt={props.name} style={{width: "100%"}}/>
                            </p>
                            <a href="profile" className="btn btn--white">Profile</a>
                        </div>
                    </div>
                    <div className={props.sidefront}>
                        <div className={props.picvalue}>&nbsp;
                                    </div>
                        <h4 className="card__heading">
                            <span className={props.hspan}>
                                <p>{props.nickname}</p></span>
                        </h4>
                        <div className="card__details">
                            <ul>
                                <li>{props.name}</li>
                                <li>{props.level}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardItem;