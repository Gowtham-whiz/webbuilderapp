// debug.ts - Create this file in your utils folder
export const logServerEvent = (message: string, data?: any) => {
  if (typeof window === "undefined") { // Ensure server-only execution
    const fs = require("fs");
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;

    // Write to server logs
    if (data) {
      fs.appendFileSync(
        "./debug.log",
        `${logMessage}\n${JSON.stringify(data, null, 2)}\n\n`
      );
    } else {
      fs.appendFileSync("./debug.log", `${logMessage}\n`);
    }
  } else {
    console.warn("logServerEvent is meant to be run on the server only.");
  }
};
