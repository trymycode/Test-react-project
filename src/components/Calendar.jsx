import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
class CalendarView extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
    };
  }

  render() {
    const { date,removeCalender } = this.props;
    let myDate = moment(date).format("YYYY-MM-DD");
    let modifiedDate = "'" + myDate + "'";
    let finalDate = new Date(modifiedDate);
    return (
      <div className="calenderBox">
        <Calendar defaultValue={finalDate ? finalDate : null} />
        <button className="close" onClick={()=> removeCalender()}>Close</button>
      </div>
    );
  }
}
export default CalendarView;
