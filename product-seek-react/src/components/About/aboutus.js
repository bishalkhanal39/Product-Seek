import React, { Component} from 'react';
import Team from './Team'
import './aboutus.css';

class aboutus extends Component{
    render(){
        const{Members}=this.props;
        const memberList=Members.map(member=>{
            return(
                <div className="member" key={Members.id}>
                    <div class="row">
                        <div class="col-1-of-4">
                            <div class="card">                        
                                <div class="card__side card__side--back card__side--back-1">
                                    <div class="card__cta">
                                        <p class="card__price-value card__price-value-1">
                                        <img src={member.imag} alt={member.Name}/>
                                        </p>
                                        <a href="profile" class="btn btn--white">Profile</a>
                                    </div>
                                </div>
                                <div class="card__side card__side--front card__side--front-1">
                                    <div class="card__picture card__picture--1">&nbsp;
                                    </div>
                                    <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--1">
                                        <p>{member.Nickname}</p></span>
                                    </h4>
                                    <div class="card__details">
                                    <ul>
                                        <li>{member.Name}</li>
                                        <li>{member.Level}</li>
                                    </ul>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
      return(
        <div className="member-list">
            {memberList}
        </div>
    );
    }
}
export default aboutus;