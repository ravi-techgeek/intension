// YouTube is a single-page app: clicking the logo or "Home" changes the URL
// without a real page load, so the network rule never sees it. This catches those.
(() => {
  const isHome = () => location.pathname === "/" || location.pathname === "";
  const go = () => location.replace(chrome.runtime.getURL("intention.html"));

  if (isHome()) { go(); return; }

  // YouTube fires this custom event on every in-app navigation.
  window.addEventListener("yt-navigate-start", () => setTimeout(() => isHome() && go(), 0), true);
  window.addEventListener("yt-navigate-finish", () => isHome() && go(), true);
  window.addEventListener("popstate", () => isHome() && go());
})();
