import { render } from "@testing-library/react";
import ScrollPrompt from "../components/common/ScrollPrompt";

test("fails when no window", () => {
    render(<ScrollPrompt $showNav={false} />);

    expect(false).toBeFalsy();
});
