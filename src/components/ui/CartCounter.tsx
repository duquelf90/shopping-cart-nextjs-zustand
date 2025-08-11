// components/CartCounter.tsx
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

type CartCounterProps = {
  initialValue?: number;
  onAdd?: (value: number) => void;
  onRemove?: (value: number) => void;
};

export const CartCounter: React.FC<CartCounterProps> = ({
  initialValue = 1,
  onAdd,
  onRemove,
}) => {
  const [count, setCount] = useState(initialValue);

  const handleAdd = () => {
    setCount(count + 1);
    if (onAdd) {
      onAdd(count + 1); // Llama a onAdd con el nuevo valor
    }
  };

  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
      if (onRemove) {
        onRemove(count - 1); // Llama a onRemove con el nuevo valor
      }
    }
  };

  return (
    <div className="bg-[#F0F0F0] w-full min-w-[110px] max-w-[110px] sm:max-w-[170px] py-3 md:py-3.5 px-4 sm:px-5 rounded-full flex items-center justify-between">
      <button
        type="button"
        className="h-5 w-5 sm:h-6 sm:w-6 text-xl hover:bg-transparent"
        onClick={handleRemove}
      >
        <Icon icon="ic:round-minus" width="24" height="24" />
      </button>
      <span className="font-medium text-sm sm:text-base">{count}</span>
      <button
        type="button"
        className="h-5 w-5 sm:h-6 sm:w-6 text-xl hover:bg-transparent"
        onClick={handleAdd}
      >
        <Icon icon="ic:round-plus" width="24" height="24" />
      </button>
    </div>
  );
};