'use strict';

module.exports = (inputs, args) => {
  if (!isObject(args)) {
    return inputs;
  }

  const { serviceName, functionName, qualifier, target, scheduledActions, targetTrackingPolicies } = args;
  const names = getPropsName(inputs.props);

  if (serviceName || names.service) {
    setObj(inputs, '--service-name', serviceName || names.service);
  }

  if (functionName || names.function) {
    setObj(inputs, '--function-name', functionName || names.function);
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

function getPropsName(props) {
  if (!isObject(props)) {
    return {};
  }

  const names = {};
  if (isObject(props.service)) {
    names.service = props.service.name;
  }
  if (isObject(props.function)) {
    names.function = props.function.name;
  }
  return names;
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

