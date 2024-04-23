const fileName = 'Helper' 
const truncate = (str, num) => { 
 if (str.length > num) { 
  return str.slice(0, num) + "..."; 
 } else { 
  return str; 
 } 
} 
const navigateTo = (route) => { 
 window.location.href = route; 
} 
const genStr = () => { 
 return (Math.random() + 1).toString(36).substring(2); 
} 
export { 
 fileName, 
 truncate, 
 navigateTo, 
 genStr 
} 