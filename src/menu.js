import React from 'react'
import './menu.css'

export default class extends React.Component {
  render () {
    return (
      <div className='menu'>
        <div>
          <h2>SMOOTHIES - <span className='price'>4% Li or $5</span></h2>
          <div className='smoothie-options'>
            <div className='side1'>
              <span>flavors (pick two)</span>
              <ul className='flavors'>
                <li>strawberry</li>
                <li>blueberry</li>
                <li>mango</li>
                <li>banana</li>
              </ul>
            </div>
            <div className='side2'>
              <span>add ons</span>
              <ul className='flavors'>
                <li>protein (+2)</li>
                <li>lithium (free)</li>
                <li>byo (+1)</li>
              </ul>
            </div>
          </div>
          <p>bases: greek yoghurt, OJ, milk, almond milk</p>
        </div>
        <div>
          <h2>Lithium Exchange</h2>
          <p><span className='price'>$10 == 10% Li</span></p>
          <div className='lilbump'><img className='payment' src='/accept.png' alt='accepted cards'/></div>
        </div>
      </div>
    )
  }
}