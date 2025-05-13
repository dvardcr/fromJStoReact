// Object Property
function Header(props) {
    return <h1>{props.title}</h1>;
}

// Template Literal
function Header({ title }) {
    return <h1>{`Cool ${title}`}</h1>;
}

// Returned Value of a Function
function createTitle(title) {
    if (title) {
        return title;
    } else {
        return 'Default title';
    }
}

function Header({ title }) {
    return <h1>{createTitle(title)}</h1>;
}

// Ternary Operators
function Header({ title }) {
    return <h1>{title ? title : 'Default Title'}</h1>;
}