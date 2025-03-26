function mainView() {
    let page = model.app.currentPage
    let currentPageView = '';

    switch (page) {
        case 'login':
            currentPageView = loginView();
            break;
        case 'dashboard':
            currentPageView = dashboardView();
    }

    document.getElementById('app').innerHTML = `
    
    ${currentPageView}
    `;

}