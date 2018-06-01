Search = React.createClass({
//set initial state of searched text
    getInitialState() {
      return {
        searchingText: ''
      };
    },
//add function hanling form state change
    handleChange: function(event) {
        var searchingText = event.target.value;
        this.setState({
            searchingText: searchingText
        });
    },

    render: function() {
        var styles = {
            fontSize: '1.5em',
            width: '90%',
            maxWidth: '350px'
        };

    return <input
             type="text"
             onChange={this.handleChange}
             placeholder="Tutaj wpisz wyszukiwaną frazę"
             style={styles}
             value={this.state.searchTerm}
            />
  }
});