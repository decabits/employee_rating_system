/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Admin.css';

class Admin extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
     peers: [
        {
        id: 1,  
        name : 'xyz',
        rating : 10,
        feedback : 'helpful'
      },
      {
        id: 2,
        name : 'xywsaz',
        rating : 9,
        feedback : 'decent'
      },
      {
        id : 3,
        name : 'abc',
        rating : 5,
        feedback : 'nice'
      }
    ],
    average : {
      perMonth : 9,
      perYear : 7
    }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    //console.log(this.state);
    event.preventDefault();
  }


  render() {
    const rating = this.state.peers.map((peer) => {
      return (
              <tr className = {s.tr} key={peer.id}>
                <td className={s.td}>{peer.name}</td>
                <td className={s.td}>{peer.rating}</td>
                <td className={s.td}>{peer.feedback}</td>
              </tr>
      );
    });

    const avgRatingMonth = this.state.average.perMonth ;
    const avgRatingYear = this.state.average.perYear ;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <form onSubmit={this.handleSubmit}>        
              <div className={s.formGroup}>
                <label className={s.label}> Select User :
                  <select className={s.box1}>
                    <option value="0">Select User</option>
                    <option value="Shubham Gupta">Shubham Gupta</option>
                    <option value="Shubham Jain">Shubham Jain</option>
                    <option value="Harnoor Kaur">Harnoor Kaur</option>
                    <option value="Tanveer Sing">Tanveer Singh</option>
                    <option value="Ayush Gupta">Ayush Gupta</option>
                  </select>
                </label>
              </div>
          </form>
          <table className={s.table}>
            <tr className = {s.tr}>
              <th className={s.th}>name</th>
              <th className={s.th}>rating</th>
              <th className={s.th}>feedback</th>
            </tr>
            {rating}
          </table>
          <p className={s.bold}>Average rating per Month : <span>{avgRatingMonth}</span></p>
          <p className={s.bold}>Average rating per Year : <span>{avgRatingYear}</span></p>
      </div>
    </div>
    );
  }
  
}

export default withStyles(s)(Admin);
