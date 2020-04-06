export interface Request {
  date: Date;
  hours: number;
  requestGroupId: number;
}

export interface RequestGroup {
  id: number;
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
