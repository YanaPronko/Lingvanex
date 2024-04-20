'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const tabsNavigation = document.querySelector('.tabs__navigation');
  const tabsElements = document.querySelectorAll('.tabs__element');


  if (tabsNavigation) {
    tabsNavigation.addEventListener('click', handleTabsClick);
  }

  function handleTabsClick(e) {
    const activeTabsButton = e.target.closest('.tabs__item');
    const tabsButtons = tabsNavigation.querySelectorAll('.tabs__item');

    if (activeTabsButton && tabsButtons) {
      tabsButtons.forEach((tab, index) => {
        tab.classList.remove('tabs__item--active');
        if (tab === activeTabsButton) {
          activeTabsButton.classList.add('tabs__item--active');
          hideTabs();
          showTabs(index);

        }
      });
    }
  }

  function hideTabs() {
    if (tabsElements) {
      tabsElements.forEach(tab => {
        tab.hidden = true;
        tab.classList.remove('fade');
      });
    }
  }

  function showTabs(index) {
    if (tabsElements) {
      tabsElements[index].hidden = false;
      tabsElements[index].classList.add('fade');
    };
  }


});

