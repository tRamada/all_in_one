document.addEventListener('DOMContentLoaded', function () {
    var appSection = document.querySelector('.apps');

    // Define categories, apps, and icon URLs
    var appData = {
        'Browsers': [
            { name: 'Google Chrome', version: 'v93.0', link: 'https://www.google.com/chrome/', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png' },
            { name: 'Mozilla Firefox', version: 'v92.0', link: 'https://www.mozilla.org/en-US/firefox/new/', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg' },
            { name: 'Microsoft Edge', version: 'v93.0', link: 'https://www.microsoft.com/edge', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Microsoft_Edge_logo_%282019%29.png' }
        ],
        'Game Launchers': [
            { name: 'Steam', version: 'v2021.1', link: 'https://store.steampowered.com/about/', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg' },
            { name: 'Epic Games', version: 'v13.3', link: 'https://www.epicgames.com/store/en-US/download', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg' },
            { name: 'Origin', version: 'v10.5', link: 'https://www.origin.com/download', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/EAOrigin_Logo.png' }
        ],
        'Programming Languages': [
            { name: 'Java', version: 'v16.0', link: 'https://www.oracle.com/java/technologies/javase-downloads.html', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
            { name: 'Python', version: 'v3.9.6', link: 'https://www.python.org/downloads/', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
            { name: 'Node.js', version: 'v14.17.6', link: 'https://nodejs.org/en/download/', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' }
        ],
        'Other Apps': [
            { name: 'VLC Media Player', version: 'v3.0.11', link: 'https://www.videolan.org/vlc/index.html', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/38/VLC_icon.png' },
            { name: '7-Zip', version: 'v19.00', link: 'https://www.7-zip.org/download.html', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/24/7-Zip_Icon.png' }
        ]
    };

    // Function to create category sections and app list items
    function createCategorySection(categoryName, apps) {
        // Create the category container
        var categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        // Add a heading for the category
        var categoryHeading = document.createElement('h2');
        categoryHeading.textContent = categoryName;
        categoryDiv.appendChild(categoryHeading);

        // Create a list for the apps
        var appList = document.createElement('div');
        appList.classList.add('app-list');

        // Loop through apps and create app cards
        apps.forEach(function (app) {
            var appDiv = document.createElement('div');
            appDiv.classList.add('app'); // Apply the .app class for styling

            // Create the icon image
            var appIcon = document.createElement('img');
            appIcon.src = app.icon;
            appIcon.alt = app.name + ' icon';
            appIcon.style.width = '60px'; // Adjust size as necessary
            appIcon.style.height = '60px';
            appDiv.appendChild(appIcon);

            // Add the app name and version
            var appName = document.createElement('strong');
            appName.innerHTML = `${app.name}<br>(${app.version})`;
            appDiv.appendChild(appName);

            // Add the download link
            var appLink = document.createElement('a');
            appLink.href = app.link;
            appLink.textContent = 'Download';
            appLink.setAttribute('target', '_blank');
            appDiv.appendChild(appLink);

            // Add the app to the list
            appList.appendChild(appDiv);
        });

        // Append the list to the category div
        categoryDiv.appendChild(appList);

        // Append the category div to the main app section
        appSection.appendChild(categoryDiv);
    }

    // Loop through each category and create its section
    for (var category in appData) {
        createCategorySection(category, appData[category]);
    }
});
