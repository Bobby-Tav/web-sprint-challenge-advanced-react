import React from "react";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)

    const header = screen.getByText(/checkout form/i)

    expect(header).toBeTruthy();
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/first name/i)
    userEvent.type(firstNameInput,'Robert')
    const lastNameInput = screen.getByLabelText(/last name/i)
    userEvent.type(lastNameInput,'taveras')
    const addressInput = screen.getByLabelText(/address/i)
    userEvent.type(addressInput,'taveras')
    const cityInput = screen.getByLabelText(/city/i)
    userEvent.type(cityInput, 'New York City')
    const stateInput = screen.getByLabelText(/state/i)
    userEvent.type(stateInput,'Ny')
    const zipInput = screen.getByLabelText(/zip/i)
    userEvent.type(zipInput,'10463')
    
    const submit = screen.getByRole('button')
    userEvent.click(submit)

    const successMessage = screen.getByTestId('successMessage')
    
    expect(successMessage).toBeInTheDocument();

    
});
