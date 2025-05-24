import { create } from "zustand";

interface SignupModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useSignupModal = create<SignupModalStore>((set) => ({
    isOpen: false,
    count:0,
    open: () => {
      console.log("open() called");
      set({ isOpen: true });
    },
    close: () => {
    //   console.log("close() called");
      set({ isOpen: false });
    },


  }));
export default useSignupModal;