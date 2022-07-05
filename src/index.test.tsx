import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import NearForm from './components/nearLogin/NearForm';

const formInputValues = [
    {
        label: 'fullName',
        correctTestValue: 'abc',
    },
    {
        label: 'accountId',
        correctTestValue: 'abcde',
    }
];

describe('Simple working form', () => {
    it('Should render all form inputs', () => {
        render(
            <NearForm />
        );

        //check for all form fields
        formInputValues.forEach((value, index) => {
            expect(screen.getByLabelText(value.label)).toBeInTheDocument();
        });
    });


    it('Should render submit button', async () => {
        render(
            <NearForm />,
        );

        //check for submit button
        const button = screen.getByRole('button', { name: 'Continue' });

        expect(button).toBeInTheDocument();
        expect(button).not.toBeDisabled();
    });

      it('Should submit when inputs are filled and submit button clicked', async () => {
        render(
           <NearForm />,
        );

        //check for submit button
        const submitButton = screen.getByRole('button', { name: 'Continue' });

        formInputValues.forEach((mockValue, index) => {
          const input = screen.getByLabelText(mockValue.label);
          fireEvent.change(input, { target: { value: mockValue.correctTestValue } });
        });

        fireEvent.click(submitButton);

        expect(
          await screen.findByRole('button', { name: 'Continue' }),
        ).toBeInTheDocument();
      });
});

