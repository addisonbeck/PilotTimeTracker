using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace PilotTimeTracker.Controllers
{
    [ApiController]
    [Route("api")]
    public class ApiController : ControllerBase
    {

        [HttpGet]
        public User Get()
        {
            using (var db = new PtoContext()){
                return db.User.Include(x => x.requestGroups).ThenInclude(x => x.requests).FirstOrDefault(x => x.id == 90650);                
            }
        }

        [HttpPost]
        public RequestGroup Post(RequestGroup requestGroup){
            using (var db = new PtoContext()){
                var user = db.User.FirstOrDefault(x => x.id == requestGroup.userId);
                requestGroup.user = user;
                db.Add(requestGroup);
                db.SaveChanges();
            }
            return requestGroup;
        }

        [HttpPatch]
        public RequestGroup Patch(RequestGroup requestGroup){
            using (var db = new PtoContext()){
                var entity = db.RequestGroup.FirstOrDefault(x => x.id == requestGroup.id);
                if(entity != null){
                    entity.status = requestGroup.status;
                    db.RequestGroup.Update(requestGroup);
                    db.SaveChanges();
                }
            }
            return requestGroup;
        }

        public static User mockUser = new User{
            id = 1,
            managerId = 2,
            firstName = "Addison",
            lastName = "Beck",
            requestGroups = new List<RequestGroup>(
                new RequestGroup[]
                {
                    new RequestGroup{
                        id = "1",
                        dateRequested = DateTime.Now,
                        status = RequestStatus.Pending,
                        userId = 1,
                        managerId = 2,
                        requests = new List<Request>(
                            new Request[]{
                                new Request() {
                                    date = DateTime.Now,
                                    hours = 4,
                                    requestGroupId = "1",
                                },
                                new Request() {
                                    date = DateTime.Now,
                                    hours = 2,
                                    requestGroupId = "1"
                                }
                            }
                        )
                    },
                    new RequestGroup{
                        id = "2",
                        dateRequested = DateTime.Now,
                        status = RequestStatus.Pending,
                        userId = 1,
                        managerId = 2,
                        requests = new List<Request>(
                            new Request[]{
                                new Request() {
                                    date = DateTime.Now,
                                    hours = 8,
                                    requestGroupId = "2",
                                },
                                new Request() {
                                    date = DateTime.Now,
                                    hours = 8,
                                    requestGroupId = "2"
                                }
                            }
                        )
                    }
                })
        };
    }
}
