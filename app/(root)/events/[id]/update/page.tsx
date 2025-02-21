import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.actions";
import { UpdateEventParams } from "@/types";
import { auth } from "@clerk/nextjs/server";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateEvents = async ({ params }: UpdateEventProps) => {
  const { sessionClaims } = await auth();
  const userId = sessionClaims?.userId as string;
  const trimUserId = userId.trim();
  const { id } = await params;
  const event = await getEventById(id);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm
          type="Update"
          userId={trimUserId}
          eventId={event._id}
          event={event}
        />
      </div>
    </>
  );
};

export default UpdateEvents;
