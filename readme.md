## readme.md

```
actions:
  pre-provision:
    - plugin: provision-fc
      args:
        serviceName: test-wss # 不填写则使用组件配置的 serviceName
        functionName: start-fc-event-nodejs14 # 不填写则使用组件配置的 functionName
        qualifier: pre
        target: 1
        scheduledActions:
          - name: timer
            startTime: '2022-07-07T16:00:00.000Z'
            endTime: '2022-07-08T16:00:00.000Z'
            target: 1
            scheduleExpression: 'cron(0 0 12 * * *)'
            metricType: ProvisionedConcurrencyUtilization
            metricTarget: 0.25
        targetTrackingPolicies:
          - name: zb
            startTime: '2022-07-07T16:00:00.000Z'
            endTime: '2022-07-08T16:00:00.000Z'
            metricType: ProvisionedConcurrencyUtilization
            metricTarget: 0.25
            minCapacity: 1
            maxCapacity: 3
```
