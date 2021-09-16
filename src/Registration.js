import React, { useState, Component  } from 'react'
import './Registration.css'

function Registration() {

  const [state, setState] = React.useState({
        hooks: true
      })

  const [values, setValues] = useState({
       employee_no: null, employee_name: '', joining_date: '', department: '',salary:''
    });

  const set = name => {
    return ({ target: { value } }) => {
      setValues(oldValues => ({...oldValues, [name]: value }));
    }
  };

  //Handle submit action
    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent default submission
        try {
          await saveFormData();
          alert('Your registration was successfully submitted!');
          setValues({
            employee_no: '', employee_name: '', joining_date: '', department: '',salary:''
          });
        } catch (e) {
          alert(`Registration failed! ${e.message}`);
        }
  }

    const saveFormData= async () => fetch('http://localhost:8081/employees/add', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
             'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
   })

    //Reset
    const reset = () => {
      document.getElementById("registration-form").reset();

    }
  return (
    <div className="registration">
        <h1>Employee Registration</h1>
        <form onSubmit={onSubmit} id="registration-form">
            <div className="form-group">
                <label>Employee No</label>
                <input type="number" value={state.employee_no} required min="1" name="employeeNo" placeholder="Employee No" onChange={set('employee_no')}/>
            </div>
            <div className="form-group">
                  <label>Employee Name</label>
                  <input type="text" value={state.employee_name} required name="employeeName" placeholder="Employee Name" onChange={set('employee_name')}/>
            </div>
            <div className="form-group">
                   <label>Date Of Joining</label>
                   <input type="text" value={state.joining_date} required name="joining_date" placeholder="Date Of Joining" onChange={set('joining_date')}/>
            </div>
            <div className="form-group">
                    <label>Department</label>
                    <select required id="dept" onChange={set('department')} value={state.department}>
                        <option value="AD">AD-Administration</option>
                        <option value="IT">IT-Information technology</option>
                        <option value="HD">HD-Help Desk</option>
                        <option value="HR">HR-Human Resource</option>
                        <option value="OP">OP-Operation</option>
                      </select>
            </div>
            <div className="form-group">
                    <label>Salary</label>
                    <input type="number" value={state.salary} required min="1" required name="salary" placeholder="Salary" onChange={set('salary')}/>
            </div>
             <div className="form-group">
                              <input className="submit" type="submit" value="SAVE"/>
                              <input className="reset" type="reset" value="CLEAR" onClick={reset}/>
             </div>
        </form>
    </div>
  );
}

export default Registration;