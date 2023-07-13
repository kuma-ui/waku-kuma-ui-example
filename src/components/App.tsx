import { Counter } from "./Counter.js";
import { Box, Heading } from "@kuma-ui/core";

const App = ({ name = "Anonymous" }) => {
  return (
    <Box border={"3px red dashed"} m={"1em"} p={"1em"}>
      {/* Static props */}
      {/* When using static props, no error occurs, but the style does not get applied */}
      <Heading color={"red"}>Hello {name}!!</Heading>
      {/* Dynamic props */}
      {/* When using static props, an error occurs. */}
      {/* <Heading color={(() => "red")()}>Hello {name}!!</Heading> */}
      <Heading as={"h3"}>This is a server component.</Heading>
      <Counter />
    </Box>
  );
};

export default App;
