import React,{Component} from 'react';

import Pages from './Pages/pages';
import DashboardNav from './Navigation/navigation';
import {connect} from 'react-redux';


class Dashboard extends Component{
	render(){
		return(
			<div className='container pt-4 pb-4'>
				<div className='row'>
					<div className='col-md-3'>
					<DashboardNav/>
					</div>
					<div className='col-md-9'>
					<Pages/>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard;