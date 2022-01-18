import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import * as useFetchData from '../../hooks/useFetchData';
import CharRandomContainer from 'src/containers/templates/Random';

const mockFetch = jest.spyOn(useFetchData, 'useFetchData');

describe('ランダムに画面が変化したあと設定した番号を表示する', () => {
  afterEach(() => {
    mockFetch.mockReset();
    cleanup();
  });

  beforeEach(() => {
    mockFetch.mockImplementation(() => ({
      settedPosition: Array(2).fill(Array(3).fill(1)),
      childNum: 6,
      position: Array(2).fill([-1, null, null]),
    }));
  });

  it('レンダリング時は全て空白', () => {
    const { getAllByTestId } = render(<CharRandomContainer testing={true} />);
    getAllByTestId('seat-element').map((element) => {
      expect(element.textContent).toBe('');
    });
  });

  it('開始ボタンを押すとsettedPositionの値になる', async () => {
    const { getByText, getAllByTestId } = render(
      <CharRandomContainer testing={true} />,
    );
    await fireEvent.click(getByText('席替え開始！'));
    getAllByTestId('seat-element').map((element) => {
      expect(element.textContent).toBe('1');
    });
  });
});
