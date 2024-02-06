import React, { type ReactElement } from "react";

function Chip({
  label,
  color,
}: {
  label: string;
  color: string;
}): ReactElement {
  return (
    <div
      className={`mx-4 py-1 px-2 rounded-full w-max border-[1px] hover:bg-${color}-50  hover:border-[1px] hover:border-${color}-400`}
    >
      <h6 className="text-md">#{label}</h6>
    </div>
  );
}

export default Chip;
