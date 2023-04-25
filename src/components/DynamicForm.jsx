import { useEffect, useState } from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Stack,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import { Inputs } from "../constants/inputs";
import InputsRender from "./inputs";

const DynamicForm = ({ textJson }) => {
  useEffect(() => {
    console.log(textJson);
  }, [textJson]);
  return (
    <>
      <Stack spacing={3}>
        {textJson === "Invalid JSON" && <Heading>Invalid JSON</Heading>}
        {textJson !== "Invalid JSON" && <MapForm textJson={textJson} />}
      </Stack>
    </>
  );
};

export default DynamicForm;

const MapForm = ({ textJson }) => {
  return (
    <>
      {textJson.length &&
        textJson.map((e) => {
          return <InputsRender data={e} />;
        })}
    </>
  );
};
