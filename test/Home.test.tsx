import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "@/app/page";

describe("testing if there's any reneder issue", () => {
  it.only("should have been rendered", () => {
    render(<Home />);

    expect(screen.getByText("Oi galera")).toBeInTheDocument();
  });
});
