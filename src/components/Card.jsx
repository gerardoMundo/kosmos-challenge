import { forwardRef } from "react";

export const Card = forwardRef(({ value, onChange, url, title }, ref) => {
  return (
    <div className="parent">
      <img
        value={value}
        onChange={onChange}
        ref={ref}
        className="child"
        src={url}
        alt={title}
      />
    </div>
  );
});
