import React, { Component } from 'react';

class ArrayObj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sdata: [
        { sid: 501, sname: 'madhu', technology: 'full stack development' },
        { sid: 529, sname: 'lekha', technology:'java developer' },
        { sid: 517, sname: 'shiny', technology:'frontend developer'}
      ]
    };
  }

  render() {
    const { sdata } = this.state;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>sid</th>
              <th>sname</th>
              <th>technology</th>
            </tr>
          </thead>
          <tbody>
            {sdata.map((item) => (
              <tr key={item.sid}>
                <td>{item.sid}</td>
                <td>{item.sname}</td>
                <td>{item.technology}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ArrayObj;
















