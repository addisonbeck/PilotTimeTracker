using System.Collections.Generic;

public class User {
  public int id {get;set;}
  public List<RequestGroup> requestGroups {get;set;}
  public string firstName {get;set;}
  public string lastName {get;set;}
  public int managerId {get;set;}
  public User manager { get; set; }
}
