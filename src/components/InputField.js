import { useState } from 'react';
import PropTypes from 'prop-types';
import { validateInput } from '../utilities/Validator';
import styled from 'styled-components';

const InputField = ({
  name,
  value,
  placeholder,
  validators,
  type,
  required,
  onChange,
  fontAwesomeIcon,
}) => {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setError(validateInput(validators, value));
    onChange(value);
  };

  return (
    <div>
      <MainWrapper className="input-group form-group">
        <span className="input-group-text bg-info">
          <i className={fontAwesomeIcon}></i>
        </span>
        {type === 'textarea' ? (
          <TextAreaWrapper
            className="form-control"
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            required={required ? required : ''}
            onChange={handleChange}
          />
        ) : (
          <InputWrapper
            className="form-control"
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            required={required ? required : ''}
            onChange={handleChange}
          />
        )}
      </MainWrapper>
      {error && <ErrorMessageWrapper>{error.message}</ErrorMessageWrapper>}
    </div>
  );
};

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  validators: PropTypes.array,
  value: PropTypes.string,
  name: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
  type: 'text',
  validators: [],
  value: '',
  name: '',
};

export default InputField;

const MainWrapper = styled.div`
  > span {
    color: white;
  }
  margin: 0 auto .5rem auto;
`;

const InputWrapper = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 2.5rem;
`;

const TextAreaWrapper = styled.textarea`
  width: 100%;
  border-radius: 5px;
  /* min-height: 8rem; */
`;

const ErrorMessageWrapper = styled.div`
  color: red;
`;
