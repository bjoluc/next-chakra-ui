import React from "react";

import {LinkButton} from "../src";
import {render} from "./renderer";

describe("Link", () => {
	it("matches snapshot", () => {
		const {asFragment} = render(<LinkButton href="#destination">Caption</LinkButton>);
		expect(asFragment()).toMatchInlineSnapshot(`
			<DocumentFragment>
			  <a
			    class="chakra-button css-1d0ox2v"
			    href="/#destination"
			  >
			    Caption
			  </a>
			  <span />
			</DocumentFragment>
		`);
	});
});
