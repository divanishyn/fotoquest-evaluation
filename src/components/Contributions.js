import React from 'react';
import Contribution from './Contribution';

class Contributions extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Contributions</h1>
        {data.map(record => (
          <Contribution key={record.id} data={record} />
        ))}
      </div>
    );
  }
}

export default Contributions;
