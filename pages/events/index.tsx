import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEvents = (year: string, month: string) => {
    /*
      - you need to have at least two parameters to
        reach the catch-all page [...slug].tsx
        - events/2021/12
      - it will reach the [eventId].tsx page if you
        only have one parameter
        - events/2021    
    */
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventSearch onSearch={findEvents} />
      <EventList events={events}></EventList>
    </Fragment>
  );
};

export default AllEventsPage;
