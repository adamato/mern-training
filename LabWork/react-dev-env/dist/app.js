"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var footerText = "footer text";
var author = { name: "John Doe",
	phone: "800-555-1212",
	email: "jdoe@gmail.com" };
var divStyle = {
	backgroundColor: 'lightgrey',
	margin: '0px',
	padding: '5px',
	textAlign: 'center'
};
var scope = {
	title: "My React App",
	footerText: "footer text",
	color: "blue",
	message: "",
	selectedIndex: -1,
	author: {
		name: "John Doe",
		phone: "800-555-1212",
		email: "jdoe@gmail.com"
	},
	books: [{ isbn: '123', title: 'The Time Machine', price: 5.95 }, { isbn: '456', title: 'War of the Worlds', price: 6.95 }, { isbn: '789', title: 'The Invisible Man', price: 4.95 }]
};
function App(props) {
	return React.createElement(
		"div",
		{ className: 'boxed' },
		React.createElement(Header, { title: props.title }),
		React.createElement(Body, _extends({}, props, { author: props.author })),
		React.createElement(Footer, { text: props.footerText })
	);
}
var title = "My React App";

function Header(props) {
	return React.createElement(
		"h3",
		{ style: divStyle },
		props.title
	);
}

function Body(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"p",
			null,
			"Author:",
			props.author.name
		),
		React.createElement(BookList, { books: props.books, selected: props.selectedIndex }),
		React.createElement(
			"p",
			null,
			"Enter your favorite color:"
		),
		React.createElement("input", { type: "text", name: "color", onChange: handleChange }),
		React.createElement("input", { type: "button", onClick: handleButtonClick, value: "Click Here" }),
		React.createElement(
			"p",
			null,
			props.message
		)
	);
}

function Footer(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"h4",
			{ style: divStyle },
			props.text
		)
	);
}

function FragTest(props) {
	return React.createElement(
		"ul",
		null,
		React.createElement(ColorList, null)
	);
}

function ColorList(props) {
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			"li",
			{ style: { color: 'Red' } },
			"Red"
		),
		React.createElement(
			"li",
			{ style: { color: 'Yellow' } },
			"Yellow"
		),
		React.createElement(
			"li",
			{ style: { color: 'Blue' } },
			"blue"
		)
	);
}

function BookList(props) {
	return React.createElement(
		"ul",
		null,
		props.books.map(function (book, index) {
			return React.createElement(
				"li",
				{
					key: index,
					onClick: function onClick(e) {
						return handleListItemClick(e, index);
					},
					className: index === props.selected ? "selected" : "" },
				book.title
			);
		})
	);
}

function handleChange(event) {
	scope[event.currentTarget.name] = event.currentTarget.value;
	renderApp(scope);
}

function handleButtonClick(event) {
	scope.message = "You like the color " + scope.color + "!";
	renderApp(scope);
}

function handleListItemClick(event, index) {
	scope.selectedIndex = index;
	var book = scope.books[index];
	renderApp(scope);
	console.log("You chose: " + book.isbn + ", " + book.title + ", " + book.price);
}

function renderApp(scope) {
	ReactDOM.render(React.createElement(App, scope), document.getElementById('react-container'));
}

renderApp(scope);