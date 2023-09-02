import Loading from "../loading";
import TicketList from "./TicketList";
import { Suspense } from "react";

export default function Tickets() {
  return (
    <main>
      <nav style={{ marginBottom: 0 }}>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
          <form
            action="/tickets/create"
            style={{
              backgroundColor: "#ebf0fa",
              paddingLeft: 0,
              paddingBottom: 0,
            }}
          >
            <button className="btn-primary">Create New Ticket</button>
          </form>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
