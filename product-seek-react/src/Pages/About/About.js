import React, { Component } from 'react';
import pic1 from '../../Images/Rajesh.jpg';
import pic2 from '../../Images/Bishal.jpg';
import pic3 from '../../Images/Nischal.jpg';
import pic4 from '../../Images/Rajendra.jpg';
import CardItem from './CardItems';

class About extends Component {

    render() {
        return (

            <div className='container'>
                <h3 className="text-center" style={{ fontWeight: "1000" }}>
                    Our Team
                    <hr />
                </h3>

                <div className="row">

                    <CardItem
                        id='1'
                        src={pic1}
                        fullname="Rajesh Sanjyal"
                        level="B.Sc. CSIT"
                    />
                    <CardItem
                        id='2'
                        src={pic2}
                        fullname="Bishal Khanal"
                        level="B.Sc. CSIT"
                    />
                    <CardItem
                        id='3'
                        src={pic3}
                        fullname="Nischal Phuyal"
                        level="B.Sc. CSIT"
                    />
                    <CardItem
                        id='4'
                        src={pic4}
                        fullname="Rajendra Pd. Bhatta"
                        level="B.Sc. CSIT"
                    />
                </div>
            </div>


        );
    }
}
export default About;