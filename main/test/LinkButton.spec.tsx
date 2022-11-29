import React from "react";

import {LinkButton} from "../src";
import {render} from "./renderer";

describe("Link", () => {
	it("matches snapshot", () => {
		const {asFragment} = render(<LinkButton href="#destination">Caption</LinkButton>);
		expect(asFragment()).toMatchInlineSnapshot(`
			<DocumentFragment>
			  <a
			    class="chakra-button css-i857na"
			    href="#destination"
			  >
			    Caption
			  </a>
			  <span
			    hidden=""
			    id="__chakra_env"
			  />
			</DocumentFragment>
		`);
	});
});
