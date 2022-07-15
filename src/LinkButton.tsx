import {Button, ButtonProps} from "@chakra-ui/react";
import {HTMLChakraProps} from "@chakra-ui/system";
import NextLink, {LinkProps as NextLinkProps} from "next/link";
import React from "react";
import {Except} from "type-fest";

export type LinkButtonProps = Except<NextLinkProps, "as"> & HTMLChakraProps<"a"> & ButtonProps;

// Has to be a new component because both Chakra UI and Next.js share the `as` property
export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
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
				{/* @ts-expect-error the ref type is HTMLAnchorElement, not HTMLButtonElement */}
				<Button ref={ref} as="a" {...chakraProps}>
					{children}
				</Button>
			</NextLink>
		);
	}
);
