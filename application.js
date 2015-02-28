 $(document).ready(function(){
        var $body = $('body .mainfeed'),
            tweetsShown=0;
        
        // broke out tweet message, user, date into separate components
        var tweetConstructor = function (tweet) {
                var $tweet = $('<div class="tweet-block"></div>'),
                  $date = $('<div class="date"</div>').text('at' + moment(tweet.created_at).format("h:mm:ss a, dddd, MMMM Do YYYY")),
                  $message = $('<div class="message">').text(tweet.message),
                  $user = $('<div class="user"</div>').text('@' + tweet.user);
                  $message.appendTo($tweet);
                  $date.appendTo($tweet);
                  $user.prependTo($tweet);
                return $tweet;
              };

        var tweetAdder = function () {
        var index = streams.home.length - 1;
        while (index > tweetsShown){
          var tweet = streams.home[index];
          var $tweet = tweetConstructor(tweet);
          $tweet.prependTo($body);
          tweetsShown++;
          index--;
          }
        };
        tweetAdder();

        $('.new-tweets').on('click', tweetAdder);
      


        
              });
      
              


























