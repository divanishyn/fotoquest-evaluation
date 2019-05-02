import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ContributionListItem extends React.PureComponent {
  render() {
    const { data } = this.props;
    const { id, photos } = data;
    return (
      <div>
        <Link to={`/contribution/${id}`}>
          <h2>ContributionListItem {id}</h2>
          {photos.map(photo => (
            <img key={photo.url} width="150" src={photo.url} alt="" />
          ))}
        </Link>
      </div>
    );
  }
}

export default ContributionListItem;
