import React from "react";
import { Component } from "react";

class StaffList extends Component {
  state = {
    employees: [
      {
        id: 1,
        name: "adsdadad",
        salary: 25000,
      },
      {
        id: 1,
        name: "adsdadad",
        salary: 25000,
      },
      {
        id: 1,
        name: "adsdadad",
        salary: 25000,
      },
    ],

    companyName: "Netmax",
  };
  formData: {};
  fullName = "rahul";
  updateStaff() {
    this.setState((state) => {
      return {
        //     employees: [
        //       ...state.employees,
        //       { id: 1, name: "vgfgh", salary: "hcvhgdcg" },
        //     ],
      };
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <p>{this.state.companyName}</p>
        <p>{this.fullName}</p>
        <button
          onClick={() => {
            this.updateStaff();
          }}
        >
          click
        </button>
        <form action="">
          <div className="mb-3">
            <label htmlFor="txt">username</label>
            <input type="text" name="txt" id="txt" />
          </div>
          <div className="mb-3">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" />
          </div>
        </form>
      </div>
    );
  }
}
export default StaffList;
