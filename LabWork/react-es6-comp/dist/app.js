"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*var scope = {
    title: "My React App",
    footerText: "App Footer",
    selectedIndex: -1,
    author: { 
            name:"John Doe", 
            phone: "800-555-1212", 
            email: "jdoe@gmail.com" 
        },
    books: [
        {isbn:'123', title:'The Time Machine', price:5.95 },
        {isbn:'456', title:'War of the Worlds', price:6.95 },
        {isbn:'789', title:'The Invisible Man', price:4.95 }
        ]
    }*/

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.updateSelectedIndex = _this.updateSelectedIndex.bind(_this);
        _this.state = {
            title: "My React App",
            footerText: "App Footer",
            selectedIndex: -1,
            author: {
                name: "John Doe",
                phone: "800-555-1212",
                email: "jdoe@gmail.com"
            },
            books: [{ isbn: '123', title: 'The Time Machine', price: 5.95 }, { isbn: '456', title: 'War of the Worlds', price: 6.95 }, { isbn: '789', title: 'The Invisible Man', price: 4.95 }]
        };
        return _this;
    }

    _createClass(App, [{
        key: "updateSelectedIndex",
        value: function updateSelectedIndex(new_index) {
            this.state.selectedIndex = new_index;
            this.setState(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: 'boxed' },
                React.createElement(Header, { title: this.state.title }),
                React.createElement(Body, _extends({ updateSelectedIndex: this.updateSelectedIndex }, this.state)),
                React.createElement(Footer, { text: this.state.footerText })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h3",
                { className: 'sectionHeader' },
                this.props.title
            );
        }
    }]);

    return Header;
}(React.Component);

var Body = function (_React$Component3) {
    _inherits(Body, _React$Component3);

    function Body(props) {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));
    }

    _createClass(Body, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(BookList, this.props)
            );
        }
    }]);

    return Body;
}(React.Component);

var BookList = function (_React$Component4) {
    _inherits(BookList, _React$Component4);

    function BookList(props) {
        _classCallCheck(this, BookList);

        return _possibleConstructorReturn(this, (BookList.__proto__ || Object.getPrototypeOf(BookList)).call(this, props));
    }

    _createClass(BookList, [{
        key: "render",
        value: function render() {
            var _this5 = this;

            var selBook = this.props.books[this.props.selectedIndex];
            return React.createElement(
                "div",
                { className: 'boxed', style: { margin: '2px', width: '204px' } },
                React.createElement(
                    "h4",
                    { style: { textAlign: 'center' } },
                    "Author:",
                    this.props.author.name
                ),
                React.createElement(
                    "ul",
                    null,
                    this.props.books.map(function (book, index) {
                        return React.createElement(
                            "li",
                            {
                                onClick: function onClick(e) {
                                    return _this5.handleListItemClick(e, index);
                                },
                                className: index === _this5.props.selectedIndex ? "selected" : "",
                                key: index },
                            book.title
                        );
                    })
                ),
                React.createElement(
                    "p",
                    null,
                    "Selected:",
                    React.createElement("br", null),
                    selBook ? selBook.title + ', ' + selBook.isbn + ', ' + selBook.price : "none"
                )
            );
        }
    }, {
        key: "handleListItemClick",
        value: function handleListItemClick(event, index) {
            this.props.updateSelectedIndex(index);
            var book = this.props.books[index];
            console.log("You chose: " + book.isbn + ", " + book.title + ", " + book.price);
        }
    }]);

    return BookList;
}(React.Component);

var Footer = function (_React$Component5) {
    _inherits(Footer, _React$Component5);

    function Footer(props) {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h4",
                    { className: 'sectionHeader' },
                    this.props.text
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

/*function App(props){
    return (
    <div className={'boxed'}>
        <Header title={props.title}/>
        <Body {...props} />
        <Footer text={props.footerText} />
    </div> );
}*/

/*function Header(props){
    return <h3 className={'sectionHeader'} >{props.title}</h3>;
}*/

/*function BookList(props){
    const selBook = props.books[props.selectedIndex];
    return ( <div className={'boxed'}  style={{margin:'2px',width:'204px'}}>
        <h4 style={{textAlign:'center'}} >Author:{props.author.name}</h4>
        <ul>
        {props.books.map(
            (book, index) => {
                return ( <li 
                    onClick = {(e)=>handleListItemClick(e, index)}
                    className={ index === props.selectedIndex ? "selected" : ""}
                    key={index} >{book.title}</li> )}
        )}
        </ul>
        <p>Selected:<br/>{(selBook)?
        selBook.title + ', ' + selBook.isbn + ', ' + selBook.price
        :"none"}</p>
        </div>
    );
}*/

/*
function Body(props){
    return ( 
    <div>
        <BookList {...props} />
    </div> );
}*/

/*function Footer(props){
    return ( <div>
             <h4 className={'sectionHeader'} >{props.text}</h4>
            </div> );
}*/

/*function handleListItemClick(event, index){
    scope.selectedIndex = index;
    const book = scope.books[index];
    renderApp(scope);
    console.log("You chose: " + book.isbn + ", " + book.title + ", " + book.price);
}*/

/*function renderApp(scope){
    ReactDOM.render( <App {...scope}/>,
        document.getElementById('react-container')
    );
}

renderApp(scope);*/

ReactDOM.render(React.createElement(App, null), document.getElementById('react-container'));