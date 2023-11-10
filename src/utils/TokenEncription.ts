import CryptoJS from "crypto-js";

const secretKey = process.env.NEXT_PUBLIC_CRYPTOJS_SECRET_KEY;

// Function to encrypt the token
export const encryptToken = (token: string) => {
  if (secretKey) {
    const encryptedToken = CryptoJS.AES.encrypt(token, secretKey).toString();
    return encryptedToken;
  } else {
    throw new Error("Secret key is undefined");
  }
};

// Function to decrypt the token
export const decryptToken = (encryptedToken: string) => {
  if (secretKey) {
    const decryptedToken = CryptoJS.AES.decrypt(
      encryptedToken,
      secretKey
    ).toString(CryptoJS.enc.Utf8);
    return decryptedToken;
  } else {
    throw new Error("Secret key is undefined");
  }
};
