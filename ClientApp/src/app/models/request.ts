export interface Request {
  date: Date;
  hours: number;
  requestGroupId: string;
}

export interface RequestGroup {
  id: string;
  dateRequested: Date;
  userId: number;
  managerId: number;
  status: RequestStatus;
  requests: Request[];
}

export interface User {
  requestGroups: RequestGroup[];
  firstName: string;
  lastName: string;
  id: number;
  manager: number;
}

export enum RequestStatus {
  Pending = "Pending",
  Approved = "Approved",
  Denied = "Denied",
}
