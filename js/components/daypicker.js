import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

export default class DatePicker extends Component {
  render() {
    return (
      <DayPicker
        onDayClick={this.props.onSelect}
        modifiers={{
          disabled: DateUtils.isPastDay
        }}
      />
    );
  }
}
