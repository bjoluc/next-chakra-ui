import {IconButton, IconButtonProps} from "@chakra-ui/react";
import {HTMLChakraProps} from "@chakra-ui/system";
import NextLink, {LinkProps as NextLinkProps} from "next/link";
import React from "react";

export type LinkIconButtonProps = Omit<NextLinkProps, "passHref" | "legacyBehavior"> &
	Omit<HTMLChakraProps<"a"> & IconButtonProps, "as">;

// Using Next's `legacyBehavior` flag due to https://github.com/chakra-ui/chakra-ui/issues/132
export const LinkIconButton = React.forwardRef<HTMLAnchorElement, LinkIconButtonProps>(
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
				{/* @ts-expect-error the ref type is HTMLAnchorElement, not HTMLButtonElement */}
				<IconButton ref={ref} as="a" {...chakraProps}>
					{children}
				</IconButton>
			</NextLink>
		);
	}
);
