import React, { Component } from 'react'
//import PropTypes from 'prop-types'

const TRANSITION = {
  WIDTH : 'width 500ms ease-out',
  OPACITY : 'opacity 400ms linear'
};

class ProgressLine extends Component {
  /*
  static propTypes = {
    color: PropTypes.string,
    height: PropTypes.number
  }
  */
  static defaultProps = {
    className: 'progress-line',
    color: '#2f7ed8',
    height: 3
  }

  constructor(props){
    super(props)
    this.wasCompleted = false;
    this.idCompleted = null;
    this.wasOpacied = false;
    this.idOpacied = null;
    this.state = {}
  }

  componentWillUnmount(){
    if (this.idCompleted){
      clearTimeout(this.idCompleted)
    }
    if (this.idOpacied){
      clearTimeout(this.idOpacied)
    }
  }

  componentDidUpdate(){
    if (this.wasCompleted){
      this.idCompleted = setTimeout(()=>{
        this.idCompleted = null;
        this.forceUpdate();
      }, 800)
    } else if (this.wasOpacied){
      this.idOpacied = setTimeout(()=>{
        this.idOpacied = null;
        this.forceUpdate();
      }, 800)
    }
  }

  render(){
    const {
      className,
      color, height
    } = this.props;
    let _style;

    if (this.wasOpacied) {
      _style = {
          backgroundColor: color,
          width: 0,
          opacity : 1,
          height: height
      };
      this.wasOpacied = false;
    } else if (this.wasCompleted) {
      _style = {
          backgroundColor: color,
          width: '100%',
          opacity : 0,
          transition: TRANSITION.OPACITY,
          height: height
      };
      this.wasCompleted = false;
      this.wasOpacied = true;
    } else {
       let { completed } = this.props;
       if (completed < 0) {
         completed = 0;
       } else if (completed >= 100) {
         completed = 100;
         this.wasCompleted = true
       }

       _style = {
         backgroundColor: color,
         opacity: 1,
         width: completed + '%',
         transition: TRANSITION.WIDTH,
         height: height
       };
    }

    return (
      <div className={className} style={_style} />
    );
  }
}

export default ProgressLine
