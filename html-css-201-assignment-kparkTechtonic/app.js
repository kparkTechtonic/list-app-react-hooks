// function receiveMessage(event)
// {
//   // Do we trust the sender of this message?
//   if (event.origin !== "http://example.com:8080")
//     return;

//   // event.source is window.opener
//   // event.data is "hello there!"

//   // Assuming you've verified the origin of the received message (which
//   // you must do in any case), a convenient idiom for replying to a
//   // message is to call postMessage on event.source and provide
//   // event.origin as the targetOrigin.
//   event.source.postMessage("hi there yourself!  the secret response " +
//                            "is: rheeeeet!",
//                            event.origin);
// }

// event.source.postMessage("hi there yourself!  the secret response " +
// "is: rheeeeet!",
// event.origin);

// window.addEventListener("message", receiveMessage, false);

window.addEventListener('DOMContentLoaded', () => {
//   alert(window.parent);
  window.addEventListener('click', (e) => {
    // const data = `${(e.path[0].attributes.class.value)}`;
    const data = `cy.click(${e.offsetY},${e.offsetX})`;
    window.parent.postMessage(data, '*');
  });
});
