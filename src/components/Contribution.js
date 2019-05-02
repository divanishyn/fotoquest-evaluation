import React from 'react';

class Contribution extends React.PureComponent {
  render() {
    const { data } = this.props;
    const { id, photos } = data;
    return (
      <div>
        <h2>Contribution {id}</h2>
        {photos.map(photo => (
          <img key={photo.url} width="150" src={photo.url} alt="" />
        ))}
      </div>
    );
  }
}

export default Contribution;
