import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const SelectInput = ({ s }) => {
  return (
    <>
      <FormControl
        isRequired={s.validate.required}
        isReadOnly={s.validate.immutable}
      >
        <FormLabel>{s.label}</FormLabel>
        <Select placeholder={s.placeholder} defaultValue={s.defaultValue}>
          {s?.validate.options.map((o) => {
            return <option value={o.value}>{o.label}</option>;
          })}
        </Select>
        <FormHelperText>{s.description}</FormHelperText>
      </FormControl>
    </>
  );
};

export default SelectInput;
