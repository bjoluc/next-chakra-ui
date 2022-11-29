import {Flex, HStack} from "@chakra-ui/react";
import {Link, LinkButton} from "next-chakra-ui";
import React from "react";

const Page: React.FC = () => (
	<Flex width="100%" height="100vh" alignItems="center" justifyContent="center">
		<HStack spacing={8}>
			<Link href="/#link">Link</Link>
			<LinkButton href="/#linkButton">LinkButton</LinkButton>
		</HStack>
	</Flex>
);

export default Page;
