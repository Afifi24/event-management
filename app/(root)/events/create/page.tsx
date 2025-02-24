import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";

const CreateEvents = async () => {
  const { sessionClaims } = await auth();
  const userId = sessionClaims?.userId as string;
  const trimUserId = userId?.trim();
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm type="Create" userId={trimUserId} />
      </div>
    </>
  );
};

export default CreateEvents;
