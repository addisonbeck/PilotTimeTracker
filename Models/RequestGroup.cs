using System;
using System.Collections.Generic;

public class RequestGroup {
  public string id {get;set;}
  public DateTime dateRequested {get;set;}
  public int userId {get;set;}
  public User user { get; set; }
  public int managerId {get;set;}
  public RequestStatus status {get;set;}
  public List<Request> requests {get;set;}
}
