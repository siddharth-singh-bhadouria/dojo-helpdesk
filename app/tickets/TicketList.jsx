import Link from "next/link";

// install json using : npm i json-server -g ( don't run again if run once already )
// and then run this command to run the api : json-server --watch --port 4000 ./_data/db.json

async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    // set-up our own api by using data from db.json file . The program will never run properly if this file is not running on another localhost because this acts the source api for the data being used by our program.
    next: {
      revalidate: 0, // use 0 to opt out of using cache
    },
  });
  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => {
        return (
          <div key={ticket.id} className="card my-5">
            <Link href={`/tickets/${ticket.id}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </Link>
          </div>
        );
      })}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets,sorry.</p>
      )}
    </>
  );
}
