import React from "react";

import {LinkIconButton} from "../src";
import {render} from "./renderer";

describe("LinkIconButton", () => {
	it("matches snapshot", () => {
		const {asFragment} = render(<LinkIconButton href="#destination" aria-label="label" />);
		expect(asFragment()).toMatchInlineSnapshot(`
			<DocumentFragment>
			  <a
			    aria-label="label"
			    class="chakra-button css-eeqq40"
			    href="#destination"
			  />
			  <span
			    hidden=""
			    id="__chakra_env"
			  />
			</DocumentFragment>
		`);
	});
});
