using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quizz_api.Models;

namespace quizz_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParticipantController : ControllerBase
    {
        private readonly QuizDBContext _context;

        public ParticipantController(QuizDBContext context)
        {
            _context = context;
        }

        // GET: api/Participant
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Participant>>> GetParticipants()
        {
            return await _context.Participants.ToListAsync();
        }

        // GET: api/Participant/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Participant>> GetParticipant(int id)
        {
            var participant = await _context.Participants.FindAsync(id);

            if (participant == null)
            {
                return NotFound();
            }

            return participant;
        }

        // POST: api/Participant
        // thêm participant vào database
        // API nhận dữ liệu
        // ASP.NET Core ánh xạ JSON nhờ Model Binding của ASP.NET Core 
        // Framework ASP.NET Core sẽ tự động mapping (ánh xạ) dữ liệu từ JSON truyền vào body request thành object Participant
        // <=> Participant participant = new Participant { Name = "admin", Email = "admin@gmail.com" };
        [HttpPost]
        public async Task<ActionResult<Participant>> PostParticipant(Participant participant)
        {
            // Kiểm tra xem có participant nào đã tồn tại với cùng email và name không
            var temp = await _context.Participants
                                      .Where(x => x.Name == participant.Name && x.Email == participant.Email)
                                      .FirstOrDefaultAsync();

            if (temp == null)
            {
                // Nếu chưa có, thêm mới vào cơ sở dữ liệu
                _context.Participants.Add(participant);
                await _context.SaveChangesAsync();
                return Ok(participant); // Trả về đối tượng participant mới được thêm vào
            }
            else
            {
                // Nếu đã có, trả về thông tin participant đã tồn tại
                return Ok(temp); // Trả về đối tượng participant đã tồn tại
            }
        }

        // PUT: api/Participant/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateParticipant(int id, [FromBody] Participant participant)
        {
            if (id != participant.PID)
            {
                return BadRequest();
            }

            _context.Entry(participant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParticipantExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Participant/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteParticipant(int id)
        {
            var participant = await _context.Participants.FindAsync(id);
            if (participant == null)
            {
                return NotFound();
            }

            _context.Participants.Remove(participant);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ParticipantExists(int id)
        {
            return _context.Participants.Any(e => e.PID == id);
        }
    }
}
