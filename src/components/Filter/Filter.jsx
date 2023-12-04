import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

  handleChange = e => {
    // console.log(e);
    const { value } = e.currentTarget;
    // console.log(value);
    this.props.onFilterChange(value);
  };

  render() {
    const { value } = this.props;
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default Filter;
