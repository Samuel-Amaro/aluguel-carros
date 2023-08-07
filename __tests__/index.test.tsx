import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

//suite de testes home
describe("Home", () => {
  //testa se renderiza um titulo na page home
  it("renderiza um titulo", () => {
    render(
      <Home
        searchParams={{
          manufacturer: undefined,
          year: undefined,
          model: undefined,
          fuel: undefined,
          limit: undefined,
        }}
      />
    );

    const heading = screen.getByRole("heading", {
      name: "Aluguel de Carros",
    });

    expect(heading).toBeTruthy();
  });
});
