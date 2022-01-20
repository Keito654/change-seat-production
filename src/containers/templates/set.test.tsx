import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SetContainer from './Set';

describe('setting画面のテスト', () => {
  beforeEach(() => {
    (global as any).IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: () => jest.fn(),
      disconnect: () => jest.fn(),
    }));
  });

  afterEach(() => {
    cleanup();
  });

  it('席を押すとダイアログが出てきて、数値を設定すると反映される。', async () => {
    const { getAllByTestId } = render(<SetContainer arrayNumProps={5} />);

    userEvent.click(getAllByTestId('set-element')[0]);
    await userEvent.type(screen.getByTestId('input'), '3', {
      delay: 100,
    });
    userEvent.click(screen.getByText('保存'));

    expect(screen.getAllByTestId('set-element')[0].textContent).toEqual('3');
  });
});
