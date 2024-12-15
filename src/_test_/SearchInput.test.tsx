import { SearchInputComponent } from "../components/SearchInputComponent";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
describe("SearchInputComponent test", () => {
  it("render, write input, click clearSearchButton", () => {
    const { getByTestId } = render(<SearchInputComponent />);
    const searchInput = getByTestId("searchInput");
    expect(searchInput);
    fireEvent.change(searchInput, { target: { value: "aa" } });
    const clearSearchButton = getByTestId("clearSearchButton");
    expect(clearSearchButton);
    fireEvent.click(clearSearchButton);
    const searchInput1 = getByTestId("searchInput");
    expect(searchInput1);
    fireEvent.change(searchInput, { target: { value: "a" } });
    const selectCountry = getByTestId("selectCountry-0");
    fireEvent.click(selectCountry);
    const addCountry = getByTestId("addCountry");
    fireEvent.click(addCountry);

    fireEvent.change(searchInput, { target: { value: "a" } });
    const selectCountry1 = getByTestId("selectCountry-1");
    fireEvent.click(selectCountry1);
    const addCountry1 = getByTestId("addCountry");
    fireEvent.click(addCountry1);

    fireEvent.change(searchInput, { target: { value: "a" } });
    const selectCountry2 = getByTestId("selectCountry-2");
    fireEvent.click(selectCountry2);
    const addCountry2 = getByTestId("addCountry");
    fireEvent.click(addCountry2);

    const deleteCountry = getByTestId("deleteCountry-0");
    fireEvent.click(deleteCountry);

    const ClearButton = getByTestId("clearAll");
    fireEvent.click(ClearButton);
  });
  it("click dropdownButton", () => {
    const { getByTestId } = render(<SearchInputComponent />);

    const dropdownButton = getByTestId("dropdown-icon");
    expect(dropdownButton);

    fireEvent.click(dropdownButton);
    fireEvent.click(dropdownButton);
  });
});
