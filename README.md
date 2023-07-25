# driver-monitoring-system

In this code, I have created a functional component called AlertApp. It takes alertsData as a prop, which is the array of alert objects. The component uses useState to manage the state of the search inputs and the filtered alerts. The filtering logic is implemented in the filterAlerts function, which filters the alerts based on the search criteria.

Each alert item in the list displays the timestamp, text, vehicle number, and whether it's marked as a false alarm. The user can mark an alert as a false alarm by clicking the "Mark as False Alarm" button, which toggles the isFalseAlarm property of the respective alert.

I have assumed that the alerts data is available as an array of objects named 'alertsData'.
