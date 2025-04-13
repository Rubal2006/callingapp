
    if(sessionStorage.getItem("user") == null)
    {
        window.location.replace("../index.html");
    }
    else
    {
        // logout coding
        var logout = document.getElementById("logout");
        logout.onclick = function()
        {
            sessionStorage.clear();
            var logout_text =document.getElementById("logout_text");
            logout_text.innerHTML = "please wait...";
            setTimeout(function(){window.location = "../index.html";},2000);
        }
        
        //profile name coding
        var user_email = sessionStorage.getItem("user");
        var JSON_text = localStorage.getItem(user_email);
        var JSON_obj_data = JSON.parse(JSON_text);
        var profile_name = document.getElementById("profile_name");
        profile_name.innerHTML = atob(JSON_obj_data.username);
        document.getElementById("profile_username").innerHTML= atob(JSON_obj_data.username);

        //main profile page picture coding
        var profile_picture = document.getElementById("profile_picture")
        var image_url = localStorage.getItem(user_email+"image");
        profile_picture.style.backgroundImage = "url("+image_url+")";
        profile_picture.style.backgroundPosition = "center";
        
        if(localStorage.getItem(user_email+"image") != null)
            {
                var page_cover = document.getElementById("page_cover");
                page_cover.style.display = "none";
            }
       
         //profile picture upload coding
        var profile_upload = document.getElementById("profile_upload");
        profile_upload.onchange = function()
        {
            var reader = new FileReader();
            reader.readAsDataURL(profile_upload.files[0]);
            reader.onload = function()
            {
                var filename = reader.result;
                var profile_icon = document.getElementById("profile_icon");
                var profile_pic = document.getElementById("profile_pic");
                var next_btn = document.getElementById("next");
                profile_pic.style.background = "url("+filename+")";
                profile_pic.style.backgroundSize = "cover";
                profile_pic.style.backgroundPosition = "center";
                profile_icon.style.display = "none";
                next_btn.style.display = "block";

                next_btn.onclick = function()
                {
                    localStorage.setItem(user_email+"image",filename);
                    var page_cover = document.getElementById("page_cover");
                    page_cover.style.display = "none";
                    window.location = location.href;
                }


            }
        }
        
    }

//start main page coding
