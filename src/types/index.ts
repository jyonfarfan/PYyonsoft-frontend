export type User = {
  id: string;
  email: string;
  name: string;
  password: string;
  familia: string;
};
export type LoginForm = Pick<User, "email"> & {
  password: string;
};
