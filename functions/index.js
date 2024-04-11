const functions = require("firebase-functions");
const axios = require("axios");

exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
  axios.post("https://api.chatengine.io/users/", {

    username: user.email,
    secret: user.uid,
    email: user.email,
    first_name: user.displayName,
  },
  {headers: {"Private-Key": 'f824d800-5a7b-4255-b533-f946acdecd35'}},
  );
});
exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
  axios.delete("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": 'c79177a0-e739-4244-b48a-4acfcd6fb735',
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  });
});
