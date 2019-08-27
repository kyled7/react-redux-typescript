import HomePage from "../HomePage";
import Example from "../Example";

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: HomePage },
  { path: '/example', name: 'Dashboard', component: Example },
];

export default routes;
