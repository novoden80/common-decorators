/**
 * Created by novoden on 29/06/15.
 */
import Promise from "bluebird";

export default (target, name, descriptor) => {
  descriptor.value = Promise.method(descriptor.value);
  return descriptor;
};