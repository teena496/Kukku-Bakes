using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace KukkuBakes.Backend.Models;

public class Ingredient
{
    public Guid Id { get; set; }
    
    [Required]
    public string Item { get; set; } = string.Empty;
    
    public string Amount { get; set; } = string.Empty;

    public Guid RecipeId { get; set; }
    
    [JsonIgnore]
    public Recipe? Recipe { get; set; }
}
