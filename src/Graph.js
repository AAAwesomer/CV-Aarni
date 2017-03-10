import React from 'react';
import './App.css';

var Graph = React.createClass({
  render: function(){
    return(
      <svg className="chart" width="160" height="290">
        <g transform="translate(0,0)">
          <rect width="140" height="24" fill="#2957B8"></rect>
          <text x="-95px" y="9.5" dy=".5em">Motivation</text>
        </g>
        <g transform="translate(0,30)">
          <rect width="110" height="24" fill="#2957B8"></rect>
          <rect x="110px" y="0.5" width="30" height="23" fill="#3878FF" stroke="#2957B8" strokeWidth="1px"></rect>
          <text x="-100px" y="9.5" dy=".5em">HTML/CSS</text>
        </g>
        <g transform="translate(0,60)">
          <rect width="80" height="24" fill="#2957B8"></rect>
          <rect x="80px" y="0.5" width="60" height="23" fill="#3878FF" stroke="#2957B8" strokeWidth="1px"></rect>
          <text x="-152px" y="9.5" dy=".5em">Javascript/ReactJS</text>
        </g>
        <g transform="translate(0,90)">
          <rect width="50" height="24" fill="#2957B8"></rect>
          <rect x="50px" y="0.5" width="90" height="23" fill="#3878FF" stroke="#2957B8" strokeWidth="1px"></rect>
          <text x="-186px" y="9.5" dy=".5em">Data Science, ML, NLP</text>
        </g>
        <g transform="translate(0,120)">
          <rect width="40" height="24" fill="#2957B8"></rect>
          <rect x="40px" y="0.5" width="100" height="23" fill="#3878FF" stroke="#2957B8" strokeWidth="1px"></rect>
          <text x="-84px" y="9.5" dy=".5em">Unity/C#</text>
        </g>
        <g transform="translate(0,150)">
          <rect width="70" height="24" fill="#2957B8"></rect>
          <rect x="70px" y="0.5" width="70" height="23" fill="#3878FF" stroke="#2957B8" strokeWidth="1px"></rect>
          <text x="-74px" y="9.5" dy=".5em">Blender</text>
        </g>
        <g transform="translate(0,180)">
          <rect width="120" height="24" fill="#2957B8"></rect>
          <rect x="120px" y="0.5" width="20" height="23" fill="#3878FF" stroke="#2957B8" strokeWidth="1px"></rect>
          <text x="-151px" y="9.5" dy=".5em">Music Production</text>
        </g>
        <g transform="translate(0,210)">
          <rect width="140" height="24" fill="#2957B8"></rect>
          <text x="-70px" y="9.5" dy=".5em">Finnish</text>
        </g>
        <g transform="translate(0,240)">
          <rect width="140" height="24" fill="#2957B8"></rect>
          <text x="-70px" y="9.5" dy=".5em">English</text>
        </g>
        <g transform="translate(0,270)">
          <rect width="60" height="24" fill="#2957B8"></rect>
          <rect x="60px" y="0.5" width="80" height="23" fill="#3878FF" stroke="#2957B8" strokeWidth="1px"></rect>
          <text x="-76px" y="9.5" dy=".5em">German</text>
        </g>
      </svg>
    );
  }
});

export default Graph;
    