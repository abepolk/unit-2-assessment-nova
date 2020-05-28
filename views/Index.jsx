const React = require('react');

const ToDos = (props) => {
    if (!props.toDos.length) {
        return <h3>There are no To Dos yet!</h3>
    } else {
        return (
            <ul>
                {props.toDos.map((toDo, index) => {
                    return (
                        <li key={index}>
                        {toDo.todo} - {toDo.done ? "Done" : "Not Done"}
                        {/* I am to lazy to use CSS for one rule, using inline styling */}
                        <form action={`/${toDo._id}?_method=delete`} method="POST" style={{display: "inline"}}>
                            <input type="submit" value="DELETE" />
                        </form>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

class Index extends React.Component {
    render() {
        const {toDos} = this.props;
        return (
            <html lang="en">
                <head>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>Document</title>
                </head>
                <body>
                    <h1>To Do List</h1>
                    <ToDos toDos={toDos} />
                    <hr/>
                    <form action="/create" method="POST">
                        <input type="text" name="toDo" required/>
                        <input type="submit" value="ADD TO DO"/>
                    </form>
                </body>
            </html>            
        )
    }
}

module.exports = Index;