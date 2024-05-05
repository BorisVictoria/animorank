<script lang="ts">
    import { browser } from '$app/environment';

    let darkMode = true;
    let mode: String
    if (darkMode)
        mode = "Light"
    else mode = "Dark"

    function toggleDarkMode() {
        darkMode = !darkMode;

        localStorage.setItem('theme', darkMode ? 'dark' : 'light');

        darkMode
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');

        if (darkMode)
            mode = "Light"
        else mode = "Dark"
    }

    if (browser) {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            darkMode = true;
        } else {
            document.documentElement.classList.remove('dark');
            darkMode = false;
        }
    }
</script>

<div class = "flex flex-col justify-start">
    <div class = "flex pt-10 min-w-full justify-center">
        <div class = "font-bold text-4xl">Settings</div>
    </div>
    <div class = "flex flex-col mt-5">
        <div class = "flex flex-row items-center ml-48">
            <img class = "h-48 w-48 br-30 rounded-full border-black border-2"
                 src = "https://scontent.fmnl31-1.fna.fbcdn.net/v/t39.30808-6/431761263_7446304788783533_9213664670175863963_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEoKYkw3prtrB0e3c_OH-1DltUy8p5pS2eW1TLynmlLZwdMAngezf6c2qYjIj2XDf-mAbMDbCaSe7V2KmDEy6vZ&_nc_ohc=ZK_48h2oZOkQ7kNvgGCOdT8&_nc_ht=scontent.fmnl31-1.fna&oh=00_AfARLu67gX4P3flMDD4ZH5FwrH5XFHBJG8iSAE1cIAWEag&oe=663D16E7">
            <div>
                <div class = "font-bold text-3xl pl-10">Username: Boznik Yap</div>
                <div class = "font-bold italic text-2xl pl-10">Course: BSMS-CS</div>
                <div class="font-bold text-xl cursor-pointer pl-10">Edit Profile</div>
            </div>
        </div>
    </div>
    <div class = "flex flex-col mt-10 ml-48">
        <div class = "font-bold text-4xl">Preferences</div>
        <div class = "font-bold text-xl mt-5">Toggle View Mode: </div>
        <div class = "flex flex-row items-center mt-2">
            <div class = "font-bold">{mode}</div>
            <button class="bg-slate-800 dark:bg-white rounded-full border-2 border-black h-12 w-12 ml-5" on:click={() =>toggleDarkMode()}>
            </button>
        </div>
    </div>
</div>
