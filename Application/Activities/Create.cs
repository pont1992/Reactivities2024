using MediatR;
using Persistence;
using Activity = Domain.Activity;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity);
                return await _context.SaveChangesAsync() > 0 ? Unit.Value : throw new Exception("Problem saving changes");
            }
        }
    }
}