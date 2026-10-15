import { useState } from "react";

export const List = ({
  count,
  items,
}: {
  count: number;
  items: Array<string>;
}) => {
  if (items.length === 0) {
    const [initialCount] = useState(0);

    return <p>{initialCount}</p>;
  }

  return (
    <div css={{ color: "red" }}>
      <img src="image.png" />
      {items.map((item) => (
        <span>{item}</span>
      ))}
      {count && <span>{count}</span>}
      <button>Button</button>
    </div>
  );
};
