var GIPHY_API_URL= 'https://api.giphy.com/';
var GIPHY_PUB_KEY= 'yxJFI5Kgf7ayNGsdJx94G4JVCuypgf88';

App = React.createClass({

    getInitialState(){
            return {
                loading: false,
                searchingText: '',
                gif: {}
            };
    },

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

    getGif: function(searchingText, callback){
            var prefix = "https://cors-anywhere.herokuapp.com/";
            var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
            console.log(url);
            var xhr = new XMLHttpRequest();
            xhr.open('GET',prefix + url);
            xhr.onload=function(){
                if(xhr.status === 200){
                    var data =JSON.parse(xhr.responseText).data; 
                    var gif = {
                        url: data.fixed_width_downsampled_url,
                        sourceUrl: data.url
                    };
                    callback(gif); 
                }
            }
            xhr.send();
    },


    render: function() {

        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };


        return (
          <div style={styles}>
                <h1>Wyszukiwarka GIFow!</h1>
                <p>Znajdź gifa na <a href="'http://giphy.com">giphy</a> Naciskaj Enter, aby pobrać kolejne gify.</p>
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