'use client'

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"
import useLoginModal from "@/app/hooks/useLoginModal";
import React from "react";

interface AddPropertyButtonProps {
  userId?: string|null;
  
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
  userId,
}) => {
  const addPropertyModal = useAddPropertyModal();
  const loginModal = useLoginModal();


  const handleAddProperty = () => {
    if (!userId) {
      loginModal.open();
      return;
    }
      addPropertyModal.open();
    
  }

  return (
    <div 
    onClick={handleAddProperty}
    className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200" >
        Djangobnb your home
    </div>
  )
}

export default AddPropertyButton