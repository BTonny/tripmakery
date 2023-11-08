require('dotenv').config()
const env = process.env.NODE_ENV || 'default';

const config = {
    default: {
        name: 'default',
        database: {
            host: '127.0.0.1',
            port: '27035',
            db: process.env.MONGO_DB_NAME,
            user: process.env.MONGO_DB_USER,
            password: process.env.MONGO_DB_USER_PASSWORD
        },
        webserver: {
            port: 3000
        }
    }
};

const Environment = config[env];
export { Environment };
