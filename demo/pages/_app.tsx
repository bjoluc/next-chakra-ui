import {ChakraProvider} from "@chakra-ui/react";
import {AppProps} from "next/app";
import React from "react";

const MyApp = ({Component, pageProps}: AppProps) => {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
