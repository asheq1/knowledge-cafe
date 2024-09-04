import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {cover_title} = bookmark;
  return (
    <div className='bg-slate-100 p-4 m-4 rounded-xl'>
        <h3 className='text-2xl'>{cover_title}</h3>
    </div>
  )
}

Bookmark.propTypes = {}

export default Bookmark