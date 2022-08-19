'use strict';

module.exports = (inputs, args) => {
  if (!isObject(args)) {
    return inputs;
  }

  const { serviceName, functionName, qualifier, target, scheduledActions, targetTrackingPolicies } = args;
  
  if (serviceName) {
    setObj(inputs, '--service-name', serviceName);
  }

  if (functionName) {
    setObj(inputs, '--function-name', functionName);
  }

  if (qualifier) {
    setObj(inputs, '--qualifier', qualifier);
  }

  if (target) {
    setObj(inputs, '--target', target);
  }

  if (scheduledActions) {
    setObj(inputs, '--scheduled-actions', JSON.stringify(scheduledActions));
  }

  if (targetTrackingPolicies) {
    setObj(inputs, '--target-tracking-policies', JSON.stringify(targetTrackingPolicies));
  }

  return inputs;
}

function setObj(inputs, key, value) {
  inputs.args += ` ${key} ${value}`;
  if (inputs.argsObj && inputs.argsObj.length > 0) {
    inputs.argsObj.push(key, value);
  }
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

