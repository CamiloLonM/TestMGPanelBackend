import jwt from 'jsonwebtoken';

const generateJwt = (uid = '') => {
  return new Promise((resolve, rejects) => {
    const payload = { uid };
    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY,
      {
        expiresIn: '24h',
      },
      (err, token) => {
        if (err) {
          rejects('JWT not generated');
        } else {
          resolve(token);
        }
      }
    );
  });
};

export default generateJwt;
