function shareListView() {
    let html=`<div class="headerbox"><button  class ="previousPageButton" onclick="goToPreviousPage(-1)"></button> <button class ="home" onclick="goToDashboardPage()"></button></div>
    <div class="container-overview"><h3 class="divforstyle">Velg hvilken gruppe du vil dele listen med</h3>`;
    model.data.users.find(obj=> obj.userId === model.app.currentUserId).groupsId.forEach(groupId=>{
        const currentGroup = model.data.groups.find(obj=>obj.groupId === groupId)
        html+= `<div class="divforstyle"><div class="listeBoks" onclick="shareList(${currentGroup.groupId})"> ${currentGroup.name}</div></div>`
    });
    return html += '</div>';
}