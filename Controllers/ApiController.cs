using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using MailKit.Net.Smtp;
using MimeKit;

namespace PilotTimeTracker.Controllers
{
    [ApiController]
    [Route("api")]
    public class ApiController : ControllerBase
    {

        [HttpGet]
        public User GetUser()
        {
            using (var db = new PtoContext()){
                return db.User.Include(x => x.manager).Include(x => x.requestGroups).ThenInclude(x => x.requests).FirstOrDefault(x => x.id == 90650);                
            }
        }

        [HttpGet]
        [Route("managedRequests")]
        public List<RequestGroup> GetManagedRequests(){
            using (var db = new PtoContext()){
                return db.RequestGroup.Include(x => x.user).Include(x => x.requests).Where(x => x.managerId == 90650).ToList();
            }
        }

        [HttpPost]
        public RequestGroup Post(RequestGroup requestGroup){

            using (var db = new PtoContext()){
                var user = db.User.FirstOrDefault(x => x.id == requestGroup.userId);
                requestGroup.user = user;
                db.Add(requestGroup);
                db.SaveChanges();
                //sendNewRequestEmail(user);

            }
            return requestGroup;
        }

        [HttpPatch]
        public RequestGroup Patch(RequestGroup requestGroup){
            using (var db = new PtoContext()){
                var entity = db.RequestGroup.FirstOrDefault(x => x.id == requestGroup.id);
                if(entity != null){
                    entity.status = requestGroup.status;
                    db.SaveChanges();
                    //sendUpdatedRequestEmail(db.User.FirstOrDefault(x => x.id == 90650));
                }
            }
            return requestGroup;
        }

        private void sendNewRequestEmail(User user){
            var message = new MimeMessage();
                message.From.Add(new MailboxAddress("PTO System", "pto@pilotcat.com"));
                message.To.Add(new MailboxAddress($"{user.firstName} {user.lastName}", user.email));
                message.Subject = "A PTO Request Needs Your Attention";
                message.Body = new TextPart("plain")
                {
                    Text = "A new PTO request has been created by someone you manage"
                };

            using (var client = new MailKit.Net.Smtp.SmtpClient()) {
                client.Connect("smtp.gmail.com", 587, false);

                //SMTP server authentication if needed
                client.Authenticate("xxxx@gmail.com", "xxxxx");
                client.Send(message);
                client.Disconnect(true);
            }
        }

        private void sendUpdatedRequestEmail(User user){
            var message = new MimeMessage();
                message.From.Add(new MailboxAddress("PTO System", "pto@pilotcat.com"));
                message.To.Add(new MailboxAddress($"{user.firstName} {user.lastName}", user.email));
                message.Subject = "PTO Request Update";
                message.Body = new TextPart("plain")
                {
                    Text = "The status on one of your PTO requests has been updated"
                };

            using (var client = new MailKit.Net.Smtp.SmtpClient()) {
                client.Connect("smtp.gmail.com", 587, false);

                //SMTP server authentication if needed
                client.Authenticate("xxxx@gmail.com", "xxxxx");
                client.Send(message);
                client.Disconnect(true);
            }
        }
    }
}
