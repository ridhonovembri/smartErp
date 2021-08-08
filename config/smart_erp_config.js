require('dotenv').config();

module.exports = {
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    secret: process.env.SECRET,
    smtp_server: process.env.SMTP_SERVER,
    smtp_port: process.env.SMTP_PORT,
    from_email: process.env.FROM_EMAIL
}