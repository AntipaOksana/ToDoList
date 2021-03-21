

function switchTab(tab, activeTab) {
    activeTab.classList.remove('tab-active')
    activeTab = tab;
    tab.classList.add('tab-active')

    return activeTab
 }

 export default switchTab