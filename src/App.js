import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  state = {
   fullName: "Sara",
   bio: "Sara's bio",
   imgSrc: "./profilePhoto.jpg",
   profession: "teacher",
   show: false,
   cnt: 0
 };
 toggleShow=()=>this.setState({show: !this.state.show})
 componentDidMount() {
     setInterval(() => {
       this.setState((prevState) => ({
         cnt: prevState.cnt + 1,
       }));
     },1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.show !== this.state.show) {
      this.setState((prevState) => ({
        cnt: 0,
      }));
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p></p>
          <button onClick={this.toggleShow}>Toggle profile</button>
          {this.state.show && (
            <div style={{width:"240px", background:"darkcyan", marginTop:"16px"}}>
              <p>{this.state.fullName}</p>
              <p>{this.state.bio}</p>
              <img src={this.state.imgSrc} style={{width:"100%"}} alt="profilePhoto"></img>
              <p>{this.state.profession}</p>
              <div> Count: {this.state.cnt} sec</div>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
