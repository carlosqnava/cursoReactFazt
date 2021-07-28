import React from 'react';
import './App.css';

// function Hellow(props){
//   return(
//     <div>
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//     </div>
//   )
// }

class Hellow extends React.Component{

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show:!this.state.show})
  }

  render(){
    if(this.state.show){
      return (
        <div>
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      )
    }else{
      return(
        <div>
          <h1>No hay elementos</h1>
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      )
    }
  }
  
}

function App() {
  return (
    <div id="hello">
      This is my component: 
      <Hellow mytext="Hellow Fast" subtitle="lineas"/> 
      <Hellow mytext="aaaa" subtitle="tiempo"/>  
      <Hellow mytext="demasiadas" subtitle="subtítulo final"/>
    </div>
  );
}

export default App;
