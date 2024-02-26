const fakeFetchUser = async () => {
  return Promise.resolve({ username: 'User', email: 'usermail@mail.com' });
};

export { fakeFetchUser };
