

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://89760db84e508025a8ba3c77bef9091f@o4509792877084672.ingest.us.sentry.io/4509792879902720",

  tracesSampleRate: 1,

  enableLogs: true,


  debug: false,
});
