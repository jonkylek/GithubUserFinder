  var locate = window.location
  var text = String(locate)
  function delineate(str)
  {
    equalSign = str.indexOf("=") + 1;
    var n = str.length;
    return(str.substring(equalSign, n));
  }
  var name = delineate(text);
  var xmlhttp = new XMLHttpRequest();
  var url = "https://api.github.com/users/" + name;
  xmlhttp.open("GET", url, true);
  var counter = 0;

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState >= 2 && xmlhttp.status >= 200 && xmlhttp.status <=299 ) {
          var myArr = JSON.parse(xmlhttp.responseText);
          myFunction(myArr);
      }else{
        // window.alert("It's false");
        document.getElementById("welcomeMessage").innerHTML = "Sorry No User Found By That Name";
        for(var i = document.getElementById("myTable").rows.length; i > 0;i--)
        {
          document.getElementById("myTable").deleteRow(i -1);
        }
      }
  }
  xmlhttp.send();


  function myFunction(arr) {
      if(counter!=1){
        document.getElementById("userName").innerHTML = String(arr.login);
        document.getElementById("userId").innerHTML =arr.id;
        document.getElementById("avatar").innerHTML =  arr.avatar_url;
        document.getElementById("gravatar").innerHTML =  arr.gravatar_id;
        document.getElementById("url").innerHTML =  arr.url;
        document.getElementById("htmlurl").innerHTML =  arr.html_url;
        document.getElementById("followersurl").innerHTML =  arr.followers_url;
        document.getElementById("followingurl").innerHTML =  arr.following_url;
        document.getElementById("gists").innerHTML =  arr.gists_url;
        document.getElementById("starred").innerHTML =  arr.starred_url;
        document.getElementById("subscriptions").innerHTML =  arr.subscriptions_url;
        document.getElementById("organizations").innerHTML =  arr.organizations_url;
        document.getElementById("repos").innerHTML =  arr.repos_url;      document.getElementById("events").innerHTML =  arr.events_url;      document.getElementById("received").innerHTML =  arr.received_events_url;      document.getElementById("type").innerHTML =  arr.type;
        document.getElementById("siteadmin").innerHTML =  arr.site_admin;     document.getElementById("name").innerHTML =  arr.name;
        document.getElementById("company").innerHTML =  arr.company;     document.getElementById("blog").innerHTML =  arr.blog;
        document.getElementById("location").innerHTML = arr.location;
        document.getElementById("email").innerHTML =  arr.email;
        document.getElementById("hireable").innerHTML =  arr.hireable;
        document.getElementById("bio").innerHTML =  arr.bio;
        document.getElementById("publicrepos").innerHTML =  arr.public_repos;
        document.getElementById("publicgists").innerHTML =  arr.public_gists;
        document.getElementById("followers").innerHTML = arr.followers;
        document.getElementById("following").innerHTML =  arr.following;
        document.getElementById("createdat").innerHTML =  arr.created_at;
        document.getElementById("updatedat").innerHTML =  arr.updated_at;
        var img = document.createElement("img");
        img.src = arr.avatar_url;
        document.body.appendChild(img);
        counter = 1;
      }
  }
