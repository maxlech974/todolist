import { FormControl } from 'react-bootstrap'

const InputField = ({
  value,
  name,
  placeholder,
  onChange,
  label
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  }
  console.log(value); 
  return(
    <FormControl 
      placeholder={placeholder}
      value={value}
      aria-label={label}
      aria-describedby="basic-addon1"
      name={name}
      onChange={handleChange}
      required
    />
  );
}

export default InputField;