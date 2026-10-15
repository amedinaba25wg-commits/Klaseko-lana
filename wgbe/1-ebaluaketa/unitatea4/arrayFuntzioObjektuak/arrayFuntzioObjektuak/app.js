const pageNames = {
  hasiera: "Ikuspegi orokorra",
  "array-oinarriak": "Array-ak eta indizeak",
  "array-aldatu": "Elementuak aldatu",
  "array-berriak": "Array berriak sortu",
  "array-bilatu": "Bilatu eta egiaztatu",
  "array-zeharkatu": "Zeharkatu eta ordenatu",
  "funtzio-parametroak": "Parametroak eta argumentuak",
  "funtzio-argumentuak": "arguments eta rest",
  "funtzio-callbackak": "Funtzioak eta callback-ak",
  "funtzio-arrow": "Arrow functions",
  "funtzio-arrayak": "Funtzioak array-etan",
  oinarriak: "Objektu bat sortzea",
  propietateak: "Propietateak",
  aztertu: "Object.keys() eta gehiago",
  metodoak: "Metodoak",
  arrayak: "Objektuak array batean"
};

const sandboxDocument = `<!doctype html>
<html>
<body>
<script>
  window.addEventListener("message", async (event) => {
    if (event.source !== window.parent || !event.data || event.data.type !== "execute") return;

    const { id, code } = event.data;
    const lines = [];
    const formatValue = (value) => {
      if (typeof value === "string") return value;
      if (typeof value === "undefined") return "undefined";
      if (typeof value === "function") return value.toString();
      try {
        const result = JSON.stringify(value, null, 2);
        return result === undefined ? String(value) : result;
      } catch (error) {
        return "[Ezin izan da balioa erakutsi: " + error.message + "]";
      }
    };
    const log = (...values) => lines.push(values.map(formatValue).join(" "));
    const consoleProxy = {
      log,
      info: log,
      warn: (...values) => lines.push("⚠ " + values.map(formatValue).join(" ")),
      error: (...values) => lines.push("Errorea: " + values.map(formatValue).join(" "))
    };

    try {
      const result = new Function("console", '"use strict";\\n' + code)(consoleProxy);
      if (result && typeof result.then === "function") await result;
      window.parent.postMessage({ type: "result", id, lines }, "*");
    } catch (error) {
      window.parent.postMessage({
        type: "result",
        id,
        lines,
        error: error.name + ": " + error.message
      }, "*");
    }
  });
<\/script>
</body>
</html>`;

let nextRunId = 0;
let runnerReady = false;
const queuedRuns = [];
const pendingRuns = new Map();

function navigateToPage(pageId) {
  const page = document.querySelector(`[data-page="${pageId}"]`);
  if (!page) return;

  document.querySelectorAll("[data-page]").forEach((candidate) => {
    const isCurrent = candidate === page;
    candidate.hidden = !isCurrent;
    candidate.classList.toggle("is-visible", isCurrent);
  });
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    const isCurrent = link.dataset.pageLink === pageId;
    link.classList.toggle("is-active", isCurrent);
    if (link.matches(".nav-link")) {
      if (isCurrent) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }
  });

  const crumb = document.querySelector("#current-crumb");
  if (crumb) crumb.textContent = pageNames[pageId];
  document.title = `${pageNames[pageId]} · JavaScript laborategia`;
  document.querySelector(".sidebar")?.classList.remove("is-open");
  document.querySelector(".menu-button")?.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupNavigation() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-page-link]");
    if (link) {
      event.preventDefault();
      const pageId = link.dataset.pageLink;
      if (window.location.hash !== `#${pageId}`) window.location.hash = pageId;
      navigateToPage(pageId);
      return;
    }

    if (!event.target.closest(".sidebar") && !event.target.closest(".menu-button")) {
      document.querySelector(".sidebar")?.classList.remove("is-open");
    }
  });

  window.addEventListener("hashchange", () => {
    const pageId = window.location.hash.slice(1);
    navigateToPage(pageNames[pageId] ? pageId : "hasiera");
  });

  const menuButton = document.querySelector(".menu-button");
  menuButton?.addEventListener("click", () => {
    const isOpen = document.querySelector(".sidebar")?.classList.toggle("is-open") ?? false;
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  const initialPage = window.location.hash.slice(1);
  navigateToPage(pageNames[initialPage] ? initialPage : "hasiera");
}

function setTheme(theme, persist = false) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";

  const toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    const nextAction = isDark ? "Aktibatu modu argia" : "Aktibatu modu iluna";
    toggle.setAttribute("aria-label", nextAction);
    toggle.setAttribute("title", nextAction);
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.querySelector("[data-theme-icon]").textContent = isDark ? "☀" : "☾";
    toggle.querySelector(".theme-toggle-label").textContent = isDark ? "Modu argia" : "Modu iluna";
  }

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = isDark ? "#171c18" : "#f5f6f2";

  if (persist) {
    try {
      localStorage.setItem("kodea-theme", isDark ? "dark" : "light");
    } catch {
      return;
    }
  }
}

function setupThemeToggle() {
  const savedTheme = document.documentElement.dataset.theme;
  setTheme(savedTheme === "dark" ? "dark" : "light");

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme, true);
  });
}

function sendQueuedRuns() {
  if (!runnerReady) return;

  while (queuedRuns.length > 0) {
    const run = queuedRuns.shift();
    document.querySelector("#code-runner").contentWindow.postMessage({
      type: "execute",
      id: run.id,
      code: run.code
    }, "*");
  }
}

function runCode(workbench) {
  const editor = workbench.querySelector("[data-code-editor]");
  const output = workbench.querySelector("[data-code-output]");
  const status = workbench.querySelector("[data-run-status]");
  if (!editor || !output) return;

  const id = ++nextRunId;
  pendingRuns.set(id, { output, status });
  output.textContent = "Kodea exekutatzen...";
  if (status) status.textContent = "Exekutatzen";
  queuedRuns.push({ id, code: editor.value });
  sendQueuedRuns();
}

function formatRunResult(lines, error) {
  const output = lines.slice();
  if (error) output.push(error);
  if (output.length === 0) return "Kodeak ez du irteerarik sortu. Gehitu console.log(...) emaitza ikusteko.";
  return output.join("\n");
}

function setupCodeEditors() {
  const runner = document.querySelector("#code-runner");
  runner.addEventListener("load", () => {
    runnerReady = true;
    sendQueuedRuns();
  });
  runner.srcdoc = sandboxDocument;

  window.addEventListener("message", (event) => {
    if (event.source !== runner.contentWindow || !event.data || event.data.type !== "result") return;

    const pending = pendingRuns.get(event.data.id);
    if (!pending) return;
    pendingRuns.delete(event.data.id);
    pending.output.textContent = formatRunResult(event.data.lines, event.data.error);
    pending.output.classList.toggle("has-error", Boolean(event.data.error));
    if (pending.status) pending.status.textContent = event.data.error ? "Errorea" : "Amaituta";
  });

  document.addEventListener("click", (event) => {
    const runButton = event.target.closest("[data-run-code]");
    if (!runButton) return;
    const workbench = runButton.closest("[data-code-workbench], .code-inspect-card");
    if (workbench) runCode(workbench);
  });

  document.querySelectorAll("[data-code-editor]").forEach((editor) => {
    editor.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.setRangeText("  ", start, end, "end");
      } else if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        editor.closest("[data-code-workbench], .code-inspect-card")
          ?.querySelector("[data-run-code]")?.click();
      }
    });
  });
}

function init() {
  setupNavigation();
  setupThemeToggle();
  setupCodeEditors();
}

init();
