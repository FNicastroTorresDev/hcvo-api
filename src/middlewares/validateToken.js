import jwt from "jsonwebtoken"

export const validateToken = (req, res, next) => {
  const token = req.headers['accesstoken']
  
  if (!token) {
    return res.status(401).send({
      message: 'No tiene acceso a la página.',
      token: 'No hay token 😕'
    })
  }

  const signature = process.env.SIGNATURE

  try {
    const data = jwt.verify(token, signature)
    console.log(data)
  } catch(err) {
    return res.status(401).send({
      message: 'No tiene acceso a la página.',
      token: 'Token inválido 👮‍♂️'
    })
  }

  next()
}