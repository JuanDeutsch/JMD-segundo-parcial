import { render, screen, fireEvent } from "@testing-library/react";
import FoodCard from "../index";
import { useNavigate } from "react-router-dom"; 
import { MOCK_MEAL } from "../../../mock/meal";

jest.mock("react-router-dom");

describe("FoodCard", () => {
    const mockNavigate = jest.fn();
    
    beforeEach(() => {
        useNavigate.mockReturnValue(mockNavigate);
    });

    it("should render the food card", () => {
        render(<FoodCard meal={MOCK_MEAL} />);
        
        expect(screen.getByTestId('imagen')).toHaveStyle({
            backgroundImage: `url(${MOCK_MEAL.strMealThumb})`
        });
        expect(screen.getByText('Bakewell tart')).toBeInTheDocument();
    });

    it("should navigate to the detail page", () => {
        render(<FoodCard meal={MOCK_MEAL} />);
        
        fireEvent.click(screen.getByText('Bakewell tart'));
        expect(mockNavigate).toHaveBeenCalledWith(`/detail/${MOCK_MEAL.idMeal}`);
    });
});