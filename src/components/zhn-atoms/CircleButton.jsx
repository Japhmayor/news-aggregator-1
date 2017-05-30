import React from 'react'

const CL_NOT_SELECTED = 'not-selected';
const S = {
  ROOT : {
    display : 'inline-block',
    color: '#80c040',
    border : '2px solid #80c040',
    borderRadius : '50%',
    lineHeight: '24px',
    width : '26px',
    height : '26px',
    textAlign: 'center',
    cursor: 'pointer'
  }
};

const CircleButton = (props) => {
    const {
           caption='', className, style,
           isWithoutDefault, onClick
         } = props
        , _className = (className)
             ? `${className} ${CL_NOT_SELECTED}`
             : CL_NOT_SELECTED
        , _style = (isWithoutDefault)
             ? style
             : Object.assign({}, S.ROOT, style);
    return (
      <span
         className={_className}
         style={_style}
         onClick={onClick}
      >
         {caption}
      </span>
    );
}

export default CircleButton
