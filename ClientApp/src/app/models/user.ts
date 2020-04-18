import { RequestGroup } from "./request-group";

export interface User {
  requestGroups: RequestGroup[];
  firstName: string;
  lastName: string;
  id: number;
  manager: number;
}
