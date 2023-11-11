import {create} from 'zustand';

interface BearStore {
  bears: number;
  increase: (by: number) => void;
}

export const useBearStore = create<BearStore>()(set => ({
  bears: 0,
  increase: by => set(state => ({bears: state.bears + by})),
}));
