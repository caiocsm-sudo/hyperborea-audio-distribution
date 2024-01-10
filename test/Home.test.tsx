import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "@/app/page";

describe("testing if there's any reneder issue", () => {
  it("should have been rendered", () => {
    render(<Home />);

    expect(screen.getByText("Hyperborea Sound Distribution")).toBeInTheDocument();
  });
});
