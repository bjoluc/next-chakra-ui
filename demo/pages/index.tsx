import {EmailIcon} from "@chakra-ui/icons";
import {Flex, HStack} from "@chakra-ui/react";
import {Link, LinkButton, LinkIconButton} from "next-chakra-ui";
import React from "react";

const Page: React.FC = () => (
	<Flex width="100%" height="100vh" alignItems="center" justifyContent="center">
		<HStack spacing={8}>
			<Link href="/#link">Link</Link>
			<LinkButton href="/#linkButton">LinkButton</LinkButton>
			<LinkIconButton href="/#linkIconButton" aria-label="label" icon={<EmailIcon />} />
		</HStack>
	</Flex>
);

export default Page;
