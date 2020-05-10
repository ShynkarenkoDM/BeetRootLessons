import React from 'react';
import className from 'classnames';
import types from 'prop-types';

// Components

// Styles
import './../../styles/fonts.scss';
import './styles.scss';

// --------------------

export const Title = ({ paddingTop, marginTop, title }) => {
  // Modify styles

  const modify = className({
    ' title--padding-top': paddingTop && !marginTop,
    ' title--margin-top': marginTop && !paddingTop,
  });

  // Render

  return <h1 className={`title${modify}`}>{title}</h1>;
};

export default Title;

// Type of props

Title.propTypes = {
  paddingTop: types.bool,
  marginTop: types.bool,
};

// Default value for props

Title.defaultProps = {
  paddingTop: false,
  marginTop: false,
};
