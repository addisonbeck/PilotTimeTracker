using System;
using System.Text.Json.Serialization;
using sample_22_backend.Converters;

public class Request {
  public string id { get; set; }
  public DateTime date { get; set; }

  [JsonConverter(typeof(StringToInt))]
  public int hours { get; set; }
  public string requestGroupId { get; set; }
  public RequestGroup requestGroup { get; set; }
}


