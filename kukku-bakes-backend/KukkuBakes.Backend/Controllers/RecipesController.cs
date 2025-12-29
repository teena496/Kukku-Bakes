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

    [HttpPost("upload-image")]
    public async Task<IActionResult> UploadImage(IFormFile file)
    {
        if (file == null || file.Length == 0)
            return BadRequest("No file uploaded.");

        // Ensure upload directory exists
        var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
        if (!Directory.Exists(uploadPath))
            Directory.CreateDirectory(uploadPath);

        // Generate a unique filename
        var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
        var filePath = Path.Combine(uploadPath, fileName);

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        // Return the relative URL
        var fileUrl = $"/uploads/{fileName}";
        // Since we are running on localhost, we might want to return the full URL or just the relative path.
        // The frontend can prepend the API base URL if needed, but here we'll assume the frontend knows the base URL domains differ.
        // Actually, to make it easier for the frontend, let's just return the relative path. 
        // The frontend assumes 'image' is a URL. We should probably return a full URL if possible, 
        // or the frontend needs to handle relative paths.
        // Let's return the relative path and handle the full URL construction in the frontend or 
        // rely on the browser resolving it if it's on the same domain (it's not, it's localhost:5137 vs 5173).
        // Let's return a full URL constructed from the request.
        
        var request = HttpContext.Request;
        var baseUrl = $"{request.Scheme}://{request.Host}";
        var fullUrl = $"{baseUrl}{fileUrl}";

        return Ok(new { url = fullUrl });
    }
}
