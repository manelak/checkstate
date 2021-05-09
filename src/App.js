
import './App.css';
import React ,{Component} from 'react';

class App extends Component {
  state = {
    Person: {
      fullName: "Manel Akrimi",
      bio: "Hello! Im FullStack JS,based on Sidi Bouzid.I had my Certification from GomyCode.I have found enjoyment and creativity during my period of Learning Developement.",
      imgSrc: 'Manel.jpg',
      profession: "WebDeveloper"
    
    },
    show: false,
    timer: 0,
    intervall:null
  };
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  componentDidMount(){

    this.setState({
      intervall : setInterval(() => {
        this.setState({timer: this.state.timer + 1 }) ;

      }, 1000) ,
    });

  }
  componentDidUpdate(){
    console.log("componentDidUpdate()") ;

  }
  componentWillUnmount(){

    clearInterval(this.state.timer);

  }
  render(){
  return (
    <div className="App">
  <header className="App-header">
    <img src='profile.svg' className="App-logo" alt="logo" /><br></br>
    <br/>
    <h3>Did You want to show profil?</h3>
</header>

        {this.state.show && (<div className="showprofile">
  <h1>{this.state.Person.fullName}</h1>
 
  <p>{this.state.Person.bio}</p>
  <img src={this.state.Person.imgSrc} alt='manel' width={220} height={210}></img> 
  <h4>{this.state.Person.profession}</h4>
  <h2>Number of seconds is {this.state.seconds}</h2>
<h2>{this.state.timer}</h2>
   </div>
)}

<button onClick={this.handleShowPerson}>Show</button>
  </div>

  );
  }
  }

  export default App;