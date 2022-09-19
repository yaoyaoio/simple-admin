import {writeRoutes} from "./routes";

export const IsWriteRoutes = (path) => {
  return writeRoutes.includes(path)
}
