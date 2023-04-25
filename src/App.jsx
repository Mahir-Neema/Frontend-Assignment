import { useEffect, useState } from "react";
import "./App.css";
import {
  Input,
  Textarea,
  SkeletonCircle,
  SkeletonText,
  useDisclosure,
  Flex,
  Spacer,
  Box,
  Heading,
  Stack,
  Button,
} from "@chakra-ui/react";
import DynamicForm from "./components/DynamicForm";
import { isJson } from "./components/isJson";
import FullScreenForm from "./components/modal";
import { TestForm } from "./constants/testForm";

function App() {
  const [text, setText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [preview, setPreview] = useState("");
  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <>
      {/* Heading  */}
      <Flex
        justifyContent="center"
        alignItems="center"
        p="10"
        textTransform="uppercase"
      >
        <Heading>Automatically rendered UI-Schema</Heading>
      </Flex>

      {/* Buttons  */}
      <Flex justifyContent="center" alignItems="center">
        <Button
          onClick={() => {
            setPreview("code");
            onOpen();
          }}
          m={4}>
          Full Screen IDE
        </Button>
        <Button
          onClick={() => {
            setPreview("form");
            onOpen();
          }}
          m={4}>
           Full Screen Preview
        </Button>
        <Button onClick={() => setText(TestForm)} m={4}> View Test Form </Button>
        <Button onClick={() => setText("")} m={4}> Reset IDE</Button>
      </Flex>



      {/* input and view form */}
      <Flex
        justifyContent="center"
        alignItems="center"
        p="10"
        flexWrap={"wrap"}
      >
        <Box
          p="4"
          bg="black.400"
          width={["100%", "100%", "50%"]}
          minHeight={"70vh"}
          maxHeight={"70vh"}
          textColor={"gray.100"}
        >
          <Textarea
            className="code"
            minHeight={"70vh"}
            p={"5"}
            variant="unstyled"
            bg={"#1a202c"}
            textColor={"gray.100"}
            borderRadius={"10px"}
            placeholder="Write JSON code.."
            onChange={(e) => {
              setText(e.target.value);
              setLoading(true);
            }}
            value={text}
            onMouseLeave={() => setLoading(false)}
          />
        </Box>
        <Spacer />
        <Box
          p="4"
          bg="gray.50"
          mt="8"
          width={["100%", "100%", "50%"]}
          minHeight={"70vh"}
          maxHeight={"70vh"}
          borderRadius={"10px"}
          overflow={"auto"}
        >
          {isLoading ? (
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={12}
                spacing="6"
                skeletonHeight="2"
              />
            </Box>
          ):(<DynamicForm
            textJson={isJson(text) ? JSON.parse(text) : "Invalid JSON"}
          />)}
        </Box>
      </Flex>
      


      
      <FullScreenForm
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        Child={
          !isLoading ? (
            preview === "form" ? (
              <DynamicForm
                textJson={isJson(text) ? JSON.parse(text) : "Invalid JSON"}
              />
            ) : (
              <Box
                bg="black.400"
                width={["100%", "100%", "100%"]}
                minHeight={"80vh"}
                textColor={"gray.100"}
              >
                <Textarea
                  className="code"
                  minHeight={"80vh"}
                  p={"5"}
                  variant="unstyled"
                  bg={"#1a202c"}
                  textColor={"gray.100"}
                  borderRadius={"10px"}
                  placeholder="write JSON code..."
                  onChange={(e) => {
                    setText(e.target.value);
                    setLoading(true);
                  }}
                  value={text}
                  onMouseLeave={() => setLoading(false)}
                  isDisabled={true}
                  _disabled={{ backgroundColor: "#1a202c", userSelect: "none" }}
                />
              </Box>
            )
          ) : (
            ""
          )
        }
      />
    </>
  );
}

export default App;
