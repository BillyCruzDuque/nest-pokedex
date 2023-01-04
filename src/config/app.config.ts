export const EnvConfigurations = () => ({
  environments: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB_URI || 'mongodb://localhost:27017/your_db_name',
  port: process.env.PORT || 3000,
  default_limit: process.env.DEFAULT_LIMIT || 10,
});
