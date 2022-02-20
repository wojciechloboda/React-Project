import React from 'react';
import NavBar from './NavBar';
import Content from './Content';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);

    this.changePage = this.changePage.bind(this);

    this.state = {
      pageNumber: 1,
      isChanged: false
    }

    this.defStyle={
      position: 'relative', 
      backgroundColor: 'black'
    }
  }

  changePage(num){
    if (this.state.pageNumber !== num){
      this.setState({isChanged: true});
    }
    this.setState({ pageNumber: num });
  }


  render(){

    return (
      <div style={{position: 'absolute', top:'0', left: '0', display: 'flex', flexDirection: 'column', height: '100vh'}}>

        <NavBar changePage={(num) => {this.changePage(num)}}/>

        <Content key={this.state.pageNumber} pageNumber={this.state.pageNumber} isChanged={this.state.isChanged}/>


              <div style={{...this.defStyle}}>afdasjflkjashdfkjahsl</div>
 



      </div>
    );
  }
}


export default App;
