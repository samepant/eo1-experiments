import React from 'react'
import './menu.css'

export default class extends React.Component {
  render () {
    return (
      <div className='menu'>
        <div>
          <h2>SMOOTHIES - <span className='price'>4% Li or $5</span></h2>
          <span>flavors (pick two)</span>
          <ul className='flavors'>
            <li>strawberry</li>
            <li>blueberry</li>
            <li>mango</li>
            <li>banana</li>
          </ul>
        </div>
        <div>
          <h2>Lithium Exchange</h2>
          <span className='price'>$1 == 1% Li</span>
        </div>
      </div>
    )
  }
}