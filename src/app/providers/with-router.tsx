import { Suspense } from "react";

import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter basename="quiz">
    <Suspense fallback="Loading...">{component()}</Suspense>
  </BrowserRouter>
);
