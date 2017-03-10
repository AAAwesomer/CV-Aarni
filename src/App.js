import React from 'react';
import './App.css';
import Graph from'./Graph.js';

var City = React.createClass({

  getInitialState: function(){
    return {
      hover: false
    }
  },

  mouseOver: function(){
    this.setState({ hover: true })
  },

  mouseOut: function(){
    this.setState({ hover: false })
  },

  render: function() {

    var classes = [this.props.bubble];

    if (this.state.hover) {
      console.log("hover taking place");
      classes.push("show");
    }

    return (
      <div className="Place" id={this.props.id} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <div className={classes.join(' ')}>
          <p className="bubp">{this.props.texts[0]}<br/>{this.props.texts[1]}<br/><br/>{this.props.texts[2]}<br/>{this.props.texts[3]}</p>
        </div>
      </div>
    );
  }
});

var Cities = React.createClass({

  getInitialState: function(){
    return {
      Helsinki: {id: "Helsinki", bubble: "bubble", texts: ["2010-2011:", "Hiidenkiven peruskoulu", "2011-2012:", "Maunulan Yhteiskoulu"]},
      Berlin: {id: "Berlin", bubble: "bubbletwo", texts: ["2013-2014:", "Nelson Mandela Secondary School", "2014-2016:", "Nelson Mandela School IB Programme"]},
      SV: {id: "SV", bubble: "bubblethree", texts: ["2007-2009:", "Audubon Elementary School", "2009-2010:", "Bowditch Middle School"]}
    }
  },

  render: function() {
    return (
      <div>
        <City id={this.state.Helsinki.id} bubble={this.state.Helsinki.bubble} texts={this.state.Helsinki.texts} />
        <City id={this.state.SV.id} bubble={this.state.SV.bubble} texts={this.state.SV.texts}/>
        <City id={this.state.Berlin.id} bubble={this.state.Berlin.bubble} texts={this.state.Berlin.texts}/>
      </div>
    );
  }
});

var Skills = React.createClass({

  render: function(){
    return(
      <div className="Block" id="Skills" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <div>
          <h3>Skills</h3>
          <Graph />
        </div>
      </div>
    )
  }
})

var Achievements = React.createClass({
  render: function(){
    return(
      <div className="Block" id="Achievements">
        <div className="inside">
          <h3>Achievements</h3>
          <ul>
            <li>{"Finished IB 2 years early, after just having turned 17, scoring the highest in Math HL and Physics HL out of the year."}</li>
            <li>{"Composed over 100 scores over my year in music production."}</li>
            <li>{"During 7th grade in Maunulan Peruskoulu, scored the highest number of points out of both 7th and 8th grades in the Kangaroo Test."}</li>
            <li>{"Played competitive football for 4 years, winning our team multiple awards throughout my time on the field."}</li>
            <li>{"Beat my female cousin in an arm wrestle and she's only one year younger than me."}</li>
          </ul>
        </div>
      </div>
    );
  }
})

var Contributions = React.createClass({
  render: function(){
    return(
      <div className="Block" id="Contributions">
        <div className="inside">
          <h3>Contributions</h3>
          <ul>
            <li>{"Coded a NLP algorithm for Inbot Inc. that was used to categorize keywords into GICS classes."}</li>
            <li>{"Co-Founded a school newspaper and organized classmates to write articles for it. I managed editing, printing and sales."}</li>
            <li>{"Co-Founded MoveGroove, a foundation that raised funds for a charitable cause."}</li>
            <li>{"Worked for Inbot Inc. as a customer success trainee."}</li>
            <li>{"Worked as Santa Claus, bringing joy to many Finnish families in Berlin."}</li>
          </ul>
        </div>
      </div>
    )
  }
})

var Email = React.createClass({
  render: function(){
    return(
      <div className="Block" id="Email">
        <div className="inside">
          <h3 className="contactme">Contact Me</h3>
          <form method="post" action="mailto:aarni.alasaarela@gmail.com" >
            <input type="submit" value="Send Email" /> 
          </form>
        </div>
      </div>
    )
  }
})



var Blocks = React.createClass({

  render: function(){
    return (
      <div>
        <h3 className="blockTitle">{"Why I'm Your Guy"}</h3>
        <div className="Blocks">
          <Achievements />
          <Skills />
          <Contributions />
          <Email />
        </div>
      </div>
    );
  }
});

var Video = React.createClass({

  render: function(){
    return (
      <div className="vidFrame">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/7a1qOxTC5E8"></iframe>
      </div>
    )
  }
});


var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Title">Aarni Alasaarela</div>
          <div className="Summary"><p>17 year old creative dude with a passion for AI, software development and music production</p></div>
        <Video />
        </div>
        <div className="MapArea">
          <div className="Map">
            <Cities />
          </div>
        </div>
        <Blocks />
      </div>
    );
  }
});

export default App;
