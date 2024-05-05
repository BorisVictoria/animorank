<script>
    import "../../app.css"
</script>


<div class="flex flex-col h-screen">

    <!--Navbar start-->
    <div class="navbar bg-base-100 h-16 border-b-2 px-10">
        
        <div class="flex-none">
            <a href="/" class="btn btn-ghost text-xl">AnimoRank</a>
        </div>
        <div class="mx-5 font-semibold">|</div>
        <div class="gap-2">
            <div class="flex-none">
                <a href="/" class="btn btn-ghost text-base">Home</a>
            </div>
            <div class="flex-none">
                <a href="/settings" class="btn btn-ghost text-base">Settings</a>
            </div>
            <div class="flex-none">
                <a href="/feedback" class="btn btn-ghost text-base">Feedback</a>
            </div>
        </div>
        
        <!--Dropdown start-->
        <div class="flex gap-2 flex-none ml-auto dropdown dropdown-bottom dropdown-end">
            
            <!--Avatar start-->
            <div tabindex="0" role="button" class="flex btn btn-ghost gap-5">
                <div class="text-base">
                    Luke Skywalker
                </div>
                <div class="avatar">
                    <div class="w-10 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar"/>
                    </div>
                </div>
            </div>
            <!--Avatar end-->
        
            <ul class="dropdown-content z-[1] menu p-2 mt-5 shadow bg-base-100 rounded-box w-52">
                <li><a href="/profile">Profile</a></li>
                <li><a href="/logout">Logout</a></li>
              </ul>
        </div>
        <!--Dropdown end-->
    </div>
    <!--Navbar end-->

    <slot>
    </slot>
</div>