import React from "react";

import {Link} from "../src";
import {render} from "./renderer";

describe("Link", () => {
	it("matches snapshot", () => {
		const {asFragment} = render(<Link href="#destination">Caption</Link>);
		expect(asFragment()).toMatchInlineSnapshot(`
			<DocumentFragment>
			  <a
			    class="chakra-link css-spn4bz"
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
