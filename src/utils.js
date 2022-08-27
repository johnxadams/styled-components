/**
 * another to globally save style variables
 * Which I can use in my components
 */

export const colors = {
  primary: "purple",
};

/** Don#t forget:
 * Since this is a Function,
 * I can also declare a default value to the setupBorder:
 * ({width = '10px', type = 'solid', color='red'})
 *
 * Also the parameters are wraped in an Object:
 * So I don't have to follow the order or the params.
 * So muss ich nicht nicht reihenfolge beachten
 */
export const setupBorder = ({ width, type, color }) => {
  return `${width}px ${type} ${color}`;
};

// setupBorder used in AlternativeTitle, LoadingAnimation
