import { User, RequestStatus } from "./models/request";

export const mockUser: User = {
  id: 1,
  manager: 2,
  firstName: "Addison",
  lastName: "Beck",
  requestGroups: [
    {
      id: "1",
      dateRequested: new Date(),
      status: RequestStatus.Pending,
      userId: 1,
      managerId: 2,
      requests: [
        {
          date: new Date(),
          hours: 4,
          requestGroupId: "1",
        },
        {
          date: new Date(),
          hours: 6,
          requestGroupId: "1",
        },
      ],
    },
    {
      id: "2",
      dateRequested: new Date(),
      status: RequestStatus.Pending,
      userId: 1,
      managerId: 2,
      requests: [
        {
          date: new Date(),
          hours: 4,
          requestGroupId: "2",
        },
        {
          date: new Date(),
          hours: 6,
          requestGroupId: "2",
        },
      ],
    },
  ],
};
