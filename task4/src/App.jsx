import { useSearchParams } from "react-router-dom/dist";
import "./App.css";
import { createSearchParams, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleModalToggle = (val) => {
    navigate({
      pathname: "/",
      search: createSearchParams({
        showModal: val,
      }).toString(),
    });
  };
  return (
    <>
      <dialog open={searchParams.get("showModal") === "true" ? true : false}>
        <button
          type="button"
          onClick={() => {
            handleModalToggle(false);
          }}
        >
          Close
        </button>
        <p>Do you wish to close the modal now ?</p>
      </dialog>
      <button
        type="button"
        onClick={() => {
          handleModalToggle(true);
        }}
      >
        Show the dialog
      </button>
    </>
  );
}

export default App;
