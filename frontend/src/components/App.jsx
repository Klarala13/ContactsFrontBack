import React from "react";
import "../css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    document.title = "Contact Manager";

    fetch("http://localhost:4000/contacts")
      .then(resp => resp.json())
      .then(response => {
        this.setState({ contacts: response });
      });
  }
  handleSubmit() {
    const button = document.querySelector("button");

    button.addEventListener("click", event => {
      event.preventDefault();

     let object = {
      first_name: this.firstName.current.value,
      last_name: this.lastName.current.value,
      mobile_number: this.mobileNumber.current.value,
      prefix: this.prefix.current.value,
      phone_number: this.phoneNumber.current.value,
      email: this.email.current.value,
      typeOfAcquaintance: this.checkboxes.current.value
     }
    });

    const url = `http://localhost:4000/app`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ name: this.selectedName.current.value }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  }
   handleMobileNumber = (e) => {
       if (/^\d+$/.test(e.target.value)){
       this.setState({mobileNumber: true});
       } else {this.setState({mobileNumber: false});
    } 
   }

   handleFirstName = (e) => {
     if (e.target.value.length > 4){
       this.setState({firstName: true});
     } else {this.setState({firstName: false});
    }
   }

   handleLastName = (e) => {
     if (e.target.value.length > 4){
       this.setState({lastName: true});
     } else {this.setState({lastName: false});
    }
   }

   handlePrefix = (e) => {
     if (/^\+\d{2}$/.test(e.target.value)){
       this.setState({prefix: true});
     } else {this.setState({prefix: false});
    }
   }

   handlePhoneNumber = (e) => {
     if (/^\d+$/.test(e.target.value)){
       this.setState({phoneNumber: true});
     } else {this.setState({phoneNumber: false});
    }
   }

   handleEmail = (e) => {
    if (e.target.value.length > 5){
       this.setState({email: true});
     } else {this.setState({email: false});
    }
   }
  render() {
    const typeOfAcquaintance = ["work", "social", "family"];
    const checkboxes = typeOfAcquaintance.map(typeOfAcquaintance => (
      
      <div className="form-group form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={typeOfAcquaintance}
        name={typeOfAcquaintance}
      />
      <label className="form-check-label mr-3" for={typeOfAcquaintance}>
        {typeOfAcquaintance}
      </label>
    </div>
  ));

    return (
      <div className="container ext-border">
        <h1 className="text-center">Contact Manager</h1>
        <h2 className="text-center">Insert your data</h2>
        <form className="form-inline mt-2" onSubmit={this.handleSubmit}>
          <div className="row col-lg-12">

            <label>First Name </label>
            <input
              onChange = {this.handleFirstName}
              type="text"
              className = {this.state.firstName ? "form-control mr-2 col-lg-12 is-valid": "form-control mr-2 col-lg-12 is-invalid"}
              placeholder="First Name"
            />

            <label> Last Name </label>
            <input
              onChange = {this.handleLastName}
              type="text"
              className= {this.state.lastName ? "form-control  mr-2 col-lg-12 is-valid": "form-control mr-2 col-lg-12 is-invalid"}
              placeholder="Last Name"
            />

            <label> Mobile Number </label>
            <input 
              onChange= {this.handleMobileNumber}
              type="text"
              className={this.state.mobileNumber ? "form-control mr-2 col-lg-12 is-valid":"form-control mr-2 col-lg-12 is-invalid"}
              placeholder="Mobile Number"
            />

            <label> Prefix </label>
            <input
              onChange = {this.handlePrefix}
              type="text"
              className={this.state.prefix ? "form-control mr-2 col-lg-12 is-valid": "form-control mr-2 col-lg-12 is-invalid"}
              placeholder="Enter in this format +XX"
            />

            <label> Phone Number</label>
            <input
              onChange={this.handlePhoneNumber}
              type="text"
              className={this.state.phoneNumber ? "form-control-sm  mr-2 col-lg-12 is-valid" : "form-control mr-2 col-lg-12 is-invalid"}
              placeholder="Phone Number"
            />
            <label> Email </label>
            <input
              onChange = {this.handleEmail}
              type="email"
              className={this.state.email ? "form-control-sm mr-2 col-lg-12 is-valid" : "form-control mr-2 col-lg-12 is-invalid"}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
            />
          </div>
          <h2> Type of Acquaintance </h2>
         {checkboxes}

          <div className= "container"> 
           <button type="button" className="btn btn-dark">
              {" "}
              Send{" "}
            </button>
          </div>

        </form>
      </div>
    );
  }
}

export default App;
