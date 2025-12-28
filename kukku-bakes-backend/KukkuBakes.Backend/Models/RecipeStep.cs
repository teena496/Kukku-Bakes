using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace KukkuBakes.Backend.Models;

public class RecipeStep
{
    public Guid Id { get; set; }
    
    public int StepNumber { get; set; }
    
    [Required]
    public string Instruction { get; set; } = string.Empty;

    public Guid RecipeId { get; set; }
    
    [JsonIgnore]
    public Recipe? Recipe { get; set; }
}
