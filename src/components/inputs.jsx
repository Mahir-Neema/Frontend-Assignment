import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Inputs } from "../constants/inputs";
import GroupInput from "./group";
import SelectInput from "./select";
import RadioInput from "./Radio";
import SubmitButton from "./submit";

const InputsRender = ({ data }) => {
  return (
    <>
      {data.uiType === Inputs[3] && <SelectInput s={data} />}
      {data.uiType === Inputs[2] && <RadioInput r={data} />}
      {data.uiType === Inputs[4] && <SubmitButton />}
      {data.uiType !== Inputs[3] && data.uiType !== Inputs[2] && (
        <FormControl
          isRequired={data.validate.required}
          isReadOnly={data.validate.immutable}
        >
          <FormLabel>{data.label}</FormLabel>
          {data.uiType === Inputs[0] && (
            <Input
              type="text"
              name={data.jsonKey}
              placeholder={data.placeholder}
            />
          )}
          {data.uiType === Inputs[1] && <GroupInput data={data} />}
          <FormHelperText>{data.description}</FormHelperText>
        </FormControl>
      )}
    </>
  );
};

export default InputsRender;
