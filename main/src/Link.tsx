import {Link as ChakraLink, LinkProps as ChakraLinkProps} from "@chakra-ui/react";
import NextLink, {LinkProps as NextLinkProps} from "next/link";
import React from "react";

export type LinkProps = Omit<NextLinkProps, "passHref" | "legacyBehavior"> &
	Omit<ChakraLinkProps, "as">;

// Using Next's `legacyBehavior` flag due to https://github.com/chakra-ui/chakra-ui/issues/132
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
	({href, as, replace, scroll, shallow, prefetch, locale, children, ...chakraProps}, ref) => {
		return (
			<NextLink
				passHref
				legacyBehavior
				href={href}
				as={as}
				replace={replace}
				scroll={scroll}
				shallow={shallow}
				prefetch={prefetch}
				locale={locale}
			>
				<ChakraLink ref={ref} {...chakraProps}>
					{children}
				</ChakraLink>
			</NextLink>
		);
	}
);
