import { RequestStatus } from "./request-status.enum";
import { Request } from "./request";

export interface RequestGroup {
  id: string;
  dateRequested: Date;
  userId: number;
  managerId: number;
  status: RequestStatus;
  requests: Request[];
}
