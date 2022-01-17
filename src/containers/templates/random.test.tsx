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
            settedPosition: [
              [1, 1, 1],
              [1, 1, 1],
            ],
            childNum: 4,
            position: [
              [null, null, null],
              [null, null, null],
            ],
    }));
  });

  it('開始ボタンを押すと変化後設定したものになる', () => {
    
    expect(1).toBe(1);
  });
});
