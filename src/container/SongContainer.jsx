import React from 'react';
import Song from '../components/SongList';


class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentWillUpdate(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    const request = new XMLHttpRequest();
    request.open("GET", url);
    console.log(url)
    request.addEventListener('load', () => {
      if(request.status === 200){
        
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);

        this.setState({
          songs: data,
        });
      }
    });
    request.send()
  }

  render(){
    return(
        <div>
          <Song song={this.state.songs} />
        </div>
      );
  }


}

export default SongContainer;