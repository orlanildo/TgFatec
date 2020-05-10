const jwt = require('jsonwebtoken')


const secret = '5eb72ca83bb4e215107f1472'

const sign = payload => jwt.sign(payload, secret, { expiresIn: 86400 })

const verify = token => jwt.verify(token, secret)

module.exports = { sign, verify }
