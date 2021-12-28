import React from "react";

export default React.forwardRef((props, ref) => {
  return <input ref={ref} type="text" />;
});
