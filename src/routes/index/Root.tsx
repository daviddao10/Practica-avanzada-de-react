import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

export default function Root({
  store,
  router,
}: {
  store?: any;
  router: any;
}): JSX.Element {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
