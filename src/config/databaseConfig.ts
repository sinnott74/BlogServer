// import cfenv from "cfenv";

export interface ConnectionConfig {
  user?: string;
  database?: string;
  password?: string;
  port?: number;
  host?: string;
  connectionString?: string;
  max?: number;
}

let config: ConnectionConfig;
if (process.env.NODE_ENV === "production") {
  // Production
  config = {
    connectionString: process.env.POSTGRES_URL,
    max: 5
  };
} else {
  // Development
  config = {
    database: "pwadb",
    host: "localhost",
    port: 5432,
    max: 5
  };
}

export default config;
