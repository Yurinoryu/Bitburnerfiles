/** @param {NS} ns */
export async function main(ns) {
  // Path from home to whatever node.
  let root = ns.getHostname();
  let target = ns.args[0];
  let path = scanScanSScan(ns, root, target);
  if (path) {
    ns.tprint("Path from " + root + " to " + target + ": " + path.join(" --> "));
  } else {
    ns.tprint("Target server not found.");
  }
}

function scanScanSScan(ns, current, target, visited = new Set()) {
  if (current === target) {
    return [current];
  }

  visited.add(current);

  let servers = ns.scan(current);
  for (let server of servers) {
    if (!visited.has(server)) {
      let path = scanScanSScan(ns, server, target, visited);
      if (path) {
        return [current, ...path];
      }
    }
  }

  return null;
}