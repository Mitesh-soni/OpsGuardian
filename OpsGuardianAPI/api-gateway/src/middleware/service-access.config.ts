/**
 * =====================================
 * LOCAL DEVELOPMENT SERVICE SELECTION
 * =====================================
 * 👉 Developer: UNCOMMENT services you
 * are actively working on.
 * 
 * If commented → LIVE API used
 * If uncommented → LOCAL service used
 */

// 🔧 LOCAL SERVICES (UNCOMMENT AS NEEDED)
// export const LOCAL_SERVICES = [
//   'incident-service',
//   'alert-service',
//   'user-service',
// ];

/**
 * =====================================
 * LIVE SERVICES
 * =====================================
 * ❌ DO NOT CHANGE WITHOUT APPROVAL
 */

export const LIVE_SERVICES: Record<string, string> = {
  'api-gateway': 'http://100.113.63.36:12400',
  'user-service': 'http://100.113.63.36:12401',
  'alert-service': 'http://100.113.63.36:12402',
  'incident-service': 'http://100.113.63.36:12403',
  'notification-service': 'http://100.113.63.36:12404',
  'oncall-service': 'http://100.113.63.36:12405',
  'analytics-service': 'http://100.113.63.36:12406',
};
