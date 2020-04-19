import { RequestStatus } from "./request-status.enum";
import { Request } from "./request";
import { User } from "./user";
import { RequestType } from "./request-type.enum";

export interface RequestGroup {
  id: string;
  dateRequested: Date;
  userId: number;
  user?: User;
  managerId: number;
  status: RequestStatus;
  requests: Request[];
  type: RequestType;
}
