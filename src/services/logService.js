// import * as Sentry from "@sentry/browser";

function init() {
  //   Sentry.init({
  //     dsn: "https://22ae0feb4cad4df8880f2d0d039f5114@sentry.io/1774519"
  //   });
}

function log(error) {
  //   Sentry.captureException(error);
  console.log(error);
}

export default {
  init,
  log
};
