import React, { Component } from "react";
import CalendarView from "../components/Calendar";
class Modal extends Component {
    constructor(){
        super();
        this.state={
            showCalender: false,
            date:null
        }
    }

    displayCalender = (period) => {
        let date = period.start_time
       this.setState({
           showCalender:true,
           date
       })
    }

    removeCalender = ()=>{
        this.setState({
            showCalender:false
        })
    }
  render() {
    const { activity_periods,closeModal, name } = this.props;
    return (
      <div id="modal">
        <h2>Activity period details of {name}</h2>
        <table>
          <tbody>
          <tr id="headings">
            <th>Date</th>
            <th>Start Time</th>
            <th>EndTime</th>
          </tr>
         
          {activity_periods &&
            activity_periods.map((period,index) => {
              return (
                <tr key={index}>
                  <td>{period.start_time.slice(0,6)}</td>
                  <td>{period.start_time}</td>
                  <td>{period.end_time}</td>
                  <td id="view" onClick={()=>this.displayCalender(period)} >View in calender</td>
                </tr>
              );
            })}
             </tbody>
        </table>
        
        <button className="close" onClick={()=>closeModal()}>Close</button>
         {this.state.showCalender && this.state.date && <CalendarView 
         date ={this.state.date && this.state.date.slice(0,11)} 
         removeCalender={this.removeCalender}/>}
        
      </div>
    );
  }
}
export default Modal;
