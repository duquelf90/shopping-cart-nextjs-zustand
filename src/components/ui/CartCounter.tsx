// components/CartCounter.tsx
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

type CartCounterProps = {
  initialValue?: number;
  onAdd?: (value: number) => void;
  onRemove?: (value: number) => void;
};

export const CartCounter: React.FC<CartCounterProps> = ({
  counter = 1,
  onAdd,
  onRemove,
}) => {
  const [quantity, setCount] = useState(counter);

  const handleAdd = () => {
    setCount(quantity + 1);
    if (onAdd) {
      onAdd(quantity + 1); // Llama a onAdd con el nuevo valor
    }
  };

  const handleRemove = () => {
    if (quantity > 1) {
      setCount(quantity - 1);
      if (onRemove) {
        onRemove(quantity - 1); // Llama a onRemove con el nuevo valor
      }
    }
  };

  return (
    <div className="bg-[#F0F0F0] w-full md:py-3.5 sm:px-5 rounded-full flex items-center justify-between px-5 py-3 max-h-8 md:max-h-10 min-w-[105px] max-w-[105px] sm:max-w-32">
      <div
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-5 w-5 sm:h-6 sm:w-6 text-xl hover:bg-transparent"
        onClick={handleRemove}
      >
        <Icon icon="ic:round-minus" width="24" height="24" />
      </div>
      <span className="font-medium text-sm sm:text-base">{quantity}</span>
      <div
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-5 w-5 sm:h-6 sm:w-6 text-xl hover:bg-transparent"
        onClick={handleAdd}
      >
        <Icon icon="ic:round-plus" width="24" height="24" />
      </div>
    </div>
  );
};