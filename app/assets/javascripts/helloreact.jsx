var Hello = React.createClass({
    render: function() {
        return (
            <div>
                Hello, world! I am {this.props.name}
            </div>
        );
    }
});

ReactDOM.render(
    <Hello name = "Kanha"/>,
    document.getElementById('content')
);
