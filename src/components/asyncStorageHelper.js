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

export const addFavourite = async (country) => {
  const favourites = await getFavourites();
  const userId = await getUserId();

  const newFavourite = {
    id: Math.random().toString(36).substring(2, 9),
    userId,
    name: { common: country.name.common },
    flags: { png: country.flags.png },
    translations: { fra: { common: country.translations.fra.common } }
  };

  await AsyncStorage.setItem(
    'favourites',
    JSON.stringify([...favourites, newFavourite])
  );
};
export const removeFavourite = async (name) => {
  const userId = await getUserId();
  const favourites = await getFavourites();
  const userFavourites = favourites.filter(
    (favourite) => favourite.userId === userId
  );
  const newFavourites = userFavourites.filter(
    (favourite) => favourite.name.common !== name
  );
  await AsyncStorage.setItem('favourites', JSON.stringify(newFavourites));
};
export const getFavourites = async () => {
  const rawFavourites = await AsyncStorage.getItem('favourites');
  return JSON.parse(rawFavourites) || [];
};
export const getUserFavourites = async () => {
  const userId = await getUserId();
  const favourites = await getFavourites();
  return favourites.filter((favourite) => favourite.userId === userId);
};
export const isFavourite = async (country) => {
  const favourites = await getFavourites();
  const userId = await getUserId();
  const userFavourites = favourites.filter(
    (favourite) => favourite.userId === userId
  );
  return userFavourites.some(
    (favourite) => favourite.name.common === country.name.common
  );
};
export const resetFavourites = async () => {
  await AsyncStorage.setItem('favourites', JSON.stringify([]));
};
