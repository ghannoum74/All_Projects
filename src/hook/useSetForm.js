import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";
const useSetForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const setForm = async (data) => {
    setIsPending(true);
    try {
      const result = await axios.post("http://localhost:5000/create", data);
      setIsPending(false);

      if (result.status != 200) {
        throw new Error("Something went wrong");
      } else {
        setError("");
        return result;
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { setForm, error, isPending };
};

useSetForm.propTypes = {
  data: PropTypes.string,
};

export default useSetForm;
