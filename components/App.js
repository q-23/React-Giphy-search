App = React.createClass({
    render: function() {

        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };


        handleSearch: function(searchingText) {  // load string input
            this.setState({
              loading: true  // signalize that loading has began
            });
            this.getGif(searchingText, function(gif) {  // begin GIF downloading
              this.setState({  // end of loading
                loading: false,  // cease signalising loading 
                gif: gif,  // set new gif from loading result
                searchingText: searchingText  // set new state for searched text
              });
            }.bind(this));
          },

        return (
          <div style={styles}>
                <h1>Wyszukiwarka GIFow!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
                <Search 
                    onSearch={this.handleSearch}
                />
                <Gif
                    loading={this.state.loading}
                    url={this.state.gif.url}
                    sourceUrl={this.state.gif.sourceUrl}
                />
          </div>
        );
    }
});