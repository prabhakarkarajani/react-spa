import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// })



const data = {
  navBar: '',
  dashboard:''
}
const getData = (e)=>{
  console.log('root reciver', e);
  data.navBar = e;
}

registerApplication({
  name: "@org-name/cra",
  app: () => System.import("@org-name/cra"),
  activeWhen: ["/"],
  customProps: (name, location) => {
    return { authToken: 'd83jD63UdZ6RS6f70D0', getData, data: data.navBar};
  },
});

registerApplication({
  name: "@dashboard/dashboard",
  app: () => System.import("@dashboard/dashboard"),
  activeWhen: ["/"],
  customProps: (name, location) => {
    return { authToken: 'asdfaf', getData, data: data.dashboard };
  },
});


start({
  urlRerouteOnly: true,
});
