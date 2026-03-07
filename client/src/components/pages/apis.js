import { useMemo, useState } from "react";
import axios from "axios";
import { config } from "../../utils/config";

function APIs() {
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [arrayVars, setArrayVars] = useState({
    min_arr: 5,
    max_arr: 10,
    min_val: 1,
    max_val: 100
  });

  const endpoint = useMemo(
    () =>
      `${config.SERVER_URI}/api/test/random_array?min_arr=${arrayVars.min_arr}&max_arr=${arrayVars.max_arr}&min_val=${arrayVars.min_val}&max_val=${arrayVars.max_val}`,
    [arrayVars]
  );

  const onChange = (event) => {
    const { id, value } = event.target;
    setArrayVars((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const fetchRandomArray = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.get(endpoint);
      setArray(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      setErrorMessage("Unable to fetch data right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-shell">
      <section className="page-heading">
        <p className="eyebrow">Developer Playground</p>
        <h1>API Sandbox</h1>
        <p className="subtitle">
          Interactive test interface for the Random Array API endpoint with adjustable query parameters.
        </p>
      </section>

      <section className="api-layout">
        <article className="api-card">
          <h2>Endpoint</h2>
          <a target="_blank" rel="noopener noreferrer" href={`${config.SERVER_URI}/api/test/random_array`}>
            {config.SERVER_URI}/api/test/random_array
          </a>
          <p>Returns a randomly sized array filled with random integers.</p>
          <div className="api-details">
            <p>
              <strong>Method:</strong> <code>GET</code>
            </p>
            <p>
              <strong>Parameters:</strong> <code>min_arr</code>, <code>max_arr</code>, <code>min_val</code>,{" "}
              <code>max_val</code>
            </p>
          </div>
        </article>

        <article className="api-card">
          <h2>Query Builder</h2>
          <div className="field-grid">
            <label htmlFor="min_arr">
              Minimum array length
              <input type="number" className="form-control" id="min_arr" onChange={onChange} value={arrayVars.min_arr} />
            </label>
            <label htmlFor="max_arr">
              Maximum array length
              <input type="number" className="form-control" id="max_arr" onChange={onChange} value={arrayVars.max_arr} />
            </label>
            <label htmlFor="min_val">
              Minimum value
              <input type="number" className="form-control" id="min_val" onChange={onChange} value={arrayVars.min_val} />
            </label>
            <label htmlFor="max_val">
              Maximum value
              <input type="number" className="form-control" id="max_val" onChange={onChange} value={arrayVars.max_val} />
            </label>
          </div>
          <p className="request-preview">
            <strong>Request:</strong> <code>{endpoint}</code>
          </p>
          <button className="btn-primary-solid" onClick={fetchRandomArray} disabled={loading}>
            {loading ? "Fetching..." : "Fetch Array"}
          </button>
          {errorMessage && (
            <p className="api-error" role="alert">
              {errorMessage}
            </p>
          )}
        </article>
      </section>

      <section className="api-results">
        <h2>Response</h2>
        <p>Array size: {array.length}</p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {array.length === 0 ? (
                <tr>
                  <td colSpan={2}>No data fetched yet.</td>
                </tr>
              ) : (
                array.map((value, index) => (
                  <tr key={`${index}-${value}`}>
                    <td>{index + 1}</td>
                    <td>{value}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default APIs;
