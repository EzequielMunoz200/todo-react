import React from 'react';
import Switch from '@material-ui/core/Switch';

const VisibilityControl = (props) => {
  const handleChange = (e) => {
    return props.callback(e.target.checked);
  };

  return (
    <div className='form-check'>
        <Switch
        checked={props.isChecked}
        onChange={handleChange}
        color="primary"
        size="medium"
        inputProps={{ 'aria-label': 'primary checkbox' }}
        id='visibility-control'
      />
      <label htmlFor='visibility-control'>Show Completed Task</label>
    </div>
  );
};

export default VisibilityControl;
