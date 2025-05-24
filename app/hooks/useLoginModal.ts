import { create } from "zustand";

interface LoginModalStore {
    isOpen: boolean;
    count: number;
    open: () => void;
    close: () => void;
    increase: () => void;
    decrease: () => void;
}

const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: false,
    count:0,
    open: () => {
    //   console.log("open() called");
      set({ isOpen: true });
    },
    close: () => {
    //   console.log("close() called");
      set({ isOpen: false });
    },

    // Actions
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),

  }));
export default useLoginModal;