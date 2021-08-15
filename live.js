ReactDOM.render(
    React.createElement('div', {
        style: { overflow: 'hidden', position: 'relative', filter: "blur(7px)", "background-image": "url(img/backgroound.jpg)", 'background-repeat': 'no-repeat', 'background-size': 'cover', width: '100%', height: '100vh' }}
    ,  null),
    document.getElementById("root")
);
ReactDOM.render(
     React.createElement('img', { style: { position: 'absolute',left:'50%', top:'50%',width:'45%'},src:'img/logo.png'}, null),
    document.getElementById("root")
);
