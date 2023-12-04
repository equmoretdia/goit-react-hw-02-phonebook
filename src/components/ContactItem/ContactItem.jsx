import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onContactDelete }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => onContactDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};

export default ContactItem;
