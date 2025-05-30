import { create } from "zustand";

interface AddPropertyStore {
    isOpen: boolean;
    count: number;
    open: () => void;
    close: () => void;
    
}

const useAddPropertyModal = create<AddPropertyStore>((set) => ({
    isOpen: false,
    count:0,
    open: () => {
      set({ isOpen: true });
    },
    close: () => {
      set({ isOpen: false });
    },

  }));
export default useAddPropertyModal;