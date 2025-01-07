// const trivia = `‹div>${question}‹/div›
//     ‹ol type="a">
//     ‹li>${incorrects[0]}</li>
//     ‹li>${incorrects[1]}</li>
//     ‹li>${incorrects[2]}</li>
//     <li>${answer}‹/li›
//     </ol›`;
//     display(trivia);

    //Fetch the response from the server
function handleQuoteOfTheDay() {
    const proxy = "https://corsproxy.io/?"
    const baseUrl = "https://favqs.com/api";
    const endPoint = "/qotd";
    const url = proxy + baseUrl + endPoint;
    const promise = fetch(url);
    promise.then(extractResponse);
}

//Extract the response and parse it
function extractResponse(resolveValue) {
    debugger;
    const promise = resolveValue.text();
    promise.then(parseQotdResponse);
}

//Parse the response and display the qotd on the index page
function parseQotdResponse(resolveValue) {
    debugger;
    const response = JSON.parse(resolveValue);
    const results =  response.quote;
    const quote = results.body;
    const author= results.author;
    const qotd = `${quote} -- ${author}`;
    outputQotd(qotd);
}