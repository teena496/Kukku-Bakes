using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using KukkuBakes.Backend.Data;
using KukkuBakes.Backend.Models;

namespace KukkuBakes.Backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class RecipesController : ControllerBase
{
    private readonly AppDbContext _context;

    public RecipesController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/Recipes
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipes()
    {
        return await _context.Recipes
                             .Include(r => r.Ingredients)
                             .Include(r => r.Steps)
                             .ToListAsync();
    }

    // GET: api/Recipes/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Recipe>> GetRecipe(Guid id)
    {
        var recipe = await _context.Recipes
                                   .Include(r => r.Ingredients)
                                   .Include(r => r.Steps)
                                   .FirstOrDefaultAsync(r => r.Id == id);

        if (recipe == null)
        {
            return NotFound();
        }

        return recipe;
    }

    // POST: api/Recipes
    [HttpPost]
    public async Task<ActionResult<Recipe>> PostRecipe(Recipe recipe)
    {
        // Ensure new IDs are generated if not provided (though Guid typically handled by client or db)
        if (recipe.Id == Guid.Empty)
        {
            recipe.Id = Guid.NewGuid();
        }
        
        _context.Recipes.Add(recipe);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetRecipe", new { id = recipe.Id }, recipe);
    }
}
