import React from 'react'
import PropTypes from 'prop-types'

const CL_ROOT = "svg-close"
const STYLE = {
  //COLOR : '#F44336',
  COLOR: '#D64336',
  SVG: {
    padding: '3px',
  }
};

const SvgClose = ({ style, onClose }) => (
   <div
      className={CL_ROOT}
      style={style}
      onClick={onClose}
   >
     <svg viewBox="0 0 12 12" width="100%" height="100%"
          style={STYLE.SVG} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
          strokeWidth="2"
          stroke={STYLE.COLOR}
          strokeLinecap="round"
      >
        <path d="M 0,0 L 12,12"></path>
        <path d="M 12,0 L 0,12"></path>
     </svg>
   </div>
)

SvgClose.propTypes = {
  style: PropTypes.object,
  onClose: PropTypes.func
}
SvgClose.defaultProps = {
  onClose: () => {}
}


export default SvgClose
