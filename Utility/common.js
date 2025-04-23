function setPage(nameOfPage) {
    model.app.previousPage.push(nameOfPage)
    model.app.currentPage = nameOfPage;
    updateView();
}

function goToPreviousPage(delta) {
    if (delta == -1 && model.app.previousPage.length > 0) {
        model.app.previousPage.pop();
        model.app.currentPage = model.app.previousPage.pop();
        setPage(model.app.currentPage)
    }
    if (model.app.currentPage == "dashboard")
        model.app.previousPage = [];
    updateView();
}

function goToDashboardPage() {
    if (model.app.currentPage !== 'dashboard') {
        // Fjern eventuelle ekstra sider fra historikken
        model.app.previousPage = [];

        // Sett dashboard som den nåværende siden
        setPage('dashboard');
    }
    updateView();
};

function createNewId(currentPath, idName) {
    const newId = Math.floor(Math.random() * 1000)
    if (currentPath.some(obj => obj[idName] === newId)) {
        return createNewId(currentPath, idName)
    } else {
        return newId
    }
}

function isBlank(str) {
    return !str?.trim();
}


