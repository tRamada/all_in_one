document.addEventListener('DOMContentLoaded', function () {
    var appSection = document.querySelector('.apps');

    // Define categories, apps, and icon URLs
    var appData = {
        'Browsers': [
            { name: 'Google Chrome', link: 'https://www.google.com/chrome/', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png' },
            { name: 'Mozilla Firefox', link: 'https://www.mozilla.org/en-US/firefox/new/', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg' },
            { name: 'Microsoft Edge', link: 'https://www.microsoft.com/edge', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Microsoft_Edge_logo_%282019%29.png' },
            { name: 'Opera', link: 'https://www.opera.com/download', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Opera_2015_icon.svg' },
            { name: 'Brave', link: 'https://brave.com/download/', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_lionface.png' }
        ],
        'Game Launchers': [
            { name: 'Steam', link: 'https://store.steampowered.com/about/', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg' },
            { name: 'Epic Games', link: 'https://www.epicgames.com/store/en-US/download', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg' },
            { name: 'Origin', link: 'https://www.origin.com/download', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/EAOrigin_Logo.png' },
            { name: 'Battle.net', link: 'https://www.blizzard.com/en-us/apps/battle.net/desktop', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Blizzard_Battle.net_logo.png' }
        ],
        'Programming': [
            { name: 'Java', link: 'https://www.oracle.com/java/technologies/javase-downloads.html', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
            { name: 'Python', link: 'https://www.python.org/downloads/', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
            { name: 'Node.js', link: 'https://nodejs.org/en/download/', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
            { name: 'Visual Studio Code', link: 'https://code.visualstudio.com/download', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
            { name: 'IntelliJ IDEA', link: 'https://www.jetbrains.com/idea/download/', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg' }
        ],
        'Other Apps': [
            { name: 'VLC Media Player', link: 'https://www.videolan.org/vlc/index.html', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/38/VLC_icon.png' },
            { name: '7-Zip', link: 'https://www.7-zip.org/download.html', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/24/7-Zip_Icon.png' },
            { name: 'Notepad++', link: 'https://notepad-plus-plus.org/downloads/', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Notepad_plus_plus.png' },
            { name: 'Audacity', link: 'https://www.audacityteam.org/download/', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Audacity_Logo.svg' }
        ]
    };

    // Search functionality
    var searchInput = document.querySelector('.search');
    if (searchInput) {
        searchInput.addEventListener('input', function (event) {
            var searchValue = event.target.value.toLowerCase();
            var categories = document.querySelectorAll('.category');

            categories.forEach(function (category) {
                var apps = category.querySelectorAll('.app');
                var hasVisibleApp = false; // Flag to check if any app is visible

                apps.forEach(function (app) {
                    var appName = app.querySelector('strong').textContent.toLowerCase();
                    if (appName.includes(searchValue)) {
                        app.style.display = 'flex'; // Show matching apps
                        hasVisibleApp = true;
                    } else {
                        app.style.display = 'none'; // Hide non-matching apps
                    }
                });

                // If no apps are visible in this category, hide the category
                if (hasVisibleApp) {
                    category.style.display = 'block';
                } else {
                    category.style.display = 'none';
                }
            });
        });
    }

    // Function to create category sections and app list items
    function createCategorySection(categoryName, apps) {
        var categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        var categoryHeading = document.createElement('h2');
        categoryHeading.textContent = categoryName;
        categoryDiv.appendChild(categoryHeading);

        var appList = document.createElement('div');
        appList.classList.add('app-list');

        apps.forEach(function (app) {
            var appDiv = document.createElement('div');
            appDiv.classList.add('app');

            var appIcon = document.createElement('img');
            appIcon.src = app.icon;
            appIcon.alt = app.name + ' icon';
            appIcon.style.width = '60px';
            appIcon.style.height = '60px';
            appDiv.appendChild(appIcon);

            var appName = document.createElement('strong');
            appName.textContent = app.name;
            appDiv.appendChild(appName);

            var appLink = document.createElement('a');
            appLink.href = app.link;
            appLink.textContent = 'Download';
            appLink.setAttribute('target', '_blank');
            appDiv.appendChild(appLink);

            appList.appendChild(appDiv);
        });

        categoryDiv.appendChild(appList);
        appSection.appendChild(categoryDiv);
    }

    // Loop through each category and create its section
    for (var category in appData) {
        createCategorySection(category, appData[category]);
    }
});
