import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
