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
import s from './Feedback.css';

class Feedback extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {value: '',
                  r1: '',
                  r2: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleChange1(event) {
    this.setState({r1: event.target.value});
  }
  
  handleChange2(event) {
    this.setState({r2: event.target.value});
  }
 

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
    <div className={s.root}>
        <div className={s.container}>
          <h3>{this.props.title}</h3>
          <p className={s.lead}>
            Give genuine feedback.
          </p>
            
            <form onSubmit={this.handleSubmit}>        
            <div className={s.formGroup}>
            <label className={s.label}> Colleague Name:
              <select className={s.box1} value={this.state.value} onChange={this.handleChange}>
                <option value="0">Don't Select Yourself</option>
                <option value="Shubham Gupta">Shubham Gupta</option>
                <option value="Shubham Jain">Shubham Jain</option>
                <option value="Harnoor Kaur">Harnoor Kaur</option>
                <option value="Tanveer Sing">Tanveer Singh</option>
                <option value="Ayush Gupta">Ayush Gupta</option>
              </select>
            </label>
            </div>

            <div className={s.formGroup}>
            <label className={s.label}>Rate Your Colleague (1-10):
              <select className={s.box2} value={this.state.r1} onChange={this.handleChange1}>
                <option value='0'>Select</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </select>
            </label>
            </div>

        
       
            <input className={s.button} type="submit" value="Submit"/>
            
            </form>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Feedback);
