var datasets = [];
const config = {
  type: "line",
  data: { datasets },
  options: {
    scales: { x: { type: "time" }, y: {} },
    plugins: {
      colors: { forceOverride: true },
      annotation: { annotations: [{ yMin: 40, yMax: 40, borderColor: "red" }] }
    }
  }
};
const chart = new Chart(document.getElementById("myChart"), config);

function add(label, value, date) {
  date ??= new Date();
  const dataset = datasets[label] ??= datasets[datasets.push({ label, data: [] }) - 1];
  if(dataset.data.length > 10)
    dataset.data.shift();
  dataset.data.push({ x: date, y: value });
}