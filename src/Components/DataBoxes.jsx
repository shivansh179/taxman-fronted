import React from 'react'

const DataBoxes = () => {
  return (
    <div className='databoxes'>
        <div className="databox">
            <span className='text'>Tickets I entered today</span>
            <span className='statistics'>3</span>
        </div>
        <div className="databox">
            <span className='text'>Total entered tickets</span>
            <span className='statistics'>5</span>
        </div>
        <div className="databox">
            <span className='text'>Responses of tickets</span>
            <span className='statistics'>1</span>
        </div>
    </div>
  )
}

export default DataBoxes;