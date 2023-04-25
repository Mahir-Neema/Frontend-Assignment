import { Box, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import { Inputs } from "../constants/inputs";
import SelectInput from "./select";
import RadioInput from "./Radio";

const GroupInput = ({ data }) => {
  return (
    <>
      {data.subParameters?.map((s) => {
        return (
          <>
            <Box bg="gray.100" borderRadius={"10px"} p={"2"} my={2}>
              {s.uiType === Inputs[3] && <SelectInput s={s} />}
              {s.uiType === Inputs[2] && <RadioInput r={s} />}
            </Box>
          </>
        );
      })}
    </>
  );
};

export default GroupInput;
