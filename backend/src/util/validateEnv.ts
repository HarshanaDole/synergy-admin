import "dotenv/config";
import { cleanEnv, str, port } from "envalid";

export default cleanEnv(process.env, {
  MONGO_CON_STRING: str(),
  PORT: port(),
});
