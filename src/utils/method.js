

let methods = {
  methods: {
    translate(value) {
      return (typeof __translates[value] == "undefined") ? value : __translates[value];
    },
    getLink(value) {
      return (typeof __routes[value] == "undefined") ? value : __routes[value];
    },
    getRoute(value) {
      return (typeof __routes[value] == "undefined") ? value : __routes[value].substr(3);
    },
    getPath(url){
      var regexp = /^\/[a-z]{2}\//g;
      return url.replace(regexp,'');
    }
  }
};


export default methods;
