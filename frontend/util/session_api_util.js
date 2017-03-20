export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "api/users",
    data: { user }
  });
};
