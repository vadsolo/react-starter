import React from 'react';
import { render, screen } from '@testing-library/react';
import ExampleAPI from '../ExampleAPI';
import ExampleRequest from '../ExampleRequest';
import * as useRequest from '../../hooks/useRequest';
import * as useApi from '../../hooks/useApi';
import { RequestStates } from '../../hooks/types';

const mockUseRequest = useRequest as jest.Mocked<typeof useRequest>;
const mockUseApi = useApi as jest.Mocked<typeof useApi>;

describe('<ExampleAPI />', () => {
  it('renders and fetches one todo on render', async () => {
    mockUseApi.default.mockReturnValue({
      data: {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
      requestState: RequestStates.SUCCESS,
      errors: null,
    });
    render(<ExampleAPI />);

    expect(await screen.findAllByRole('listitem')).toHaveLength(1);
  });

  it('throws an error on fail API fetch', async () => {
    mockUseApi.default.mockReturnValue({
      data: null,
      requestState: RequestStates.ERROR,
      errors: [{ message: 'Error' }],
    });
    render(<ExampleAPI />);
    expect(screen.getByText(/Error/)).toBeInTheDocument();
  });
});

describe('<ExampleRequest />', () => {
  it('renders and fetches 3 todos on render', async () => {
    mockUseRequest.default.mockReturnValue({
      errors: null,
      requestState: RequestStates.SUCCESS,
      execRequest() {
        return Promise.resolve([
          {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
          },
          {
            userId: 1,
            id: 2,
            title: 'quis ut nam facilis et officia qui',
            completed: false,
          },
          {
            userId: 1,
            id: 3,
            title: 'fugiat veniam minus',
            completed: false,
          },
        ]);
      },
    });
    render(<ExampleRequest />);

    expect(await screen.findAllByRole('listitem')).toHaveLength(3);
  });

  it('throws an error on fail API fetch', async () => {
    mockUseRequest.default.mockReturnValue({
      errors: [{ message: 'Error' }],
      requestState: RequestStates.ERROR,
      execRequest() {
        return Promise.resolve(null);
      },
    });
    render(<ExampleRequest />);
    expect(screen.getByText(/Error/)).toBeInTheDocument();
  });
});
