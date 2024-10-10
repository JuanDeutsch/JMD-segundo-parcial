import { render, screen, fireEvent } from "@testing-library/react";
import SearchBox from "../index";
import { useFiltersContext } from "../../../context/filtersCtx";

jest.mock("../../../context/filtersCtx");

describe("SearchBox", () => {
  const mockSetFilters = jest.fn();
  
  beforeEach(() => {
    useFiltersContext.mockReturnValue({
      filters: { search: "" },
      setFilters: mockSetFilters,
    });
  });

  it("should render the search box with input", () => {
    render(<SearchBox />);
    
    expect(screen.getByPlaceholderText("Busca Recetas")).toBeInTheDocument();
  });

  it("should update the search filter on input change", () => {
    render(<SearchBox />);
    
    const input = screen.getByPlaceholderText("Busca Recetas");
    fireEvent.change(input, { target: { value: "apple" } });
    
    expect(mockSetFilters).toHaveBeenCalledWith({ search: "apple" });
  });
});