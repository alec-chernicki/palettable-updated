const BASE_URL = window.location.origin;

export const baseUrl = (stringifiedColors) => {
  return `${BASE_URL}/${stringifiedColors}`;
};
