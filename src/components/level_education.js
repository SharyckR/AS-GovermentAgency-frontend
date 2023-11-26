import * as React from 'react';
import Select from '@mui/material/Select';

export default function ComboBox({ selectedValue, onChange }) {
  const comboBoxStyle = {
    backgroundColor: "#696969",
    width: "760px",
    height: "40px",
    display: "flex",
    borderStyle: "solid",
    borderTopWidth: "5px",
    borderLeftWidth: "5px",
    borderRightWidth: "5px",
    borderBottomWidth: "5px",
    marginLeft: "100px",
    marginTop: "30px",
    boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.6)",
    borderTopLeftRadius: "35px",
    borderTopRightRadius: "35px",
  };

  return (
    <Select 
      native
      style={{ ...comboBoxStyle }}
      value={selectedValue}
      onChange={onChange}
    >
        <option value={'Level Education'} style={{backgroundColor: '#808080', textAlign: 'center'}}>Level Education</option> 
        <option value={'Preschool'} style={{backgroundColor: '#696969', textAlign: 'center'}}>Preschool</option>
        <option value={'Primary'} style={{backgroundColor: '#808080', textAlign: 'center'}}>Primary</option>
        <option value={'Secondary'} style={{backgroundColor: '#696969', textAlign: 'center'}}>Secondary</option>
        <option value={'Technical'} style={{backgroundColor: '#808080', textAlign: 'center'}}>Technical</option>
        <option value={'University'} style={{backgroundColor: '#696969', textAlign: 'center'}}>University</option>
        <option value={'Specialization'} style={{backgroundColor: '#808080', textAlign: 'center'}}>Specialization</option>
        <option value={"Master's Degree"} style={{backgroundColor: '#696969', textAlign: 'center'}}>Master's Degree</option>
        <option value={'Doctorate'} style={{backgroundColor: '#808080', textAlign: 'center'}}>Doctorate</option>
        <option value={'None'} style={{backgroundColor: '#696969', textAlign: 'center'}}>None</option>
      </Select>
      );
};
