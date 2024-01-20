const production = "production";
const development = "development";
const mode = development;
let baseUrl = "";

if (mode === production) {
  baseUrl = "";
} else {
  baseUrl = "http://localhost:5000";
}

export { baseUrl };
