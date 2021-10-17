import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen, waitFor, within } from '@testing-library/react';
import { response as mockData, initialStateHeader, initialStateWithExpenses } from './mockData';
import App from '../App';
import Wallet from '../pages/Wallet';

import { renderWithRouterAndStore } from './testConfig';

const apiResponse = Promise.resolve({
  json: () => Promise.resolve(mockData),
  ok: true,
});

const mockedExchange = jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);

afterEach(() => jest.clearAllMocks());

describe('5 - Crie um header para a página de carteira contendo as seguintes características:', () => {
  const initial = initialStateHeader;

  test('Um elemento que exiba o email do usuário que fez login.', () => {
    const { store } = renderWithRouterAndStore(<Wallet />, '/carteira', initial);
    const emailField = screen.getByTestId('email-field');

    expect(emailField.innerHTML).not.toBe('');
    expect(emailField).toContainHTML(store.getState().user.email);
  });

  test('Crie um campo com a despesa total gerada pela lista de gastos.', () => {
    renderWithRouterAndStore(<Wallet />, '/carteira', initial);
    const totalField = screen.getByTestId('total-field');

    const INITIAL_VALUE = 0;
    expect(totalField).toContainHTML(INITIAL_VALUE);
  });

  test('Crie um campo que mostre que qual câmbio está sendo utilizado, que será neste caso \'BRL\'', () => {
    renderWithRouterAndStore(<Wallet />, '/carteira');
    const exchangeField = screen.getByTestId('header-currency-field');

    expect(exchangeField).toBeInTheDocument();
    expect(exchangeField).toContainHTML('BRL');
  });
});

