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

class App extends React.Component {
    constructor(props){
        super(props)
        this.updateSelectedIndex=this.updateSelectedIndex.bind(this)
    this.state = {
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
    }
}
    updateSelectedIndex(new_index){
        this.state.selectedIndex = new_index;
        this.setState(this.state);
    }

    render() {
        return (<div className={'boxed'}>
        <Header title={this.state.title}/>
        <Body updateSelectedIndex={this.updateSelectedIndex} {...this.state} />
        <Footer text={this.state.footerText} />
    </div>);
    }
} 

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return <h3 className={'sectionHeader'} >{this.props.title}</h3>
    }
}

class Body extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (<div>
        <BookList {...this.props} />
    </div>)
    }

}


class BookList extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const selBook = this.props.books[this.props.selectedIndex];
        return (<div className={'boxed'}  style={{margin:'2px',width:'204px'}}>
        <h4 style={{textAlign:'center'}} >Author:{this.props.author.name}</h4>
        <ul>
        {this.props.books.map(
            (book, index) => {
                return ( <li 
                    onClick = {(e)=>this.handleListItemClick(e, index)}
                    className={ index === this.props.selectedIndex ? "selected" : ""}
                    key={index} >{book.title}</li> )}
        )}
        </ul>
        <p>Selected:<br/>{(selBook)?selBook.title + ', ' + selBook.isbn + ', ' + selBook.price
        :"none"}</p>
        </div>
        ); }
        handleListItemClick(event, index){
            this.props.updateSelectedIndex(index);
            const book = this.props.books[index];
            console.log("You chose: " + book.isbn + ", " + book.title + ", " + book.price);
        }

}

class Footer extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (<div><h4 className={'sectionHeader'} >{this.props.text}</h4></div>);
    }
}

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



ReactDOM.render( <App />,
    document.getElementById('react-container')
);