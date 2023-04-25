import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";


function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" width={"100%"}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "gray.600",
          color: "white",
          borderColor: "gray.600",
        }}
        _focus={{
          boxShadow: "none",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

function RadioInput({ r }) {
  const options = [];
  for (let i = 0; i < r.validate.options.length; i++) {
    options.push(r.validate.options[i].label);
  }
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: r.label,
    defaultValue: options[0],
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <FormControl
      isRequired={r.validate.required}
      isReadOnly={r.validate.immutable}
    >
      <FormLabel>{r.label}</FormLabel>
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
      <FormHelperText>{r.description}</FormHelperText>
    </FormControl>
  );
}
export default RadioInput;
