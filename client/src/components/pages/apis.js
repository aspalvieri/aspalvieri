import { useMemo, useState } from "react";
import axios from "axios";
import { config } from "../../utils/config";

const DEFAULT_ERROR = "Unable to fetch data right now. Please try again.";

function APIs() {
  const [array, setArray] = useState([]);
  const [arrayLoading, setArrayLoading] = useState(false);
  const [arrayError, setArrayError] = useState("");
  const [arrayVars, setArrayVars] = useState({
    min_arr: 5,
    max_arr: 10,
    min_val: 1,
    max_val: 100
  });
  const [integerVars, setIntegerVars] = useState({
    min: 1,
    max: 100
  });
  const [integerResponse, setIntegerResponse] = useState(null);
  const [integerLoading, setIntegerLoading] = useState(false);
  const [integerError, setIntegerError] = useState("");
  const [diceVars, setDiceVars] = useState({
    sides: 6,
    count: 2
  });
  const [diceResponse, setDiceResponse] = useState(null);
  const [diceLoading, setDiceLoading] = useState(false);
  const [diceError, setDiceError] = useState("");
  const [sampleText, setSampleText] = useState("Curiosity turns ideas into shipped software.");
  const [textMetricsResponse, setTextMetricsResponse] = useState(null);
  const [textMetricsLoading, setTextMetricsLoading] = useState(false);
  const [textMetricsError, setTextMetricsError] = useState("");

  const randomArrayEndpoint = useMemo(
    () =>
      `${config.SERVER_URI}/api/test/random_array?min_arr=${arrayVars.min_arr}&max_arr=${arrayVars.max_arr}&min_val=${arrayVars.min_val}&max_val=${arrayVars.max_val}`,
    [arrayVars]
  );
  const randomIntegerEndpoint = useMemo(
    () => `${config.SERVER_URI}/api/test/random_integer?min=${integerVars.min}&max=${integerVars.max}`,
    [integerVars]
  );
  const rollDiceEndpoint = useMemo(
    () => `${config.SERVER_URI}/api/test/roll_dice?sides=${diceVars.sides}&count=${diceVars.count}`,
    [diceVars]
  );
  const textMetricsEndpoint = useMemo(
    () => `${config.SERVER_URI}/api/test/text_metrics?text=${encodeURIComponent(sampleText)}`,
    [sampleText]
  );
  const endpointCatalog = [
    {
      id: "playground-random-array",
      method: "GET",
      path: "/api/test/random_array",
      summary: "Randomly sized array of integers.",
      params: ["min_arr", "max_arr", "min_val", "max_val"]
    },
    {
      id: "playground-random-integer",
      method: "GET",
      path: "/api/test/random_integer",
      summary: "Single integer between a minimum and maximum.",
      params: ["min", "max"]
    },
    {
      id: "playground-roll-dice",
      method: "GET",
      path: "/api/test/roll_dice",
      summary: "Rolls one or more dice and returns totals.",
      params: ["sides", "count"]
    },
    {
      id: "playground-text-metrics",
      method: "GET",
      path: "/api/test/text_metrics",
      summary: "Character, word, sentence, and reading-time stats.",
      params: ["text"]
    }
  ];

  const onArrayChange = (event) => {
    const { name, value } = event.target;
    setArrayVars((prev) => ({ ...prev, [name]: value }));
  };

  const onIntegerChange = (event) => {
    const { name, value } = event.target;
    setIntegerVars((prev) => ({ ...prev, [name]: value }));
  };

  const onDiceChange = (event) => {
    const { name, value } = event.target;
    setDiceVars((prev) => ({ ...prev, [name]: value }));
  };

  const fetchRandomArray = async () => {
    setArrayLoading(true);
    setArrayError("");
    try {
      const response = await axios.get(randomArrayEndpoint);
      setArray(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      setArrayError(DEFAULT_ERROR);
    } finally {
      setArrayLoading(false);
    }
  };

  const fetchRandomInteger = async () => {
    setIntegerLoading(true);
    setIntegerError("");
    try {
      const response = await axios.get(randomIntegerEndpoint);
      setIntegerResponse(response.data || null);
    } catch (error) {
      setIntegerError(DEFAULT_ERROR);
    } finally {
      setIntegerLoading(false);
    }
  };

  const fetchDiceRoll = async () => {
    setDiceLoading(true);
    setDiceError("");
    try {
      const response = await axios.get(rollDiceEndpoint);
      setDiceResponse(response.data || null);
    } catch (error) {
      setDiceError(DEFAULT_ERROR);
    } finally {
      setDiceLoading(false);
    }
  };

  const fetchTextMetrics = async () => {
    setTextMetricsLoading(true);
    setTextMetricsError("");
    try {
      const response = await axios.get(textMetricsEndpoint);
      setTextMetricsResponse(response.data || null);
    } catch (error) {
      setTextMetricsError(DEFAULT_ERROR);
    } finally {
      setTextMetricsLoading(false);
    }
  };

  const integerRows = integerResponse
    ? [
        ["Minimum", integerResponse.min],
        ["Maximum", integerResponse.max],
        ["Value", integerResponse.value]
      ]
    : [];
  const diceSummaryRows = diceResponse
    ? [
        ["Sides", diceResponse.sides],
        ["Dice count", diceResponse.count],
        ["Total", diceResponse.total]
      ]
    : [];
  const textMetricsRows = textMetricsResponse
    ? [
        ["Characters", textMetricsResponse.characters],
        ["Characters (No Spaces)", textMetricsResponse.characters_no_spaces],
        ["Words", textMetricsResponse.words],
        ["Sentences", textMetricsResponse.sentences],
        ["Estimated Read (Seconds)", textMetricsResponse.estimated_read_seconds]
      ]
    : [];

  return (
    <div className="page-shell api-playground-shell">
      <section className="page-heading api-playground-hero">
        <p className="eyebrow">Developer Playground</p>
        <h1>API Playground</h1>
        <p className="subtitle">
          Tune query parameters, execute requests instantly, and inspect response payloads in one focused
          interface.
        </p>
        <div className="api-hero-badges" aria-label="Playground capabilities">
          <span>Live URL preview</span>
          <span>Endpoint quick links</span>
          <span>JSON response panels</span>
        </div>
      </section>

      <section className="api-playground-layout">
        <aside className="api-card api-index-card">
          <div className="api-index-head">
            <h2>Endpoint Index</h2>
            <p>Jump directly to any endpoint tester.</p>
          </div>
          <ul className="api-endpoint-list">
            {endpointCatalog.map((endpoint) => (
              <li key={endpoint.id}>
                <a className="api-endpoint-link" href={`#${endpoint.id}`}>
                  <span className="api-method-tag">{endpoint.method}</span>
                  <code>{endpoint.path}</code>
                </a>
                <p>{endpoint.summary}</p>
                <p className="api-parameter-list">
                  <strong>Params:</strong>{" "}
                  {endpoint.params.map((item, index) => (
                    <span key={item}>
                      <code>{item}</code>
                      {index < endpoint.params.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
          <div className="api-base-url">
            <p>Base URL</p>
            <code>{config.SERVER_URI}</code>
          </div>
        </aside>

        <div className="api-workbench">
          <article className="api-card playground-card" id="playground-random-array">
            <header className="playground-card-head">
              <div>
                <p className="eyebrow">Data Generator</p>
                <h2>Random Array</h2>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="endpoint-link-inline"
                href={`${config.SERVER_URI}/api/test/random_array`}
              >
                Open endpoint
              </a>
            </header>
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
            <div className="field-grid">
              <label htmlFor="array-min-arr">
                Minimum array length
                <input
                  type="number"
                  className="form-control"
                  id="array-min-arr"
                  name="min_arr"
                  onChange={onArrayChange}
                  value={arrayVars.min_arr}
                />
              </label>
              <label htmlFor="array-max-arr">
                Maximum array length
                <input
                  type="number"
                  className="form-control"
                  id="array-max-arr"
                  name="max_arr"
                  onChange={onArrayChange}
                  value={arrayVars.max_arr}
                />
              </label>
              <label htmlFor="array-min-val">
                Minimum value
                <input
                  type="number"
                  className="form-control"
                  id="array-min-val"
                  name="min_val"
                  onChange={onArrayChange}
                  value={arrayVars.min_val}
                />
              </label>
              <label htmlFor="array-max-val">
                Maximum value
                <input
                  type="number"
                  className="form-control"
                  id="array-max-val"
                  name="max_val"
                  onChange={onArrayChange}
                  value={arrayVars.max_val}
                />
              </label>
            </div>
            <p className="request-preview">
              <strong>Request:</strong> <code className="request-preview-code">{randomArrayEndpoint}</code>
            </p>
            <button className="btn-primary-solid" onClick={fetchRandomArray} disabled={arrayLoading}>
              {arrayLoading ? "Fetching..." : "Fetch Array"}
            </button>
            {arrayError && (
              <p className="api-error" role="alert">
                {arrayError}
              </p>
            )}
            <div className="api-inline-result">
              <h3>Response</h3>
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
            </div>
          </article>

          <article className="api-card playground-card" id="playground-random-integer">
            <header className="playground-card-head">
              <div>
                <p className="eyebrow">Utility Endpoint</p>
                <h2>Random Integer</h2>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="endpoint-link-inline"
                href={`${config.SERVER_URI}/api/test/random_integer`}
              >
                Open endpoint
              </a>
            </header>
            <p>Returns a single random integer between a minimum and maximum value.</p>
            <div className="api-details">
              <p>
                <strong>Method:</strong> <code>GET</code>
              </p>
              <p>
                <strong>Parameters:</strong> <code>min</code>, <code>max</code>
              </p>
            </div>
            <div className="field-grid">
              <label htmlFor="integer-min">
                Minimum value
                <input
                  type="number"
                  className="form-control"
                  id="integer-min"
                  name="min"
                  onChange={onIntegerChange}
                  value={integerVars.min}
                />
              </label>
              <label htmlFor="integer-max">
                Maximum value
                <input
                  type="number"
                  className="form-control"
                  id="integer-max"
                  name="max"
                  onChange={onIntegerChange}
                  value={integerVars.max}
                />
              </label>
            </div>
            <p className="request-preview">
              <strong>Request:</strong> <code className="request-preview-code">{randomIntegerEndpoint}</code>
            </p>
            <button className="btn-primary-solid" onClick={fetchRandomInteger} disabled={integerLoading}>
              {integerLoading ? "Fetching..." : "Fetch Integer"}
            </button>
            {integerError && (
              <p className="api-error" role="alert">
                {integerError}
              </p>
            )}
            <div className="api-inline-result">
              <h3>Response</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {integerRows.length === 0 ? (
                      <tr>
                        <td colSpan={2}>No data fetched yet.</td>
                      </tr>
                    ) : (
                      integerRows.map(([label, value]) => (
                        <tr key={label}>
                          <td>{label}</td>
                          <td>{value}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article className="api-card playground-card" id="playground-roll-dice">
            <header className="playground-card-head">
              <div>
                <p className="eyebrow">Simulation</p>
                <h2>Dice Roller</h2>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="endpoint-link-inline"
                href={`${config.SERVER_URI}/api/test/roll_dice`}
              >
                Open endpoint
              </a>
            </header>
            <p>Simulates rolling one or more dice and returns individual rolls plus a total.</p>
            <div className="api-details">
              <p>
                <strong>Method:</strong> <code>GET</code>
              </p>
              <p>
                <strong>Parameters:</strong> <code>sides</code>, <code>count</code>
              </p>
            </div>
            <div className="field-grid">
              <label htmlFor="dice-sides">
                Number of sides
                <input
                  type="number"
                  className="form-control"
                  id="dice-sides"
                  name="sides"
                  onChange={onDiceChange}
                  value={diceVars.sides}
                />
              </label>
              <label htmlFor="dice-count">
                Number of dice
                <input
                  type="number"
                  className="form-control"
                  id="dice-count"
                  name="count"
                  onChange={onDiceChange}
                  value={diceVars.count}
                />
              </label>
            </div>
            <p className="request-preview">
              <strong>Request:</strong> <code className="request-preview-code">{rollDiceEndpoint}</code>
            </p>
            <button className="btn-primary-solid" onClick={fetchDiceRoll} disabled={diceLoading}>
              {diceLoading ? "Fetching..." : "Roll Dice"}
            </button>
            {diceError && (
              <p className="api-error" role="alert">
                {diceError}
              </p>
            )}
            <div className="api-inline-result">
              <h3>Response</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {diceSummaryRows.length === 0 ? (
                      <tr>
                        <td colSpan={2}>No data fetched yet.</td>
                      </tr>
                    ) : (
                      diceSummaryRows.map(([label, value]) => (
                        <tr key={label}>
                          <td>{label}</td>
                          <td>{value}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {diceResponse && (
                <>
                  <p>Roll values: {diceResponse.rolls.length}</p>
                  <div className="table-wrap">
                    <table>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {diceResponse.rolls.map((value, index) => (
                          <tr key={`${index}-${value}`}>
                            <td>{index + 1}</td>
                            <td>{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </article>

          <article className="api-card playground-card" id="playground-text-metrics">
            <header className="playground-card-head">
              <div>
                <p className="eyebrow">Content Analysis</p>
                <h2>Text Metrics</h2>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="endpoint-link-inline"
                href={`${config.SERVER_URI}/api/test/text_metrics`}
              >
                Open endpoint
              </a>
            </header>
            <p>Analyzes text and returns character, word, sentence, and reading-time metrics.</p>
            <div className="api-details">
              <p>
                <strong>Method:</strong> <code>GET</code>
              </p>
              <p>
                <strong>Parameter:</strong> <code>text</code>
              </p>
            </div>
            <label htmlFor="metrics-text" className="api-text-label">
              Sample text
              <textarea
                id="metrics-text"
                className="form-control api-textarea"
                value={sampleText}
                onChange={(event) => setSampleText(event.target.value)}
                rows={5}
              />
            </label>
            <p className="request-preview">
              <strong>Request:</strong> <code className="request-preview-code">{textMetricsEndpoint}</code>
            </p>
            <button className="btn-primary-solid" onClick={fetchTextMetrics} disabled={textMetricsLoading}>
              {textMetricsLoading ? "Fetching..." : "Analyze Text"}
            </button>
            {textMetricsError && (
              <p className="api-error" role="alert">
                {textMetricsError}
              </p>
            )}
            <div className="api-inline-result">
              <h3>Response</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {textMetricsRows.length === 0 ? (
                      <tr>
                        <td colSpan={2}>No data fetched yet.</td>
                      </tr>
                    ) : (
                      textMetricsRows.map(([label, value]) => (
                        <tr key={label}>
                          <td>{label}</td>
                          <td>{value}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default APIs;
