import React from 'react';
import { Route, Switch } from 'react-router';
import { ApolloProvider, withApollo } from 'react-apollo';
import routes from './index';
import Main from './Main'
// import Navbar from '../components/Navbar';

// const ReactGA = process.browser ? require('react-ga') : {};

// if (process.browser) {
//   // Initialize Analytics
//   ReactGA.initialize('UA-74643563-4');
// }

// function logPageView() {
//   if (process.browser) {
//     ReactGA.set({ page: window.location.pathname });
//     ReactGA.pageview(window.location.pathname);
//   }

//   return null;
// }

class Layout extends React.Component{
	render (props) {
		return(
			 <div>
     {/*<Navbar />*/}
     <div className="container">
      <Switch>
        <Route path='/' render={ (props) =>
          <Main client={this.props.client} {...props}/>}/>
      </Switch>
     </div>
   </div>)
	}
}

export default withApollo(Layout)
