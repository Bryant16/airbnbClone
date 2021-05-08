export const useEventListener = element => [element.addEventListener, element.removeEventListener];
export const useQuerySelector = query => document.querySelector(query);
export const useMultiSelector = query => document.querySelectorAll(query);
