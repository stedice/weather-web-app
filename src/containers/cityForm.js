import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm} from 'redux-form';


let CityForm = props => {
  const { city, handleSubmit } = props;
  const current= city.name + ", " + city.country;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="city">City:</label>
        <Field name="cityField" component="input" type="text" placeholder={current}/>
      </div>
      <button type="submit">Submit</button>
    </form>
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
