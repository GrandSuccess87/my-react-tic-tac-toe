import React from 'react';
import Board from '../boardComponent/boardComponent';
import Square from '../squareComponent/squareComponent';
//
export default class rowRules extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      wins: [],
      rowsIndex: 0,
      boardWidth: Array(3)
    };
  }
//   render() {
//     return (
//       <div>
//       </div>
//     );
//   }
}
