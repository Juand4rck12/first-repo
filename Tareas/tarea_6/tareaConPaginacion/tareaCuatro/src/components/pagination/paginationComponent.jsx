import React from 'react'

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav className="pagination">
      <button
        className="prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        🢀 Previous
      </button>
      <div className='pagination-numbers'>
        <span>
          {`${currentPage}`}
        </span>
      </div>
      <button
        className="next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next 🢂
      </button>
    </nav>
  )
}

export default PaginationComponent