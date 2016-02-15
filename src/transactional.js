/**
 * Created by novoden on 29/06/15.
 */
import Promise from "bluebird";

export default (target, name, descriptor) => {
  let tmpFn = descriptor.value;
  descriptor.value = Promise.method(function(...args) {
    var self = this;
    return this.db.tx(function(t) {
      return tmpFn.apply(self, args.concat(t));
    });
  });
  return descriptor;
};