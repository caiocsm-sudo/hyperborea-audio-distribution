import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Home from "@/app/page";

it.only("should have been rendered", () => {
  render(<Home />);

  expect(screen.getByText("Oi galera")).toBeInTheDocument();
});

