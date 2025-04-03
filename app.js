function updateView() {
    let page = model.app.currentPage
    let currentPageView = '';

    switch (page) {
        case 'dashboard':
            currentPageView = dashboardView();
            break;
        case 'favoriteItems':
            currentPageView = favoriteItemsView();
            break;
        case 'groupsOverview':
            currentPageView = groupsOverviewView();
            break;
        case 'shoppingList':
            currentPageView = shoppingListView();
            break;
        case 'wishlist':
            currentPageView = wishlistView();
            break;
        case 'groupsOverview':
            currentPageView = groupsOverviewView();
            break;
        case 'login':
            currentPageView = loginView();
            break;
        case 'logList':
            currentPageView = logListView();
            break;
        case 'privateListOverview':
            currentPageView = privateListOverviewView();
            break;
        case 'settings':
            currentPageView = settingsView();
            break;
    }

    document.getElementById('app').innerHTML = `
    <button onclick="setPage('favoriteItems')">favoriteItems </button>
    <button onclick="setPage('groupsOverview')">groupsOverview </button>
    <button onclick="setPage('login')">login </button>
    <button onclick="setPage('logList')">logList </button>
    <button onclick="setPage('settings')">settings </button>
    <br>
    ${currentPageView}
    `;

}