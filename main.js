const tabs = document.querySelectorAll('input[type="radio"][name="tab"]');
const labels = document.querySelectorAll('.tab-label');
const contents = document.querySelectorAll('.tab-content');

function handleTabChange() {
    labels.forEach(label => label.classList.remove('active-border'));

    contents.forEach(content => content.style.display = 'none');

    tabs.forEach((tab, index) => {
        if (tab.checked) {
            labels[index].classList.add('active-border');
            contents[index].style.display = 'block';
        }
    });
}

tabs.forEach(tab => tab.addEventListener('change', handleTabChange));

handleTabChange();