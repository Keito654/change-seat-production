import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import * as useFetchData from '../../hooks/useFetchData';
import CharRandomContainer from './Random';

const mockFetch = jest.spyOn(useFetchData, 'useFetchData');

describe('ランダム画面のテスト', () => {
  afterEach(() => {
    mockFetch.mockReset();
    cleanup();
  });

  it('レンダリング時は全て空白', () => {
    mockFetch.mockImplementation(() => ({
      settedPosition: Array(2).fill(Array(3).fill(1)),
      childNum: 6,
      position: Array(2).fill([-1, null, null]),
    }));
    const { getAllByTestId } = render(<CharRandomContainer testing={true} />);
    getAllByTestId('seat-element').map((element) => {
      expect(element.textContent).toBe('');
    });
  });

  it('開始ボタンを押すとsettedPositionの値になる', async () => {
    mockFetch.mockImplementation(() => ({
      settedPosition: Array(2).fill(Array(3).fill(1)),
      childNum: 6,
      position: Array(2).fill([-1, null, null]),
    }));
    const { getByText, getAllByTestId } = render(
      <CharRandomContainer testing={true} />,
    );
    await fireEvent.click(getByText('席替え開始！'));
    getAllByTestId('seat-element').map((element) => {
      expect(element.textContent).toBe('1');
    });
  });

  it('何も設定してないところにはランダムで設定されていない数字が入る', async () => {
    mockFetch.mockImplementation(() => ({
      settedPosition: Array(2).fill(Array(3).fill(null)),
      childNum: 6,
      position: Array(2).fill([null, null, null]),
    }));
    const { getByText, getAllByTestId } = render(
      <CharRandomContainer testing={true} />,
    );
    await fireEvent.click(getByText('席替え開始！'));
    const arr: (string | null)[] = [];
    getAllByTestId('seat-element').map((element) => {
      arr.push(element.textContent);
    });
    expect(arr).toEqual(expect.arrayContaining(['1', '2', '3', '4', '5', '6']));
  });
});
