import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm} from 'redux-form';


let CityForm = props => {
  const style={
      border: 'none', 
      outline: 'none',
      fontWeight: 800,
      backgroundColor: 'inherit',
      color: 'white'
  };
  const { city, handleSubmit } = props;
  const current= city.name + ", " + city.country;
  return (
    <h1>
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="city">Weather Forecast for&nbsp;</label>
        <Field name="cityField" component="input" type="text" placeholder={current} style={style}/>
      </div>
    </form>
    </h1>
    );
};

// props validation
CityForm.propTypes = {
  city: PropTypes.object,
  handleSubmit: PropTypes.func
};

CityForm = reduxForm({
  form: 'cityForm'
})(CityForm);

export default CityForm;
