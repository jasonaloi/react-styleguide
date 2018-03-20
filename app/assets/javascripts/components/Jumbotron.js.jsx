var Jumbotron = createReactClass({
  propTypes: {
    title: PropTypes.string,
    description: PropTypes.string
  },

  render: function() {
    return (
      <div class="jumbotron bg-light border">
        <h1 class="display-4">
          {this.props.title || 'Title Here'}
        </h1>
        <p class="lead">
          {this.props.description || 'Some descriptive text here...'}
        </p>
      </div>
    );
  }
});
