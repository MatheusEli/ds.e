import React from 'react';

const Color = ({ hexCode, width, height }) => {
    return React.createElement("div", { style: { backgroundColor: hexCode, width, height } });
};

export { Color as default };
//# sourceMappingURL=Color.js.map
