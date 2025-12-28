using System.ComponentModel.DataAnnotations;

namespace KukkuBakes.Backend.Models;

public class Recipe
{
    public Guid Id { get; set; }
    
    [Required]
    public string Title { get; set; } = string.Empty;
    
    [Required]
    public string Description { get; set; } = string.Empty;
    
    public string Image { get; set; } = string.Empty;
    
    public string PrepTime { get; set; } = string.Empty;
    
    public string CookTime { get; set; } = string.Empty;
    
    public int Servings { get; set; }
    
    [Required]
    public string Category { get; set; } = string.Empty; // Cakes, Cookies, Breads, Snacks

    public List<Ingredient> Ingredients { get; set; } = new();
    public List<RecipeStep> Steps { get; set; } = new();
}
