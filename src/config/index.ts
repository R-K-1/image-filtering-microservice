
// should be used for test purposes only
const jwtSecretDefault = "eyJhbGciOiJIUzI1NiJ9.OjpmZmZmOjEyNy4wLjAuMTE4.DfDDsJ8cWllFgOb2GYdSkcdlSvoz6nl_6N38C89Le24"

export const config = {
    dev: {
        jwtSecret: process.env.JWT_SECRET || jwtSecretDefault,
    },
};
