import React, {Component } from 'react';
import About from './aboutus';

class Team extends Component{
    state={
        Members:[
            {id:1,Nickname:'Asterisk',Name:'Rajesh Sanjyal' ,Level:'Bsc Csit',imag:'rajesh.png'},
            {id:2,Nickname:'Rajen',Name:'Rajendra Pd. Bhatta' ,Level:'Bsc Csit',imag:'rajen.png'},
            {id:3,Nickname:'Nischal',Name:'Nischal Phuyal' ,Level:'Bsc Csit',imag:'nischal.png'},
            {id:4,Nickname:'Bishal',Name:'Bishal Khanal' ,Level:'Bsc Csit',imag:'bishal.png'}
        ]
    }
    WebGL2RenderingContext(){
        return(
            <div className="Team">
                <section class="section-tours" id="section-tours">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                    Our Team
                    </h2>
                    <h2 class="heading-tertiary"> We give our best</h2>
                </div>
                <About members={this.state.members}/>
                </section>
            </div>
        )
    }
}
export default Team;