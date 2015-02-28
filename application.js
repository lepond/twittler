 $(document).ready(function(){
        var $body = $('body');
        var index = streams.home.length - 1;
        // broke out tweet message, user, date into separate components
        var tweetBuilder = function (tweet) {
                var $tweet = $('<div class="tweet-block"></div>'),
                  $date = $('<div class="date"</div>').text(moment(tweet.created_at).fromNow()),
                  $message = $('<div class="message">').text(tweet.message),
                  $user = $('<div class="user"</div>').text('@' + tweet.user);
                  $message.appendTo($tweet);
                  $date.appendTo($tweet);
                  $user.prependTo($tweet);
                return $tweet;
              };


        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = tweetBuilder(tweet);
          $tweet.appendTo($body);
          index -= 1;
        }
      


        
              });
              


























