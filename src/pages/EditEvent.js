import { useParams } from "react-router-dom";

function EditEventPage() {
  const params = useParams();

  return (
    <div>
      <h1>EditEventPage</h1>
      {params.someId}
    </div>
  );
}

export default EditEventPage;
