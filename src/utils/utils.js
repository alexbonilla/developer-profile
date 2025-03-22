export function formatDate(dateString) {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
  
    return `${month}/${day}/${year}`;
  }
  
  export function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  export function truncate(string, maxLength) {
      if (string.length > maxLength) {
          return string.substring(0, maxLength) + "...";
      }
      return string;
  }