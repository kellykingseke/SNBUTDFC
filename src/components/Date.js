// src/utils.js
export const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const secondsAgo = Math.floor((now - date) / 1000);
  
    // Define time intervals in seconds
    const intervals = {
      year: 365 * 24 * 60 * 60,
      month: 30 * 24 * 60 * 60,
      day: 24 * 60 * 60,
      hour: 60 * 60,
      minute: 60,
      second: 1,
    };
  
    // Iterate over intervals to find the appropriate one
    for (let [key, seconds] of Object.entries(intervals)) {
      const timeInterval = Math.floor(secondsAgo / seconds);
      if (timeInterval >= 1) {
        return `${timeInterval} ${key}${timeInterval > 1 ? "s" : ""} ago`;
      }
    }
  
    return "just now";
  };
  