import React, { Component } from 'react';
import CardItem from './CardItem';
import './aboutus.css';
// import pic1 from '../../Images/Rajesh.jpg';
// import pic2 from '../../Images/Bishal.jpg';
// import pic3 from '../../Images/Nischal.jpg';
// import pic4 from '../../Images/Rajendra.jpg';

class aboutus extends Component {
    render() {
        return (
            <>
                <main>

                    <section className="section-tours">
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary">
                                Our Team
                            </h2>
                        </div>
                        <div className="row1">
                            <CardItem
                                // src="./book.jpg"
                                name="Rajesh Sanjyal"
                                nickname="Asterisk"
                                level="B.Sc. CSIT"
                                pvalue="card__price-value card__price-value-1"
                                picvalue="card__picture card__picture--1"
                                hspan="card__heading-span card__heading-span--1"
                                sideback="card__side card__side--back card__side--back-1"
                                sidefront="card__side card__side--front card__side--front-1"
                            />
                            <CardItem 
                            // src="./book.jpg"
                            name="Bishal Khanal"
                            nickname="Vishal"
                            level="B.Sc. CSIT"
                            pvalue="card__price-value card__price-value-2"
                            picvalue="card__picture card__picture--2"
                            hspan="card__heading-span card__heading-span--2"
                            sideback="card__side card__side--back card__side--back-2"
                            sidefront="card__side card__side--front card__side--front-2"
                            />
                            <CardItem 
                            // src="./book.jpg"
                            name="Nischal Phuyal"
                            nickname="Nischal"
                            level="B.Sc. CSIT"
                            pvalue="card__price-value card__price-value-3"
                            picvalue="card__picture card__picture--3"
                            hspan="card__heading-span card__heading-span--3"
                            sideback="card__side card__side--back card__side--back-3"
                            sidefront="card__side card__side--front card__side--front-3"
                            />
                            <CardItem 
                            // src="./book.jpg"
                            name="Rajendra Pd. Bhatta"
                            nickname="Rajen"
                            level="B.Sc. CSIT"
                            pvalue="card__price-value card__price-value-4"
                            picvalue="card__picture card__picture--4"
                            hspan="card__heading-span card__heading-span--4"
                            sideback="card__side card__side--back card__side--back-4"
                            sidefront="card__side card__side--front card__side--front-4"
                            />
                        </div>
                    </section>
                </main>
            </>
        );
    }
}
export default aboutus;