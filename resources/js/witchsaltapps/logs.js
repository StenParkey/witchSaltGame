function addLogMessage(message) {
    const logsDiv = document.getElementById('logs');
  
    // Create a new log entry
    const logEntry = document.createElement('div');
    logEntry.textContent = message;
    logEntry.className = 'log-entry'; // Add a class for styling
  
    // Append the new log entry to the logs div
    logsDiv.appendChild(logEntry);
  
    // Auto-scroll to the bottom with a 200px buffer
    logsDiv.scrollTop = logsDiv.scrollHeight - logsDiv.clientHeight + 200;
  }