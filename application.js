 $(document).ready(function(){
        var $mainfeed = $('body .mainfeed'),
            $userfeed = $('body .userfeed'),
            tweetsShown = 0;
        
        // broke out tweet message, user, date into separate components
        var tweetConstructor = function (tweet) {
                var $tweet = $('<div class="tweet-block"></div>'),
                  $date = $('<div class="date"</div>').text('at ' + moment(tweet.created_at).format("h:mm:ss a, dddd, MMMM Do YYYY")),
                  $message = $('<div class="message">').text(tweet.message),
                  $user = $('<div class="user"</div>').text('@' + tweet.user);
                  $message.appendTo($tweet);
                  $date.appendTo($tweet);
                  $user.prependTo($tweet);
                return $tweet;
              };
// This gathers and displays the tweets of a feed
        var tweetAdder = function (index, location, src) {
        var stream = streams['users'][src] || streams['home'];
        var limit = stream['length'];
        while (index < limit){
          var tweet = stream[index];
          var $tweet = tweetConstructor(tweet);
          $tweet.prependTo(location);
          index++;
          }
        };
        tweetAdder(tweetsShown, $mainfeed);
// This shows new tweets when button is clicked
        $('.new-tweets').on('click', function () {
          return tweetAdder(tweetsShown, $mainfeed);});
              
        var toggleFeed = function () {
          $('#main').toggleClass('hidden');
          $('#user').toggleClass('hidden');
        };
// This shows a user's tweets when the username is clicked
        $('.mainfeed').on('click', '.user', function () {
          toggleFeed();
          var username = $(this).text().slice(1).toString();
          return tweetAdder(0, $userfeed, username);
        });
// This returns user to main feed and clears the userfeed
        $('.return-to-feed').on('click', function () {
          toggleFeed();
          $userfeed.text("");
          return tweetAdder(tweetsShown, $mainfeed);
        });
          });    


























