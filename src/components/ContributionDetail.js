import React from 'react';

class ContributionDetail extends React.PureComponent {
  render() {
    const { data, match } = this.props;
    const record = data.find(item => {
      return item.id === match.params.id;
    });
    const date = new Date(record.timestamp).toLocaleString();
    return (
      <div>
        <h1>ContributionDetail {record.id}</h1>
        <p>
          <strong>Land cover:</strong> {record.landobservations[0].landcover}
        </p>
        <p>
          <strong>Land use:</strong> {record.landobservations[0].landuse}
        </p>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <h2>Photos</h2>
        {record.photos.map(photo => (
          <img key={photo.url} width="150" src={photo.url} alt="" />
        ))}
      </div>
    );
  }
}

export default ContributionDetail;
