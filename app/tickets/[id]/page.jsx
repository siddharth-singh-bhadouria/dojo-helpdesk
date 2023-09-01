async function getTicket(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    // set-up our own api by using data from db.json file
    next: {
      revalidate: 60,
    },
  });
  //   console.log(res.json());
  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
      <form action="/tickets" style={{ backgroundColor: "#ebf0fa" }}>
        <button className="btn-primary">Back</button>
      </form>
    </main>
  );
}
