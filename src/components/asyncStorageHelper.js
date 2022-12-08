import AsyncStorage from '@react-native-async-storage/async-storage';

export const isEmailExists = async (email) => {
  const users = await getUsers();
  return users.some((user) => user.email === email);
};
export const isUsernameExists = async (username) => {
  const users = await getUsers();
  return users.some((user) => user.username === username);
};
export const registerUser = async (email, username, password) => {
  const users = await getUsers();

  const newUser = {
    id: Math.random().toString(36).substring(2, 9),
    email,
    username,
    password
  };

  await AsyncStorage.setItem('userId', newUser.id);
  await AsyncStorage.setItem('users', JSON.stringify([...users, newUser]));
};
export const loginUser = async (email) => {
  const user = await getUser(email);
  await AsyncStorage.setItem('userId', user.id);
};
export const isPwdCorrects = async (email, password) => {
  const users = await getUsers();
  const user = users.find((user) => user.email === email);
  return user.password === password;
};
export const getUser = async (email) => {
  const users = await getUsers();
  return users.find((user) => user.email === email);
};
export const getUsers = async () => {
  const rawUsers = await AsyncStorage.getItem('users');
  return JSON.parse(rawUsers) || [];
};
export const getUserId = async () => {
  return await AsyncStorage.getItem('userId');
};
export const resetUsers = async () => {
  await AsyncStorage.setItem('users', JSON.stringify([]));
  await AsyncStorage.removeItem('userId');
};
