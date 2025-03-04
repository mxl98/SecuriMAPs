using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

public class CollisionModel
{
    [Key]
    public required int _id { set; get; }
    public required string DT_ACCDN { set; get; }
    public required string HEURE_ACCDN { set; get; }
    public required float LOC_LONG { set; get; }
    public required float LOC_LAT { set; get; }
}