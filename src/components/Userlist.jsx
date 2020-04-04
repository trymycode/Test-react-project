import React, { Component } from "react";
import Data from "../jasonFile/test.json";
import Modal from "../components/Modal";
class Userlist extends Component {
  constructor(){
    super();
    this.state = {
      displayModal: false,
      activity_periods: [],
      name:""
    }
  }
  openModal = (member) => {
    let activityPeriods = member.activity_periods;
    this.setState({
      displayModal: true,
      activity_periods: [...activityPeriods],
      name: member.real_name
  });
  
}

closeModal = () => {
  this.setState({
    displayModal:false
  })
}
  render() {
    return (
      <div className = "listContainer">
        <p>List of users</p>
        <ul>
          {Data.members.map((member) => {
           
            return (
              <li key={member.id} onClick={()=>this.openModal(member)}>
                {member.real_name}
              </li>
            );
          })}
        </ul>
        {this.state.displayModal && <Modal activity_periods={this.state.activity_periods} name={this.state.name} closeModal={this.closeModal}/>}
      </div>
    );
  }
}
export default Userlist;
