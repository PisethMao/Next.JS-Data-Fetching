export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
};
export type UserDetailType = UserType & {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};