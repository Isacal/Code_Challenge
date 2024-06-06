
const transform = (str) => {
  const len = str.length;

  if (!(len > 1 || len < 1000))
    return 'String must be between 1 and 1000 characters';

  if (len % 15 === 0) {
    // If length is divisible by both 3 and 5 (15), first reverse and  replace with ASCII codes
    str = str.split('').reverse().join('');
    str = Array.from(str)
      .map((char) => char.charCodeAt(0))
      .join('');
  } else if (len % 5 === 0) {
    // If length is divisible by 5 replace each character with corresponding ASCII code
    str = Array.from(str)
      .map((char) => char.charCodeAt(0))
      .join('');
  } else if (len % 3 === 0) {
    // If length is divisible by 3 reverse the string
    str = str.split('').reverse().join('');
  }

  return str;
};


document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const str = document.querySelector("#str").value
    const result = transform(str)
    console.log(result)
    document.querySelector('.solution').innerHTML = `<h1>${result}</h1>`;
})
