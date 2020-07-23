/**
 * @author @binjiasata
 * @description config development and production path
 *
 */

export const config = () => {
  // for deploy
  let path = "https://uottawa-pdctestyiyin.herokuapp.com/";
  if (process.env.NODE_ENV !== "production") {
    //for local setup
    path = "http://localhost:8080/";
  }
  return path;
};
