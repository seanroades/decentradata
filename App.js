import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import image from './images/decentraland_map_01.png';
import image2 from "./images/decentraland_map_02.gif"; 
import image3 from "./images/decentraland_map_03.gif"
import image4 from "./images/decentraland_map_04.gif"
import image5 from "./images/decentraland_map_05.gif";
import image6 from "./images/decentraland_map_06.gif"
import image7 from "./images/decentraland_map_07.gif"
import image8 from "./images/decentraland_map_08.gif"
import image9 from "./images/decentraland_map_09.gif"
import headerImage from "./images/Decentraldatalogo.png";

import Button from 'react-bootstrap/Button'
import { render } from '@testing-library/react';
import { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.show1 = this.show1.bind(this)
    this.show2 = this.show2.bind(this)
    this.show3 = this.show3.bind(this)
    this.show4 = this.show4.bind(this)
    this.show5 = this.show5.bind(this)
    this.show6 = this.show6.bind(this)
    this.show7 = this.show7.bind(this)
    this.show8 = this.show8.bind(this)
    this.show9 = this.show9.bind(this)
    this.viewmore = this.viewmore.bind(this)
    this.state = {
      sector1: false,
      sector2: false,
      sector3: false,
      sector4: false,
      sector5: false,
      sector6: false,
      sector7: false,
      sector8: false,
      sector9: false,
      cards: "Not availible",
      images: [],
      length: 4,
      recommended1: [],
      recommended2: [],
      recommended3: [],
      recommended4: [],
      recommended5: [],
      recommended6: [],
      recommended7: [],
      recommended8: [],
      recommended9: [],
      data: false
    }
  }

  componentDidMount = () => {
    axios.get("/test").then(response => {
      console.log('here', response.data.recommendations2[0].price)
      var i;
      for(i = 0; i < 1; i++){
        this.setState({recommended1: response.data.recommendations1})
      }
      for(i = 0; i < 1; i++){
        this.setState({recommended2: response.data.recommendations2})
      }
      for(i = 0; i < 1; i++){
        this.setState({recommended3: response.data.recommendations3})
      }
      for(i = 0; i < 1; i++){
        this.setState({recommended4: response.data.recommendations4})
      }
      for(i = 0; i < 1; i++){
        this.setState({recommended5: response.data.recommendations5})
      }
      for(i = 0; i < 1; i++){
        this.setState({recommended6: response.data.recommendations6})
      }
      for(i = 0; i < 1; i++){
        this.setState({recommended7: response.data.recommendations7})
      }
      for(i = 0; i < 1; i++){
        this.setState({recommended8: response.data.recommendations8})
      }
      for(i = 0; i < 1; i++){
        this.setState({recommended9: response.data.recommendations9})
      }
      this.setState({data: true})
    })
  }

  viewmore() {
    var lengthTemp = this.state.length + 4;
    this.setState({length: lengthTemp})
  }

  show1() {
    this.setState({sector1: !this.state.sector1})
  }

  show2() {
    this.setState({sector2: !this.state.sector2})
  }

  show3() {
    this.setState({sector3: !this.state.sector3})
  }

  show4() {
    this.setState({sector4: !this.state.sector4})
  }

  show5() {
    this.setState({sector5: !this.state.sector5})
  }

  show6() {
    this.setState({sector6: !this.state.sector6})
  }

  show7() {
    this.setState({sector7: !this.state.sector7})
  }

  show8() {
    this.setState({sector8: !this.state.sector8})
  }

  show9() {
    this.setState({sector9: !this.state.sector9})
  }

  render() {
    if(this.state.data == true) {
    var i;
    var recommended1 = []
    for(i = 0; i < this.state.length; i++) {
      recommended1.push(
        <div class="card">
            <div class="image">
            </div>
            <div class="title">
                <img src={`https://api.decentraland.org/v1/parcels/${this.state.recommended1[i].x}/${this.state.recommended1[i].y}/map.png`} class="cardImage"></img>
                <h1 class="name">{this.state.recommended1[i].name}</h1>
                <h1 class="coord">({this.state.recommended1[i].x},{this.state.recommended1[i].y})</h1>
                <h1>Sale price:
                {Math.round(this.state.recommended1[i].price)} MANA
                </h1>
                <h1> Estimated price:<br></br>
                  {Math.round(this.state.recommended1[i].estimate)} MANA</h1>
            </div>
            <div class="des">
              <button variant="primary" href="https://market.decentraland.org/browse?section=land">View listing</button>
            </div>
      </div>)
    }
    var recommended2 = []
    for(i = 0; i < this.state.length; i++) {
      recommended2.push(
        <div class="card">
            <div class="image">
            </div>
            <div class="title">
                <img src={`https://api.decentraland.org/v1/parcels/${this.state.recommended2[i].x}/${this.state.recommended2[i].y}/map.png`} class="cardImage"></img>
                <h1 class="name">{this.state.recommended2[i].name}</h1>
                <h1 class="coord">({this.state.recommended2[i].x},{this.state.recommended2[i].y})</h1>
                <h1>Sale price:
                {Math.round(this.state.recommended2[i].price)} MANA
                </h1>
                <h1> Estimated price:<br></br>
                {Math.round(this.state.recommended2[i].estimate)} MANA</h1>
            </div>
            <div class="des">
              <button variant="primary" herf="https://market.decentraland.org/browse?section=land">View listing</button>
            </div>
      </div>)
    }
    var recommended3 = []
    for(i = 0; i < this.state.length; i++) {
      recommended3.push(
        <div class="card">
            <div class="image">
            </div>
            <div class="title">
                <img src={`https://api.decentraland.org/v1/parcels/${this.state.recommended3[i].x}/${this.state.recommended3[i].y}/map.png`} class="cardImage"></img>
                <h1 class="name">{this.state.recommended3[i].name}</h1>
                <h1 class="coord">({this.state.recommended3[i].x},{this.state.recommended3[i].y})</h1>
                <h1>Sale price:
                {Math.round(this.state.recommended3[i].price)} MANA
                </h1>
                <h1> Estimated price:<br></br>
                {Math.round(this.state.recommended3[i].estimate)} MANA</h1>
            </div>
            <div class="des">
              <button variant="primary" href="https://market.decentraland.org/browse?section=land">View listing</button>
            </div>
      </div>)
    }
    var recommended4 = []
    for(i = 0; i < this.state.length; i++) {
      recommended4.push(
        <div class="card">
            <div class="image">
            </div>
            <div class="title">
                <img src={`https://api.decentraland.org/v1/parcels/${this.state.recommended4[i].x}/${this.state.recommended4[i].y}/map.png`} class="cardImage"></img>
                <h1 class="name">{this.state.recommended4[i].name}</h1>
                <h1 class="coord">({this.state.recommended4[i].x},{this.state.recommended4[i].y})</h1>
                <h1>Sale price:
                {Math.round(this.state.recommended4[i].price)} MANA
                </h1>
                <h1> Estimated price:<br></br>
                {Math.round(this.state.recommended4[i].estimate)} MANA</h1>
            </div>
            <div class="des">
              <button variant="primary" href="https://market.decentraland.org/browse?section=land">View listing</button>
            </div>
      </div>)
    }
    var recommended5 = []
    for(i = 0; i < this.state.length; i++) {
      recommended5.push(
        <div class="card">
            <div class="image">
            </div>
            <div class="title">
                <img src={`https://api.decentraland.org/v1/parcels/${this.state.recommended5[i].x}/${this.state.recommended5[i].y}/map.png`} class="cardImage"></img>
                <h1 class="name">{this.state.recommended4[i].name}</h1>
                <h1 class="coord">({this.state.recommended5[i].x},{this.state.recommended5[i].y})</h1>
                <h1>Sale price:
                {Math.round(this.state.recommended5[i].price)} MANA
                </h1>
                <h1> Estimated price:<br></br>
                {Math.round(this.state.recommended5[i].estimate)} MANA</h1>
            </div>
            <div class="des">
              <button variant="primary" href="https://market.decentraland.org/browse?section=land">View listing</button>
            </div>
      </div>)
    }
    var recommended6 = []
    for(i = 0; i < this.state.length; i++) {
      recommended6.push(
        <div class="card">
            <div class="image">
            </div>
            <div class="title">
                <img src={`https://api.decentraland.org/v1/parcels/${this.state.recommended5[i].x}/${this.state.recommended5[i].y}/map.png`} class="cardImage"></img>
                <h1 class="name">{this.state.recommended4[i].name}</h1>
                <h1 class="coord">({this.state.recommended4[i].x},{this.state.recommended4[i].y})</h1>
                <h1>Sale price:
                {Math.round(this.state.recommended4[i].price)} MANA
                </h1>
                <h1> Estimated price:<br></br>
                {Math.round(this.state.recommended4[i].estimate)} MANA</h1>
            </div>
            <div class="des">
              <button variant="primary" href="https://market.decentraland.org/browse?section=land">View listing</button>
            </div>
      </div>)
    }
    var recommended7 = []
    for(i = 0; i < this.state.length; i++) {
      recommended7.push(
        <div class="card">
            <div class="image">
            </div>
            <div class="title">
                <img src={`https://api.decentraland.org/v1/parcels/${this.state.recommended7[i].x}/${this.state.recommended7[i].y}/map.png`} class="cardImage"></img>
                <h1 class="name">{this.state.recommended7[i].name}</h1>
                <h1 class="coord">({this.state.recommended7[i].x},{this.state.recommended7[i].y})</h1>
                <h1>Sale price:
                {Math.round(this.state.recommended7[i].price)} MANA
                </h1>
                <h1> Estimated price:<br></br>
                {Math.round(this.state.recommended7[i].estimate)} MANA</h1>
            </div>
            <div class="des">
              <button variant="primary" href="https://market.decentraland.org/browse?section=land">View listing</button>
            </div>
      </div>)
    }
    var recommended8 = []
    for(i = 0; i < this.state.length; i++) {
      recommended8.push(
        <div class="card">
            <div class="image">
            </div>
            <div class="title">
                <img src={`https://api.decentraland.org/v1/parcels/${this.state.recommended8[i].x}/${this.state.recommended8[i].y}/map.png`} class="cardImage"></img>
                <h1 class="name">{this.state.recommended8[i].name}</h1>
                <h1 class="coord">({this.state.recommended8[i].x},{this.state.recommended8[i].y})</h1>
                <h1>Sale price:
                {Math.round(this.state.recommended8[i].price)} MANA
                </h1>
                <h1> Estimated price:<br></br>
                {Math.round(this.state.recommended8[i].estimate)} MANA</h1>
            </div>
            <div class="des">
              <button variant="primary" href="https://market.decentraland.org/browse?section=land">View listing</button>
            </div>
      </div>)
    }
    var recommended9 = []
    for(i = 0; i < this.state.length; i++) {
      recommended9.push(
        <div class="card">
            <div class="image">
            </div>
            <div class="title">
                <img src={`https://api.decentraland.org/v1/parcels/${this.state.recommended9[i].x}/${this.state.recommended9[i].y}/map.png`} class="cardImage"></img>
                <h1 class="name">{this.state.recommended9[i].name}</h1>
                <h1 class="coord">({this.state.recommended9[i].x},{this.state.recommended9[i].y})</h1>
                <h1>Sale price:
                {Math.round(this.state.recommended9[i].price)} MANA
                </h1>
                <h1> Estimated price:<br></br>
                {Math.round(this.state.recommended9[i].estimate)} MANA</h1>
            </div>
            <div class="des">
              <button variant="primary" href="https://market.decentraland.org/browse?section=land">View listing</button>
            </div>
      </div>)
    }
  }
    
  return (
    <div className="App">
      <header class="headr">
        <div class="logo">
            <a href=""><img src={headerImage} alt=""></img></a>
        </div>
    </header>
      <h5>Click on the part to explore!</h5>
      <section id="mapd">
          <div class="maph">
              <div class="map">
                  <img src={image} onClick={this.show1} alt="" class="mapp" id="map1"></img>
                  <img src={image2} onClick={this.show2} alt="" class="mapp" id="map2"></img>
                  <img src={image3} onClick={this.show3} alt="" class="mapp" id="map3"></img>
                  <img src={image4} onClick={this.show4} alt="" class="mapp" id="map4"></img>
                  <img src={image5} onClick={this.show5} alt="" class="mapp" id="map5"></img>
                  <img src={image6} onClick={this.show6} alt="" class="mapp" id="map6"></img>
                  <img src={image7} onClick={this.show7} alt="" class="mapp" id="map7"></img>
                  <img src={image8} onClick={this.show8} alt="" class="mapp" id="map8"></img>
                  <img src={image9} onClick={this.show9} alt="" class="mapp" id="map9"></img>
              </div>
          </div>
      </section>
      <section id="data">
        {this.state.sector1 ?
        <div>
          <div class="cards">
              <div class="heading">
                  <h1> <br></br> Sector 1</h1>
              </div>
              {recommended1}
          </div>
          <button style={{marginLeft: '10%'}} onClick={this.viewmore} >View More</button>
        </div>
      : <div></div>}
      {this.state.sector2 ?
        <div>
          <div class="cards">
              <div class="heading">
                  <h1> <br></br> Sector 2</h1>
              </div>
              {recommended2}
          </div>
          <button style={{marginLeft: '10%'}} onClick={this.viewmore} >View More</button>
        </div>
      : <div></div>}
      {this.state.sector3 ?
        <div>
          <div class="cards">
              <div class="heading">
                  <h1> <br></br> Sector 2</h1>
              </div>
              {recommended3}
          </div>
          <button style={{marginLeft: '10%'}} onClick={this.viewmore} >View More</button>
        </div>
      : <div></div>}
      {this.state.sector4 ?
        <div>
          <div class="cards">
              <div class="heading">
                  <h1> <br></br> Sector 2</h1>
              </div>
              {recommended4}
          </div>
          <button style={{marginLeft: '10%'}} onClick={this.viewmore} >View More</button>
        </div>
      : <div></div>}
      {this.state.sector5 ?
        <div>
          <div class="cards">
              <div class="heading">
                  <h1> <br></br> Sector 2</h1>
              </div>
              {recommended5}
          </div>
          <button style={{marginLeft: '10%'}} onClick={this.viewmore} >View More</button>
        </div>
      : <div></div>}
      {this.state.sector6 ?
        <div>
          <div class="cards">
              <div class="heading">
                  <h1> <br></br> Sector 2</h1>
              </div>
              {recommended6}
          </div>
          <button style={{marginLeft: '10%'}} onClick={this.viewmore} >View More</button>
        </div>
      : <div></div>}
      {this.state.sector7 ?
        <div>
          <div class="cards">
              <div class="heading">
                  <h1> <br></br> Sector 2</h1>
              </div>
              {recommended7}
          </div>
          <button style={{marginLeft: '10%'}} onClick={this.viewmore} >View More</button>
        </div>
      : <div></div>}
      {this.state.sector7 ?
        <div>
          <div class="cards">
              <div class="heading">
                  <h1> <br></br> Sector 2</h1>
              </div>
              {recommended7}
          </div>
          <button style={{marginLeft: '10%'}} onClick={this.viewmore} >View More</button>
        </div>
      : <div></div>}
      {this.state.sector8 ?
        <div>
          <div class="cards">
              <div class="heading">
                  <h1> <br></br> Sector 2</h1>
              </div>
              {recommended8}
          </div>
          <button style={{marginLeft: '10%'}} onClick={this.viewmore} >View More</button>
        </div>
      : <div></div>}
      {this.state.sector9 ?
        <div>
          <div class="cards">
              <div class="heading">
                  <h1> <br></br> Sector 2</h1>
              </div>
              {recommended9}
          </div>
          <button style={{marginLeft: '10%'}} onClick={this.viewmore} >View More</button>
        </div>
      : <div></div>}
    </section>
    

      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Monda&display=swap" rel="stylesheet"></link>
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      /> */}
    </div>
  )};
}

export default App;
