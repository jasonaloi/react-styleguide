var Jumbotron = createReactClass({
  propTypes: {
    title: PropTypes.string,
    description: PropTypes.string
  },

  render: function() {
    return (
      <div class="jumbotron">
        <h1>
          {this.props.title || 'Title Here'}
        </h1>
        <p>
          {this.props.description || 'Some descriptive text here...'}
        </p>
      </div>
    );
  }
});
