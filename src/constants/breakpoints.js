const size = {
  mobile: "600px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
  largeTablet: "820px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  largeTablet: `(max-width: ${size.largeTablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};
