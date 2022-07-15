import {Link as ChakraLink, LinkProps as ChakraLinkProps} from "@chakra-ui/react";
import NextLink, {LinkProps as NextLinkProps} from "next/link";
import React from "react";

export type LinkProps = Omit<NextLinkProps, "as"> & ChakraLinkProps;

// Has to be a new component because both Chakra UI and Next.js share the `as` property
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
	(
		{href, replace, scroll, shallow, prefetch, locale, legacyBehavior, children, ...chakraProps},
		ref
	) => {
		return (
			<NextLink
				passHref
				href={href}
				replace={replace}
				scroll={scroll}
				shallow={shallow}
				prefetch={prefetch}
				locale={locale}
				legacyBehavior={legacyBehavior}
			>
				<ChakraLink ref={ref} {...chakraProps}>
					{children}
				</ChakraLink>
			</NextLink>
		);
	}
);
