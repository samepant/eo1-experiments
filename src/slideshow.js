import React from 'react'
import {Image} from 'cloudinary-react'
import './slideshow.css'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      images: [],
      currentIndex: 0,
      currentId: ''
    }

    this.setNextImage = this.setNextImage.bind(this)
  }

  componentDidMount () {
    const imageChooser = setInterval(this.setNextImage, 10000)
    this.fetchImageIds()
  }

  fetchImageIds () {
    const url = 'https://res.cloudinary.com/dve7y21wz/image/list/slideshow.json'
    fetch(url).then(res => {return res.json()})
    .then(data => {
      this.setState({
        images: data.resources
      })
    })
  }

  setNextImage () {
    const images = this.state.images
    const index = this.state.currentIndex
    this.setState({
      currentId: images[index].public_id
    })
    if (index === images.length - 1) {
      //we are at the end
      this.setState({
        currentIndex: 0
      })
    } else {
      //step forward
      this.setState({
        currentIndex: index + 1
      })
    }
  }

  render () {
    return (
      <div className='slideshow-container'>
        <Image className='slideshow-image' cloudName='dve7y21wz' publicId={this.state.currentId} />
      </div>
    )
  }
}