import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';

class Pagination extends React.Component {

  state = {
    presentPage: this.props.initialPage || 1
  }  
  
  changePage = (newPage) => {
    const { onPageChange } = this.props;
    this.setState({ presentPage: newPage });
    onPageChange(newPage);
  }

  render() {
    
    const { presentPage } = this.state;
    const { pages, hidden } = this.props;
    const { changePage } = this;

    return (
      <div className={`${(hidden) ? 'pagination--hidden' : 'pagination'}`}>
        <ul className="pagination__list">
          { 
          [...Array(pages)].map((el, page) =>
            <li
              key={++page}
              onClick={() => { changePage(page) }}
              className={`pagination__list__item${((page) === presentPage) ? ' pagination__list__item--active' : ''}`}>
              {page}
            </li>
          )}
        </ul>
      </div>
    );
  }

}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
};

export default Pagination;