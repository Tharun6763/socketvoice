import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md" width="50%" marginLeft="170px">
      {" "}
      {/* Adjust the width and margin as needed */}
      <Input
        pr="4.5rem" // This padding ensures space for the button on the right
        type={show ? "text" : "password"} // Toggle between text and password visibility
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        {" "}
        {/* Adjust the button container width */}
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"} {/* Toggle text */}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
