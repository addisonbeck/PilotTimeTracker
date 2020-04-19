import { RequestGroup } from "./request-group";

export interface User {
  requestGroups: RequestGroup[];
  firstName: string;
  lastName: string;
  id: number;
  managerId: number;
  manager: User;
  isManager: boolean;
}
