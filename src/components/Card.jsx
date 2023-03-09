import { forwardRef } from "react";

export const Card = forwardRef(({ value, onChange }, ref) => {
  return (
    <div className="parent">
      <img
        value={value}
        onChange={onChange}
        ref={ref}
        className="child"
        src="https://via.placeholder.com/150/92c952"
        alt="foto"
      />
    </div>
  );
});
