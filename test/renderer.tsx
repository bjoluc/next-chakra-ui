import {ChakraProvider} from "@chakra-ui/react";
import {RenderOptions, render as stockRender} from "@testing-library/react";
import React from "react";

const Wrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
	return <ChakraProvider>{children}</ChakraProvider>;
};

export * from "@testing-library/react";

// Replace the `render` function with our wrapper of it
export const render = (ui: React.ReactElement, options?: Omit<RenderOptions, "queries">) =>
	stockRender(ui, {wrapper: Wrapper, ...options});
