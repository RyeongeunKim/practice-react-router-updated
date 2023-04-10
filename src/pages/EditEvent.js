import { useParams } from "react-router-dom";

function EditEventPage() {
  const params = useParams();

  return (
    <div>
      <h1>EditEventPage</h1>
      {params.eventId}
    </div>
  );
}

export default EditEventPage;
