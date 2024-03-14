$( document ).ready(function() {
                
                $("#about_scroll").fadeOut();   
                $("#work_scroll").fadeOut();
                $("#contact_scroll").fadeOut();

                $("#about").click(function(){
                    $("#index").fadeOut();
                    $("#about_scroll").fadeIn();
                    $('#about_left').addClass('animated slideInLeft');
                    $('#about_right').addClass('animated slideInRight');
                    });
                $("#work").click(function(){
                    $("#index").fadeOut();
                    $("#work_scroll").fadeIn();
                    $('#work_left').addClass('animated slideInLeft');
                    $('#work_right').addClass('animated slideInRight');
                    });
                $("#contact").click(function(){
                    $("#index").fadeOut();
                    $("#contact_scroll").fadeIn();
                    $('#contact_left').addClass('animated slideInLeft');
                    $('#contact_right').addClass('animated slideInRight');
                    });
                
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });

            // Get the dark mode toggle button element
            const darkModeToggle = document.getElementById('darkModeToggle');

            // Function to toggle dark mode
            function toggleDarkMode() {
  // Toggle the 'dark' class on the button
  darkModeToggle.classList.toggle('dark');
  
  // Toggle dark mode styles on the rest of your website
  // For example, you can toggle a class on the body element
  document.body.classList.toggle('dark-mode-body');
}

            // Event listener for dark mode toggle button click
            darkModeToggle.addEventListener('click', toggleDarkMode);

           
		});