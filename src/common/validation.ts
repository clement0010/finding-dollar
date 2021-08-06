export const validEmailRule = (email: string): boolean | string =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) || 'Email must be valid';

export const requireInputRule = (value: string): boolean | string => !!value || 'Required';
