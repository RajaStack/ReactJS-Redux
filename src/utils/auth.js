export const Auth = {
  isAuthenticated(){ return localStorage.getItem("profile") ? true : false;},
  authenticate() {
     localStorage.setItem("profile" , "1");
  },
  signout() {
    localStorage.removeItem("profile");
  }
}