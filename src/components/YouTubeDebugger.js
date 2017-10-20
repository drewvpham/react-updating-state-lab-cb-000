// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
    this.handleChangeBitrate = this.handleChangeBitrate.bind(this);
    this.handleChangeResolution = this.handleChangeResolution.bind(this);
  }

  handleChangeResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
             resolution: '720p'

           })
     }),
   });
 }

  handleChangeBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate:12
      }),
    });
  }


  render() {
    return (
      <div>

        <button className='bitrate' onClick={this.handleChangeBitrate}>{this.state.settings.bitrate}</button>
        <button className= 'resolution' onClick={this.handleChangeResolution}>{this.state.settings.video.resolution}</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
