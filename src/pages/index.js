import * as React from "react";
import Layout from "../components/layout";

import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";
// Include perfume.js analytics plugin
import perfumePlugin from "@analytics/perfumejs";
// Include perfume.js library
import Perfume from "perfume.js";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

const analytics = Analytics({
  app: "QoE",
  plugins: [
    // Attach Google analytics
    googleAnalytics({
      trackingId: "G-N70RW84Z20",
      instanceName: "QoE",
    }),
    /* Include perfume.js plugin */
    perfumePlugin({
      // Perfume.js class. If empty, window.Perfume will be used.
      perfume: Perfume,
      // Analytics providers to send performance data.
      destinations: {
        // perf data will sent to Google Analytics
        "google-analytics": true,
        // perf data will sent to Customer.io
        customerio: false,
        // perf will NOT be sent to HubSpot
        hubspot: false,
      },
    }),
  ],
});

export default IndexPage;
