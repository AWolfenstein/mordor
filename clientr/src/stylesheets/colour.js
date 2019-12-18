import chroma from 'chroma-js';
var colors='#FF5630';
export const colourStyles = {
    
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, {  isDisabled, isFocused, isSelected }) => {
      const color = chroma(colors);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? colors
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : colors,
        cursor: isDisabled ? 'not-allowed' : 'default',
  
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled && (isSelected ? colors : color.alpha(0.3).css()),
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(colors);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: colors,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: colors,
      ':hover': {
        backgroundColor: colors,
        color: 'white',
      },
    }),
  };