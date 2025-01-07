// export function handleSubmit1(event) {
//   event.preventDefault();
//   const form = event.target;
//   const nameinput = form[0];
//   const emailinput = form[3];
//   const name = nameinput.value;
//   const email = emailinput.value;
//   output(` Thank you ${name}.! Please wait for confirmation code...`);
//   const promise = new Promise(getServerResponse2);
//   promise.then(parseResponse);
// }

function output(message = "", outputTag = "outputTag", shouldAppend = true) {
  debugger;
  if (shouldAppend) window[outputTag].innerHTML += message;
  //condition shouldAppend- will be either true or false
  else window[outputTag].innerHTML = message;
}
