import React from 'react';
import ContributionListItem from './ContributionListItem';

class Contributions extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Contributions</h1>
        {data.map(record => (
          <ContributionListItem key={record.id} data={record} />
        ))}
      </div>
    );
  }
}

export default Contributions;
