import USER from "../userSchema";

class LoginDBQuery {
  getUserByEmail = async (email: string): Promise<any> => {
    console.log("oi");
    return Promise.resolve(
      await USER.findOne({ email: email }).select("+password"),
    );
  };
}

export default new LoginDBQuery();
