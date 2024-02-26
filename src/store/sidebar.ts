import { create } from 'zustand';

type ActionsProps = {
  changeMinimizeState: (bool: boolean) => void;
};

type StoreProps = {
  state: {
    minimized: boolean;
  };
  actions: ActionsProps;
};

const useSidebarStore = create<StoreProps>((set) => ({
  state: {
    minimized: false
  },
  actions: {
    changeMinimizeState: (bool) =>
      set(() => ({
        state: { minimized: bool }
      }))
  }
}));

export { useSidebarStore };
